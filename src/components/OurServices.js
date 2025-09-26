// src/components/OurServices.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const OurServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Django, and .NET. Subscription plans starting from R150/month.',
      price: 'From R150/month',
      id: 'web-development'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications using React Native for iOS and Android. Perfect for businesses wanting to reach customers on-the-go.',
      price: 'From R500/month',
      id: 'mobile-apps'
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'AWS cloud integration, hosting, and managed services. Scalable solutions that grow with your business needs.',
      price: 'Pay-per-use',
      id: 'cloud-services'
    },
    {
      icon: '🔧',
      title: 'IT Support',
      description: 'Managed IT services and technical support to keep your systems running smoothly. Monthly retainers available.',
      price: 'Monthly retainers',
      id: 'it-support'
    },
    {
      icon: '🏪',
      title: 'Internet Café',
      description: 'Printing, scanning, browsing, and digital services. Physical hub opening soon in your community!',
      price: 'Affordable rates',
      id: 'internet-cafe'
    },
    {
      icon: '🎓',
      title: 'Training',
      description: 'Workshops and short courses for local businesses and students. Build digital skills for the future.',
      price: 'Custom pricing',
      id: 'training'
    }
  ];

  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: '#f8fafc',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '50px',
    },
    serviceCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    serviceCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
    },
    icon: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      color: '#4a9dff',
    },
    title: {
      fontSize: '1.4rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#1a3a8f',
    },
    description: {
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '20px',
      flexGrow: 1,
    },
    price: {
      color: '#4a9dff',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      marginBottom: '20px',
    },
    learnMoreBtn: {
      background: 'transparent',
      color: '#4a9dff',
      border: '2px solid #4a9dff',
      borderRadius: '4px',
      padding: '10px 20px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: 'auto',
    },
    learnMoreBtnHover: {
      background: '#4a9dff',
      color: 'white',
    },
  };

  const handleLearnMore = (serviceId) => {
    navigate('/services', { state: { scrollTo: serviceId } });
  };

  return (
    <section style={styles.section} id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={styles.serviceCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
              }}
            >
              <div style={styles.icon}>{service.icon}</div>
              <h3 style={styles.title}>{service.title}</h3>
              <p style={styles.description}>{service.description}</p>
              <div style={styles.price}>{service.price}</div>
              <button 
                style={styles.learnMoreBtn}
                onClick={() => handleLearnMore(service.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4a9dff';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#4a9dff';
                }}
              >
                Learn More <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;