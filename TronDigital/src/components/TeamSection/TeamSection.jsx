import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "Lindsey Dokidis",
    role: "Partner",
    desc: "There are many variations of passages of Lorem Ipsum available",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bg: "#8375C2",
  },
  {
    name: "Martin Donin",
    role: "Software Engineer",
    desc: "There are many variations of passages of Lorem Ipsum available",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bg: "#D1B6BE",
  },
  {
    name: "Hanna Dias",
    role: "Software Engineer",
    desc: "There are many variations of passages of Lorem Ipsum available",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    bg: "#7DD8A5",
  },
  {
    name: "Leo Arcand",
    role: "Software Engineer",
    desc: "There are many variations of passages of Lorem Ipsum available",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
    bg: "#D6A7E0",
  },
];

export default function TeamSection() {
  return (
    <section className="team-container" id="team">
      <p className="team-badge">✦ Our Team</p>
      <h2 className="team-title">Our Digital Consultants</h2>
      <p className="team-subtitle">
        Felis, semper ullamcorper sed pretium tristique vulputate semper massa
        ultrices. Integer orci gravida blandit amet.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div
              className="team-card-top"
              style={{ backgroundColor: member.bg }}
            >
              <img src={member.img} alt={member.name} />
            </div>
            <div className="team-card-bottom">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="desc">{member.desc}</p>
              <div className="team-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
