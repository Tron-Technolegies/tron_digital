import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./TeamSection.css";
import { handleChatClickCustom } from "../../utils/whatsapp";

const teamMembers = [
  {
    name: "Parvathy",
    role: "Python Developer",
    desc: "Builds scalable web and mobile apps with clean frontends and powerful backends.",
    img: "/paaru.jpg",
    bg: "#8375C2",
  },
  {
    name: "Shahma",
    role: "Graphic Designer",
    desc: "Creates visually striking designs that communicate brand identity clearly.",
    img: "/shahma.jpg",
    bg: "#D1B6BE",
  },
  {
    name: "Shiju Kg",
    role: "UI / UX Designer",
    desc: "Designs intuitive, user-focused interfaces for smooth digital experiences.",
    img: "/shiju.jpg",
    bg: "#7DD8A5",
  },
  {
    name: "Fayis",
    role: "Digital Marketing Expert",
    desc: "Drives growth through data-driven campaigns, content, and performance marketing.",
    img: "/fayis.jpg",
    bg: "#D6A7E0",
  },
];

export default function TeamSection() {
  return (
    <section className="team-container" id="team">
      <p className="team-badge">✦ Our Team</p>
      <h2 className="team-title">Our Digital Consultants</h2>
      <p className="team-subtitle">
        Behind every strategy and solution is a team of experienced digital
        professionals. Our consultants combine technical expertise, creative
        thinking, and real-world execution to help businesses grow with
        confidence.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div
              className="team-card-top"
              style={{ backgroundColor: member.bg }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="object-cover object-top"
              />
            </div>
            <div className="team-card-bottom">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="desc">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="my-5 p-2 bg-[#8846cb] text-white rounded-lg"
        onClick={() =>
          handleChatClickCustom(
            "Hi iwould like to know more about the team of Tron Digital",
          )
        }
      >
        Know More
      </button>
    </section>
  );
}
