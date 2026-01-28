import React from "react";
import "./OurPrincipleSection.css";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function OurPrinciplesSection() {
  return (
    <section className="principles-section" id="principles">
      <div className="container-principle-section">
        <div className="principle-header">
          <span className="principle-pill">✦ Our Principles</span>
          <h2 className="principle-title">We Make - Intelligence Visible</h2>
          <p className="principle-description">
            Our core principles guide everything we do, ensuring we deliver
            excellence in every project.
          </p>

          {/* <div className="principle-steps">
            <span className="principle-step active">01</span>
            <span className="principle-step">02</span>
            <span className="principle-step">03</span>
            <span className="principle-step">04</span>
          </div> */}
        </div>

        <div className="principle-cards">
          <div className="principle-card">
            <h3 className="principle-card-title">
              Unity <span className="principle-card-number">01</span>
            </h3>
            <p className="principle-card-text">
              Developing the technology market by community building, and
              conferences.
            </p>
          </div>
          <div className="principle-card">
            <h3 className="principle-card-title">
              Quality Assurance{" "}
              <span className="principle-card-number">02</span>
            </h3>
            <p className="principle-card-text">
              We maintain high standards for the quality of the work we do.
            </p>
          </div>
          <div className="principle-card">
            <h3 className="principle-card-title">
              The Customer First{" "}
              <span className="principle-card-number">03</span>
            </h3>
            <p className="principle-card-text">
              Before building reliable products, we build strong relationships
              with our clients.
            </p>
          </div>
          <div className="principle-card">
            <h3 className="principle-card-title">
              Go Green <span className="principle-card-number">04</span>
            </h3>
            <p className="principle-card-text">
              At Tron, we believe in doing what we can to protect the
              environment.
            </p>
          </div>
        </div>

        <div className="principle-highlight-box">
          <h2 className="principle-highlight-title">
            Put the <span className="principle-glow">Pro</span> <br /> in{" "}
            <span className="principle-glow">Pro</span>
            ductivity
          </h2>
          <p className="principle-highlight-text">
            Turn Pro to harness the power of AI, make Raycast your own with
            custom themes, keep your Macs in sync and more.
          </p>
          <button
            className="principle-btn"
            onClick={() =>
              handleChatClickCustom(
                "I would like to know more about Tron Digital",
              )
            }
          >
            Know more →
          </button>
        </div>
      </div>
    </section>
  );
}
