import React from "react";
import "./FutureSection.css";

export default function FutureSection() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="future-section">
      <div className="container">
        {/* Top Section */}
        <div className="top-section">
          <div className="text-content">
            <h2>
              <span className="highlight">We believe</span> in defining the future
            </h2>
            <p>{text}</p>
          </div>

          <div className="card">
            <h3>Create influential digital experiences</h3>
            <p>{text}</p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="bottom-cards">
          <div className="card">
            <h3>Create influential digital experiences</h3>
            <p>{text}</p>
          </div>
          <div className="card">
            <h3>Create influential digital experiences</h3>
            <p>{text}</p>
          </div>
          <div className="card">
            <h3>Create influential digital experiences</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
