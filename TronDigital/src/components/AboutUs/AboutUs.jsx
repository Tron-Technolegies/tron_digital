import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-us-section" id="about">
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
            <span className="about-us-span">Building Brands </span> That Stand
            Out in a World Full of Noise.
          </h2>
          <p className="about-us-desc">
            At TRON Digital, we don’t believe in generic marketing. We build
            brands that are visible, memorable, and performance-driven. Every
            strategy we design is rooted in data, creativity, and a clear
            understanding of business goals.
            <br />
            From building strong digital foundations to scaling through SEO,
            performance marketing, and content-led growth, we help brands cut
            through the noise and create real impact in competitive markets
            <br />
            We don’t chase trends — we build systems that deliver consistent,
            measurable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
