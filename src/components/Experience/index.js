import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { jobs } from "../../data/experience";
import "./styles.css";

export const Experience = () => {
  const [idx, setIdx] = useState(jobs[0].id);

  const changeIdx = (value) => {
    setIdx(value);
  };

  return (
    <section className="experience">
      <h1>Experience</h1>
      <div className="job-section">
        <div className="btn-container">
          {jobs.map((job) => {
            const { id, company } = job;
            return (
              <button
                key={id}
                onClick={() => changeIdx(id)}
                className={`${
                  id === idx ? "job-btn active-job-btn" : "job-btn"
                }`}
              >
                {company}
              </button>
            );
          })}
        </div>
        <div className="job-info">
          {jobs.map((job) => {
            const { id, title, skills, duties, dates } = job;
            if (id === idx) {
              return (
                <article key={id} className="job-details">
                  <h3>{title}</h3>
                  <div className="job-skills">
                    {skills.map((skill, index) => (
                      <div key={index} className="job-skill">
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="job-dates">{dates}</div>
                  <ul className="job-duties">
                    {duties.map((duty, index) => {
                      return (
                        <li key={index}>
                          <FaAngleDoubleRight className="bullet" />
                          {duty}
                        </li>
                      );
                    })}
                  </ul>
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
