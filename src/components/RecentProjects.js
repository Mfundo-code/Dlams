// src/components/RecentProjects.js
import React from 'react';

const RecentProjects = () => {
  const projects = [
    {
      title: 'Taxi Association Booking System',
      description: 'Custom booking and dispatch system for local taxi associations with real-time tracking and payment integration.',
      image: '🚕',
      category: 'Web Application'
    },
    {
      title: 'E-commerce Store for Local Retailer',
      description: 'Complete online store with inventory management, payment processing, and customer dashboard.',
      image: '🛒',
      category: 'E-commerce'
    },
    {
      title: 'School Management Portal',
      description: 'Digital platform for student and staff management with attendance tracking and reporting.',
      image: '🏫',
      category: 'Education'
    },
    {
      title: 'NGO Donation Platform',
      description: 'Website with donation functionality, volunteer management, and impact reporting for non-profit organization.',
      image: '🤝',
      category: 'Non-Profit'
    },
    {
      title: 'Restaurant Ordering System',
      description: 'Mobile app for table ordering with kitchen management and real-time order tracking.',
      image: '🍽️',
      category: 'Mobile App'
    },
    {
      title: 'Real Estate Listing Platform',
      description: 'Property listing website with advanced search, virtual tours, and agent management system.',
      image: '🏠',
      category: 'Real Estate'
    }
  ];

  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: 'white',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      marginTop: '50px',
    },
    project: {
      background: '#f8fafc',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(74, 157, 255, 0.1)',
    },
    projectHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    projectImage: {
      fontSize: '3rem',
      marginRight: '20px',
    },
    projectTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '5px',
      color: '#1a3a8f',
    },
    projectCategory: {
      color: '#4a9dff',
      fontSize: '0.9rem',
      fontWeight: '500',
    },
    description: {
      color: '#64748b',
      marginBottom: '20px',
      lineHeight: '1.6',
    },
    footerRow: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '12px'
    },
    viewDetails: {
      color: '#4a9dff',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
    }
  };

  return (
    <section style={styles.section}>
      <div className="container">
        <h2 className="section-title">Recent Projects</h2>
        <p className="section-subtitle">
          See how we're helping South African businesses transform with technology. 
          Each project is tailored to meet specific business needs and challenges.
        </p>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={styles.project}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = '#4a9dff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'rgba(74, 157, 255, 0.1)';
              }}
            >
              <div style={styles.projectHeader}>
                <div style={styles.projectImage}>{project.image}</div>
                <div>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <div style={styles.projectCategory}>{project.category}</div>
                </div>
              </div>

              <p style={styles.description}>{project.description}</p>

              <div style={styles.footerRow}>
                <a
                  href="/contact"
                  style={styles.viewDetails}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1a3a8f')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4a9dff')}
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
