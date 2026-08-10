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
          Senior Software Engineer with 3+ years of professional experience
          building high-performance, cloud-native backend systems across .NET
          Web APIs, microservices, and distributed systems. Currently the first
          engineering hire at an early-stage API marketplace startup, helping
          build out the engineering team and platform foundation. Previously at
          Optum (UnitedHealth Group), built and scaled .NET microservices for a
          Gen AI-powered voice analytics platform handling 40,000+ requests per
          minute, delivering measurable performance gains across Azure, GCP, and
          AWS. Recognized as a 5-Star performer (Exceeds Expectations) for two
          consecutive years, earning promotion to Senior Software Engineer.
        </article>
      </div>
      <Education />
      <Blogs />
    </div>
  );
};
