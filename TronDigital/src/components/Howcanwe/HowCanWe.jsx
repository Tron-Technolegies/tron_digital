import React from "react";
import "./HowCanWe.css";
export default function HowCanWe() {
  return (
    <div className="how-can-we-container" id="how-we-help">
      <div className="section-badge">
        <span className="poly-icon">✦</span>
        How we can help
      </div>

      <h2 className="section-title">Our Technology & Digital Capabilities</h2>

      <div className="cards-container">
        <div className="capability-card">
          <h3 className="card-title">AI, Insights & Performance Solutions</h3>
          <p className="card-description">
            We help businesses leverage AI and data-driven insights to make
            smarter marketing and growth decisions. From audience analysis and
            predictive insights to campaign optimization and automation, we
            integrate AI where it creates real impact — improving efficiency,
            accuracy, and ROI across your digital efforts. Our focus is not on
            hype, but on practical AI solutions that enhance performance and
            scalability.
          </p>
        </div>

        <div className="capability-card">
          <h3 className="card-title">
            Enterprise Technology & Growth Infrastructure
          </h3>
          <p className="card-description">
            A strong digital foundation is critical for sustainable growth. We
            help businesses build and optimize scalable technology ecosystems —
            from websites and analytics setups to marketing automation, CRM
            integrations, and performance tracking systems. Our solutions ensure
            your digital infrastructure supports faster execution, better
            decision-making, and long-term business objectives.
          </p>
        </div>

        <div className="capability-card">
          <h3 className="card-title">Innovation, Design & User Experience</h3>
          <p className="card-description">
            In fast-moving digital markets, experience is everything. We design
            and build digital products, platforms, and brand experiences that
            are intuitive, conversion-focused, and built for scale. Through
            human-centered design, rapid prototyping, and UX optimization, we
            help brands improve engagement, trust, and customer retention while
            accelerating digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
}
