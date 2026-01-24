import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-img">
          <img src="/about-img.png" alt="" />
        </div>
        <div className="about-us-content">
          <p className="about-us-text">
            <img src="/poly-icon.svg" alt="" />
            What we do
          </p>
          <h2 className="about-us-heading">
            {" "}
            <span className="about-us-span">Where Strategy </span>Meets Creativity
          </h2>
          <p className="about-us-desc">
            Tron Digital is a full-service digital marketing agency helping brands transform their
            online presence through strategy, creativity, and technology. With a passionate team of
            marketers, designers, and strategists, we deliver measurable results that fuel
            sustainable business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
