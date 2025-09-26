// src/components/OurServicesProcess.js
import React from 'react';

const OurServicesProcess = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your needs, goals, and requirements to understand your business challenges.',
      
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Detailed project scope, timeline, and pricing. We create a clear roadmap for success.',
      
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates and feedback. We build iteratively and transparently.',
      
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Thorough testing and quality assurance to ensure everything works perfectly.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Smooth launch and handover process. We ensure a seamless transition to live operations.',
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance, support, and updates to keep your solution running smoothly.',
      
    }
  ];

  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: '#f8fafc',
    },
    process: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      marginTop: '50px',
    },
    step: {
      textAlign: 'center',
      padding: '30px 20px',
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    stepHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    },
    stepNumber: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #4a9dff 0%, #1a3a8f 100%)',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: '0 auto 20px',
    },
    stepIcon: {
      fontSize: '2.5rem',
      marginBottom: '15px',
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
        <h2 className="section-title">Our Process</h2>
        <p className="section-subtitle">
          From concept to deployment and beyond, we ensure a smooth and transparent process 
          that keeps you informed every step of the way.
        </p>
        
        <div style={styles.process}>
          {steps.map((item, index) => (
            <div 
              key={index} 
              style={styles.step}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
              }}
            >
              <div style={styles.stepNumber}>{item.step}</div>
              <div style={styles.stepIcon}>{item.icon}</div>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesProcess;