import React, { useState } from "react";
import { categories } from "../../data/skills";
import { FaFilter } from "react-icons/fa";

import "./styles.css";

const SkillSection = () => {
  var allSkills = [];
  categories.map((category) => allSkills.push(...category.skills));

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [displaySkills, setDisplaySkills] = useState(shuffleArray(allSkills));

  const filterSkills = (selectedCategoryId) => {
    allSkills = [];
    if (selectedCategoryId === "all") {
      categories.map((category) => allSkills.push(...category.skills));
      setDisplaySkills(shuffleArray(allSkills));
      return;
    }
    categories.forEach(({ id, skills }) => {
      if (id === selectedCategoryId) allSkills.push(...skills);
    });
    setDisplaySkills(allSkills);
  };

  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <div className="categories">
        <div className="filter-icon">
          <FaFilter />
        </div>
        <div className="category" onClick={() => filterSkills("all")}>
          <span>All</span>
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
        </div>
        {categories.map(({ id, name, skills }) => (
          <div key={id} className="category" onClick={() => filterSkills(id)}>
            <span>{name}</span>
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
          </div>
        ))}
      </div>
      <div className="skills">
        {displaySkills.map(({ id, name, icon }) => (
          <div key={id} className="skill">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
