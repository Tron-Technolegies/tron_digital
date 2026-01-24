import React from "react";
import "./CompanyGrowth.css";

export default function CompanyGrowth() {
  return (
    <section className="company-growth-section">
      <div className="company-growth-container">
        <div className="company-growth-heading">
          <h3>
            Control the flow. <br /> <span className="work-faster">Work Faster.</span>
          </h3>
          <p>
            Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant elementum
            dignissim arcu mauris. Ullamcorper euismod id commodo mi nec. Sit egestas mauris
            imperdiet feugiat eros, sapien at pellentesque.
          </p>
          <button>Start for free</button>
        </div>
        <div className="company-growth-graph">
          <img src="/graph.png" alt="" />
        </div>
      </div>
    </section>
  );
}
