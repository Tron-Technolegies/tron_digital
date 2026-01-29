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
            Our principles guide how we think, build, and deliver. They keep us
            focused on what matters — doing meaningful work, creating real
            value, and delivering excellence in every project we take on.
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
              We grow together.
              <br /> We believe strong results come from collaboration — within
              our team, with our partners, and with our clients. By sharing
              ideas, knowledge, and responsibility, we build better solutions
              and stronger relationships.
            </p>
          </div>
          <div className="principle-card">
            <h3 className="principle-card-title">
              Quality Assurance{" "}
              <span className="principle-card-number">02</span>
            </h3>
            <p className="principle-card-text">
              Details matter to us.
              <br /> We set high standards for our work and don’t cut corners.
              Every strategy, design, and campaign is reviewed, refined, and
              optimized to ensure it performs the way it’s meant to.
            </p>
          </div>
          <div className="principle-card">
            <h3 className="principle-card-title">
              The Customer First{" "}
              <span className="principle-card-number">03</span>
            </h3>
            <p className="principle-card-text">
              People before projects.
              <br /> Before we build, we listen. Understanding our clients’
              goals, challenges, and expectations helps us create solutions that
              truly work and relationships that last.
            </p>
          </div>
          <div className="principle-card">
            <h3 className="principle-card-title">
              Go Green <span className="principle-card-number">04</span>
            </h3>
            <p className="principle-card-text">
              Progress with responsibility.
              <br /> We believe growth shouldn’t come at the cost of the planet.
              From mindful processes to sustainable digital practices, we aim to
              do our part in building a better future.
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
            Turn strategy into action with smarter tools, AI-driven insights,
            and systems built to help you work faster, think clearer, and scale
            better.
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
