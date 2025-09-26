// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const styles = {
    footer: {
      background: '#1a3a8f',
      color: 'white',
      padding: '60px 0 30px',
      marginTop: 'auto',
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginBottom: '40px',
    },
    footerSection: {
      marginBottom: '30px',
    },
    footerHeading: {
      fontSize: '1.3rem',
      marginBottom: '20px',
      color: '#4a9dff',
      fontWeight: '600',
    },
    footerLinks: {
      listStyle: 'none',
    },
    footerLink: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      marginBottom: '12px',
      display: 'block',
      transition: 'all 0.3s ease',
      padding: '5px 0',
    },
    footerLinkHover: {
      color: '#4a9dff',
      transform: 'translateX(5px)',
    },
    contactInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      color: 'rgba(255, 255, 255, 0.8)',
    },
    contactIcon: {
      marginRight: '15px',
      color: '#4a9dff',
      fontSize: '1.2rem',
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
      marginTop: '20px',
    },
    socialLink: {
      color: 'white',
      fontSize: '1.3rem',
      transition: 'all 0.3s ease',
      padding: '10px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    socialLinkHover: {
      background: '#4a9dff',
      transform: 'translateY(-3px)',
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '30px',
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.6)',
    },
    companyDescription: {
      lineHeight: '1.6',
      marginBottom: '20px',
      color: 'rgba(255, 255, 255, 0.8)',
    },
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerHeading}>Dlamsoft</h3>
            <p style={styles.companyDescription}>
              Technology solutions for South African SMEs. We deliver high-quality software development, 
              cloud services, and digital support that enable local businesses to modernize operations and grow.
            </p>
            <div style={styles.socialLinks}>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4a9dff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaFacebook />
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4a9dff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4a9dff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaLinkedin />
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4a9dff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div style={styles.footerSection}>
            <h3 style={styles.footerHeading}>Quick Links</h3>
            <ul style={styles.footerLinks}>
              <li>
                <Link 
                  to="/" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4a9dff';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4a9dff';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4a9dff';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4a9dff';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4a9dff';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div style={styles.footerSection}>
            <h3 style={styles.footerHeading}>Our Services</h3>
            <ul style={styles.footerLinks}>
              <li>
                <Link 
                  to="/services" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4a9dff';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4a9dff';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4a9dff';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4a9dff';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  IT Support
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  style={styles.footerLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4a9dff';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Internet Café
                </Link>
              </li>
            </ul>
          </div>

          <div style={styles.footerSection}>
            <h3 style={styles.footerHeading}>Contact Info</h3>
            <div style={styles.contactInfo}>
              <FaMapMarkerAlt style={styles.contactIcon} />
              <span>Remote-first (Physical office coming soon)</span>
            </div>
            <div style={styles.contactInfo}>
              <FaPhone style={styles.contactIcon} />
              <span>+27 76 135 3762</span>
            </div>
            <div style={styles.contactInfo}>
              <FaEnvelope style={styles.contactIcon} />
              <span>info@dlamsoft.co.za</span>
            </div>
            <div style={styles.contactInfo}>
              <FaEnvelope style={styles.contactIcon} />
              <span>lala@dlamsoft.co.za</span>
            </div>
            <div style={styles.contactInfo}>
              <span style={styles.contactIcon}>🌐</span>
              <span>dlamsoft.co.za</span>
            </div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <p>&copy; 2024 Dlamsoft. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;