import React from "react";

export default function TooltipCard({ expert }) {
  if (!expert) return null;

  return (
    <div
      className="absolute md:-left-3/5 md:top-1/2 -bottom-1/2 h-fit -translate-y-1/2 bg-[#140021] text-white p-5 rounded-2xl w-72 shadow-lg border border-purple-500/20"
      style={{ padding: 28 }}
    >
      <p className="text-sm opacity-60">Digital product managers</p>
      <h3 className="text-lg font-semibold mt-1">{expert.label}</h3>
      <p className="text-sm mt-2 opacity-80">{expert.description}</p>
    </div>
  );
}
