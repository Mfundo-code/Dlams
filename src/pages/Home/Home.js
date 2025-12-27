import React from "react";
import HeroSection from "./HomeComponents/HeroSection";
import CallToActionSection from "./HomeComponents/CallToActionSection";
import ServicesAreaSection from "./HomeComponents/ServicesAreaSection";


import AboutMe from "./HomeComponents/AboutMe"

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <ServicesAreaSection />
      <CallToActionSection />
    </main>
  );
};

export default Home;