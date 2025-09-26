// src/components/BusinessModels.js
import React from 'react';

const BusinessModels = () => {
  const models = [
    {
      type: 'Subscription',
      price: 'From R150/month',
      features: ['Monthly websites', 'Ongoing support', 'Regular updates', 'Hosting included', 'No upfront costs'],
      bestFor: 'Growing businesses wanting predictable costs',
      icon: '🔄'
    },
    {
      type: 'One-Time Projects',
      price: 'From R1,000',
      features: ['Fixed price', 'Single payment', 'Project-based', '3 months support', 'Clear scope'],
      bestFor: 'Specific needs with defined requirements',
      icon: '🎯'
    },
    {
      type: 'Pay-Per-Use',
      price: 'Usage based',
      features: ['SMS services', 'Extra storage', 'API calls', 'Premium support', 'Scalable costs'],
      bestFor: 'Variable needs and growing businesses',
      icon: '📊'
    }
  ];

  const styles = {
    section: {
      padding: '80px 0',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '50px',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '40px 30px',
      borderRadius: '15px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-10px)',
      background: 'rgba(255, 255, 255, 0.15)',
    },
    icon: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    type: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    price: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '25px',
      color: '#fbbf24',
    },
    featureList: {
      listStyle: 'none',
      marginBottom: '25px',
    },
    feature: {
      padding: '8px 0',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      color: 'rgba(255,255,255,0.9)',
    },
    bestFor: {
      fontStyle: 'italic',
      opacity: '0.9',
      fontSize: '0.9rem',
      padding: '15px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '8px',
    },
  };

  return (
    <section style={styles.section}>
      <div className="container">
        <h2 className="section-title" style={{color: 'white'}}>Flexible Business Models</h2>
        <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.8)'}}>
          Choose the pricing model that works best for your business needs and budget. 
          We believe in transparent pricing with no hidden costs.
        </p>
        
        <div style={styles.grid}>
          {models.map((model, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={styles.icon}>{model.icon}</div>
              <h3 style={styles.type}>{model.type}</h3>
              <div style={styles.price}>{model.price}</div>
              <ul style={styles.featureList}>
                {model.features.map((feature, idx) => (
                  <li key={idx} style={styles.feature}>{feature}</li>
                ))}
              </ul>
              <div style={styles.bestFor}>Perfect for: {model.bestFor}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModels;