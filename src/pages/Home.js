import React from "react";
import { Blogs } from "../components/Blogs";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Experience />
      {/* projects */}
      <Blogs />
    </div>
  );
};
