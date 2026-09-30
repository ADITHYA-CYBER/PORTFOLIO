import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiTryhackme
} from "react-icons/si";

import "../styles/contact.css";

export default function Contact({ data }) {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <div className="section-heading">

          <h2>LET'S CONNECT</h2>

          <div className="heading-line"></div>
        </div>


        <div className="contact-content">

          <div className="contact-text">

            <h3>
              Interested in Working Together?
            </h3>

            <p>
              I'm Open to Opportunities in VAPT, Penetration
              Testing & Offensive Security.
            </p>

          </div>


          <div className="contact-links">

            <a
              href={`mailto:${data.contact.email}`}
              className="contact-card"
            >
              <span className="contact-icon">
                <FaEnvelope />
              </span>

              <span className="contact-info">
                <small>EMAIL</small>
                <strong>{data.contact.email}</strong>
              </span>

              <FaExternalLinkAlt className="contact-arrow" />
            </a>


            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">
                <FaLinkedinIn />
              </span>

              <span className="contact-info">
                <small>LINKEDIN</small>
                <strong>Connect With Me</strong>
              </span>

              <FaExternalLinkAlt className="contact-arrow" />
            </a>


            <a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">
                <FaGithub />
              </span>

              <span className="contact-info">
                <small>GITHUB</small>
                <strong>View My Repos</strong>
              </span>

              <FaExternalLinkAlt className="contact-arrow" />
            </a>
             <a
              href={data.contact.tryhackme}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">
                <SiTryhackme />
              </span>

              <span className="contact-info">
                <small>TryHackMe</small>
                <strong>View Profile</strong>
              </span>

              <FaExternalLinkAlt className="contact-arrow" />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}