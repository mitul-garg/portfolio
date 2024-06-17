import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../../data/socialLinks";
import heroImg from "../../assets/images/hero.svg";
import { ResumeButton } from "../CVButton";

export const Hero = () => {
  return (
    <section className="hero">
      <article className="intro">
        <div className="underline"></div>
        <h1>I'm Mitul</h1>
        <h6>Software Engineer @ Optum</h6>
        <ResumeButton />
        <Link to="/contact">
          <button className="hero-btn">Contact Me</button>
        </Link>
        <ul className="hero-social-links">
          {socialLinks.map((link) => {
            const { id, icon, url } = link;
            return (
              <li key={id}>
                <a
                  href={url}
                  className="hero-social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </article>
      <img src={heroImg} alt="hero" className="hero-img" />
    </section>
  );
};
