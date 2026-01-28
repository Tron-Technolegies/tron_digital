import React from "react";
import {
  FaDigitalOcean,
  FaPaintBrush,
  FaLaptopCode,
  FaMobileAlt,
  FaShieldAlt,
  FaBitcoin,
  FaRobot,
} from "react-icons/fa";
import "./OurServices.css";

export default function OurServices() {
  const services = [
    {
      icon: <FaDigitalOcean />,
      title: "Digital Marketing",
      desc: "We offer expert digital marketing service to improve your business.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Branding & Design",
      desc: "To ‘stand out’, have the greatest branding and design work done.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Design",
      desc: "Attract and convert customers with a stunning website.",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      desc: "To help you grow your company, we provide skilled app development.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "Advanced Cybersecurity services for business protection.",
    },
    {
      icon: <FaBitcoin />,
      title: "Blockchain",
      desc: "Blockchain services for business innovation and growth.",
    },
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
      desc: "AI solutions to automate, improve service, and gain insights.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <p className="services-label">✦ Our Services</p>
        <h2>What we do</h2>
        <p className="services-intro">
          We specialize in creative digital solutions that elevate your brand
          and engage your audience.
        </p>
      </div>

      <div className="digital-services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
            <div className="card-underline"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
