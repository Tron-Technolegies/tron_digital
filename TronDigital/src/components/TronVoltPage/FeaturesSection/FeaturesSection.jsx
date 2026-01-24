import React from "react";
import { FaUsers, FaBookOpen, FaRobot } from "react-icons/fa";
import "./FeaturesSection.css";

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        {/* Heading */}
        <h2 className="features-heading">Powerful Features for Digital Excellence</h2>
        <p className="features-subtext">
          Everything you need to collaborate, learn, and succeed in the digital landscape. Built for
          modern teams and forward-thinking individuals.
        </p>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaUsers />
            </div>
            <h3>Collaborative Workspaces</h3>
            <p>
              Create dedicated spaces for teams, projects, and learning groups with real-time
              collaboration tools.
            </p>
            <ul>
              <li>Real-time document editing</li>
              <li>Video conferencing integration</li>
              <li>Project management tools</li>
              <li>Team chat and messaging</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaBookOpen />
            </div>
            <h3>Learning Management</h3>
            <p>
              Comprehensive learning platform with courses, assessments, and skill tracking for
              continuous growth.
            </p>
            <ul>
              <li>Interactive course builder</li>
              <li>Progress tracking</li>
              <li>Certification programs</li>
              <li>Peer-to-peer learning</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaRobot />
            </div>
            <h3>AI-Powered Insights</h3>
            <p>
              Leverage artificial intelligence to optimize workflows, suggest improvements, and
              automate routine tasks.
            </p>
            <ul>
              <li>Smart task automation</li>
              <li>Performance analytics</li>
              <li>Personalized recommendations</li>
              <li>Predictive insights</li>
            </ul>
          </div>
        </div>

        {/* Integrations */}
        <div className="integrations">
          <h2 className="features-heading">Seamless Integrations</h2>
          <p className="features-subtext">
            Connect with your favorite tools and platforms for a unified workflow experience.
          </p>
          <div className="integration-buttons">
            <button>Slack</button>
            <button>Zoom</button>
            <button>Google Workspace</button>
            <button>Microsoft 365</button>
            <button>Figma</button>
            <button>GitHub</button>
          </div>
        </div>
      </div>
    </section>
  );
}
