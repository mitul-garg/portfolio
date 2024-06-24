import React from "react";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import SkillSection from "../components/SkillSection";
import { Projects } from "../components/Projects";
import { projects } from "../data/projects";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Experience />
      <Projects projects={projects.slice(0, 4)} />
      <SkillSection />
    </div>
  );
};
