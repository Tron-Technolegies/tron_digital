import React from "react";
import "./HowCanWe.css";
export default function HowCanWe() {
  return (
    <div className="how-can-we-container">
      <div className="section-badge">
        <span className="poly-icon">✦</span>
        How we can help
      </div>

      <h2 className="section-title">Our Technology & Digital Capabilities</h2>

      <div className="cards-container">
        <div className="capability-card">
          <h3 className="card-title">AI, Insights, and Solutions</h3>
          <p className="card-description">
            It's time to build your business for an AI world. We help you discover AI's potential at
            the intersection of strategy and technology, and embed AI in all you do.
          </p>
        </div>

        <div className="capability-card">
          <h3 className="card-title">Enterprise Technology</h3>
          <p className="card-description">
            Whatever your digital ambition, an optimized technology infrastructure is table stakes.
            We help you modernize your tech strategy, architecture, and systems to support your
            business goals.
          </p>
        </div>

        <div className="capability-card">
          <h3 className="card-title">Innovation and Design</h3>
          <p className="card-description">
            Keeping apace in the digital era requires designing, building, and scaling digital
            businesses and products. With human-centered design, rapid prototyping, and UX testing,
            we help accelerate your transformation.
          </p>
        </div>
      </div>
    </div>
  );
}
