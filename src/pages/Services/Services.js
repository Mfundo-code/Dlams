import React from "react";
import ServicesHero from "./ServicesComponents/ServicesHero";
import ServiceSection from "./ServicesComponents/ServiceSection";
import ServicesCTA from "./ServicesComponents/ServicesCTA";

const Services = () => {
  return (
    <main>
      <ServicesHero />
      <ServiceSection/>
      <ServicesCTA />
    </main>
  );
};

export default Services;
