import React from "react";
import heroImgAbout from "../assets/images/hero.svg";
import { skills } from "../data/skills";

export const About = () => {
  return (
    <div className="about">
      <img src={heroImgAbout} alt="hero" className="about-hero" />
      <article className="about-info">
        <h1>About Me</h1>
        <div className="about-para">
          I am Mitul Garg, an undergoing Computer Science Undergrad at Shri
          Govindram Seksaria Institute of Technology and Science, Indore. Since
          my school days, I have been quite passionate about computers and have
          always wanted to work on them. Talking about my hobbies and interests,
          I love playing and watching Cricket and Chess matches. At present, I
          am seeking an Internship to apply and improve on honed skills.
        </div>
        <div className="skills">
          {skills.map((skill) => {
            const { id, name } = skill;
            return (
              <button key={id} className="skill">
                {name}
              </button>
            );
          })}
        </div>
      </article>
    </div>
  );
};
