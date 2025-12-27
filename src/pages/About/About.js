// src/pages/About/About.js
import React from "react";
import AboutHero from "./AboutComponents/AboutHero";
import TeamSection from "./AboutComponents/TeamSection";
import TimelineSection from "./AboutComponents/TimelineSection";
import AboutCTA from "./AboutComponents/AboutCTA";
import MissionSection from "./AboutComponents/MissionSection"; // Import from external file
import TechSkills from "./AboutComponents/TechSkills";

const About = () => {
  return (
    <div>
      <AboutHero />
      <MissionSection />
      <TechSkills />
    </div>
  );
};

export default About;
