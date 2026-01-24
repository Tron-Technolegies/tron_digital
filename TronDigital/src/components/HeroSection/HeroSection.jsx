import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";

import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <p className="hero-text">
        <img src="/poly-icon.svg" alt="" /> Welcome to TRON Digital
      </p>
      <h1 className="hero-heading">
        Empower Your Brand with Data Driven
        <br />
        <span className="hero-span">Digital Marketing</span>
      </h1>
      <p className="hero-desc">
        At Tron Digital, we craft performance focused marketing strategies that drive visibility,
        engagement, and revenue growth helping your business stand out in today’s competitive
        market.
      </p>
      <div className="button-container">
        <a href="/contact" className="hero-btn">
          Get Your Free Consultation
          <SlArrowRightCircle className="arrow-icon" />
        </a>

        <img src="/heroicons-solid_play.svg" alt="" className="play-icon" />
      </div>

      <div className="hero-card-container">
        <div className="hero-card experience">
          <div className="experience-number">3+</div>
          <div className="experience-title">Years of Experience</div>
          <div className="experience-desc">Lorem ipsum Lorem ipsum Lorem ipsum...</div>
        </div>
        <div className="hero-card achievement">
          <div className="achievement-title">Achievement</div>
          <div className="achievement-items">
            <div className="achievement-item">
              <p className="achievement-label">Project</p>
              <span>253K</span>
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
          <div className="reviews-row">
            <div className="reviews-avatars">
              <img src="/avatar1.png" alt="avatar" className="avatar" />
              <img src="/avatar2.png" alt="avatar" className="avatar overlap" />
              <img src="/avatar3.png" alt="avatar" className="avatar overlap" />
              <span className="more-avatars">+</span>
            </div>
            <div className="positive-reviews">
              <span className="stars">★★★★★</span> Positive Reviews
            </div>
          </div>
        </div>
        <div className="hero-card team">
          <div className="team-overlay">
            <div className="team-title">Business Team Works</div>
            <p className="team-desc">Strategic collaboration driving measurable growth</p>
          </div>
        </div>
      </div>

      <nav className="hero-menu">
        <a href="#services">What we do</a>
        <a href="#ambition">What's your digital ambition?</a>
        <a href="#how-we-help">How we can help</a>
        <a href="#impact">Experience & Impact</a>
        <a href="#experts">Our Digital Experts</a>
        <a href="#insights">Insights</a>
      </nav>

      <section className="brand-logo-section">
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
      </section>
    </section>
  );
}
