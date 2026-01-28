import React from "react";
import "./VoltHero.css";
import sphereimg from "../../../assets/sphere.png";

const VoltHero = () => {
  return (
    <section className="volt-hero">
      <div className="volt-hero-img">
        <img src={sphereimg} alt="Sphere" />
      </div>
      <div className="be-future">Be the Future</div>
      <div className="volt-hero-title">
        <h1>
          Tron <span className="volt">VOLT</span>
        </h1>
      </div>
      <div className="volt-hero-desc">
        <p>
          A hub for digital creators, learners, and innovators to connect, grow,
          and thrive.
        </p>
      </div>
      <div className="stats-container">
        <div className="stat-card">
          <div className="graph-icon">
            <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet">
              <path
                d="M0 45 Q25 50 30 30 Q45 10 60 25 Q75 40 100 5"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <h3>Fuel Your Growth</h3>
          <p>Empower your business with our tailored web design solutions.</p>
        </div>
        <div className="stat-card">
          <div className="gauge-icon">
            <div className="success-rate">98%</div>
            <div className="people-icons">👥👥👥</div>
            <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet">
              <path
                d="M10 50 A40 40 0 0 1 90 50"
                stroke="#1e3a8a"
                strokeWidth="8"
                fill="none"
              />
              <path
                d="M10 50 A40 40 0 0 1 85 50"
                stroke="#3b82f6"
                strokeWidth="8"
                fill="none"
              />
              <line
                x1="50"
                y1="50"
                x2="85"
                y2="50"
                stroke="#3b82f6"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h3>98% Client Success Rate</h3>
          <p>
            Join our community of satisfied clients benefiting from our proven
            expertise.
          </p>
        </div>
        <div className="stat-card">
          <div className="bar-icon">
            <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet">
              <rect x="20" y="30" width="10" height="20" fill="#3b82f6" />
              <rect x="45" y="20" width="10" height="30" fill="#3b82f6" />
              <rect x="70" y="10" width="10" height="40" fill="#3b82f6" />
            </svg>
          </div>
          <h3>Lead the Way</h3>
          <p>Stay ahead with innovative web designs crafted by Tron.</p>
        </div>
      </div>
    </section>
  );
};

export default VoltHero;
