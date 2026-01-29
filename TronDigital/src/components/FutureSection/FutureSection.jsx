import React from "react";
import "./FutureSection.css";

export default function FutureSection() {
  return (
    <section className="future-section" id="future">
      <div className="container">
        {/* Top Section */}
        <div className="top-section">
          <div className="text-content">
            <h2>
              <span className="highlight">We believe</span> in defining the
              future
            </h2>
            <p>
              At TRON, we don’t react to change — we help shape it. Our belief
              system is built around innovation, performance, and purpose-driven
              digital growth. Every strategy, experience, and solution we create
              is designed to move brands forward in a fast-evolving digital
              world.
            </p>
          </div>

          <div className="card">
            <h3>Designing Experiences That Create Impact</h3>
            <p>
              We design digital experiences that go beyond aesthetics. By
              combining strategy, technology, and user behavior insights, we
              create meaningful interactions that build trust, drive engagement,
              and leave a lasting impact on audiences.
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="bottom-cards">
          <div className="card">
            <h3>Built to Influence. Optimized to Convert.</h3>
            <p>
              Our focus is on experiences that convert. From websites and
              campaigns to content and performance funnels, we ensure every
              touchpoint is optimized to influence decisions and deliver
              measurable business outcomes.
            </p>
          </div>
          <div className="card">
            <h3>Built for What’s Next</h3>
            <p>
              Innovation sits at the core of everything we do. We experiment
              with new tools, platforms, and approaches to create future-ready
              digital experiences that keep brands relevant, competitive, and
              scalable.
            </p>
          </div>
          <div className="card">
            <h3>Understanding Users, Designing Better Journeys</h3>
            <p>
              We believe great experiences are built with the user in mind.
              Through research-driven design and continuous optimization, we
              craft journeys that feel intuitive, human, and aligned with real
              customer needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
