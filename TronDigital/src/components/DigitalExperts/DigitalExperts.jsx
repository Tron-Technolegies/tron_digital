import React, { useState, useRef } from "react";
import TooltipCard from "./ToolTipCard";
import RadarChart from "./RadarChart";
import { experts } from "./expertsData";

export default function DigitalExperts() {
  const [activeExpert, setActiveExpert] = useState(null);
  return (
    <section
      id="experts"
      className="relative bg-black py-24 flex flex-col gap-10 items-center"
    >
      <p className="text-2xl text-white font-semibold mb-12">Digital Experts</p>

      <div className="relative flex items-center gap-16 overflow-visible scale-75 sm:scale-90 lg:scale-100 origin-center">
        <RadarChart data={experts} onHover={setActiveExpert} size={420} />
        <TooltipCard expert={activeExpert} />
      </div>
    </section>
  );
}
