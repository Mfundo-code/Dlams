// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OurServices from '../components/OurServices';
import WhyChooseUs from '../components/WhyChooseUs';
import BusinessModels from '../components/BusinessModels';
import OurServicesProcess from '../components/OurServicesProcess';
import RecentProjects from '../components/RecentProjects';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        setTransition(true);
      }, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const HERO_SLIDES = [
    {
      title: "Technology Solutions for South African SMEs",
      subtitle: "Software development, cloud services, and digital transformation tailored for local businesses. Empowering SMEs with affordable, reliable technology.",
      buttonText: "Get Started Today",
      navigateTo: '/contact'
    },
    {
      title: "Web & Mobile Development",
      subtitle: "Custom websites and mobile apps built with modern technologies. From R150/month subscription plans.",
      buttonText: "View Services",
      navigateTo: '/services'
    },
    {
      title: "Internet Café & Digital Hub",
      subtitle: "Coming soon: Physical hub with printing, scanning, browsing, and digital services for the community.",
      buttonText: "Learn More",
      navigateTo: '/about'
    }
  ];

  const styles = {
    hero: {
      minHeight: '100vh',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      position: 'relative',
    },
    sliderContainer: {
      position: 'relative',
      height: '400px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    textContent: {
      maxWidth: '800px',
      padding: '0 20px',
    },
    heroTitle: {
      fontWeight: '800',
      marginBottom: '20px',
      lineHeight: '1.2',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    },
    heroSubtitle: {
      fontWeight: '400',
      marginBottom: '40px',
      opacity: '0.95',
      lineHeight: '1.6',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    },
    sliderDots: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    sliderDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: 'none',
      margin: '0 5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ctaButton: {
      backgroundColor: '#4a9dff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
  };

  const handleButtonClick = () => {
    const slide = HERO_SLIDES[currentSlide];
    navigate(slide.navigateTo);
  };

  return (
    <>
      
      {/* Hero Section with Slider */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.sliderContainer}>
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={index}
                style={{
                  ...styles.slide,
                  opacity: currentSlide === index ? 1 : 0,
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                  transition: transition ? 'opacity 0.8s ease, transform 0.8s ease' : 'none',
                }}
              >
                <div style={styles.textContent}>
                  <h1 style={{...styles.heroTitle, fontSize: isMobile ? '2rem' : '3rem'}}>
                    {slide.title}
                  </h1>
                  <p style={{...styles.heroSubtitle, fontSize: isMobile ? '1rem' : '1.3rem'}}>
                    {slide.subtitle}
                  </p>
                  <div style={styles.buttonContainer}>
                    <button 
                      style={{
                        ...styles.ctaButton,
                        padding: isMobile ? '12px 20px' : '15px 40px',
                        minHeight: isMobile ? '50px' : 'auto',
                      }}
                      onClick={handleButtonClick}
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.sliderDots}>
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                style={{
                  ...styles.sliderDot,
                  backgroundColor: currentSlide === index ? '#4a9dff' : 'rgba(255, 255, 255, 0.5)'
                }}
                onClick={() => {
                  setTransition(false);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setTransition(true);
                  }, 100);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <OurServices />
      <WhyChooseUs />
      <BusinessModels />
      <OurServicesProcess />
      <RecentProjects />
      
    </>
  );
};

export default Home;
