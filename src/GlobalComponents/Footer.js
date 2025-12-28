import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const GOLD = '#FFD700';
  const LIGHT_BLUE = '#E6F7FF';
  const WHITE = '#FFFFFF';

  const API_URL = process.env.NODE_ENV === 'development' 
    ? 'http://127.0.0.1:8000/api/contact/'
    : 'https://www.dlamsoft.co.za/api/contact/';

  useEffect(() => {
    function checkMobile() {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 768);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  const fastLinks = [
    { name: "Home", path: "/"},
    { name: "About Us", path: "/about"},
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products"},
    { name: "Careers", path: "/careers" }
  ];

  // Updated services list with correct slugs
  const servicesList = [
    { 
      name: "Digital Presence Package", 
      path: "/services/digital-presence-package",
      slug: "digital-presence-package"
    },
    { 
      name: "E-commerce Solutions", 
      path: "/services/e-commerce-solutions",
      slug: "e-commerce-solutions"
    },
    { 
      name: "Mobile Applications", 
      path: "/services/mobile-app-development",
      slug: "mobile-app-development"
    },
    { 
      name: "Custom Software", 
      path: "/services/custom-software-development",
      slug: "custom-software-development"
    },
    { 
      name: "Web Development", 
      path: "/services/custom-web-development",
      slug: "custom-web-development"
    },
    { 
      name: "Business Automation", 
      path: "/services/business-automation",
      slug: "business-automation"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/110416285",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2"/>
          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61585501595471",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/27813726611",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields.' });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const csrfToken = getCookie('csrftoken');
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include',
      };

      if (csrfToken) {
        requestOptions.headers['X-CSRFToken'] = csrfToken;
      }

      const response = await fetch(API_URL, requestOptions);

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message! We will get back to you within 24 hours.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        let errorMessage = 'There was an error sending your message. Please try again.';
        
        if (response.status === 403) errorMessage = 'CSRF verification failed. Please refresh the page and try again.';
        else if (response.status === 400) errorMessage = 'Please check your input and try again.';
        else if (response.status === 500) errorMessage = 'Server error. Please try again later.';
        
        setSubmitStatus({ type: 'error', message: errorMessage });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'There was a network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceClick = (e, service) => {
    e.preventDefault();
    // Store the service slug in sessionStorage to be picked up by the Services page
    sessionStorage.setItem('selectedService', service.slug);
    // Navigate to the service page
    window.location.href = service.path;
  };

  const styles = {
    container: {
      background: PRIMARY_BLUE,
      color: WHITE,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: isMobile ? "50px 20px 20px" : "60px 40px 30px",
      position: "relative",
      overflow: "hidden",
      borderTop: `2px solid ${GOLD}`,
    },
    mainContent: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "35% 1fr",
      gap: isMobile ? "40px" : "60px",
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },
    contactSection: { display: "flex", flexDirection: "column", gap: "20px" },
    sectionTitle: {
      fontSize: isMobile ? "1.2rem" : "1.4rem",
      fontWeight: "700",
      margin: "0 0 20px 0",
      color: WHITE,
      textAlign: "center",
      background: `linear-gradient(135deg, ${ACCENT_BLUE} 0%, ${GOLD} 100%)`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      background: WHITE,
      padding: "25px",
      borderRadius: "12px",
      boxShadow: `0 15px 40px rgba(0, 0, 0, 0.2)`,
      border: `2px solid ${GOLD}`,
      width: "100%",
    },
    input: {
      padding: isMobile ? "12px 14px" : "14px 16px",
      borderRadius: "8px",
      border: `2px solid ${PRIMARY_BLUE}`,
      backgroundColor: WHITE,
      color: PRIMARY_BLUE,
      fontSize: isMobile ? "0.95rem" : "1.05rem",
      fontFamily: "inherit",
      transition: "all 0.3s ease",
      outline: "none",
      fontWeight: "500",
    },
    textarea: {
      padding: isMobile ? "12px 14px" : "14px 16px",
      borderRadius: "8px",
      border: `2px solid ${PRIMARY_BLUE}`,
      backgroundColor: WHITE,
      color: PRIMARY_BLUE,
      fontSize: isMobile ? "0.95rem" : "1.05rem",
      fontFamily: "inherit",
      transition: "all 0.3s ease",
      outline: "none",
      resize: "vertical",
      minHeight: "120px",
      fontWeight: "500",
    },
    submitButton: {
      padding: isMobile ? "12px 20px" : "14px 24px",
      border: "none",
      borderRadius: "8px",
      background: `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 100%)`,
      color: WHITE,
      fontSize: isMobile ? "0.95rem" : "1.05rem",
      fontWeight: "700",
      cursor: "pointer",
      fontFamily: "inherit",
      transition: "all 0.3s ease",
      marginTop: "6px",
      opacity: isSubmitting ? 0.7 : 1,
      pointerEvents: isSubmitting ? "none" : "auto",
      boxShadow: `0 6px 20px rgba(30, 58, 138, 0.3)`,
    },
    statusMessage: {
      padding: "12px",
      borderRadius: "8px",
      textAlign: "center",
      fontSize: "0.9rem",
      fontWeight: "500",
      marginTop: "10px",
      background: submitStatus?.type === 'success' ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)",
      color: submitStatus?.type === 'success' ? "#16a34a" : "#dc2626",
      border: `1px solid ${submitStatus?.type === 'success' ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)"}`,
    },
    socialContainer: { width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" },
    socialLinks: { display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" },
    socialLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: isMobile ? "40px" : "44px",
      height: isMobile ? "40px" : "44px",
      borderRadius: "12px",
      background: `linear-gradient(135deg, ${ACCENT_BLUE} 0%, ${PRIMARY_BLUE} 100%)`,
      color: WHITE,
      textDecoration: "none",
      transition: "all 0.3s ease",
      boxShadow: `0 4px 15px rgba(30, 58, 138, 0.3)`,
    },
    rightSection: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
      gap: isMobile ? "40px" : "50px",
    },
    linksColumn: { display: "flex", flexDirection: "column", gap: "20px" },
    linksList: { display: "flex", flexDirection: "column", gap: "12px" },
    plainLink: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "rgba(255, 255, 255, 0.9)",
      textDecoration: "none",
      fontSize: isMobile ? "0.95rem" : "1rem",
      fontWeight: "600",
      transition: "all 0.3s ease",
      padding: "8px 0",
      cursor: "pointer",
    },
    linkIcon: { fontSize: "1.2rem", width: "28px", textAlign: "center", opacity: 0.9 },
    linkText: { flex: 1, color: WHITE },
    contactColumn: { display: "flex", flexDirection: "column", gap: "20px" },
    contactItem: { display: "flex", alignItems: "flex-start", gap: "12px" },
    contactIcon: { color: GOLD, flexShrink: 0, marginTop: "2px", opacity: 0.9 },
    contactLabel: { fontSize: isMobile ? "0.75rem" : "0.8rem", color: LIGHT_BLUE, margin: "0 0 4px 0", fontWeight: "600" },
    contactValue: { fontSize: isMobile ? "0.95rem" : "1rem", fontWeight: "600", color: WHITE, textDecoration: "none", transition: "color 0.3s ease", display: "block" },
    bottomBar: {
      borderTop: `2px solid ${GOLD}`,
      background: "rgba(0, 0, 0, 0.2)",
      padding: isMobile ? "20px 20px" : "25px 40px",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
      marginTop: "40px",
    },
    copyright: { margin: "0", color: LIGHT_BLUE, fontSize: isMobile ? "0.85rem" : "0.95rem", fontWeight: "500" },
  };

  return (
    <footer style={styles.container}>
      <div style={styles.mainContent}>
        <motion.div style={styles.contactSection} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h3 style={styles.sectionTitle}>Get In Touch</h3>
          
          <div style={styles.form}>
            <motion.input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} style={styles.input} required disabled={isSubmitting} whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} />
            <motion.input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} style={styles.input} required disabled={isSubmitting} whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} />
            <motion.textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} style={styles.textarea} rows="4" required disabled={isSubmitting} whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} />
            <motion.button type="button" onClick={handleSubmit} style={styles.submitButton} disabled={isSubmitting} whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}} whileTap={!isSubmitting ? { scale: 0.95 } : {}}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus && (
              <motion.div style={styles.statusMessage} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                {submitStatus.message}
              </motion.div>
            )}
          </div>

          <div style={styles.socialContainer}>
            <div style={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a key={social.name} href={social.url} style={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label={`Visit Dlams Software Solutions on ${social.name}`} whileHover={{ scale: 1.1, y: -2, rotate: 5 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div style={styles.rightSection} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div style={styles.linksColumn}>
            <h3 style={styles.sectionTitle}>Quick Links</h3>
            <nav style={styles.linksList}>
              {fastLinks.map((link, idx) => (
                <motion.a key={link.name} href={link.path} style={styles.plainLink} whileHover={{ x: 5, color: GOLD }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: idx * 0.1 }}>
                  <span style={styles.linkText}>{link.name}</span>
                </motion.a>
              ))}
            </nav>
          </div>

          <div style={styles.linksColumn}>
            <h3 style={styles.sectionTitle}>Our Services</h3>
            <nav style={styles.linksList}>
              {servicesList.map((service, idx) => (
                <motion.a 
                  key={service.name} 
                  href={service.path} 
                  style={styles.plainLink} 
                  onClick={(e) => handleServiceClick(e, service)}
                  whileHover={{ x: 5, color: GOLD }} 
                  whileTap={{ scale: 0.98 }} 
                  initial={{ opacity: 0, x: -10 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <span style={styles.linkText}>{service.name}</span>
                </motion.a>
              ))}
            </nav>
          </div>

          <div style={styles.contactColumn}>
            <h3 style={styles.sectionTitle}>Contact Info</h3>
            <div style={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={styles.contactIcon}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <div>
                <p style={styles.contactLabel}>Phone</p>
                <a href="tel:+27 81 372 6611" style={styles.contactValue}>+27 81 372 6611</a>
              </div>
            </div>
            
            <div style={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={styles.contactIcon}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <div>
                <p style={styles.contactLabel}>Email</p>
                <a href="mailto:info@dlamsoft.co.za" style={styles.contactValue}>info@dlamsoft.co.za</a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={styles.contactIcon}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
              </svg>
              <div>
                <p style={styles.contactLabel}>WhatsApp</p>
                <a href="https://wa.me/27813726611" style={styles.contactValue}>+27 81 372 6611</a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={styles.contactIcon}>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <div>
                <p style={styles.contactLabel}>Address</p>
                <p style={{...styles.contactValue, textDecoration: 'none'}}>Johannesburg, South Africa</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div style={styles.bottomBar} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
        <p style={styles.copyright}>© {currentYear} Dlams Software Solutions. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;