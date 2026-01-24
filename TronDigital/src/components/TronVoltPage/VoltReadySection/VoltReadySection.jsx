import React from "react";
import "./VoltReadySection.css";

export default function VoltReadySection() {
  return (
    <section className="volt-section">
      <div className="volt-container">
        {/* Gradient Heading */}
        <h3 className="volt-heading">Ready to Amplify Your Digital Presence?</h3>

        {/* Description */}
        <p className="volt-description">
          Join the ranks of successful brands that have transformed their digital marketing with
          Tron Volt. <br />
          Our expert team is ready to craft a strategy tailored to your unique goals.
        </p>

        {/* Buttons */}
        <div className="volt-buttons">
          <button className="btn btn-primary">Get free strategy session</button>
          <button className="btn btn-secondary">View Case studies</button>
        </div>
      </div>
    </section>
  );
}
