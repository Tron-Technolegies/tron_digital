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
      desc: "We drive growth through data-driven SEO, performance marketing, social media, and conversion-focused campaigns. Every strategy is built to increase visibility, generate leads, and deliver ROI — not just impressions.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Branding & Design",
      desc: "Your brand is more than a logo. We create strong brand identities, visual systems, and creative assets that communicate clearly, build trust, and stand out in competitive markets.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Design",
      desc: "We design and build high-performing websites that are fast, intuitive, and conversion-ready. Every page is crafted to deliver a seamless user experience while supporting business goals.",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      desc: "From concept to launch, we build scalable mobile and web applications tailored to your business needs. Our focus is on performance, usability, and long-term reliability.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "We help protect your digital assets with advanced cybersecurity solutions. From risk assessments to system protection, we ensure your data, platforms, and operations remain secure.",
    },
    {
      icon: <FaBitcoin />,
      title: "Blockchain",
      desc: "We deliver blockchain solutions that support transparency, security, and innovation. From consulting to implementation, we help businesses explore and adopt blockchain with confidence.",
    },
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
      desc: "We implement practical AI solutions that automate processes, improve customer experience, and unlock data-driven insights. Our AI services are designed to enhance efficiency and support smarter decision-making.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <p className="services-label">✦ Our Services</p>
        <h2>What we do</h2>
        <p className="services-intro">
          We specialize in building digital solutions that help brands grow,
          scale, and stay ahead. From strategy and creativity to technology and
          performance, our services are designed to deliver real, measurable
          impact.
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
