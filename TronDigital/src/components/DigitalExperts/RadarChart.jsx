import React from "react";
import { getPoint } from "./radarMath";

export default function RadarChart({ data, onHover, size = 300 }) {
  const center = size / 2;
  const radius = size / 2 - 60;
  const angleStep = (Math.PI * 2) / data.length;

  const points = data.map((item, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const valueRadius = (item.value / 100) * radius;
    return getPoint(angle, valueRadius, center);
  });

  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg width={size} height={size} className="overflow-visible">
      {/* grid */}
      {[20, 40, 60, 80, 100].map((level) => (
        <circle
          key={level}
          cx={center}
          cy={center}
          r={(level / 100) * radius}
          fill="none"
          stroke="rgba(168,85,247,0.25)"
        />
      ))}

      {/* area */}
      <polygon
        points={polygon}
        fill="rgba(168,85,247,0.35)"
        stroke="#a855f7"
        strokeWidth="2"
      />

      {/* points */}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="8"
          fill="#a855f7"
          onMouseEnter={() => onHover(data[i])}
          onMouseLeave={() => onHover(null)}
          className="cursor-pointer"
        />
      ))}

      {/* labels */}
      {data.map((item, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const labelPoint = getPoint(angle, radius + 24, center);

        return (
          <text
            key={item.id}
            x={labelPoint.x}
            y={labelPoint.y}
            fill="#c084fc"
            fontSize="14"
            textAnchor="middle"
          >
            {item.label}
          </text>
        );
      })}
    </svg>
  );
}
