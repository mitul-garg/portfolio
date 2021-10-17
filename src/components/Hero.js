import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../data/socialLinks";
import heroImg from "../assets/images/hero.svg";
import { DownloadButton } from "../components/CVButton";

export const Hero = () => {
  return (
    <section className="hero">
      <article className="intro">
        <div className="underline"></div>
        <h1>I'm Mitul</h1>
        <h6>BTech Undergrad and Learner</h6>
        <DownloadButton />
        <Link to="/contact">
          <button className="hero-btn">Contact Me</button>
        </Link>
        <ul className="hero-social-links">
          {socialLinks.map((link) => {
            const { id, icon, url } = link;
            return (
              <li key={id}>
                <a href={url} className="hero-social-link">
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
