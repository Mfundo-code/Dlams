// src/components/Call.js
import React from 'react';

const Call = () => {
  const styles = {
    section: {
      padding: '80px 0',
      background: 'linear-gradient(135deg, #1a3a8f 0%, #4a9dff 100%)',
      color: 'white',
      textAlign: 'center',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 20px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.2rem',
      marginBottom: '40px',
      opacity: '0.9',
      lineHeight: '1.6',
    },
    contactInfo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      marginBottom: '40px',
    },
    contactItem: {
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '25px',
      borderRadius: '10px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    contactIcon: {
      fontSize: '2.5rem',
      marginBottom: '15px',
    },
    contactText: {
      fontSize: '1.1rem',
      fontWeight: '500',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    whatsappBtn: {
      background: '#25D366',
      color: 'white',
    },
    emailBtn: {
      background: '#ea4335',
      color: 'white',
    },
    phoneBtn: {
      background: '#34a853',
      color: 'white',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Ready to Transform Your Business?</h2>
        <p style={styles.subtitle}>
          Contact us today for a free consultation and let's discuss how we can help your business 
          grow with affordable, reliable technology solutions.
        </p>
        
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>📧</div>
            <div style={styles.contactText}>info@dlamsoft.co.za</div>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>📱</div>
            <div style={styles.contactText}>+27 76 135 3762</div>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>🌐</div>
            <div style={styles.contactText}>dlamsoft.co.za</div>
          </div>
        </div>
        
        <div style={styles.buttons}>
          <a href="mailto:info@dlamsoft.co.za" className="btn" style={styles.emailBtn}>
            📧 Send Email
          </a>
          <a href="https://wa.me/27761353762" className="btn" style={styles.whatsappBtn}>
            💬 WhatsApp Us
          </a>
          <a href="tel:+27761353762" className="btn" style={styles.phoneBtn}>
            📞 Call Now
          </a>
        </div>

        <div style={{marginTop: '30px', opacity: '0.8', fontSize: '0.9rem'}}>
          <p>📍 Currently operating remotely | 🏢 Physical hub opening soon in your community!</p>
        </div>
      </div>
    </section>
  );
};

export default Call;