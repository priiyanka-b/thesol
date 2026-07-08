import React, { useState, useEffect } from "react";
import ProductImage from "../components/ProductImage";

export default function PreRolledTubesPage({ setRoute, setProductDetailId }) {
  const [selectedVariants, setSelectedVariants] = useState({});
  
  // SEO Header Injection
  useEffect(() => {
    document.title = "SOL Hermetic Pre-Rolled Tubes | Smell-Proof Metal Vials";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore certified airtight aluminum pre-roll single tubes by SOL. Provides smell-proof and moisture barrier seals for premium joints.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/products/pre-rolled-tubes";
  }, []);

  const paperVariants = ["Bleached", "Unbleached", "Organic Hemp", "Pink", "Blue", "Green"];

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

  const currentVariant = selectedVariants["aluminum-airtight-tube"] || "Bleached";

  return (
    <div className="page-wrapper tubes-page section-padding bg-darker">
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
              <span className="current">Pre-Rolled Tubes</span>
            </li>
          </ul>
        </nav>

        {/* Cinematic Header */}
        <div className="category-subpage-header text-center-wrapper reveal-on-scroll reveal-scale reveal-blur">
          <span className="section-badge">HERMETIC STORAGE ARCHIVE</span>
          <h1 className="section-title" style={{ fontSize: "64px", letterSpacing: "-0.04em" }}>PRE-ROLLED TUBES</h1>
          <p className="section-subtitle-center" style={{ fontSize: "18px", lineHeight: "1.6", opacity: 0.8 }}>
            Indestructible aluminum containers with integrated silicone seals. Shields pre-rolls from environmental degradation.
          </p>
        </div>

        {/* Cinematic Showroom Section */}
        <div className="subpage-products-grid" style={{ gap: "180px", marginTop: "120px" }}>
          <section 
            className="subpage-product-card reveal-on-scroll reveal-scale reveal-blur"
            style={{ 
              gridTemplateColumns: "1.2fr 1fr",
              gap: "100px",
              transitionDuration: "1.4s"
            }}
          >
            {/* Visual Column */}
            <div 
              className="subpage-card-visual floating-element"
              style={{ 
                height: "500px",
                animationDuration: "8s"
              }}
            >
              <span className="specs-moq-badge font-mono">10,000 Tubes</span>
              <ProductImage 
                category="pre-rolled-tubes" 
                productId="aluminum-airtight-tube" 
                variant={currentVariant} 
                bgText="ALUM"
                sketchClass="tube-sketch"
              />
            </div>

            {/* Info Column */}
            <div className="subpage-card-content" style={{ zIndex: 1 }}>
              <span className="section-badge" style={{ paddingLeft: 0 }}>HERMETIC SOL-501</span>
              <h2 style={{ fontSize: "44px", letterSpacing: "-0.03em", marginBottom: "28px" }}>Hermetic Aluminum Single Tubes</h2>
              
              {/* Paper Variant Selection Chips */}
              <div className="paper-variants-wrapper" style={{ marginBottom: "32px" }}>
                <h4 style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--color-text-muted)", marginBottom: "12px", textTransform: "uppercase" }}>Available Paper Variants</h4>
                <div className="variants-chips-row" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {paperVariants.map((variant) => {
                    const isActive = currentVariant === variant;
                    return (
                      <button
                        key={variant}
                        onClick={() => handleSelectVariant("aluminum-airtight-tube", variant)}
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
                  <strong>Anodized Aluminum (Food-safe)</strong>
                </div>
                <div className="table-row">
                  <span>Capacity:</span>
                  <span>Fits 1 pre-roll (up to 109mm)</span>
                </div>
                <div className="table-row">
                  <span>Selected Option:</span>
                  <strong style={{ color: "var(--accent-silver)" }}>{currentVariant}</strong>
                </div>
              </div>

              <div className="subpage-card-actions" style={{ marginTop: "32px" }}>
                <button 
                  onClick={() => handleViewSpecs("aluminum-airtight-tube")} 
                  className="btn btn-silver"
                  style={{ padding: "16px 36px" }}
                >
                  VIEW SPECIFICATIONS &rarr;
                </button>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
