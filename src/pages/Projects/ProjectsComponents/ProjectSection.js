import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectSection = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Color constants
  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const DARK_BLUE = '#0F172A';
  const DARK_GOLD = '#B8860B';
  const CARD_BG = '#FFFFFF';
  const SECTION_BG = '#F8FAFC';

  const projectCategories = [
    {
      id: "crm",
      title: "CRM Solution",
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
      shortDescription: "Complete suite for optimizing customer relationships and driving business growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { value: "40%", label: "Sales Increase" },
        { value: "35%", label: "Churn Reduction" },
        { value: "80%", label: "Task Automation" }
      ],
      sections: [
        {
          title: "Comprehensive Customer Management",
          content: "From marketing automation and lead management to AI-powered insights and seamless software integration, our solutions empower your business to engage customers effectively and foster long-lasting loyalty.",
          type: "text"
        },
        {
          title: "Core Features",
          type: "features",
          items: [
            { title: "Lead Management", description: "Track and manage leads through the entire sales pipeline" },
            { title: "Marketing Automation", description: "Automate campaigns and customer communications" },
            { title: "Analytics & Reporting", description: "Real-time insights into customer behavior and sales performance" },
            { title: "Mobile CRM", description: "Access your CRM on any device, anywhere" },
            { title: "Cloud Integration", description: "Seamlessly integrate with existing business tools" },
            { title: "Security & Compliance", description: "Enterprise-grade security with data protection" }
          ]
        }
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare Systems",
      color: "#EF4444",
      gradient: "linear-gradient(135deg, #EF4444, #DC2626)",
      shortDescription: "Comprehensive eHealth solutions for modern medical practices with 24/7 access.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "24/7", label: "Access" },
        { value: "HIPAA", label: "Compliant" }
      ],
      videoThumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      sections: [
        {
          title: "Transformative Healthcare Technology",
          content: "Welcome to a new era in healthcare technology. Our Enterprise Healthcare Solution is an end-to-end, cloud-compatible platform designed to seamlessly integrate clinical, administrative, and financial operations under one intelligent system.",
          type: "text"
        },
        {
          title: "System Modules",
          type: "modules",
          items: [
            "Electronic Health Records (EHR)",
            "Practice & Hospital Management",
            "Patient Engagement Suite",
            "Revenue Cycle & Insurance Billing",
            "Clinical Decision Support",
            "Telemedicine & Virtual Care",
            "Pharmacy & Laboratory Systems",
            "AI-Driven Analytics & Population Health"
          ]
        },
        {
          title: "Key Capabilities",
          type: "grid",
          items: [
            { title: "Patient Registration", description: "Secure cloud-based patient management" },
            { title: "Appointment Scheduling", description: "Intuitive calendar management system" },
            { title: "Medical Records", description: "Complete paperless recordkeeping" },
            { title: "Billing System", description: "Automated billing with insurance support" },
            { title: "Hospital Management", description: "Complete OPD and IPD management" },
            { title: "Lab Integration", description: "Direct lab test result integration" }
          ]
        }
      ]
    },
    {
      id: "asset",
      title: "Asset Management",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #059669)",
      shortDescription: "Enterprise-grade solution for complete visibility and optimization of physical and digital assets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { value: "100%", label: "Visibility" },
        { value: "30%", label: "Cost Saving" },
        { value: "IoT", label: "Ready" }
      ],
      sections: [
        {
          title: "Complete Asset Lifecycle Control",
          content: "Whether you're managing IT hardware, machinery, facilities, or mobile devices, our solution ensures seamless lifecycle management, compliance, and cost efficiency.",
          type: "text"
        },
        {
          title: "Management Features",
          type: "features",
          items: [
            { title: "Complete Asset Tracking", description: "Real-time tracking of all physical and digital assets" },
            { title: "Lifecycle Management", description: "From procurement to disposal, manage every stage" },
            { title: "Predictive Maintenance", description: "AI-powered insights for preventive maintenance" },
            { title: "Compliance Management", description: "Ensure regulatory compliance across all assets" },
            { title: "IoT Integration", description: "Connect with IoT devices for real-time monitoring" },
            { title: "Reporting & Analytics", description: "Comprehensive reports on asset performance and ROI" }
          ]
        }
      ]
    },
    {
      id: "workplace",
      title: "Digital Workplace",
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
      shortDescription: "Unified platform connecting people, processes, and technology for seamless collaboration.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { value: "50%", label: "Productivity" },
        { value: "Unified", label: "Platform" },
        { value: "Secure", label: "Environment" }
      ],
      sections: [
        {
          title: "Modern Workplace Transformation",
          content: "Our Digital Workplace Solution is a unified platform that connects your people, processes, and technology—empowering seamless communication, effortless collaboration, and smart workflow automation.",
          type: "text"
        },
        {
          title: "Platform Features",
          type: "grid",
          items: [
            { title: "Unified Communication", description: "Integrated chat, video calls, and team collaboration tools" },
            { title: "Document Management", description: "Centralized document storage with version control" },
            { title: "Workflow Automation", description: "Automate routine tasks and business processes" },
            { title: "Mobile Workforce", description: "Access workplace tools from any device, anywhere" },
            { title: "Enterprise Security", description: "Advanced security features with single sign-on" },
            { title: "Analytics Dashboard", description: "Real-time insights into workplace productivity" }
          ]
        }
      ]
    },
    {
      id: "ecommerce",
      title: "E-commerce Platform",
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
      shortDescription: "Complete online store solutions with payment integration and inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { value: "3x", label: "Conversion" },
        { value: "Multi", label: "Channel" },
        { value: "Secure", label: "Payments" }
      ],
      sections: [
        {
          title: "Scalable E-commerce Solutions",
          content: "Launch your online store with our comprehensive e-commerce solutions. We handle everything from store setup to payment integration, inventory management, and marketing automation.",
          type: "text"
        },
        {
          title: "Store Features",
          type: "features",
          items: [
            { title: "Store Setup & Design", description: "Beautiful, responsive online stores tailored to your brand" },
            { title: "Payment Integration", description: "Multiple payment gateways including Stripe, PayPal, and more" },
            { title: "Inventory Management", description: "Real-time stock tracking and automated reordering" },
            { title: "Multi-channel Selling", description: "Sell across web, mobile, and social media platforms" },
            { title: "Analytics Dashboard", description: "Detailed sales reports and customer insights" },
            { title: "Marketing Tools", description: "Email marketing, promotions, and SEO optimization" }
          ]
        }
      ]
    },
    {
      id: "booking",
      title: "Booking Systems",
      color: "#EC4899",
      gradient: "linear-gradient(135deg, #EC4899, #DB2777)",
      shortDescription: "Professional booking systems for hotels, restaurants, and services with real-time availability.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { value: "Real-time", label: "Availability" },
        { value: "Auto", label: "Confirmations" },
        { value: "Mobile", label: "Booking" }
      ],
      sections: [
        {
          title: "Streamlined Reservation Management",
          content: "Streamline your booking process with our professional reservation systems. From hotels and restaurants to services and events, we provide real-time availability, automated confirmations, and seamless customer experiences.",
          type: "text"
        },
        {
          title: "System Features",
          type: "features",
          items: [
            { title: "Real-time Availability", description: "Instant booking confirmation with calendar sync" },
            { title: "Mobile Booking", description: "Mobile-optimized booking interface" },
            { title: "Online Payments", description: "Secure payment processing with multiple options" },
            { title: "Automated Notifications", description: "Email and SMS confirmations & reminders" },
            { title: "Analytics & Reporting", description: "Booking trends and revenue reports" },
            { title: "Staff Management", description: "Manage staff schedules and assignments" }
          ]
        }
      ]
    }
  ];

  const styles = {
    section: {
      padding: '10px 20px',
      paddingBottom: '1px',
      background: SECTION_BG,
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    container: {
      maxWidth: 1400,
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '80px',
    },
    title: {
      fontSize: 'clamp(3rem, 5vw, 4rem)',
      fontWeight: 900,
      color: DARK_BLUE,
      margin: '0 0 20px 0',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    titleGradient: {
      background: `linear-gradient(135deg, ${ACCENT_BLUE}, ${DARK_GOLD})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#475569',
      maxWidth: 800,
      margin: '0 auto 40px',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    categoriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '35px',
      marginBottom: '80px',
    },
    categoryCard: {
      background: CARD_BG,
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid rgba(0, 0, 0, 0.04)',
      position: 'relative',
    },
    cardGradientBorder: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #3B82F6, #10B981, #F59E0B)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    cardHeader: {
      padding: '35px 35px 25px',
      position: 'relative',
    },
    cardTitle: {
      fontSize: '1.6rem',
      fontWeight: 700,
      color: DARK_BLUE,
      margin: '0 0 15px 0',
      lineHeight: 1.3,
    },
    cardDescription: {
      fontSize: '1.05rem',
      color: '#64748B',
      lineHeight: 1.6,
      marginBottom: '25px',
      fontWeight: 400,
    },
    cardStats: {
      display: 'flex',
      gap: '15px',
      marginBottom: '25px',
    },
    statBadge: {
      padding: '8px 16px',
      background: 'rgba(15, 23, 42, 0.04)',
      borderRadius: '12px',
      fontSize: '0.85rem',
      fontWeight: 600,
      color: DARK_BLUE,
    },
    cardImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
      filter: 'brightness(0.95)',
      transition: 'all 0.5s ease',
    },
    cardFooter: {
      padding: '25px 35px 35px',
      borderTop: '1px solid rgba(0, 0, 0, 0.04)',
      marginTop: 'auto',
    },
    learnMoreButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '16px',
      background: 'transparent',
      color: ACCENT_BLUE,
      border: `2px solid ${ACCENT_BLUE}`,
      borderRadius: '14px',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      gap: '10px',
      transition: 'all 0.3s ease',
    },
    // Modal Styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflowY: 'auto',
    },
    modalContainer: {
      background: CARD_BG,
      borderRadius: '28px',
      maxWidth: '1100px',
      width: '100%',
      maxHeight: '85vh',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 40px 80px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    modalHeader: {
      padding: '50px 50px 30px',
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.03), rgba(15, 23, 42, 0.01))',
      borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
    },
    closeButton: {
      position: 'absolute',
      top: '25px',
      right: '25px',
      background: 'rgba(15, 23, 42, 0.04)',
      border: 'none',
      width: '45px',
      height: '45px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: DARK_BLUE,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      zIndex: 10,
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    modalTitleSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '25px',
      marginBottom: '25px',
    },
    modalTitleContainer: {
      flex: 1,
    },
    modalTitle: {
      fontSize: '2.2rem',
      fontWeight: 800,
      color: DARK_BLUE,
      margin: '0 0 10px 0',
      lineHeight: 1.2,
    },
    modalSubtitle: {
      fontSize: '1.1rem',
      color: '#64748B',
      lineHeight: 1.6,
      margin: 0,
    },
    modalContent: {
      padding: '40px 50px',
      overflowY: 'auto',
      maxHeight: 'calc(85vh - 200px)',
    },
    sectionTitle: {
      fontSize: '1.4rem',
      fontWeight: 700,
      color: DARK_BLUE,
      margin: '0 0 25px 0',
      position: 'relative',
      paddingBottom: '15px',
    },
    sectionTitleLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '50px',
      height: '3px',
      background: ACCENT_BLUE,
      borderRadius: '2px',
    },
    textContent: {
      fontSize: '1.1rem',
      color: '#475569',
      lineHeight: 1.8,
      marginBottom: '40px',
      fontWeight: 400,
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      marginBottom: '40px',
    },
    featureCard: {
      background: 'rgba(15, 23, 42, 0.02)',
      borderRadius: '18px',
      padding: '25px',
      border: '1px solid rgba(0, 0, 0, 0.03)',
      transition: 'all 0.3s ease',
    },
    featureTitle: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: DARK_BLUE,
      margin: '0 0 12px 0',
    },
    featureDescription: {
      fontSize: '0.95rem',
      color: '#64748B',
      lineHeight: 1.6,
      margin: 0,
    },
    modulesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '15px',
      marginBottom: '40px',
    },
    moduleItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '15px 20px',
      background: 'rgba(15, 23, 42, 0.02)',
      borderRadius: '12px',
      border: '1px solid rgba(0, 0, 0, 0.03)',
    },
    videoSection: {
      position: 'relative',
      marginBottom: '40px',
      borderRadius: '20px',
      overflow: 'hidden',
    },
    videoThumbnail: {
      width: '100%',
      height: '350px',
      objectFit: 'cover',
      cursor: 'pointer',
      transition: 'transform 0.5s ease',
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: 'none',
      color: ACCENT_BLUE,
      fontSize: '28px',
      fontWeight: 'bold',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    },
    videoModal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.98)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1001,
      padding: '20px',
    },
    videoContainer: {
      width: '100%',
      maxWidth: '1000px',
      position: 'relative',
    },
    videoPlayer: {
      width: '100%',
      height: '500px',
      borderRadius: '20px',
    },
    statsRow: {
      display: 'flex',
      gap: '20px',
      marginBottom: '40px',
    },
    statItem: {
      flex: 1,
      textAlign: 'center',
      padding: '25px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.02))',
      borderRadius: '18px',
      border: '1px solid rgba(59, 130, 246, 0.1)',
    },
    statValue: {
      fontSize: '2.2rem',
      fontWeight: 800,
      background: `linear-gradient(135deg, ${ACCENT_BLUE}, ${DARK_GOLD})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: '0 0 8px 0',
    },
    statLabel: {
      fontSize: '0.95rem',
      color: '#64748B',
      fontWeight: 500,
      margin: 0,
    },
    actionButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '18px',
      background: `linear-gradient(135deg, ${ACCENT_BLUE}, ${PRIMARY_BLUE})`,
      color: 'white',
      border: 'none',
      borderRadius: '14px',
      fontSize: '1.05rem',
      fontWeight: 600,
      cursor: 'pointer',
      gap: '12px',
      transition: 'all 0.3s ease',
      marginTop: '20px',
    },
  };

  const renderSectionContent = (section, categoryId) => {
    switch (section.type) {
      case 'text':
        return <p style={styles.textContent}>{section.content}</p>;
      
      case 'features':
        return (
          <div style={styles.featuresGrid}>
            {section.items.map((item, idx) => (
              <motion.div
                key={idx}
                style={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                  borderColor: 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <h4 style={styles.featureTitle}>{item.title}</h4>
                <p style={styles.featureDescription}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        );
      
      case 'grid':
        return (
          <div style={styles.featuresGrid}>
            {section.items.map((item, idx) => (
              <div key={idx} style={styles.featureCard}>
                <h4 style={styles.featureTitle}>{item.title}</h4>
                <p style={styles.featureDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'modules':
        return (
          <div style={styles.modulesGrid}>
            {section.items.map((module, idx) => (
              <div key={idx} style={styles.moduleItem}>
                <span style={{ color: ACCENT_BLUE, fontWeight: 'bold' }}>✓</span>
                <span style={{ color: DARK_BLUE, fontWeight: 500 }}>{module}</span>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <section style={styles.section}>
        <div style={styles.container}>
          <motion.div
            style={styles.header}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              style={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Solution <span style={styles.titleGradient}>Portfolio</span>
            </motion.h2>
            <motion.p
              style={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Explore our comprehensive suite of software solutions designed to address specific 
              business challenges and drive digital transformation across industries.
            </motion.p>
          </motion.div>

          {/* Solution Categories Grid */}
          <div style={styles.categoriesGrid}>
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.id}
                style={styles.categoryCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12)',
                  borderColor: 'rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.gradient-border').style.opacity = '1';
                  e.currentTarget.querySelector('.card-image').style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.gradient-border').style.opacity = '0';
                  e.currentTarget.querySelector('.card-image').style.transform = 'scale(1)';
                }}
              >
                <div className="gradient-border" style={styles.cardGradientBorder} />
                
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>{category.title}</h3>
                  <p style={styles.cardDescription}>{category.shortDescription}</p>
                  
                  <div style={styles.cardStats}>
                    {category.stats.map((stat, idx) => (
                      <div key={idx} style={styles.statBadge}>
                        {stat.value} {stat.label}
                      </div>
                    ))}
                  </div>
                </div>
                
                <img
                  src={category.image}
                  alt={category.title}
                  style={styles.cardImage}
                  className="card-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                
                <div style={styles.cardFooter}>
                  <motion.button
                    style={styles.learnMoreButton}
                    onClick={() => setExpandedCategory(category.id)}
                    whileHover={{ 
                      scale: 1.02,
                      background: ACCENT_BLUE,
                      color: 'white'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Solution →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Expanded Content */}
      <AnimatePresence>
        {expandedCategory && (
          <motion.div
            style={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedCategory(null)}
          >
            <motion.div
              style={styles.modalContainer}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={styles.closeButton}
                onClick={() => setExpandedCategory(null)}
                whileHover={{ scale: 1.1, background: 'rgba(15, 23, 42, 0.08)' }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </button>

              {(() => {
                const category = projectCategories.find(c => c.id === expandedCategory);
                if (!category) return null;

                return (
                  <>
                    <div style={styles.modalHeader}>
                      <div style={styles.modalTitleSection}>
                        <div style={styles.modalTitleContainer}>
                          <h3 style={styles.modalTitle}>{category.title}</h3>
                          <p style={styles.modalSubtitle}>{category.shortDescription}</p>
                        </div>
                      </div>
                    </div>

                    <div style={styles.modalContent}>
                      {/* Video Section (for healthcare) */}
                      {category.videoThumbnail && (
                        <motion.div
                          style={styles.videoSection}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <motion.img
                            src={category.videoThumbnail}
                            alt="Video Thumbnail"
                            style={styles.videoThumbnail}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setSelectedVideo(category)}
                          />
                          <button
                            style={styles.playButton}
                            onClick={() => setSelectedVideo(category)}
                          >
                            ▶
                          </button>
                        </motion.div>
                      )}

                      {/* Stats Row */}
                      <motion.div
                        style={styles.statsRow}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {category.stats.map((stat, idx) => (
                          <div key={idx} style={styles.statItem}>
                            <h4 style={styles.statValue}>{stat.value}</h4>
                            <p style={styles.statLabel}>{stat.label}</p>
                          </div>
                        ))}
                      </motion.div>

                      {/* Sections Content */}
                      {category.sections.map((section, idx) => (
                        <motion.div
                          key={idx}
                          style={{ marginBottom: '50px' }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                          <h4 style={styles.sectionTitle}>
                            {section.title}
                            <div style={styles.sectionTitleLine} />
                          </h4>
                          {renderSectionContent(section, category.id)}
                        </motion.div>
                      ))}

                      {/* Action Button */}
                      <motion.button
                        style={styles.actionButton}
                        onClick={() => setExpandedCategory(null)}
                        whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        Close Details →
                      </motion.button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            style={styles.videoModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              style={styles.videoContainer}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={styles.closeButton}
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </button>
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                style={styles.videoPlayer}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectSection;