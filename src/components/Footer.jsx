import React, { useState } from "react";

export default function Footer({ setRoute }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const navigateTo = (route) => {
    setRoute(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="global-footer">
      {/* Newsletter Block */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h3>RECEIVE INDUSTRIAL INSIGHTS</h3>
            <p>Subscribe to stay informed on pre-roll compliance, supply chain news, and product releases.</p>
          </div>
          <div className="newsletter-form-wrapper">
            {subscribed ? (
              <span className="subscribe-success fade-in">
                EMAIL REGISTRATION LOGGED. WELCOME TO THE ARCHIVE.
              </span>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Enter business email address"
                  className="newsletter-input"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-silver btn-newsletter">
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="footer-links-area">
        <div className="footer-container">
          <div className="footer-brand-column">
            <h3 className="footer-logo" onClick={() => navigateTo("home")}>
              SOL
            </h3>
            <p className="brand-pitch">
              SOL is the world's leading OEM partner for licensed pre-roll brands, providing GMP-grade pre-rolled cones, rolling papers, and high-performance custom packaging solutions.
            </p>
            <div className="footer-contact-details">
              <p>
                <strong>Corporate HQ:</strong> 8540 Industrial Pkwy, Los Angeles, CA 90021
              </p>
              <p>
                <strong>Email:</strong> contact@solmanufacturing.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (213) 555-0180
              </p>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="links-column">
              <h4>PRODUCTS</h4>
              <button onClick={() => navigateTo("products")} className="footer-link">
                Organic Flax Cones
              </button>
              <button onClick={() => navigateTo("products")} className="footer-link">
                Unbleached Hemp Cones
              </button>
              <button onClick={() => navigateTo("products")} className="footer-link">
                Wood Pulp Cones
              </button>
              <button onClick={() => navigateTo("products")} className="footer-link">
                Glass Crutch Cones
              </button>
              <button onClick={() => navigateTo("products")} className="footer-link">
                Spiral Filter Cones
              </button>
            </div>

            <div className="links-column">
              <h4>SERVICES</h4>
              <button onClick={() => navigateTo("custom-mfg")} className="footer-link">
                OEM & Private Label
              </button>
              <button onClick={() => navigateTo("custom-mfg")} className="footer-link">
                Custom Printing & Sizing
              </button>
              <button onClick={() => navigateTo("custom-mfg")} className="footer-link">
                Child-Resistant Packaging
              </button>
              <button onClick={() => navigateTo("custom-mfg")} className="footer-link">
                Paper Materials Specs
              </button>
              <button onClick={() => navigateTo("custom-mfg")} className="footer-link">
                Cone Customizer Tool
              </button>
            </div>

            <div className="links-column">
              <h4>ENTERPRISE</h4>
              <button onClick={() => navigateTo("facilities")} className="footer-link">
                GMP Cleanrooms
              </button>
              <button onClick={() => navigateTo("facilities")} className="footer-link">
                Automated Machinery
              </button>
              <button onClick={() => navigateTo("facilities")} className="footer-link">
                FSC Certified Sourcing
              </button>
              <button onClick={() => navigateTo("facilities")} className="footer-link">
                Heavy Metals Testing
              </button>
              <button onClick={() => navigateTo("facilities")} className="footer-link">
                ISO 9001:2015 Audits
              </button>
            </div>

            <div className="links-column">
              <h4>RESOURCES</h4>
              <button onClick={() => navigateTo("blog")} className="footer-link">
                B2B Market Insights
              </button>
              <button onClick={() => navigateTo("contact")} className="footer-link">
                Sample Kit Request
              </button>
              <button onClick={() => navigateTo("contact")} className="footer-link">
                Submit RFQ (Quote)
              </button>
              <button onClick={() => navigateTo("home")} className="footer-link">
                Frequently Asked FAQs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-container bottom-flex">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} SOL Pre-Roll & Packaging Manufacturing. All Rights Reserved.
          </p>
          <div className="legal-links">
            <button onClick={() => navigateTo("privacy")} className="bottom-link">
              Privacy Policy
            </button>
            <button onClick={() => navigateTo("terms")} className="bottom-link">
              Terms of Service
            </button>
            <button onClick={() => navigateTo("shipping")} className="bottom-link">
              Shipping & Lead Times
            </button>
            <button onClick={() => navigateTo("returns")} className="bottom-link">
              Returns & Claims
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
