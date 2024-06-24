import React from "react";
import { category } from "../../data/skills";

const SkillSection = () => {
  return (
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
  );
};

export default SkillSection;
