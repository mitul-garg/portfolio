import React from "react";
import heroImgAbout from "../assets/images/hero.svg";
import { category } from "../data/skills";
import { Education } from "../components/Education";

export const About = () => {
  return (
    <div className="about">
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
          <div className="categories">
            {category.map(({ id, name, skills }) => (
              <div key={id} className="category">
                <div>{name}</div>
                <div className="skills">
                  {skills.map(({ id, name, icon }) => (
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
                  ))}
                </div>
              </div>
            ))}
            {/* {skills.map((skill) => {
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
            })} */}
          </div>
        </article>
      </div>

      <Education />
    </div>
  );
};
