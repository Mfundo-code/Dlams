import React, { useState, useEffect } from "react";
import ServicesHero from "./ServicesComponents/ServicesHero";
import ServiceSection from "./ServicesComponents/ServiceSection";
import ServicesCTA from "./ServicesComponents/ServicesCTA";
import { useLocation, useNavigate } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [serviceSlug, setServiceSlug] = useState(null);

  // Define service mappings
  const serviceMap = {
    "digital-presence": "digital-presence-package",
    "ecommerce": "e-commerce-solutions",
    "mobile-apps": "mobile-app-development",
    "custom-software": "custom-software-development",
    "web-development": "custom-web-development",
    "automation": "business-automation"
  };

  useEffect(() => {
    // Extract service slug from URL
    const pathSegments = location.pathname.split("/");
    const serviceParam = pathSegments[pathSegments.length - 1];
    
    if (serviceParam && serviceParam !== "services") {
      setServiceSlug(serviceParam);
    }
  }, [location]);

  const handleServiceSelect = (slug) => {
    // Navigate to services with the selected service slug
    navigate(`/services/${slug}`);
    setServiceSlug(slug);
  };

  return (
    <main>
      <ServicesHero />
      <ServiceSection 
        selectedServiceSlug={serviceSlug} 
        onServiceSelect={handleServiceSelect}
      />
      <ServicesCTA />
    </main>
  );
};

export default Services;