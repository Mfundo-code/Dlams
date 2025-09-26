// src/components/AdvertisingLine.js
import React from 'react';

const AdvertisingLine = () => {
  const styles = {
    banner: {
      background: 'linear-gradient(90deg, #4a9dff, #1a3a8f)',
      color: 'white',
      padding: '15px',
      textAlign: 'center',
      fontSize: '1rem',
      fontWeight: '600',
      position: 'relative',
      overflow: 'hidden',
    },
    content: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      animation: 'slideText 20s linear infinite',
    },
    highlight: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      padding: '4px 12px',
      borderRadius: '20px',
      margin: '0 8px',
      fontWeight: '700',
    },
    icon: {
      fontSize: '1.2rem',
    }
  };

  // Add animation style
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideText {
        0% { transform: translateX(100vw); }
        100% { transform: translateX(-100%); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.banner}>
      <div style={styles.content}>
        
        <span style={styles.highlight}>Special Launch Offer</span>
        Get 20% off your first 3 months! 
        <span style={styles.highlight}>Contact us today</span>
        
        <span style={styles.highlight}>Free consultation</span>
        Limited time offer!
        
      </div>
    </div>
  );
};

export default AdvertisingLine;