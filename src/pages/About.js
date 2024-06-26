import React from "react";
import heroImgAbout from "../assets/images/hero.svg";
import { Education } from "../components/Education";
import { Blogs } from "../components/Blogs";

export const About = () => {
  return (
    <div className="about">
      <Blogs />
      <div className="about-me">
        <img src={heroImgAbout} alt="hero" className="about-hero" />
        <article className="about-info">
          <h1>About Me</h1>
          <div className="about-para">
            Hello, I'm Mitul Garg, Computer Science Undergrad from Shri
            Govindram Seksaria Institute of Technology and Science in Indore.
            Ever since my school days, my passion for computers has driven me
            towards this field. One of my passions lies in both playing and
            watching Cricket and Chess. Engaging in these strategic games not
            only provides me with an avenue for relaxation but also nurtures my
            analytical thinking. With each passing day, I am excited to embark
            on this journey of continuous learning and growth.
          </div>
        </article>
      </div>

      <Education />
    </div>
  );
};
