import React from "react";
import aboutImg from "../../assets/images/about.svg";
import { Education } from "../../components/Education";
import { Blogs } from "../../components/Blogs";

import "./styles.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about-me">
        <img src={aboutImg} alt="about-img" className="about-img" />
        <article className="about-info">
          I am a Software Engineer at Optum with a strong passion for Cloud
          Computing, Web Development, and Problem Solving. Currently, I am
          working on enhancing the Infrastructure as Code (IaC) for the Voice
          Analytics Platform (VAP) team, utilizing Azure, Terraform, and C#. I
          have experience with Java, React JS, and the MERN Stack. I am excited
          to continue my journey in Software Engineering and Problem Solving,
          and I am eager to take on new challenges and opportunities. You can
          ping me up for playing Chess & Cricket as well!
        </article>
      </div>
      <Education />
      <Blogs />
    </div>
  );
};
