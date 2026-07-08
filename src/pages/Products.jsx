import React, { useEffect } from "react";

export default function Products({ setRoute }) {
  
  // SEO Header Injection
  useEffect(() => {
    document.title = "B2B Pre-Roll Catalog & Packaging | SOL Manufacturing";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Browse the comprehensive B2B pre-roll product catalogue of SOL Manufacturing. Discover premium pre-rolled cones, filter tips, tubes, custom branding, and custom packaging solutions.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/products";
  }, []);

  const categories = [
    {
      id: "retail-packaging",
      title: "Retail Packaging",
      desc: "Premium consumer-facing packs, multi-packs, paperboard drawers, and custom booklets with integrated filters. Built to elevate retail brand presence.",
      imageClass: "retail-showcase-bg",
      route: "products-retail-packaging",
      metric: "MOQ: 5,000 Units",
      bgText: "PACK"
    },
    {
      id: "wholesale-packaging",
      title: "Wholesale Packaging",
      desc: "High-volume commercial packing boxes, bulk master shipper cartons, and secondary storage containers calibrated for automated pre-roll facilities.",
      imageClass: "wholesale-showcase-bg",
      route: "products-wholesale-packaging",
      metric: "MOQ: 10,000 Units",
      bgText: "BULK"
    },
    {
      id: "pre-rolled-cones",
      title: "Pre-Rolled Cones",
      desc: "GMP-manufactured paper cones. Available in unbleached organic hemp, refined wood pulp, and French organic flax paper with precise taper geometry.",
      imageClass: "cones-showcase-bg",
      route: "products-pre-rolled-cones",
      metric: "MOQ: 20,000 Cones",
      bgText: "CONE"
    },
    {
      id: "filter-tips",
      title: "Filter & Glass Tips",
      desc: "Artisanal glass tip crutches, natural birchwood cylinders, and internal spiral crutches engineered for optimal cooling and zero debris intake.",
      imageClass: "tips-showcase-bg",
      route: "products-filter-tips",
      metric: "MOQ: 10,000 Tips",
      bgText: "TIPS"
    },
    {
      id: "pre-rolled-tubes",
      title: "Pre-Rolled Tubes",
      desc: "Certified child-resistant airtight glass vials, anodized aluminum screw-top containers, and biodegradable tubes to preserve moisture and aroma.",
      imageClass: "tubes-showcase-bg",
      route: "products-pre-rolled-tubes",
      metric: "MOQ: 10,000 Tubes",
      bgText: "TUBE"
    },
    {
      id: "custom-branding",
      title: "Custom Branding",
      desc: "Bespoke laser-etched paper watermarks, custom printed filter tips, and gold foil seam lining to ensure absolute brand distinction.",
      imageClass: "branding-showcase-bg",
      route: "products-custom-branding",
      metric: "MOQ: 20,000 Cones",
      bgText: "LOGO"
    },
    {
      id: "custom-packaging",
      title: "Custom Packaging",
      desc: "Bespoke rigid slider cases, magnetic display boxes, pocket-sized hinged tins, and custom point-of-sale display stands tailored to exact dimensions.",
      imageClass: "custom-showcase-bg",
      route: "products-custom-packaging",
      metric: "MOQ: 2,500 Cases",
      bgText: "CASE"
    }
  ];

  return (
    <div className="page-wrapper products-landing-page section-padding bg-darker">
      <div className="container">
        
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav reveal-on-scroll" aria-label="Breadcrumb">
          <ul className="breadcrumb-list">
            <li>
              <button onClick={() => setRoute("home")}>Home</button>
            </li>
            <li className="separator">/</li>
            <li>
              <span className="current">Products</span>
            </li>
          </ul>
        </nav>

        {/* Page Editorial Header */}
        <div className="products-hero-header text-center-wrapper reveal-on-scroll reveal-scale reveal-blur">
          <span className="section-badge">SOL MANUFACTURING SEGMENTS</span>
          <h1 className="section-title" style={{ fontSize: "64px", letterSpacing: "-0.04em" }}>THE ARCHIVE</h1>
          <p className="section-subtitle-center" style={{ fontSize: "18px", lineHeight: "1.6", opacity: 0.8 }}>
            Explore our curated segments of certified pre-rolled cones, filter tip hardware, and premium regulatory packaging.
          </p>
        </div>

        {/* Cinematic Categories Showcase */}
        <div className="showcase-categories-list" style={{ gap: "160px", marginTop: "100px" }}>
          {categories.map((cat, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={cat.id} 
                className="showcase-category-section reveal-on-scroll reveal-scale reveal-blur"
                style={{ 
                  gridTemplateColumns: isEven ? "1.2fr 1fr" : "1fr 1.2fr",
                  gap: "80px",
                  transitionDuration: "1.4s"
                }}
              >
                {/* Visual Panel */}
                <div 
                  className="showcase-visual-panel floating-element"
                  onClick={() => setRoute(cat.route)}
                  style={{ 
                    order: isEven ? 0 : 1,
                    height: "460px",
                    animationDelay: `${idx * 0.4}s`,
                    animationDuration: "8s"
                  }}
                >
                  <div className="hero-bg-typography font-mono" style={{ 
                    position: "absolute", 
                    top: "50%", 
                    left: "50%", 
                    transform: "translate(-50%, -50%)", 
                    fontSize: "14vw", 
                    fontWeight: "900",
                    opacity: 0.02,
                    zIndex: 0,
                    pointerEvents: "none"
                  }}>
                    {cat.bgText}
                  </div>

                  <div className={`showcase-visual-bg ${cat.imageClass}`}>
                    <div className="showcase-visual-grid"></div>
                    <div className="showcase-visual-glow"></div>
                  </div>
                  <span className="showcase-tag font-mono">{cat.metric}</span>
                </div>

                {/* Info Panel */}
                <div className="showcase-info-panel" style={{ zIndex: 1 }}>
                  <span className="section-badge" style={{ paddingLeft: 0 }}>SEGMENT 0{idx + 1}</span>
                  <h2 className="showcase-title" style={{ fontSize: "40px", letterSpacing: "-0.03em" }}>{cat.title}</h2>
                  <p className="showcase-description" style={{ fontSize: "15px", opacity: 0.85 }}>{cat.desc}</p>
                  <button 
                    onClick={() => setRoute(cat.route)} 
                    className="btn btn-silver"
                    style={{ padding: "14px 28px" }}
                  >
                    EXPLORE COLLECTION &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
