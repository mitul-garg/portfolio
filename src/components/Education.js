import React, { useState } from "react";
import { education } from "../data/education";

export const Education = () => {
  const [idx, setIdx] = useState(1);

  const changeIdx = (value) => {
    setIdx(value);
  };

  return (
    <section className="experience">
      <h1>Education</h1>
      <div className="job-section">
        <div className="btn-container">
          {education.map((job) => {
            const { id, degree } = job;
            return (
              <button
                key={id}
                onClick={() => changeIdx(id)}
                className={`${
                  id === idx ? "job-btn active-job-btn" : "job-btn"
                }`}
              >
                {degree}
              </button>
            );
          })}
        </div>
        <div className="job-info">
          {education.map((job) => {
            const { id, title, institute, grades, dates } = job;
            if (id === idx) {
              return (
                <article key={id} className="job-details">
                  <h3>{title}</h3>
                  <div className="job-company">{institute}</div>
                  <div className="job-dates">{grades}</div>
                  <div className="job-dates">Passing Year : {dates}</div>
                </article>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};
