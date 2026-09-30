import React from "react";
import { useState } from "react";
import {
  FaShieldAlt,
  FaNetworkWired,
  FaGlobe,
  FaCode,
  FaMobileAlt,
  FaArrowRight,
  FaTimes
} from "react-icons/fa";

import "../styles/Methodology.css";

const icons = {
  shield: <FaShieldAlt />,
  network: <FaNetworkWired />,
  web: <FaGlobe />,
  api: <FaCode />,
  mobile: <FaMobileAlt />
};

export default function Methodology({ data }) {
  const [selected, setSelected] = useState(null);

  return (
    <section className="methodology" id="methodology">

      <div className="methodology-container">

        {/* Heading */}
        <div className="section-heading">
          <h2>METHODOLOGY</h2>
          <div className="heading-line"></div>
        </div>

        <p className="methodology-subtitle">
          Security Assessment Areas & Testing Approach
        </p>

        {/* Cards */}
        <div className="methodology-grid">

          {data.methodology.map((item) => (

            <div
              className="methodology-card"
              key={item.title}
            >

           

              <div className="methodology-icon">
                {icons[item.icon]}
              </div>

              <h3>{item.title}</h3>

         

              <button
                className="methodology-button"
                onClick={() => setSelected(item)}
              >
                CLICK HERE
                <FaArrowRight />
              </button>

            </div>

          ))}

        </div>

      </div>


      {/* =====================================================
          MODAL
      ===================================================== */}
{selected && (

  <div
    className="methodology-overlay"
    onClick={() => setSelected(null)}
  >

    <div
      className="methodology-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="methodology-close"
        onClick={() => setSelected(null)}
        aria-label="Close"
      >
        <FaTimes />
      </button>


      <div className="modal-icon">
        {icons[selected.icon]}
      </div>


      <span className="modal-label">
        SECURITY ASSESSMENT
      </span>


      <h2>
        {selected.title}
      </h2>

      <div className="modal-divider"></div>

      <div className="modal-steps">

        {selected.sections.map((section) => (

          <div
            className="modal-section"
            key={section.number}
          >

            <div className="modal-section-header">
              <h3>
              <span className="modal-section-number">
                {section.number}
              </span> {" "}

            
                {section.title}
              </h3>

            </div>


            <ul className="modal-section-points">

              {section.points.map((point) => (

                <li key={point}>
                  {point}
                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </div>

  </div>

)}

    </section>
  );
}