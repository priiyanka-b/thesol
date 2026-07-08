import React from "react";

export default function Facilities() {
  const qcSteps = [
    {
      title: "Incoming Fiber Audit",
      desc: "Before a single roll of paper is loaded onto our cutting lines, raw reels are tested for thickness uniformity, tensile strength, and relative humidity. Any reels showing moisture variance above 1% are immediately quarantined."
    },
    {
      title: "Automated Visual Inspection",
      desc: "Our automated rolling and folding lines are equipped with 4K camera arrays. These systems analyze the geometric taper, crown diameter, and seam seal lines of every single cone, rejecting any unit with a deviance greater than 0.1mm."
    },
    {
      title: "Third-Party Laboratory Testing",
      desc: "We pull random units from every hourly batch run and send them to ISO-17025 certified labs. These samples are tested for heavy metals (lead, arsenic, cadmium, mercury), pesticide residues, and microplastics. Batch certificates are logged in our database."
    }
  ];

  return (
    <div className="page-wrapper facilities-page section-padding">
      <div className="container">
        {/* Page Header */}
        <div className="facilities-header text-center-wrapper reveal-on-scroll">
          <span className="section-badge">PRODUCTION PLANTS</span>
          <h1 className="section-title">FACILITIES & QUALITY ASSURANCE</h1>
          <p className="section-subtitle-center">
            Inside our state-of-the-art cleanroom facilities, where advanced automation and strict quality protocols guarantee perfect pre-rolls.
          </p>
        </div>

        {/* Plant Overview Section */}
        <section className="plant-overview section-padding m-bottom-2">
          <div className="grid-2">
            <div className="plant-intro reveal-on-scroll">
              <span className="section-badge">GMP CLEANROOMS</span>
              <h2>Class 100,000 Environment</h2>
              <p>
                Biological contaminants, microdust, and fiber particles are the enemies of clean pre-roll manufacturing. Our main assembly and rolling lines operate inside Class 100,000 Cleanrooms with positive pressure filtration.
              </p>
              <p>
                All plant operators wear full cleanroom gowns, hairnets, and nitrile gloves. The ambient air is completely cycled 20 times per hour through HEPA filtration banks, keeping particulate counts below ISO 8 standards.
              </p>
              <div className="cleanroom-specs-list">
                <div className="c-spec-item">
                  <span>Air Filtration:</span>
                  <strong>99.97% HEPA Efficiency</strong>
                </div>
                <div className="c-spec-item">
                  <span>Temperature Control:</span>
                  <strong>21°C ± 1°C</strong>
                </div>
                <div className="c-spec-item">
                  <span>Relative Humidity:</span>
                  <strong>45% ± 3% (Calibrated for paper stability)</strong>
                </div>
              </div>
            </div>
            
            <div className="plant-image-placeholder reveal-on-scroll">
              <div className="cleanroom-blueprint-art">
                <div className="blueprint-overlay-stats">
                  <span>HEPA ZONE 04</span>
                  <span>SYS SECURE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Register */}
        <section className="certs-register section-padding bg-darker m-bottom-2">
          <div className="text-center-wrapper reveal-on-scroll">
            <span className="section-badge">COMPLIANCE LEDGER</span>
            <h2 className="section-title">ENTERPRISE CERTIFICATIONS</h2>
            <p className="section-subtitle-center">
              Our facilities are audited yearly by accredited third-party certification bodies to ensure complete quality compliance.
            </p>
          </div>

          <div className="certs-full-grid">
            <div className="cert-detail-card reveal-on-scroll">
              <h4>GMP CERTIFIED</h4>
              <span className="cert-status-tag">ACTIVE COMPLIANCE</span>
              <p>Certified under WHO guidelines for Good Manufacturing Practices. Ensures all personnel, facilities, and procedures meet strict safety and hygiene standards.</p>
              <small className="cert-code">Registry ID: GMP-2025-A918</small>
            </div>

            <div className="cert-detail-card reveal-on-scroll">
              <h4>ISO 9001:2015</h4>
              <span className="cert-status-tag">ACTIVE COMPLIANCE</span>
              <p>Audited Quality Management Systems. Guarantees that our manufacturing, customer service, and supply chain tracking adhere to international standards of excellence.</p>
              <small className="cert-code">Registry ID: ISO-9001-QMS-481</small>
            </div>

            <div className="cert-detail-card reveal-on-scroll">
              <h4>FSC CHAIN OF CUSTODY</h4>
              <span className="cert-status-tag">ACTIVE COMPLIANCE</span>
              <p>Chain-of-custody certification from the Forest Stewardship Council. Verifies that all raw wood fiber is harvested from responsibly managed forests.</p>
              <small className="cert-code">Registry ID: FSC-C124000-COC</small>
            </div>

            <div className="cert-detail-card reveal-on-scroll">
              <h4>FDA COMPLIANT PAPERS</h4>
              <span className="cert-status-tag">COMPLIANT TESTING</span>
              <p>All paper materials and organic gum adhesives comply with FDA Title 21 CFR specifications for materials in contact with food substances.</p>
              <small className="cert-code">Registry ID: FDA-21CFR-176.170</small>
            </div>
          </div>
        </section>

        {/* Quality Control Details */}
        <section className="qc-deep-dive section-padding m-bottom-2">
          <div className="text-center-wrapper reveal-on-scroll">
            <span className="section-badge">QA PIPELINE</span>
            <h2 className="section-title">THREE-TIER QUALITY INSPECTION</h2>
            <p className="section-subtitle-center">
              We monitor every pre-roll cone from raw pulp to completed container, leaving zero room for packing defects.
            </p>
          </div>

          <div className="qc-pipeline-flow">
            {qcSteps.map((step, idx) => (
              <div key={idx} className="qc-flow-step reveal-on-scroll">
                <div className="qc-number-wrap">
                  <span className="qc-num">0{idx + 1}</span>
                  <span className="qc-line-connector"></span>
                </div>
                <div className="qc-content-wrap">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Machinery Section */}
        <section className="machinery-overview section-padding bg-darker">
          <div className="grid-2">
            <div className="machinery-art-side reveal-on-scroll">
              <div className="machinery-drawing-mesh">
                <div className="mesh-inner-glow"></div>
              </div>
            </div>
            
            <div className="machinery-content-side reveal-on-scroll">
              <span className="section-badge">AUTOMATION LAB</span>
              <h2>Proprietary Folding & Rolling Machinery</h2>
              <p>
                We do not rely on generic off-the-shelf paper machinery. Our engineering team designed and built proprietary high-speed cone rolling systems.
              </p>
              <p>
                These systems roll, glue, and insert filter crutches in a single automated pass, minimizing human handling and keeping production speeds high. A specialized moisture calibration unit sprays micro-purified water to lock in the paper's target moisture level before packaging.
              </p>
              <ul className="machinery-stats">
                <li>
                  <strong>2,400 Cones/Min</strong>
                  <span>Speed per automated rolling assembly line</span>
                </li>
                <li>
                  <strong>Micron-Precision Glue Seam</strong>
                  <span>Even adhesive distribution prevents separation</span>
                </li>
                <li>
                  <strong>Electronic Taper Calibration</strong>
                  <span>Eliminates jamming inside auto-packing cartridges</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
