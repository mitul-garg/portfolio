import React from "react";
import { education } from "../../data/education";

import "./styles.css";

export const Education = () => {
  return (
    <section className="education">
      <h1>Education</h1>
      <div className="education-list">
        {education.map(({ id, title, degree, institute, dates, grades }) => (
          <section key={id} className="education-details">
            <h2>{institute}</h2>
            <h3>
              {degree} - {title}
            </h3>
            <h4>Scored {grades}</h4>
            <p>Graduation Year : {dates}</p>
          </section>
        ))}
      </div>
    </section>
  );
};
