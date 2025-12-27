import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Calendar, Zap, Shield } from "lucide-react";

const ServicesCTA = () => {
  // Define all color constants at the top
  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const GOLD = '#FFD700';
  const BRIGHT_GOLD = '#FFC107';
  const LIGHT_BLUE = '#E6F7FF';

  const benefits = [
    { icon: <Zap />, title: "Fast Delivery", description: "Projects delivered on time with agile methodology" },
    { icon: <Shield />, title: "Quality Assurance", description: "Rigorous testing and code reviews" },
    { icon: <MessageCircle />, title: "24/7 Support", description: "Round-the-clock technical assistance" },
    { icon: <CheckCircle />, title: "Post-Deployment Support", description: "3 months free maintenance included" },
  ];

  const steps = [
    { number: "01", title: "Discovery Call", description: "Understand your requirements and goals" },
    { number: "02", title: "Proposal & Planning", description: "Detailed project scope and timeline" },
    { number: "03", title: "Development Phase", description: "Agile development with weekly updates" },
    { number: "04", title: "Testing & Launch", description: "Quality assurance and deployment" },
    { number: "05", title: "Support & Maintenance", description: "Ongoing support and optimization" },
  ];

  // Helper function for timeline connector styles
  const getTimelineConnectorStyle = (index) => ({
    position: 'absolute',
    top: '30px',
    left: `calc(${(index + 1) * 20}% + 20px)`,
    right: `calc(${(steps.length - index - 1) * 20}% + 20px)`,
    height: '3px',
    background: `linear-gradient(to right, ${ACCENT_BLUE}, ${GOLD})`,
    zIndex: 1,
    opacity: 0.6,
  });

  // Styles object defined after all variables
  const styles = {
    section: {
      padding: '100px 20px',
      background: `linear-gradient(135deg, 
        rgba(255, 215, 0, 0.05) 0%, 
        ${LIGHT_BLUE} 30%,
        rgba(255, 255, 255, 0.98) 50%,
        ${LIGHT_BLUE} 70%,
        rgba(255, 215, 0, 0.05) 100%
      )`,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    backgroundElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    },
    floatingOrb1: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${ACCENT_BLUE}15, transparent 70%)`,
      top: '10%',
      right: '5%',
      filter: 'blur(40px)',
      opacity: 0.4,
    },
    floatingOrb2: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${GOLD}15, transparent 70%)`,
      bottom: '20%',
      left: '5%',
      filter: 'blur(30px)',
      opacity: 0.3,
    },
    container: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      background: `linear-gradient(135deg, ${GOLD}20, ${ACCENT_BLUE}20)`,
      border: `1px solid ${GOLD}`,
      borderRadius: '50px',
      padding: '10px 24px',
      fontSize: '14px',
      fontWeight: 600,
      color: PRIMARY_BLUE,
      marginBottom: '20px',
      backdropFilter: 'blur(10px)',
    },
    title: {
      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      fontWeight: 800,
      background: `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 50%, ${GOLD} 100%)`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: '0 0 20px 0',
      lineHeight: 1.2,
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#1E40AF',
      maxWidth: 600,
      margin: '0 auto',
      lineHeight: 1.6,
      fontWeight: 500,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '60px',
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    benefitCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '30px',
      border: `1px solid ${GOLD}`,
      textAlign: 'center',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(30, 58, 138, 0.1)',
    },
    benefitIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${GOLD}20, ${ACCENT_BLUE}20)`,
      marginBottom: '20px',
      color: PRIMARY_BLUE,
    },
    benefitTitle: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: PRIMARY_BLUE,
      margin: '0 0 10px 0',
    },
    benefitDescription: {
      fontSize: '0.95rem',
      color: '#4B5563',
      lineHeight: 1.6,
      margin: 0,
    },
    // HORIZONTAL TIMELINE STYLES
    processSection: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '40px',
      border: `1px solid ${GOLD}`,
      position: 'relative',
      overflow: 'hidden',
    },
    processTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: PRIMARY_BLUE,
      margin: '0 0 40px 0',
      textAlign: 'center',
    },
    horizontalTimeline: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
      margin: '0 auto',
      maxWidth: '1000px',
      padding: '0 20px',
    },
    timelineStep: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      flex: 1,
      padding: '0 10px',
      zIndex: 2,
    },
    stepNumber: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${GOLD}, ${BRIGHT_GOLD})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.3rem',
      fontWeight: 700,
      color: PRIMARY_BLUE,
      marginBottom: '20px',
      position: 'relative',
      zIndex: 3,
      boxShadow: `0 4px 20px ${GOLD}40`,
    },
    stepContent: {
      textAlign: 'center',
      maxWidth: '180px',
    },
    stepTitle: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: PRIMARY_BLUE,
      margin: '0 0 8px 0',
    },
    stepDescription: {
      fontSize: '0.9rem',
      color: '#4B5563',
      margin: 0,
      lineHeight: 1.5,
    },
    timelineBaseLine: {
      position: 'absolute',
      top: '30px',
      left: '50px',
      right: '50px',
      height: '2px',
      background: `linear-gradient(to right, ${ACCENT_BLUE}20, ${GOLD}20)`,
      zIndex: 0,
    },
  };

  return (
    <section style={styles.section}>
      {/* Background Elements */}
      <div style={styles.backgroundElements}>
        <motion.div
          style={styles.floatingOrb1}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          style={styles.floatingOrb2}
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap size={16} style={{ marginRight: 8 }} />
            Start Your Project Today
          </motion.div>
          <motion.h2 
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get a free consultation and project estimate. Let's build something amazing together.
          </motion.p>
        </motion.div>

        <div style={styles.content}>
          {/* Benefits Grid */}
          <motion.div
            style={styles.benefitsGrid}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                style={styles.benefitCard}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 20px 40px ${PRIMARY_BLUE}20, 0 0 0 1px ${ACCENT_BLUE}30`
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <motion.div
                  style={styles.benefitIcon}
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 style={styles.benefitTitle}>{benefit.title}</h3>
                <p style={styles.benefitDescription}>{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* HORIZONTAL Process Timeline - FIXED VERSION */}
          <motion.div
            style={styles.processSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 style={styles.processTitle}>Our Development Process</h3>
            
            {/* Base timeline line */}
            <div style={styles.timelineBaseLine} />
            
            <div style={styles.horizontalTimeline}>
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    style={styles.timelineStep}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                  >
                    <motion.div
                      style={styles.stepNumber}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {step.number}
                    </motion.div>
                    <div style={styles.stepContent}>
                      <h4 style={styles.stepTitle}>{step.title}</h4>
                      <p style={styles.stepDescription}>{step.description}</p>
                    </div>
                  </motion.div>
                  
                  {/* FIXED: Only add connector between steps, not after the last one */}
                  {index < steps.length - 1 && (
                    <motion.div
                      key={`connector-${index}`}
                      style={getTimelineConnectorStyle(index)}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut" 
                      }}
                      viewport={{ once: true }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;