import React, { useState, useEffect } from "react";
import ProductImage from "../components/ProductImage";

export default function PreRolledConesPage({ setRoute, setProductDetailId }) {
  const [selectedVariants, setSelectedVariants] = useState({});
  
  // SEO Header Injection
  useEffect(() => {
    document.title = "SOL Organic & Hemp Pre-Rolled Cones | B2B Wholesale";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Browse authentic SOL pre-rolled cones. GMP-manufactured options in unbleached organic hemp, refined wood pulp, and French organic flax paper.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/products/pre-rolled-cones";
  }, []);

  const paperVariants = ["Bleached", "Unbleached", "Organic Hemp", "Pink", "Blue", "Green"];

  const conesProducts = [
    {
      id: "silk-flax-cone",
      name: "SOL Silk Flax Cones",
      paper: "Organic French Flax (12.5 gsm)",
      sizes: "84mm, 98mm, 109mm",
      tip: "Mechanical glueless paper crutch",
      moq: "20,000 Cones",
      bgText: "FLAX"
    },
    {
      id: "organic-hemp-cone",
      name: "SOL Organic Hemp Cones",
      paper: "Organic Unbleached Hemp (13.5 gsm)",
      sizes: "84mm, 98mm, 109mm",
      tip: "Precision W-Tip paper crutch",
      moq: "20,000 Cones",
      bgText: "HEMP"
    },
    {
      id: "refined-wood-cone",
      name: "SOL Classic Wood Pulp Cones",
      paper: "Refined White Cellulose (14 gsm)",
      sizes: "84mm, 98mm, 109mm",
      tip: "Firm spiral paper crutch",
      moq: "20,000 Cones",
      bgText: "WOOD"
    }
  ];

  const handleSelectVariant = (productId, variant) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variant
    }));
  };

  const handleViewSpecs = (id) => {
    setProductDetailId(id);
    setRoute("product-detail");
  };

  return (
    <div className="page-wrapper cones-page section-padding bg-darker">
      <div className="container">
        
        {/* Breadcrumbs */}
        <nav className="breadcrumb-nav reveal-on-scroll" aria-label="Breadcrumb">
          <ul className="breadcrumb-list">
            <li>
              <button onClick={() => setRoute("home")}>Home</button>
            </li>
            <li className="separator">/</li>
            <li>
              <button onClick={() => setRoute("products")}>Products</button>
            </li>
            <li className="separator">/</li>
            <li>
              <span className="current">Pre-Rolled Cones</span>
            </li>
          </ul>
        </nav>

        {/* Cinematic Header */}
        <div className="category-subpage-header text-center-wrapper reveal-on-scroll reveal-scale reveal-blur">
          <span className="section-badge">GMP FACTORY COMPLIANT</span>
          <h1 className="section-title" style={{ fontSize: "64px", letterSpacing: "-0.04em" }}>PRE-ROLLED CONES</h1>
          <p className="section-subtitle-center" style={{ fontSize: "18px", lineHeight: "1.6", opacity: 0.8 }}>
            Engineered with precise taper formulas, double-inspected seams, and zero burning additives. Compatible with major pre-roll filling platforms.
          </p>
        </div>

        {/* Cinematic Alternating List */}
        <div className="subpage-products-grid" style={{ gap: "180px", marginTop: "120px" }}>
          {conesProducts.map((p, idx) => {
            const isEven = idx % 2 === 0;
            const currentVariant = selectedVariants[p.id] || "Bleached";
            
            return (
              <section 
                key={p.id} 
                className="subpage-product-card reveal-on-scroll reveal-scale reveal-blur"
                style={{ 
                  gridTemplateColumns: isEven ? "1.2fr 1fr" : "1fr 1.2fr",
                  gap: "100px",
                  transitionDuration: "1.4s"
                }}
              >
                {/* Visual Column */}
                <div 
                  className="subpage-card-visual floating-element"
                  style={{ 
                    order: isEven ? 0 : 1,
                    height: "500px",
                    animationDelay: `${idx * 0.5}s`,
                    animationDuration: "8s"
                  }}
                >
                  <span className="specs-moq-badge font-mono">{p.moq}</span>
                  <ProductImage 
                    category="pre-rolled-cones" 
                    productId={p.id} 
                    variant={currentVariant} 
                    bgText={p.bgText}
                    sketchClass="cone-sketch"
                  />
                </div>

                {/* Info Column */}
                <div className="subpage-card-content" style={{ zIndex: 1 }}>
                  <span className="section-badge" style={{ paddingLeft: 0 }}>CONE TYPE SOL-{300 + idx}</span>
                  <h2 style={{ fontSize: "44px", letterSpacing: "-0.03em", marginBottom: "28px" }}>{p.name}</h2>
                  
                  {/* Paper Variant Selection Chips */}
                  <div className="paper-variants-wrapper" style={{ marginBottom: "32px" }}>
                    <h4 style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--color-text-muted)", marginBottom: "12px", textTransform: "uppercase" }}>Available Paper Variants</h4>
                    <div className="variants-chips-row" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {paperVariants.map((variant) => {
                        const isActive = currentVariant === variant;
                        return (
                          <button
                            key={variant}
                            onClick={() => handleSelectVariant(p.id, variant)}
                            className={`variant-chip ${isActive ? "active" : ""}`}
                          >
                            {variant}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="subpage-specs-table">
                    <div className="table-row">
                      <span>Paper Base:</span>
                      <strong>{p.paper}</strong>
                    </div>
                    <div className="table-row">
                      <span>Sizes Available:</span>
                      <span>{p.sizes}</span>
                    </div>
                    <div className="table-row">
                      <span>Selected Option:</span>
                      <strong style={{ color: "var(--accent-silver)" }}>{currentVariant}</strong>
                    </div>
                  </div>

                  <div className="subpage-card-actions" style={{ marginTop: "32px" }}>
                    <button 
                      onClick={() => handleViewSpecs(p.id)} 
                      className="btn btn-silver"
                      style={{ padding: "16px 36px" }}
                    >
                      VIEW SPECIFICATIONS &rarr;
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
