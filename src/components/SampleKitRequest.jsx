import React, { useState } from "react";

export default function SampleKitRequest() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "Producer",
    volume: "50k-100k",
    preference: "all",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.company || !formState.email) {
      alert("Please fill out all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="sample-kit-box">
      <div className="sample-kit-image-side">
        <div className="kit-badge">EXPERIENCES THE CRAFT</div>
        <h3 className="kit-title">SOL SIGNATURE SAMPLE ARCHIVE</h3>
        <p className="kit-description">
          Evaluate paper weight, opacity, crutch structural integrity, and burn rates firsthand. 
          Our enterprise evaluation archive contains the complete spectrum of materials, 
          sizes, and customized tips.
        </p>
        <div className="kit-includes">
          <h4 className="includes-title">What is Included:</h4>
          <ul className="includes-list">
            <li>
              <span className="bullet"></span>
              24x Ultra-Thin Organic Flax Cones (84mm / 98mm / 109mm)
            </li>
            <li>
              <span className="bullet"></span>
              24x Organic Unrefined Hemp Cones
            </li>
            <li>
              <span className="bullet"></span>
              12x Artisanal Borosilicate Glass Tip Pre-rolls
            </li>
            <li>
              <span className="bullet"></span>
              Sample swatch book of our custom packaging stocks & finishes
            </li>
            <li>
              <span className="bullet"></span>
              Certifications and heavy metal test report certificates
            </li>
          </ul>
        </div>
        <div className="kit-shipping-note">
          * Complimentary for licensed operators and established brands globally.
        </div>
      </div>

      <div className="sample-kit-form-side">
        {submitted ? (
          <div className="success-overlay-panel fade-in">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#ffffff" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3>SAMPLE ARCHIVE RESERVED</h3>
            <p>
              Your corporate request has been logged. An SOL Logistics Representative will 
              verify your company details and issue a tracking ID for your sample box.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormState({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  industry: "Producer",
                  volume: "50k-100k",
                  preference: "all",
                });
              }}
              className="btn btn-silver"
            >
              REQUEST ANOTHER BOX
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="kit-form">
            <h3 className="form-heading">REQUEST EVALUATION KIT</h3>
            <p className="form-subheading">Submit your business credentials to request a physical trial kit.</p>

            <div className="form-field">
              <label>FULL NAME *</label>
              <input
                type="text"
                required
                className="mfg-input"
                placeholder="e.g. Alexander Sterling"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            <div className="form-grid-fields">
              <div className="form-field">
                <label>COMPANY NAME *</label>
                <input
                  type="text"
                  required
                  className="mfg-input"
                  placeholder="e.g. Apex Cannabis Group"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>BUSINESS EMAIL *</label>
                <input
                  type="email"
                  required
                  className="mfg-input"
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-grid-fields">
              <div className="form-field">
                <label>BUSINESS PHONE</label>
                <input
                  type="tel"
                  className="mfg-input"
                  placeholder="+1 (555) 019-2834"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>OPERATIONAL INDUSTRY</label>
                <select
                  className="mfg-input"
                  value={formState.industry}
                  onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                >
                  <option value="Producer">Licensed Producer (LP)</option>
                  <option value="MSO">Multi-State Operator (MSO)</option>
                  <option value="Dispensary">Dispensary Group / Retailer</option>
                  <option value="Brand">Independent Pre-roll Brand</option>
                  <option value="Distributor">Wholesaler / Distributor</option>
                </select>
              </div>
            </div>

            <div className="form-grid-fields">
              <div className="form-field">
                <label>ESTIMATED MONTHLY PRE-ROLLS</label>
                <select
                  className="mfg-input"
                  value={formState.volume}
                  onChange={(e) => setFormState({ ...formState, volume: e.target.value })}
                >
                  <option value="Under 50k">Under 50,000</option>
                  <option value="50k-100k">50,000 â€“ 100,000</option>
                  <option value="100k-500k">100,000 â€“ 500,000</option>
                  <option value="500k+">500,000+</option>
                </select>
              </div>

              <div className="form-field">
                <label>PAPER SPECIFICATION INTEREST</label>
                <select
                  className="mfg-input"
                  value={formState.preference}
                  onChange={(e) => setFormState({ ...formState, preference: e.target.value })}
                >
                  <option value="all">Complete Variety (All Types)</option>
                  <option value="hemp">Organic Unrefined Hemp</option>
                  <option value="flax">Ultra-Thin Organic Flax</option>
                  <option value="wood">Classic Wood Pulp</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-silver btn-full m-top-1">
              SUBMIT SECURE REQUEST
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
