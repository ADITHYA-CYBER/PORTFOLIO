import React from "react";
import {
  FaBriefcase,
  FaShieldAlt,
} from "react-icons/fa";

import "../styles/experience.css";

export default function Experience({ data }) {
  return (
    <section className="experience" id="experience">

      <div className="experience-container">

        {/* Section Heading */}
        <div className="section-heading">

          <h2>EXPERIENCE</h2>

          <div className="heading-line"></div>
        </div>


        {/* Experience Timeline */}
        <div className="experience-timeline">

          {data.experience.map((item, index) => (

            <div
              className="experience-item"
              key={`${item.org}-${item.role}`}
            >

              {/* Timeline */}
              <div className="experience-timeline-side">

                <div className="experience-icon">
                  {index === 0 ? (
                    <FaShieldAlt />
                  ) : (
                    <FaBriefcase />
                  )}
                </div>

                {index !== data.experience.length - 1 && (
                  <div className="experience-line"></div>
                )}

              </div>


              {/* Content */}
              <div className="experience-card">

                  <div>
                    <p className="experience-date">
                      {item.date}
                    </p>

                    <h3 className="experience-role">
                      {item.role}
                    </h3>

                    <p className="experience-org">
                      {item.org}
                    </p>
                  </div>



                {/* Responsibilities */}
                <ul className="experience-bullets">

                  {item.bullets.map((bullet) => (
                    <li key={bullet}>
                      {bullet}
                    </li>
                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}