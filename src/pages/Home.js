import React from "react";
import { Blogs } from "../components/Blogs";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import { HomeProjects } from "../components/HomeProjects";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Experience />
      <HomeProjects />
      <Blogs />
    </div>
  );
};
