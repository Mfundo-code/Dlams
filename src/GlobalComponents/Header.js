// src/GlobalComponents/Header.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaEnvelope, FaHome, FaUser, FaProjectDiagram, FaServicestack, FaBriefcase } from "react-icons/fa";
import LogoB from "../assets/images/LogoB.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(s => !s);

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Dlams Software Solutions Color Scheme
  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const GOLD = '#FFD700';
  const LIGHT_GOLD = '#FFECB3';
  const LIGHT_BLUE = '#E6F7FF';

  const styles = {
    header: {
      background: '#FFFFFF', // Pure white background
      color: PRIMARY_BLUE,
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 100,
      height: "70px",
      // Removed all visual separators except thin yellow line
      boxShadow: "none", // No shadow
      borderBottom: "2px solid #FFD700", // Thin yellow line
      fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    },
    logoContainer: {
      flex: 1,
      display: "flex",
      alignItems: "center",
    },
    logoImage: {
      height: "50px",
      cursor: "pointer",
      maxWidth: "100%",
      filter: 'none', // Remove drop shadow
      transition: 'transform 0.3s ease',
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    navButton: (isActive) => ({
      background: isActive 
        ? `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 100%)`
        : 'transparent',
      color: isActive ? '#FFFFFF' : PRIMARY_BLUE,
      textDecoration: "none",
      borderRadius: "30px",
      padding: "10px 20px",
      fontWeight: "600",
      transition: "all 0.3s ease",
      boxShadow: isActive 
        ? "0 4px 15px rgba(30, 58, 138, 0.25)"
        : "0 2px 5px rgba(30, 58, 138, 0.1)",
      border: isActive ? 'none' : `1px solid ${PRIMARY_BLUE}`,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '15px',
    }),
    iconButton: {
      background: `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 100%)`,
      color: '#FFFFFF',
      border: 'none',
      padding: "10px",
      borderRadius: "50%",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(30, 58, 138, 0.25)",
      width: "44px",
      height: "44px",
    },
    largeIcon: {
      fontSize: "20px",
    },
    mobileNav: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    mobileMenuButton: {
      background: `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 100%)`,
      color: '#FFFFFF',
      border: 'none',
      cursor: "pointer",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      borderRadius: "12px",
      width: "44px",
      height: "44px",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(30, 58, 138, 0.25)",
    },
    mobileMenuOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 99,
      display: "flex",
      justifyContent: "flex-end",
      animation: "fadeIn 0.3s ease",
    },
    mobileMenu: {
      width: "300px",
      height: "100%",
      background: `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 100%)`,
      boxShadow: "-5px 0 30px rgba(0, 0, 0, 0.3)",
      padding: "30px 20px",
      position: "relative",
      overflowY: "auto",
      animation: "slideIn 0.3s ease",
    },
    closeButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      color: GOLD,
      cursor: "pointer",
      position: "absolute",
      top: "20px",
      right: "20px",
      fontSize: "24px",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
    },
    mobileMenuItems: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "50px",
    },
    mobileMenuItem: (isActive) => ({
      padding: "16px 20px",
      textDecoration: "none",
      color: isActive ? GOLD : '#FFFFFF',
      display: "flex",
      alignItems: "center",
      borderRadius: "12px",
      transition: "all 0.3s",
      fontWeight: "600",
      fontSize: "16px",
      background: isActive 
        ? 'rgba(255, 255, 255, 0.15)' 
        : 'transparent',
      border: isActive ? `2px solid ${GOLD}` : '2px solid transparent',
    }),
    mobileIcon: {
      marginRight: "15px",
      fontSize: "20px",
      color: GOLD,
      width: "24px",
      textAlign: "center",
    },
  };

  const links = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/about', label: 'About Us', icon: <FaUser /> },
    { to: '/services', label: 'Services', icon: <FaServicestack /> },
    { to: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { to: '/careers', label: 'Careers', icon: <FaBriefcase /> },
  ];

  // Mobile drawer links - includes Contact Us as a navigation item
  const mobileLinks = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/about', label: 'About Us', icon: <FaUser /> },
    { to: '/services', label: 'Services', icon: <FaServicestack /> },
    { to: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { to: '/careers', label: 'Careers', icon: <FaBriefcase /> },
    { to: '/contact', label: 'Contact Us', icon: <FaEnvelope /> }, // Only in mobile drawer
  ];

  // Add CSS animations
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      if (styleSheet.parentNode) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  return (
    <header style={styles.header} aria-label="Primary header">
      <div style={styles.logoContainer}>
        <img
          src={LogoB}
          alt="Dlams Software Solutions Logo"
          style={styles.logoImage}
          onClick={handleLogoClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav style={styles.nav} aria-label="Primary navigation">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link 
                key={link.to} 
                to={link.to} 
                style={styles.navButton(isActive)}
                aria-current={isActive ? 'page' : undefined}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 100%)`;
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 58, 138, 0.3)';
                    e.currentTarget.style.border = 'none';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = PRIMARY_BLUE;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 5px rgba(30, 58, 138, 0.1)';
                    e.currentTarget.style.border = `1px solid ${PRIMARY_BLUE}`;
                  }
                }}
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}

          <button
            type="button"
            style={styles.iconButton}
            onClick={scrollToFooter}
            aria-label="Contact Us"
            title="Contact Us"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${ACCENT_BLUE} 0%, ${PRIMARY_BLUE} 100%)`;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 58, 138, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 100%)`;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(30, 58, 138, 0.25)';
            }}
          >
            <FaEnvelope style={styles.largeIcon} />
          </button>
        </nav>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <div style={styles.mobileNav}>
          <button
            type="button"
            style={styles.mobileMenuButton}
            onClick={scrollToFooter}
            aria-label="Contact Us"
            title="Contact Us"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 58, 138, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(30, 58, 138, 0.25)';
            }}
          >
            <FaEnvelope style={styles.largeIcon} />
          </button>

          <button
            type="button"
            style={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Menu"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 58, 138, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(30, 58, 138, 0.25)';
            }}
          >
            {mobileMenuOpen ? (
              <FaTimes style={styles.largeIcon} />
            ) : (
              <FaBars style={styles.largeIcon} />
            )}
          </button>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && isMobile && (
        <div style={styles.mobileMenuOverlay} onClick={toggleMobileMenu}>
          <div style={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              style={styles.closeButton}
              onClick={toggleMobileMenu}
              aria-label="Close menu"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              <FaTimes style={styles.largeIcon} />
            </button>

            <div style={styles.mobileMenuItems}>
              {mobileLinks.map(link => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    style={styles.mobileMenuItem(isActive)}
                    onClick={toggleMobileMenu}
                    aria-current={isActive ? 'page' : undefined}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    <span style={styles.mobileIcon}>{link.icon}</span>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;