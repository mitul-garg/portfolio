import React from "react";
import { projects } from "../../data/projects";
import { Projects } from "../../components/Projects";

export const ProjectsPage = () => {
  return <Projects projects={projects} />;
};
