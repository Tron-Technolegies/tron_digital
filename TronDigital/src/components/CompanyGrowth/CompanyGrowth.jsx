import React from "react";
import "./CompanyGrowth.css";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function CompanyGrowth() {
  return (
    <section className="company-growth-section" id="growth">
      <div className="company-growth-container">
        <div className="company-growth-heading flex flex-col gap-4">
          <h3>
            Control the flow. <br />{" "}
            <span className="work-faster">Work Faster.</span>
          </h3>
          <p>
            Move from scattered efforts to streamlined execution. We help you
            simplify workflows, automate smarter, and turn data into clear
            actions — so your team can focus on what actually drives growth.
            <br />
            Whether it’s marketing, technology, or performance optimization, we
            build systems that keep your business moving forward.
          </p>
          <button
            className="p-2 text-white bg-[#8846cb] rounded-md w-fit cursor-pointer"
            onClick={() =>
              handleChatClickCustom("I like to start working with Tron Digital")
            }
          >
            Start for free
          </button>
        </div>
        <div className="company-growth-graph">
          <img src="/graph.png" alt="" />
        </div>
      </div>
    </section>
  );
}
