import React from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export const Projects = ({ projects }) => {
  const currentRoute = useLocation().pathname;

  return (
    <section className="projects">
      <h1 style={{ display: currentRoute === "/" ? "inline" : "none" }}>
        {currentRoute === "/" && "Featured Projects"}
      </h1>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const { id, title, img, details, technologies, sourceCode, link } =
            project;
          return (
            <article
              key={id}
              className={index % 2 === 0 ? "project" : "project reverse-flex"}
            >
              <div className="img-holder">
                <img src={img} alt="" className="project-img" />
              </div>
              <article className="project-info">
                <h2>{title}</h2>
                <p>{details}</p>
                <div className="tech-used">
                  {technologies.map((tech, index) => {
                    return (
                      <span key={index} className="tech">
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="code-links">
                  <a href={sourceCode} target="_blank" rel="noreferrer">
                    <SiGithub className="code-link" />
                  </a>
                  <a href={link} target="_blank" rel="noreferrer">
                    <FiExternalLink className="code-link" />
                  </a>
                </div>
              </article>
            </article>
          );
        })}
      </div>
      {currentRoute === "/" && (
        <Link
          to="projects"
          className="hero-btn"
          onClick={() => window.scrollTo(0, 0)}
        >
          View All Projects
        </Link>
      )}
    </section>
  );
};
