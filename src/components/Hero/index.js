import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../../data/socialLinks";
import heroImg from "../../assets/images/hero.svg";
import { MdFileDownload } from "react-icons/md";
import "./styles.css";

export const Hero = () => {
  return (
    <section className="hero">
      <article className="intro">
        <div className="underline-desktop" />
        <h1>I'm Mitul</h1>
        <h6>Software Engineer @ Optum</h6>
        <div className="underline-mobile" />
        <img src={heroImg} alt="hero" className="hero-img-mobile" />
        <div className="hero-btn-container">
          <button className="hero-btn resume">
            <a
              href="https://drive.google.com/file/d/1-4YBRo8oqRfJbIvyQoY8g7l2f4OAxHWI/view"
              className="resume-link"
              target="_blank"
              rel="noreferrer"
            >
              Resume <MdFileDownload className="resume-download-icon" />
            </a>
          </button>
          <Link to="/contact">
            <button className="hero-btn">Contact Me</button>
          </Link>
        </div>
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
      <img src={heroImg} alt="hero" className="hero-img-desktop" />
    </section>
  );
};
