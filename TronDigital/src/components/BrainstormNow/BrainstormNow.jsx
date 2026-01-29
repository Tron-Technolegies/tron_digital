import React from "react";
import "./BrainstormNow.css"; // import CSS file
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function BrainstormNow() {
  return (
    <div className="brainstorm-section" id="contact">
      {/* Main half circle with concentric rings */}
      <div className="circle-main">
        <div className="circle-ring outer"></div>
        <div className="circle-ring inner"></div>
      </div>

      {/* Small quarter circle */}
      <div className="circle-small">
        <div className="circle-ring inner"></div>
      </div>

      {/* Content */}
      <div className="brainstorm-content">
        <span className="label">Start Building Ideas</span>

        <h2 className="heading">Brainstorm now!</h2>

        <p className="description">
          Turn ideas into action with the right strategy, tools, and support.
          Whether you’re planning a campaign, building a product, or scaling
          your brand, TRON Digital helps you move from thinking to doing —
          faster and smarter.
        </p>

        <button
          onClick={() =>
            handleChatClickCustom(
              "I would like to build some ideas with tron digital",
            )
          }
          className="cta-btn"
        >
          Start For Free
        </button>
      </div>
    </div>
  );
}
