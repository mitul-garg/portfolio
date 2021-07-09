import React from "react";
import { projects } from "../data/projects";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export const HomeProjects = () => {
  const newProjects = projects.slice(0, 3);
  return (
    <section className="home-projects">
      <h3>Featured Projects</h3>
      <div className="projects-grid">
        {newProjects.map((project) => {
          const { id, title, img, details, technologies, sourceCode, link } =
            project;
          return (
            <article key={id} className="project">
              <div className="img-holder">
                <img src={img} alt="" className="project-img" />
                <div className="img-overlay"></div>
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
                  <a href={sourceCode}>
                    <SiGithub className="code-link" />
                  </a>
                  <a href={link}>
                    <FiExternalLink className="code-link" />
                  </a>
                </div>
              </article>
            </article>
          );
        })}
      </div>
      <Link to="projects" className="hero-btn">
        All Projects
      </Link>
    </section>
  );
};
