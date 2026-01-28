import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";

import "./HeroSection.css";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <p className="hero-text">
        <img src="/poly-icon.svg" alt="" /> Welcome to TRON Digital
      </p>
      <h1 className="hero-heading">
        Bringing a Revolution in
        <br />
        <span className="hero-span">Digital Marketing</span>
      </h1>
      <p className="hero-desc">
        TRON Digital is a creative growth acceleration company obsessed with
        delivering measurable, real-world business results — not vanity metrics
      </p>
      <div className="button-container">
        <button
          className="hero-btn"
          onClick={() =>
            handleChatClickCustom(
              "I would like to get a consultation about Tron Digital",
            )
          }
        >
          Let’s Get Started
          <SlArrowRightCircle className="arrow-icon" />
        </button>

        {/* <img src="/heroicons-solid_play.svg" alt="" className="play-icon" /> */}
      </div>

      <div className="hero-card-container">
        <div className="hero-card experience">
          <div className="experience-number">3+</div>
          <div className="experience-title">Years of Experience</div>
          <p className="text-sm">
            Helping brands grow through data-driven SEO, high-performing ad
            campaigns, and conversion-focused digital strategies across multiple
            industries.
          </p>
        </div>
        <div className="hero-card achievement">
          <div className="achievement-title">Achievement</div>
          <div className="achievement-items">
            <div className="achievement-item">
              <p className="achievement-label">Project</p>
              <span>100</span>
            </div>
            <div className="achievement-item">
              <p className="achievement-label">Brand</p>
              <span>40</span>
            </div>
            <div className="achievement-item">
              <p className="achievement-label">Award</p>
              <span>85</span>
            </div>
          </div>
          <hr />
          {/* <div className="text-white text-[13px]">
            <p>
              - Successful campaigns executed across SEO, paid ads, and social
              media.
            </p>
            <p>
              - Trusted brands partnered with TRON Digital for long-term growth.
            </p>
            <p>
              - Recognitions for performance, creativity, and marketing
              excellence.
            </p>
          </div> */}
        </div>
        <div className="hero-card team">
          <div className="team-overlay">
            <div className="team-title">Business Team Works</div>
            <p className="team-desc">
              A collaborative team of strategists, marketers, designers, and
              analysts working together to turn business goals into scalable
              digital success.
            </p>
          </div>
        </div>
      </div>

      <nav className="hero-menu">
        <a href="#services">What we do</a>
        {/* <a href="#ambition">What's your digital ambition?</a> */}
        <a href="#how-we-help">How we can help</a>
        {/* <a href="#impact">Experience & Impact</a> */}
        <a href="#experts">Our Digital Experts</a>
        <a href="#insights">Insights</a>
      </nav>

      {/* <section className="brand-logo-section">
        <div className="logo">
          <img src="/asana.png" alt="Asana" />
        </div>
        <div className="logo">
          <img src="/gumroad.png" alt="Gumroad" />
        </div>
        <div className="logo">
          <img src="/hubspot.png" alt="HubSpot" />
        </div>
        <div className="logo">
          <img src="/stripe.png" alt="Stripe" />
        </div>
        <div className="logo">
          <img src="/webflow.png" alt="Webflow" />
        </div>
        <div className="logo">
          <img src="/mailchimp.png" alt="Mailchimp" />
        </div>
      </section> */}
    </section>
  );
}
