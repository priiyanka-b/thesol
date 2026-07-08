import React, { useState, useEffect } from "react";
import ProductImage from "../components/ProductImage";

export default function CustomPackagingPage({ setRoute, setProductDetailId }) {
  const [selectedVariants, setSelectedVariants] = useState({});
  
  // SEO Header Injection
  useEffect(() => {
    document.title = "SOL Custom Pre-Roll Drawer Boxes & Magnetic Cases | B2B Wholesale";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore certified Child-Resistant paper drawer boxes and luxury magnetic display chest containers by SOL. Premium retail presentations.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/products/custom-packaging";
  }, []);

  const paperVariants = ["Bleached", "Unbleached", "Organic Hemp", "Pink", "Blue", "Green"];

  const customProducts = [
    {
      id: "cr-slider-box",
      name: "Child-Resistant Drawer Boxes",
      material: "1200gsm Recycled Lined Board, Recycled card trays",
      sizes: "Configured for 5-pack or 10-pack pre-roll trays",
      options: "Dual-push locks, internal partitions, soft-touch laminates",
      moq: "5,000 Boxes",
      bgText: "LOCK"
    },
    {
      id: "magnetic-display-chest",
      name: "Rigid Magnetic Display Cases",
      material: "1500gsm Rigid Double-Lined Grayboard",
      sizes: "Custom sized to fit boutique packs and jars",
      options: "Satin ribbon pulls, velvet insert liners, spot UV details",
      moq: "2,500 Boxes",
      bgText: "MAGE"
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
    <div className="page-wrapper custom-packaging-page section-padding bg-darker">
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
              <span className="current">Custom Packaging</span>
            </li>
          </ul>
        </nav>

        {/* Cinematic Header */}
        <div className="category-subpage-header text-center-wrapper reveal-on-scroll reveal-scale reveal-blur">
          <span className="section-badge">HIGH-END UNBOXING EXPERIENCES</span>
          <h1 className="section-title" style={{ fontSize: "64px", letterSpacing: "-0.04em" }}>CUSTOM PACKAGING</h1>
          <p className="section-subtitle-center" style={{ fontSize: "18px", lineHeight: "1.6", opacity: 0.8 }}>
            Unrivaled craftsmanship. Explore heavy-gauge rigid slider drawer boxes and custom magnetic chest cases tailored to your brand.
          </p>
        </div>

        {/* Cinematic Alternating List */}
        <div className="subpage-products-grid" style={{ gap: "180px", marginTop: "120px" }}>
          {customProducts.map((p, idx) => {
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
                    category="custom-packaging" 
                    productId={p.id} 
                    variant={currentVariant} 
                    bgText={p.bgText}
                    sketchClass="custom-sketch"
                  />
                </div>

                {/* Info Column */}
                <div className="subpage-card-content" style={{ zIndex: 1 }}>
                  <span className="section-badge" style={{ paddingLeft: 0 }}>VAULT SYSTEM SOL-{700 + idx}</span>
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
                      <span>Base Material:</span>
                      <strong>{p.material}</strong>
                    </div>
                    <div className="table-row">
                      <span>Standard Sizes:</span>
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
