import React from "react";
import "./VoltReadySection.css";
import { handleChatClickCustom } from "../../../utils/whatsapp";
import { useNavigate } from "react-router";

export default function VoltReadySection() {
  const navigate = useNavigate();
  return (
    <section className="volt-section">
      <div className="volt-container">
        {/* Gradient Heading */}
        <h3 className="volt-heading">
          Ready to Amplify Your Digital Presence?
        </h3>

        {/* Description */}
        <p className="volt-description">
          Join the ranks of successful brands that have transformed their
          digital marketing with Tron Volt. <br />
          Our expert team is ready to craft a strategy tailored to your unique
          goals.
        </p>

        {/* Buttons */}
        <div className="volt-buttons">
          <button
            onClick={() =>
              handleChatClickCustom(
                "Hi, I would like to build a strategy for my buisness",
              )
            }
            className="btn btn-primary"
          >
            Get free strategy session
          </button>
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                document
                  .getElementById("insights")
                  .scrollIntoView({ behavior: "smooth" });
              }, 200);
            }}
            className="btn btn-secondary"
          >
            View Case studies
          </button>
        </div>
      </div>
    </section>
  );
}
