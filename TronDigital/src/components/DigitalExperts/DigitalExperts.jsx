import React, { useState, useRef } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Text,
} from "recharts";

export default function DigitalExperts() {
  const [hovered, setHovered] = useState(null);
  const [cardPos, setCardPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const data = [
    { subject: "Platform engineers", value: 90 },
    { subject: "Tech strategists", value: 80 },
    { subject: "Software engineers", value: 70 },
    { subject: "Designers", value: 60 },
    { subject: "DevOps experts", value: 75 },
    { subject: "Data scientists", value: 65 },
    { subject: "Application architects", value: 85 },
    { subject: "Innovation experts", value: 72 },
  ];

  const contents = {
    "Platform engineers": {
      name: "Joseph Edwin",
      title: "Expert Partner, Enterprise Technology",
      location: "London",
      desc: "Effective tech modernization requires deep alignment with business needs. Over two decades of experience advising executive teams.",
    },
    "Tech strategists": {
      name: "Bob Johnson",
      title: "Expert Partner, Tech Strategy",
      location: "San Francisco",
      desc: "Aligning technology vision with long-term business outcomes.",
    },
    "Software engineers": {
      name: "Carol Davis",
      title: "Expert Partner, Software Engineering",
      location: "Seattle",
      desc: "Building scalable, resilient software systems.",
    },
    Designers: {
      name: "David Wilson",
      title: "Expert Partner, Design",
      location: "London",
      desc: "Design-led thinking that drives user adoption.",
    },
    "DevOps experts": {
      name: "Eve Martinez",
      title: "Expert Partner, DevOps",
      location: "Berlin",
      desc: "Accelerating delivery through automation and reliability.",
    },
    "Data scientists": {
      name: "Frank Garcia",
      title: "Expert Partner, Data Science",
      location: "Tokyo",
      desc: "Turning data into intelligent business decisions.",
    },
    "Application architects": {
      name: "Grace Lee",
      title: "Expert Partner, Application Architecture",
      location: "Sydney",
      desc: "Designing future-proof enterprise architectures.",
    },
    "Innovation experts": {
      name: "Henry Thompson",
      title: "Expert Partner, Innovation",
      location: "Paris",
      desc: "Driving innovation at scale across organizations.",
    },
  };

  const handleHover = (payload, e) => {
    if (!payload || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const CARD_WIDTH = 300;
    const CARD_HEIGHT = 180;

    const clampedX = Math.min(Math.max(20, x), rect.width - CARD_WIDTH - 20);

    const clampedY = Math.min(Math.max(20, y), rect.height - CARD_HEIGHT - 20);

    setHovered(payload);
    setCardPos({ x: clampedX, y: clampedY });
  };

  return (
    <section className="digital-experts">
      <div className="digital-experts-container">
        <h2 className="section-title">Digital Experts</h2>
        <p className="section-subtitle">Hover over the roles below to hear more from our experts</p>

        <div className="experts-visualization" ref={containerRef}>
          {/* Hover Card */}
          {hovered && contents[hovered.subject] && (
            <div
              className="expert-card"
              style={{
                left: cardPos.x,
                top: cardPos.y,
              }}
            >
              <div className="card-avatar">
                <img
                  src={`https://via.placeholder.com/60?text=${hovered.subject[0]}`}
                  alt={contents[hovered.subject].name}
                />
              </div>

              <div className="card-content">
                <div className="card-name">{contents[hovered.subject].name}</div>
                <div className="card-title">{contents[hovered.subject].title}</div>
                <div className="card-location">{contents[hovered.subject].location}</div>
                <p className="card-description">{contents[hovered.subject].desc}</p>
              </div>
            </div>
          )}

          {/* Radar Chart */}
          <ResponsiveContainer width="100%" height={600}>
            <RadarChart outerRadius="80%" data={data}>
              <defs>
                <radialGradient id="radarFill">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.05} />
                </radialGradient>
              </defs>

              <PolarGrid gridType="circle" stroke="rgba(139,92,246,0.3)" radialLines={false} />
              <PolarRadiusAxis tick={false} axisLine={false} />
              <PolarAngleAxis dataKey="subject" stroke="#8b5cf6" />

              <Radar
                dataKey="value"
                stroke="#8b5cf6"
                strokeWidth={2}
                fill="url(#radarFill)"
                dot={({ cx, cy, payload }) => (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={6}
                    fill="#8b5cf6"
                    onMouseEnter={(e) => handleHover(payload, e.nativeEvent)}
                    onClick={(e) => handleHover(payload, e.nativeEvent)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              />

              <Text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#8b5cf6"
                fontSize={16}
              >
                Digital product managers
              </Text>
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
