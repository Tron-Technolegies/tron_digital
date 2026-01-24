import React from "react";
import { ArrowRight } from "lucide-react";
import sphereImg from "../../assets/sphere.png";
import tronAcademy from "../../assets/tron-academy.png";
import tronTech from "../../assets/tron-tech.png";
import tronMarketing from "../../assets/tron-marketing.png";
import tronStudio from "../../assets/tron-studio.png";
import tronicon from "../../assets/tron-icon.png";
import "./TronVoltSection.css";

export default function TronVoltSection() {
  return (
    <section className="tron-section">
      <div className="hero">
        <img src={sphereImg} alt="Sphere" className="sphere" />

        <h1 className="title">
          Tron <span className="volt">VOLT</span>
        </h1>

        <p className="subtitle">
          A hub for digital creators, learners, and innovators to{" "}
          <span className="highlight">connect</span>, <span className="highlight">grow</span>, and{" "}
          <span className="highlight">thrive</span>.
        </p>

        <div className="info-box">
          <ul>
            <li>
              <h3>1. Empowering the Next Generation of Digital Talent</h3>
              <p>
                Tron Volt bridges the gap between learning and real-world application. From
                mastering SEO strategies to launching full-scale campaigns, our ecosystem supports
                every step of the way. It's not just a platform—it's your launchpad into the digital
                future.
              </p>
            </li>
            <li>
              <h3>2. A Community That Grows Together</h3>
              <p>
                At Tron Volt, collaboration isn't a feature — it's the foundation. Engage in live
                sessions, community challenges, and team projects that sharpen your skills while
                building lasting connections.
              </p>
            </li>
            <li>
              <h3>3. Your Digital Playground</h3>
              <p>
                Experiment, learn, fail, succeed — repeat. Tron Volt is a space where digital minds
                can explore their creativity, test ideas in safe environments, and receive feedback
                from industry mentors and peers.
              </p>
            </li>
            <li>
              <h3>4. Built for All Stages of Your Journey</h3>
              <p>
                Whether you're just starting out or looking to scale your digital agency, Tron Volt
                offers resources tailored to your level. Access toolkits, templates, and expert
                advice—all in one place.
              </p>
            </li>
          </ul>
        </div>

        <button className="connect-btn">
          Connect <ArrowRight size={18} />
        </button>
      </div>

      {/* Digital Crew */}
      <div className="digital-crew">
        <h2>
          Our <span className="highlight">Digital</span> Crew
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Diagram with connectors */}
        <div className="diagram">
          <svg className="diagram-svg" viewBox="0 0 800 280" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="1" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* More curved line to Tron Academy (leftmost) */}
            <path
              d="M400 50 Q250 150 100 240"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="2"
              opacity="0.9"
            />

            {/* More curved line to Tron Tech (left-center) */}
            <path
              d="M400 50 Q350 150 260 240"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="2"
              opacity="0.9"
            />

            {/* More curved line to Tron Marketing (right-center) */}
            <path
              d="M400 50 Q450 150 540 240"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="2"
              opacity="0.9"
            />

            {/* More curved line to Tron Studio (rightmost) */}
            <path
              d="M400 50 Q550 150 700 240"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="2"
              opacity="0.9"
            />
          </svg>

          <div className="tron-icon">
            <img src={tronicon} alt="Tron icon" />
          </div>

          <div className="logos">
            <img src={tronAcademy} alt="Tron Academy" />
            <img src={tronTech} alt="Tron Technology" />
            <img src={tronMarketing} alt="Tron Marketing" />
            <img src={tronStudio} alt="Tron Studio" />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* SECTION BASE */
        .tron-section {
          background: #000;
          color: #fff;
          padding: 60px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* HERO SPHERE */
        .sphere {
          width: 120px;
          margin: 0 auto 20px;
          filter: drop-shadow(0 0 40px #c084fc);
        }

        /* TITLE */
        .title {
          font-size: 48px;
          font-weight: 700;
          margin: 10px 0;
        }

        .volt {
          background: linear-gradient(90deg, #8375c2, #d1b6be);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        /* SUBTITLE */
        .subtitle {
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto 30px;
          color: #ddd;
          line-height: 1.6;
        }

        .highlight {
          color: #c084fc;
          font-weight: 600;
        }

        /* INFO BOX */
        .info-box {
          max-width: 850px;
          margin: 0 auto 40px;
          padding: 25px 30px;
          border-radius: 12px;
          border: 1px solid transparent;
          background: #111;
          background-clip: padding-box;
          position: relative;
        }

        .info-box::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 1px;
          background: linear-gradient(90deg, #8375c2, #d1b6be);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .info-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: left;
        }

        .info-box li {
          margin-bottom: 25px;
        }

        .info-box h3 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #fff;
        }

        .info-box p {
          font-size: 15px;
          line-height: 1.6;
          color: #aaa;
        }

        /* CONNECT BUTTON */
        .connect-btn {
          background: #c084fc;
          border: none;
          padding: 12px 24px;
          border-radius: 30px;
          color: #fff;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .connect-btn:hover {
          background: #a56be3;
        }

        /* DIGITAL CREW */
        .digital-crew {
          margin-top: 80px;
        }

        .digital-crew h2 {
          font-size: 32px;
          margin-bottom: 20px;
        }

        .digital-crew p {
          max-width: 700px;
          margin: 0 auto 40px;
          color: #bbb;
          line-height: 1.6;
        }

        /* DIAGRAM */
        .diagram {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .diagram-svg {
          width: 100%;
          height: 280px;
        }

        .tron-icon {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: #111;
          border-radius: 50%;
          padding: 15px;
          box-shadow: 0 0 25px #c084fc;
        }

        .tron-icon img {
          width: 60px;
        }

        /* LOGOS BELOW DIAGRAM */
        .logos {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }

        .logos img {
          width: 120px;
          height: 120px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .logos img:hover {
          transform: scale(1.1);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .title {
            font-size: 36px;
          }

          .sphere {
            width: 90px;
            height: 90px;
          }

          .info-box {
            padding: 20px;
          }

          .logos {
            flex-wrap: wrap;
            gap: 20px;
          }

          .logos img {
            width: 100px;
            height: 100px;
          }

          .diagram-svg {
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
}
