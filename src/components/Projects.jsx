import React from "react";
import {
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "../styles/projects.css";

export default function Projects({ data }) {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        {/* Section Heading */}
        <div className="section-heading">

          <h2>PROJECTS</h2>

          <div className="heading-line"></div>
        </div>


        {/* Projects Grid */}
        <div className="projects-grid">

          {data.projects.map((project) => (

            <article
              className="project-card"
              key={project.title}
            >

              {/* Project Header */}
              <div className="project-header">

                <div className="project-icon">
                  <FaCode />
                </div>

                <span className="project-date">
                  {project.date}
                </span>

              </div>


              {/* Project Title */}
              <h3 className="project-title">
                {project.title}
              </h3>


              {/* Description */}
              <p className="project-description">
                {project.description}
              </p>


              {/* Tools */}
              <div className="project-tools">

                {project.tools.map((tool) => (
                  <span
                    className="project-tool"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}

              </div>


              {/* Buttons */}
              <div className="project-actions">

                <a
                  href={project.link}
                  target="_blank"
                  rel=" noopener noreferrer"
                  className="project-btn project-btn-primary"
                >
                  VIEW PROJECT
                  <FaExternalLinkAlt />
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}