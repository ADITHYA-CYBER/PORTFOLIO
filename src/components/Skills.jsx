import React from "react";
import {
  FaShieldAlt,
  FaDesktop,
  FaSearch,
  FaCode,
  FaFileAlt,
} from "react-icons/fa";

import "../styles/skills.css";

const skillIcons = {
  "Security Tools": <FaShieldAlt />,
  "Operating Systems": <FaDesktop />,
  "Security Assessment": <FaSearch />,
  "Web Technologies": <FaCode />,
  "Reporting": <FaFileAlt />,
};

export default function Skills({ data }) {
  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        {/* Section Heading */}
        <div className="section-heading">

          <h2>SKILLS &amp; EXPERTISE</h2>

          <div className="heading-line"></div>
        </div>


        {/* Skills Grid */}
        <div className="skills-grid">

          {data.skills.map((skill) => (
            <div
              className="skill-card"
              key={skill.title}
            >

              {/* Icon */}
              <div className="skill-icon">
                {skillIcons[skill.title]}
              </div>


              {/* Title */}
              <h3>{skill.title}</h3>


              {/* Skill Items */}
              <div className="skill-list">

                {skill.items.map((item) => (
                  <span
                    className="skill-item"
                    key={item}
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}