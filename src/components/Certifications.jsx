import React from "react";
import {
  FaCertificate,
  FaShieldAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "../styles/certifications.css";

export default function Certifications({ data }) {
  return (
    <section className="certifications" id="certifications">

      <div className="certifications-container">

        {/* Section Heading */}
        <div className="section-heading">

          <h2>CERTIFICATIONS</h2>

          <div className="heading-line"></div>
        </div>


        {/* Certification Grid */}
        <div className="certifications-grid">

          {data.certifications.map((certification, index) => (

            <article
              className="certification-card"
              key={certification.name}
            >

              {/* Top */}
              <div className="certification-top">

                <div className="certification-icon">
                  <FaCertificate />
                </div>


              </div>


              {/* Content */}
              <div className="certification-content">

                <h3>
                  {certification.name}
                </h3>

                <div className="certification-meta">
                  <FaCalendarAlt />
                  <span>{certification.meta}</span>
                </div>

              </div>


              {/* Bottom Accent */}
              <a href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-button">
                View certificate
                <FaExternalLinkAlt/>
              </a>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}