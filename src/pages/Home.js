import React from "react";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
// import { HomeProjects } from "../components/HomeProjects";
import SkillSection from "../components/SkillSection";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Experience />
      {/* <HomeProjects /> */}
      <SkillSection />
    </div>
  );
};
