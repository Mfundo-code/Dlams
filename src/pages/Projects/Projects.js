import React from "react";
import ProjectsHero from "./ProjectsComponents/ProjectsHero";
import ProjectSection from "./ProjectsComponents/ProjectSection";
import AdvertisingSection from "./ProjectsComponents/AdvertisingSection"

const Projects = () => {
  return (
    <main>
      <ProjectsHero />
      <ProjectSection/>
      <AdvertisingSection/>
    </main>
  );
};

export default Projects;
