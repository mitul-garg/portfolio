import React from "react";
import { category } from "../../data/skills";

import "./styles.css";

const SkillSection = () => {
  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <div className="categories">
        {category.map(({ id, name, skills }) => (
          <div key={id} className="category">
            <div>{name}</div>
            <div
              className={
                name === "featured" ? "skills featured-skills" : "skills"
              }
            >
              {skills.map(({ id, skillName, icon }) => (
                <button
                  key={id}
                  className={
                    name === "feeatured" ? "skill featured-skill" : "skill"
                  }
                >
                  {skillName}
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
      </div>
    </div>
  );
};

export default SkillSection;
