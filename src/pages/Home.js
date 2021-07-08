import React from "react";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Experience />
    </div>
  );
};
