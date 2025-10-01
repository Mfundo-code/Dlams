// src/pages/Services.js
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('web-development');
  const sectionRefs = {
    'web-development': useRef(null),
    'mobile-apps': useRef(null),
    'cloud-services': useRef(null),
    'internet-cafe': useRef(null)
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      setActiveTab(sectionId);
      
      setTimeout(() => {
        if (sectionRefs[sectionId] && sectionRefs[sectionId].current) {
          sectionRefs[sectionId].current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location.state]);

  const webDevelopmentServices = [
    {
      title: 'Basic Website',
      price: 'R150/month',
      description: '5-page responsive website with hosting, maintenance, and basic SEO included.',
      features: ['5 pages', 'Mobile responsive', 'Basic SEO', 'Email support', 'Monthly updates'],
      icon: '🌐',
    },
    {
      title: 'Business Website',
      price: 'R300/month',
      description: 'Professional business website with CMS, advanced features, and priority support.',
      features: ['10+ pages', 'CMS included', 'Advanced SEO', 'Priority support', 'E-commerce ready'],
      icon: '💼',
    },
    {
      title: 'E-commerce Store',
      price: 'R500/month',
      description: 'Full online store with product management, payments, and inventory system.',
      features: ['Product catalog', 'Payment integration', 'Inventory management', '24/7 support'],
      icon: '🛒',
    },
    {
      title: 'Custom Web Application',
      price: 'Custom Quote',
      description: 'Tailored web applications for specific business needs and workflows.',
      features: ['Custom features', 'Database integration', 'API development', 'Scalable architecture'],
      icon: '⚙️',
    }
  ];

  const mobileAppServices = [
    {
      title: 'Basic Mobile App',
      price: 'R500/month',
      description: 'Cross-platform mobile app with essential features and app store deployment.',
      features: ['iOS & Android', 'Basic features', 'App store deployment', 'Monthly updates'],
      icon: '📱',
    },
    {
      title: 'Business Mobile App',
      price: 'R1,000/month',
      description: 'Advanced mobile application with custom features and integrations.',
      features: ['Advanced features', 'API integration', 'Push notifications', 'Priority support'],
      icon: '🏢',
    }
  ];

  const cloudServices = [
    {
      title: 'Cloud Hosting',
      price: 'Pay-per-use',
      description: 'Reliable AWS cloud hosting with automatic scaling and monitoring.',
      features: ['AWS infrastructure', 'Auto-scaling', '24/7 monitoring', 'Backup services'],
      icon: '☁️',
    },
    {
      title: 'Managed IT Services',
      price: 'Monthly Retainer',
      description: 'Complete IT management including maintenance, support, and security.',
      features: ['24/7 monitoring', 'Security updates', 'Technical support', 'Performance optimization'],
      icon: '🔧',
    },
    {
      title: 'API Integration',
      price: 'Project-based',
      description: 'Connect your systems with third-party services and APIs.',
      features: ['REST API development', 'Third-party integration', 'Documentation', 'Support'],
      icon: '🔗',
    }
  ];

  const internetCafeServices = [
    {
      title: 'Printing Services',
      price: 'R4.99/page',
      description: 'High-quality printing services for documents, photos, and presentations.',
      features: ['A4 B/W printing', 'Color printing', 'Photo printing', 'Quick service'],
      icon: '🖨️',
    },
    {
      title: 'Internet Browsing',
      price: 'R5/hour',
      description: 'High-speed internet access in a comfortable workspace environment.',
      features: ['High-speed internet', 'Comfortable workspace', 'Secure connection'],
      icon: '🌐',
    },
    {
      title: 'Document Services',
      price: 'From R14.99',
      description: 'Complete document services including scanning, binding, and laminating.',
      features: ['Scanning', 'Laminating', 'Binding', 'Photocopying'],
      icon: '📄',
    },
    {
      title: 'Training & Workshops',
      price: 'Custom Pricing',
      description: 'Digital skills training and workshops for individuals and businesses.',
      features: ['Basic computer skills', 'Software training', 'Group workshops', 'Certification'],
      icon: '🎓',
    }
  ];

  const styles = {
    hero: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '60vh',
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
      padding: '50px 5%',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#1a3a8f',
      textAlign: 'center',
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px',
      flexWrap: 'wrap',
    },
    tab: {
      padding: '15px 30px',
      margin: '0 10px 10px',
      border: 'none',
      borderRadius: '30px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: '#f1f5f9',
      color: '#64748b',
    },
    activeTab: {
      backgroundColor: '#4a9dff',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(74, 157, 255, 0.3)',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    serviceCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      borderBottom: '4px solid #4a9dff',
      opacity: 0,
      transform: 'translateY(20px)',
      animation: 'fadeInUp 0.6s ease forwards',
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      color: '#4a9dff',
    },
    serviceTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#1a3a8f',
    },
    servicePrice: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#4a9dff',
      marginBottom: '15px',
    },
    serviceText: {
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    featureList: {
      listStyle: 'none',
      marginBottom: '20px',
    },
    feature: {
      padding: '5px 0',
      color: '#64748b',
      display: 'flex',
      alignItems: 'center',
    },
    featureBullet: {
      color: '#4a9dff',
      marginRight: '10px',
    },
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'web-development':
        return webDevelopmentServices.map((service, index) => (
          <div 
            key={index} 
            style={{...styles.serviceCard, animationDelay: `${index * 0.1}s`}}
          >
            <div style={styles.serviceIcon}>{service.icon}</div>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <div style={styles.servicePrice}>{service.price}</div>
            <p style={styles.serviceText}>{service.description}</p>
            <ul style={styles.featureList}>
              {service.features.map((feature, idx) => (
                <li key={idx} style={styles.feature}>
                  <span style={styles.featureBullet}>•</span> {feature}
                </li>
              ))}
            </ul>
            <a href="/contact" className="btn">Get Started</a>
          </div>
        ));
      case 'mobile-apps':
        return mobileAppServices.map((service, index) => (
          <div 
            key={index} 
            style={{...styles.serviceCard, animationDelay: `${index * 0.1}s`}}
          >
            <div style={styles.serviceIcon}>{service.icon}</div>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <div style={styles.servicePrice}>{service.price}</div>
            <p style={styles.serviceText}>{service.description}</p>
            <ul style={styles.featureList}>
              {service.features.map((feature, idx) => (
                <li key={idx} style={styles.feature}>
                  <span style={styles.featureBullet}>•</span> {feature}
                </li>
              ))}
            </ul>
            <a href="/contact" className="btn">Get Started</a>
          </div>
        ));
      case 'cloud-services':
        return cloudServices.map((service, index) => (
          <div 
            key={index} 
            style={{...styles.serviceCard, animationDelay: `${index * 0.1}s`}}
          >
            <div style={styles.serviceIcon}>{service.icon}</div>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <div style={styles.servicePrice}>{service.price}</div>
            <p style={styles.serviceText}>{service.description}</p>
            <ul style={styles.featureList}>
              {service.features.map((feature, idx) => (
                <li key={idx} style={styles.feature}>
                  <span style={styles.featureBullet}>•</span> {feature}
                </li>
              ))}
            </ul>
            <a href="/contact" className="btn">Get Started</a>
          </div>
        ));
      case 'internet-cafe':
        return internetCafeServices.map((service, index) => (
          <div 
            key={index} 
            style={{...styles.serviceCard, animationDelay: `${index * 0.1}s`}}
          >
            <div style={styles.serviceIcon}>{service.icon}</div>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <div style={styles.servicePrice}>{service.price}</div>
            <p style={styles.serviceText}>{service.description}</p>
            <ul style={styles.featureList}>
              {service.features.map((feature, idx) => (
                <li key={idx} style={styles.feature}>
                  <span style={styles.featureBullet}>•</span> {feature}
                </li>
              ))}
            </ul>
            <a href="/contact" className="btn">Get Started</a>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      
      {/* Hero */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Our Services</h1>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section style={styles.section}>
        <div style={styles.tabContainer}>
          <button 
            style={activeTab === 'web-development' ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveTab('web-development')}
          >
            Web Development
          </button>
          <button 
            style={activeTab === 'mobile-apps' ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveTab('mobile-apps')}
          >
            Mobile Apps
          </button>
          <button 
            style={activeTab === 'cloud-services' ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveTab('cloud-services')}
          >
            Cloud Services
          </button>
          <button 
            style={activeTab === 'internet-cafe' ? {...styles.tab, ...styles.activeTab} : styles.tab}
            onClick={() => setActiveTab('internet-cafe')}
          >
            Internet Café
          </button>
        </div>

        {/* Content Sections with Refs */}
        <div ref={sectionRefs['web-development']}>
          {activeTab === 'web-development' && (
            <>
              <h2 style={styles.sectionTitle}>Web Development Services</h2>
              <div style={styles.servicesGrid}>
                {renderContent()}
              </div>
            </>
          )}
        </div>

        <div ref={sectionRefs['mobile-apps']}>
          {activeTab === 'mobile-apps' && (
            <>
              <h2 style={styles.sectionTitle}>Mobile App Development</h2>
              <div style={styles.servicesGrid}>
                {renderContent()}
              </div>
            </>
          )}
        </div>

        <div ref={sectionRefs['cloud-services']}>
          {activeTab === 'cloud-services' && (
            <>
              <h2 style={styles.sectionTitle}>Cloud & IT Services</h2>
              <div style={styles.servicesGrid}>
                {renderContent()}
              </div>
            </>
          )}
        </div>

        <div ref={sectionRefs['internet-cafe']}>
          {activeTab === 'internet-cafe' && (
            <>
              <h2 style={styles.sectionTitle}>Internet Café Services</h2>
              <div style={styles.servicesGrid}>
                {renderContent()}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;