import React from "react";
import "./BrandLogo.css";

import microsoft from "../../assets/logos/microsoft.png";
import adobe from "../../assets/logos/adobe.png";
import shopify from "../../assets/logos/shopify.png";
import slack from "../../assets/logos/slack.png";
import booking from "../../assets/logos/booking.png";

export default function BrandLogos() {
  const logos = [microsoft, adobe, shopify, slack, booking];

  return (
    <section className="brand-section">
      <div className="brand-container">
        <h2 className="brand-title">Collaborations Across the Technology Ecosystem</h2>

        <div className="brand-slider">
          <div className="brand-track">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="brand-logo">
                <img src={logo} alt="brand logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
