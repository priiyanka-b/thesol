import React, { useState, useEffect } from "react";
import SampleKitRequest from "../components/SampleKitRequest";

export default function Home({ setRoute, setProductDetailId }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) * 0.03;
    const y = (clientY - window.innerHeight / 2) * 0.03;
    setParallax({ x, y });
  };

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const navigateTo = (route) => {
    setRoute(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const faqData = [
    {
      q: "What is your Minimum Order Quantity (MOQ) for custom-branded cones?",
      a: "Our standard MOQ for custom branded cones (logo printed on crutch or custom watermarked paper) is 20,000 cones per size/material option. For unbranded bulk cases, our MOQ starts at 5,000 cones.",
    },
    {
      q: "Are SOL papers tested for heavy metals and pesticides?",
      a: "Yes. Every single batch of raw paper and completed pre-rolled cones is third-party lab tested by ISO-17025 accredited facilities. We certify zero presence of heavy metals, pesticides, microplastics, and chlorine bleach. Comprehensive lab certificates are provided with every order.",
    },
    {
      q: "What are your standard manufacturing lead times?",
      a: "For in-stock bulk items, shipping occurs within 1-2 business days from our US or EU hubs. For custom OEM printing and custom packaging, lead times range from 4 to 6 weeks, which includes setup, printing, rolling, QA inspection, and customs clearance.",
    },
    {
      q: "Can you match custom sizes and custom paper watermarks?",
      a: "Absolutely. We can manufacture pre-rolled cones to exact proprietary specifications, including custom lengths, custom taper angles, and varying crutch sizes (e.g. 26mm vs 30mm). We can also apply custom embossed watermarks to the paper for premium brand identity.",
    },
    {
      q: "How do you control moisture content during transit?",
      a: "We calibrate all pre-rolled cones to an optimal 10%-12% relative moisture content during manufacturing to prevent paper splitting and crutch collapse. Shipments are packaged in hermetically sealed inner barriers with pharmaceutical-grade moisture control packets.",
    },
  ];

  return (
    <div className="page-wrapper home-page">
      {/* Immersive Cinematic Hero Section */}
      <section className="hero-section" onMouseMove={handleMouseMove}>
        {/* Volumetric ambient background rays */}
        <div className="hero-light-beams">
          <div className="beam beam-1"></div>
          <div className="beam beam-2"></div>
        </div>
        <div className="hero-glow-effect"></div>
        <div className="hero-container">
          <span className="hero-badge animate-glowing">GLOBAL B2B MANUFACTURING PARTNER</span>
          
          <div className="hero-content-wrapper">
            <h1 className="hero-title">
              MANUFACTURING, <br />
              MADE SEAMLESS.
            </h1>
            <p className="hero-subtitle">
              From sourcing and production to packaging and delivery, we simplify manufacturing so your brand can scale with confidence.
            </p>
          </div>

          {/* Cinematic Product Showcase */}
          <div className={`hero-product-showcase ${loaded ? "is-loaded" : ""}`}>
            <div className="hero-bg-typography">SOL</div>
            
            <div 
              className="floating-product-box"
              style={{
                transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) rotate(${12 + parallax.x * 0.08}deg)`
              }}
            >
              <div className="pre-roll-cone">
                <div className="cone-twist"></div>
                <div className="cone-paper">
                  <div className="cone-paper-inner"></div>
                </div>
                <div className="cone-seam"></div>
                <div className="cone-crutch">
                  <span className="crutch-logo">SOL</span>
                </div>
              </div>
              <div className="cone-spec-overlay">
                <span className="spec-indicator"></span>
                <span className="spec-label">BOROSILICATE GLASS FILTER</span>
              </div>
              <div className="cone-reflection-glow"></div>
            </div>
            
            {/* Swaying shadow underneath */}
            <div 
              className="product-shadow-glow"
              style={{
                transform: `translate3d(${parallax.x * 0.4}px, ${parallax.y * 0.4}px, 0) scale(${1 - Math.abs(parallax.y) * 0.005})`
              }}
            ></div>
          </div>

          <div className="hero-actions">
            <button onClick={() => navigateTo("products")} className="btn btn-silver btn-lg">
              EXPLORE CATALOG
            </button>
            <button onClick={() => navigateTo("contact")} className="btn btn-outline btn-lg">
              REQUEST SAMPLES
            </button>
          </div>

          {/* Hero Metrics */}
          <div className="hero-metrics-grid">
            <div className="metric-card">
              <h3>2.5B+</h3>
              <p>Cones rolled since inception</p>
            </div>
            <div className="metric-card">
              <h3>GMP</h3>
              <p>Certified cleanroom environments</p>
            </div>
            <div className="metric-card">
              <h3>&lt; 0.1%</h3>
              <p>Rejection rate under ISO 9001 QA</p>
            </div>
            <div className="metric-card">
              <h3>100%</h3>
              <p>Compliance tested (Heavy Metal Free)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="intro-section section-padding">
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <div className="intro-text reveal-on-scroll reveal-scale reveal-blur">
            <span className="section-badge">WHY SOL</span>
            <h2 className="section-title" style={{ fontSize: "52px", letterSpacing: "-0.03em", marginBottom: "32px" }}>PRECISION WITHOUT COMPROMISE</h2>
            <p className="section-desc" style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              At SOL, we treat the pre-roll cone not as an afterthought, but as an engineered delivery system. A fraction of a millimeter difference in taper, paper weight, or crutch placement can cause auto-packing machines to fail and cones to run or canoe.
            </p>
            <p className="section-desc" style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--color-text-secondary)", marginBottom: "36px" }}>
              We own and operate our entire supply chain—from raw organic crop sourcing in Western Europe to custom GMP-cleanroom hand-rolling and packaging. This vertical integration is why MSOs and independent operators trust SOL to represent their brand.
            </p>
            <button onClick={() => navigateTo("facilities")} className="btn btn-silver" style={{ padding: "16px 36px" }}>
              DISCOVER THE SOL PROCESS
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us section-padding bg-darker">
        <div className="container">
          <div className="text-center-wrapper reveal-on-scroll">
            <span className="section-badge">CRAFT DEFINTION</span>
            <h2 className="section-title">THE SOL ADVANTAGE</h2>
            <p className="section-subtitle-center">
              We design and manufacture to meet the stringent demands of commercial pre-roll operations.
            </p>
          </div>

          <div className="advantage-grid">
            <div className="advantage-card reveal-on-scroll">
              <div className="card-icon-wrap">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h4>Industrial-Grade Sorting</h4>
              <p>Every single pre-roll cone is camera-inspected for shape consistency, ensuring a 99.9% auto-packing machine compatibility rate.</p>
            </div>

            <div className="advantage-card reveal-on-scroll">
              <div className="card-icon-wrap">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>GMP Certified Cleanrooms</h4>
              <p>Our rolling, folding, and final packing lines operate under strict Class 100,000 cleanroom regulations to prevent dust and biological contamination.</p>
            </div>

            <div className="advantage-card reveal-on-scroll">
              <div className="card-icon-wrap">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h4>Chemical & Bleach Free</h4>
              <p>We use natural, chlorine-free wood pulp, organic hemp, and food-grade vegetable dyes. Zero chemical additives or artificial burn accelerators.</p>
            </div>

            <div className="advantage-card reveal-on-scroll">
              <div className="card-icon-wrap">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h4>Direct Supply Chain</h4>
              <p>By owning our production facilities, we bypass brokers and trading agents, ensuring consistent B2B pricing and secure lead times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Kit Request Block */}
      <section className="sample-kit-cta section-padding">
        <div className="container reveal-on-scroll">
          <SampleKitRequest />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section-padding bg-darker">
        <div className="container">
          <div className="text-center-wrapper reveal-on-scroll">
            <span className="section-badge">ENTERPRISE VOICES</span>
            <h2 className="section-title">TRUSTED BY LEADING PRODUCERS</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card reveal-on-scroll">
              <div className="t-rating">★★★★★</div>
              <p className="t-text">
                "Switching to SOL's unbleached hemp cones completely eliminated our packing line jamming issues. Our weekly output increased by 22% overnight. Their quality control is absolute."
              </p>
              <div className="t-author">
                <strong>Marcus Vance</strong>
                <span>Director of Pre-Roll Operations, Apex Green Group</span>
              </div>
            </div>

            <div className="testimonial-card reveal-on-scroll">
              <div className="t-rating">★★★★★</div>
              <p className="t-text">
                "The custom printing on our glass tip pre-rolls is incredibly sharp, and the silver metallic accents give our pre-rolls a distinct luxury feel. SOL is an irreplaceable OEM partner for us."
              </p>
              <div className="t-author">
                <strong>Clara Reynolds</strong>
                <span>Chief Brand Officer, Lumina Botanicals</span>
              </div>
            </div>

            <div className="testimonial-card reveal-on-scroll">
              <div className="t-rating">★★★★★</div>
              <p className="t-text">
                "In a highly-regulated market, having batch-specific Heavy Metals free certifications is mandatory. SOL provides full lab reports with every shipment, taking the anxiety out of compliance audits."
              </p>
              <div className="t-author">
                <strong>Dave K. Sterling</strong>
                <span>VP of Quality Assurance, Atlas Licensed Producers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="faq-section section-padding">
        <div className="container max-width-md">
          <div className="text-center-wrapper reveal-on-scroll">
            <span className="section-badge">SUPPORT CENTER</span>
            <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div className="faq-accordion reveal-on-scroll">
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? "active" : ""}`}>
                <button className="faq-trigger" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon-arrow">{activeFaq === index ? "−" : "+"}</span>
                </button>
                <div className="faq-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
