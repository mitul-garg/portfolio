import React from "react";
import heroImgAbout from "../assets/images/hero.svg";
import { skills } from "../data/skills";
import { Education } from "../components/Education";

export const About = () => {
  return (
    <div className="about">
      <div className="about-me">
        <img src={heroImgAbout} alt="hero" className="about-hero" />
        <article className="about-info">
          <h1>About Me</h1>
          <div className="about-para">
            I am Mitul Garg, an undergoing Computer Science Undergrad at Shri
            Govindram Seksaria Institute of Technology and Science, Indore.
            Since my school days, I have been quite passionate about computers
            and have always wanted to work on them. Talking about my hobbies and
            interests, I love playing and watching Cricket and Chess. At
            present, I am seeking a Full Time Opportunity as a Software Engineer
            to apply and improve on honed skills.
          </div>
          <div className="skills">
            {skills.map((skill) => {
              const { id, name, icon } = skill;
              return (
                <button key={id} className="skill">
                  {name}
                  <span
                    style={{
                      fontSize: "25px",
                      marginLeft: "4px",
                    }}
                  >
                    {icon}
                  </span>
                </button>
              );
            })}
          </div>
        </article>
      </div>

      <Education />
    </div>
  );
};
