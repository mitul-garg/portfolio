import React from "react";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import { HomeProjects } from "../components/HomeProjects";
import { category } from "../data/skills";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Experience />
      {/* <HomeProjects /> */}
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
    </div>
  );
};
