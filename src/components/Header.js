// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaBook, FaInfoCircle, FaEnvelope, FaBlog } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const styles = {
    header: {
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
      color: '#1a3a8f',
      padding: '15px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      height: '50px',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#1a3a8f',
      textDecoration: 'none',
    },
    desktopNav: {
      display: isMobile ? 'none' : 'flex',
      gap: '15px',
      alignItems: 'center',
    },
    navLink: {
      color: '#1a3a8f',
      textDecoration: 'none',
      padding: '10px 20px',
      borderRadius: '30px',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(26, 58, 143, 0.05)',
    },
    navLinkHover: {
      background: 'rgba(26, 58, 143, 0.1)',
      transform: 'translateY(-2px)',
    },
    mobileMenuButton: {
      background: 'rgba(26, 58, 143, 0.1)',
      border: 'none',
      color: '#1a3a8f',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      display: isMobile ? 'flex' : 'none',
      alignItems: 'center',
      fontSize: '1.3rem',
    },
    mobileMenuOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 998,
      display: mobileMenuOpen ? 'block' : 'none',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: '280px',
      background: '#ffffff',
      zIndex: 999,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease',
      boxShadow: '-2px 0 15px rgba(0,0,0,0.1)',
    },
    mobileNavLink: {
      color: '#1a3a8f',
      textDecoration: 'none',
      padding: '15px',
      borderRadius: '8px',
      background: 'rgba(26, 58, 143, 0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
    },
    closeButton: {
      alignSelf: 'flex-end',
      background: 'none',
      border: 'none',
      color: '#1a3a8f',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '10px',
    }
  };

  return (
    <header style={styles.header}>
      <div 
        style={styles.logoContainer}
        onClick={() => navigate('/')}
      >
        <span style={styles.logo}>Dlamsoft</span>
      </div>

      <nav style={styles.desktopNav}>
        <Link 
          to="/" 
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(26, 58, 143, 0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(26, 58, 143, 0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <FaHome /> Home
        </Link>
        <Link 
          to="/services" 
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(26, 58, 143, 0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(26, 58, 143, 0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <FaBook /> Services
        </Link>
        <Link 
          to="/about" 
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(26, 58, 143, 0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(26, 58, 143, 0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <FaInfoCircle /> About
        </Link>
        <Link 
          to="/blog" 
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(26, 58, 143, 0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(26, 58, 143, 0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <FaBlog /> Blog
        </Link>
        <Link 
          to="/contact" 
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(26, 58, 143, 0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(26, 58, 143, 0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <FaEnvelope /> Contact
        </Link>
      </nav>

      <button 
        style={styles.mobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label="Menu"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div 
        style={styles.mobileMenuOverlay} 
        onClick={toggleMobileMenu}
      />

      <div style={styles.mobileMenu}>
        <button style={styles.closeButton} onClick={toggleMobileMenu}>
          <FaTimes />
        </button>
        
        <Link to="/" style={styles.mobileNavLink} onClick={toggleMobileMenu}>
          <FaHome /> Home
        </Link>
        <Link to="/services" style={styles.mobileNavLink} onClick={toggleMobileMenu}>
          <FaBook /> Services
        </Link>
        <Link to="/about" style={styles.mobileNavLink} onClick={toggleMobileMenu}>
          <FaInfoCircle /> About
        </Link>
        <Link to="/blog" style={styles.mobileNavLink} onClick={toggleMobileMenu}>
          <FaBlog /> Blog
        </Link>
        <Link to="/contact" style={styles.mobileNavLink} onClick={toggleMobileMenu}>
          <FaEnvelope /> Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;