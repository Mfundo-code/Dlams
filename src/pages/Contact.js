// src/pages/Contact.js
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const styles = {
    hero: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '50vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      color: 'white',
      marginBottom: '20px',
    },
    section: {
      padding: '80px 0',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginBottom: '60px',
    },
    formContainer: {
      background: 'white',
      borderRadius: '15px',
      padding: '40px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    },
    formTitle: {
      fontSize: '2rem',
      fontWeight: '600',
      marginBottom: '30px',
      color: '#1a3a8f',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '25px',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      fontWeight: '600',
      color: '#374151',
    },
    input: {
      width: '100%',
      padding: '15px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
    },
    inputFocus: {
      borderColor: '#4a9dff',
      boxShadow: '0 0 0 3px rgba(74, 157, 255, 0.1)',
    },
    select: {
      width: '100%',
      padding: '15px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '1rem',
      background: 'white',
    },
    textarea: {
      width: '100%',
      padding: '15px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
    },
    submitButton: {
      background: 'linear-gradient(to right, #4a9dff, #1a3a8f)',
      color: 'white',
      border: 'none',
      padding: '15px 40px',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      margin: '0 auto',
      transition: 'all 0.3s ease',
      width: '100%',
    },
    disabledButton: {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
    infoContainer: {
      padding: '20px 0',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '30px',
      padding: '20px',
      background: '#f8fafc',
      borderRadius: '10px',
    },
    infoIcon: {
      fontSize: '1.5rem',
      color: '#4a9dff',
      marginRight: '20px',
      minWidth: '30px',
    },
    infoContent: {
      flex: 1,
    },
    infoTitle: {
      fontWeight: '600',
      marginBottom: '5px',
      color: '#1a3a8f',
    },
    infoText: {
      color: '#64748b',
    },
    pricingContainer: {
      background: 'white',
      borderRadius: '15px',
      padding: '30px',
      margin: '40px auto',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    },
    pricingTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#1a3a8f',
      textAlign: 'center',
    },
    pricingItem: {
      marginBottom: '15px',
      padding: '15px',
      background: '#f8fafc',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    pricingService: {
      fontWeight: '500',
    },
    pricingPrice: {
      fontWeight: '600',
      color: '#4a9dff',
    },
  };

  return (
    <>
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Contact Us</h1>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.contactGrid}>
            {/* Contact Form */}
            <div style={styles.formContainer}>
              <h3 style={styles.formTitle}>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4a9dff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(74, 157, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4a9dff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(74, 157, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4a9dff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(74, 157, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={styles.select}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="it-support">IT Support</option>
                    <option value="internet-cafe">Internet Café Services</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = '#4a9dff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(74, 157, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <button 
                  type="submit" 
                  style={isSubmitting ? {...styles.submitButton, ...styles.disabledButton} : styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div style={styles.infoContainer}>
              <h3 style={{...styles.formTitle, textAlign: 'left', marginBottom: '30px'}}>Get in Touch</h3>
              
              <div style={styles.infoItem}>
                <FaMapMarkerAlt style={styles.infoIcon} />
                <div style={styles.infoContent}>
                  <div style={styles.infoTitle}>Our Location</div>
                  <div style={styles.infoText}>Remote-first operations</div>
                </div>
              </div>

              <div style={styles.infoItem}>
                <FaPhone style={styles.infoIcon} />
                <div style={styles.infoContent}>
                  <div style={styles.infoTitle}>Phone & WhatsApp</div>
                  <div style={styles.infoText}>+27 76 135 3762<br />Available Mon-Sat, 8AM-6PM</div>
                </div>
              </div>

              <div style={styles.infoItem}>
                <FaEnvelope style={styles.infoIcon} />
                <div style={styles.infoContent}>
                  <div style={styles.infoTitle}>Email</div>
                  <div style={styles.infoText}>info@dlamsoft.co.za<br />lala@dlamsoft.co.za</div>
                </div>
              </div>

              <div style={styles.infoItem}>
                <FaClock style={styles.infoIcon} />
                <div style={styles.infoContent}>
                  <div style={styles.infoTitle}>Business Hours</div>
                  <div style={styles.infoText}>Monday-Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</div>
                </div>
              </div>

              {/* Pricing Information */}
              <div style={styles.pricingContainer}>
                <h3 style={styles.pricingTitle}>Service Starting Prices</h3>
                <div style={styles.pricingItem}>
                  <span style={styles.pricingService}>Basic Website</span>
                  <span style={styles.pricingPrice}>R150/month</span>
                </div>
                <div style={styles.pricingItem}>
                  <span style={styles.pricingService}>Mobile App</span>
                  <span style={styles.pricingPrice}>R500/month</span>
                </div>
                <div style={styles.pricingItem}>
                  <span style={styles.pricingService}>E-commerce Store</span>
                  <span style={styles.pricingPrice}>R500/month</span>
                </div>
                <div style={styles.pricingItem}>
                  <span style={styles.pricingService}>IT Support</span>
                  <span style={styles.pricingPrice}>Monthly retainer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;