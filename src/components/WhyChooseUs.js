// src/components/WhyChooseUs.js
import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🏢',
      title: 'Local Expertise',
      description: 'Deep understanding of South African market needs and challenges. We speak your language and understand your business context.'
    },
    {
      icon: '💳',
      title: 'Affordable Pricing',
      description: 'Subscription-based model makes quality tech accessible to SMEs. No large upfront costs - pay as you grow.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Agile development approach for quick iteration and deployment. Get your solutions faster without compromising quality.'
    },
    {
      icon: '🔒',
      title: 'Reliable Support',
      description: 'Ongoing maintenance and support for all our solutions. We\'re here when you need us.'
    },
    {
      icon: '🌍',
      title: 'Community Focus',
      description: 'We hire locally and provide training opportunities. Supporting local talent and businesses.'
    },
    {
      icon: '🔄',
      title: 'Future Ready',
      description: 'Physical hub coming soon with Internet Café and training center. Bridging the digital divide.'
    }
  ];

  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: 'white',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '50px',
    },
    feature: {
      textAlign: 'center',
      padding: '40px 30px',
      backgroundColor: '#f8fafc',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(74, 157, 255, 0.1)',
    },
    featureHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      borderColor: '#4a9dff',
    },
    icon: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      color: '#4a9dff',
    },
    title: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#1a3a8f',
    },
    description: {
      color: '#64748b',
      lineHeight: '1.6',
      fontSize: '0.95rem',
    },
  };

  return (
    <section style={styles.section}>
      <div className="container">
        <h2 className="section-title">Why Choose Dlamsoft?</h2>
        <p className="section-subtitle">
          We combine technical expertise with local market knowledge to deliver solutions 
          that actually work for South African businesses and communities.
        </p>
        
        <div style={styles.grid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={styles.feature}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#4a9dff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = 'rgba(74, 157, 255, 0.1)';
              }}
            >
              <div style={styles.icon}>{feature.icon}</div>
              <h3 style={styles.title}>{feature.title}</h3>
              <p style={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;