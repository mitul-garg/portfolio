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
          Senior Software Engineer at Optum with 2+ years of experience building
          high-performance, cloud-native backend systems using .NET and
          microservices architecture. Currently contributing to the Voice
          Analytics Platform (Gen AI-powered PaaS), designing and scaling APIs
          that handle 40,000+ requests per minute on Azure Kubernetes Service.
          Experienced in Azure, AWS, and GCP, with strong expertise in
          distributed systems, event-driven architecture, authentication
          (OAuth2/JWT/Azure AD), and performance optimization. Delivered
          measurable improvements including 99% API latency reduction and 80%
          reduction in Redis cache evictions. Recognized as a 5-Star performer
          (Exceeds Expectations) for two consecutive years at Optum, leading to
          promotion to Senior Software Engineer (March 2026).
        </article>
      </div>
      <Education />
      <Blogs />
    </div>
  );
};
