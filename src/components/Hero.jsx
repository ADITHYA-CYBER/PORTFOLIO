import React from "react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { SiGmail,SiTryhackme } from "react-icons/si";
import '../styles/hero.css'
export default function Hero({ data }) {
  return (
    <section className="hero" id="home">

      {/* Background  */}
      <div className="hero-background">
        <img src="images/background1.jpeg" alt="" aria-hidden="true"></img>
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <p className="hero-intro">
            HELLO, I'M
          </p>

          <h1 className="hero-name">
            {data.name}
          </h1>

          <h2 className="hero-role">
            {data.role}
          </h2>

          <p className="hero-stack">
            •WEB •API •Infra •Mobile Application 
          </p>

          <p className="hero-description">
            {data.heading}
          </p>

          <div className="hero-actions">

          <a href="/resume.pdf" className="hero-primary-btn ">Download CV
          </a>

          </div>

          {/* Social links */}
          <div className="hero-socials">

             <a
              href={data.contact.tryhackme}
              target="_blank"
              rel="noreferrer"
              aria-label="TryHackMe"
            >
              <SiTryhackme />
            </a>

            <a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${data.contact.email}`}
              aria-label="Email"
            >
              <SiGmail />
            </a>

          </div>

        </div>


        {/* RIGHT PROFILE */}
        <div className="hero-image-wrapper">

          <div className="hero-image-frame">

            <img
              src="/images/image2.png"
              alt={data.name}
              className="hero-image"
            />

          </div>

        </div>

      </div>

      {/* Right side vertical text */}
  
    </section>
  );
}