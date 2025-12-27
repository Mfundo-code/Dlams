import React from "react";
import { motion } from "framer-motion";

const MissionSection = () => {
  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const GOLD = '#FFD700';
  const LIGHT_GOLD = '#FFECB3';
  const LIGHT_BLUE = '#E6F7FF';
  const DARK_BLUE = '#1E40AF';

  const missionData = {
    mission: {
      title: "Our Mission",
      statement: "To empower businesses with cutting-edge software solutions that drive growth, enhance productivity, and transform digital experiences through innovation and excellence.",
      principles: [
        "Deliver exceptional value through technology",
        "Build solutions that scale with your business",
        "Maintain uncompromising quality standards",
        "Foster long-term client partnerships",
        "Drive sustainable digital transformation"
      ]
    },
    vision: {
      title: "Our Vision",
      statement: "To be Africa's most trusted software partner, recognized for revolutionizing how businesses operate through intelligent, intuitive, and impactful digital solutions.",
      aspirations: [
        "Pioneer next-generation software across industries",
        "Bridge the digital divide with accessible technology",
        "Cultivate top-tier tech talent across the continent",
        "Set new standards in software development excellence",
        "Create lasting positive impact through innovation"
      ]
    },
    values: {
      title: "Core Values",
      items: [
        {
          name: "Innovation",
          description: "Pushing boundaries with creative solutions"
        },
        {
          name: "Excellence",
          description: "Striving for perfection in every detail"
        },
        {
          name: "Integrity",
          description: "Building trust through transparency"
        },
        {
          name: "Collaboration",
          description: "Achieving more through partnership"
        },
        {
          name: "Impact",
          description: "Creating meaningful change"
        }
      ]
    }
  };

  const codeSymbols = ['</>', '{ }', '=>', '()', '[]', '/*', '==', '&&', '||', '++', 'fn', 'var'];

  const styles = {
    section: {
      padding: '100px 20px',
      background: `linear-gradient(135deg, 
        rgba(255, 249, 196, 0.1) 0%,
        rgba(255, 255, 255, 0.95) 20%,
        rgba(230, 247, 255, 0.8) 80%,
        rgba(255, 255, 255, 0.95) 100%
      )`,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      borderTop: `2px solid ${GOLD}`,
      borderBottom: `2px solid ${GOLD}`,
    },
    decorativeBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(30, 58, 138, 0.05) 0%, transparent 50%)
      `,
      zIndex: 0,
    },
    floatingElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: 1,
    },
    floatingShape1: {
      position: 'absolute',
      top: '15%',
      left: '10%',
      width: '80px',
      height: '80px',
      background: `linear-gradient(135deg, ${ACCENT_BLUE}20, ${GOLD}20)`,
      borderRadius: '20px',
      transform: 'rotate(45deg)',
      filter: 'blur(1px)',
    },
    floatingShape2: {
      position: 'absolute',
      bottom: '20%',
      right: '15%',
      width: '60px',
      height: '60px',
      background: `linear-gradient(135deg, ${PRIMARY_BLUE}15, ${ACCENT_BLUE}15)`,
      borderRadius: '30px',
      filter: 'blur(1px)',
    },
    floatingShape3: {
      position: 'absolute',
      top: '60%',
      left: '85%',
      width: '40px',
      height: '40px',
      background: `linear-gradient(135deg, ${GOLD}25, ${LIGHT_GOLD}25)`,
      borderRadius: '10px',
      transform: 'rotate(15deg)',
      filter: 'blur(0.5px)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    header: {
      textAlign: 'center',
      marginBottom: '80px',
    },
    sectionTitle: {
      fontSize: 'clamp(2.2rem, 4vw, 3rem)',
      fontWeight: 800,
      background: `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 50%, ${GOLD} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      margin: '0 0 20px 0',
      letterSpacing: '-0.02em',
      textShadow: '0 4px 30px rgba(30, 58, 138, 0.15)',
    },
    sectionSubtitle: {
      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
      color: DARK_BLUE,
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.6,
      fontWeight: 500,
      opacity: 0.9,
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '60px',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '35px',
      boxShadow: `
        0 10px 40px rgba(30, 58, 138, 0.08),
        0 0 0 1px rgba(255, 255, 255, 0.9),
        inset 0 1px 0 rgba(255, 255, 255, 0.8)
      `,
      border: `1px solid ${GOLD}40`,
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
    },
    cardHeader: {
      marginBottom: '25px',
      position: 'relative',
    },
    cardTitle: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: PRIMARY_BLUE,
      margin: '0 0 15px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    titleUnderline: {
      width: '60px',
      height: '4px',
      background: `linear-gradient(90deg, ${GOLD}, ${ACCENT_BLUE})`,
      borderRadius: '2px',
      marginBottom: '20px',
    },
    statement: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
      color: DARK_BLUE,
      margin: '0 0 25px 0',
      fontWeight: 500,
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      marginBottom: '12px',
      paddingLeft: '25px',
      position: 'relative',
    },
    listBullet: {
      position: 'absolute',
      left: 0,
      top: '6px',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${ACCENT_BLUE}, ${PRIMARY_BLUE})`,
    },
    listText: {
      fontSize: '0.95rem',
      color: DARK_BLUE,
      lineHeight: 1.5,
      fontWeight: 500,
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginTop: '40px',
    },
    valueCard: {
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '15px',
      padding: '25px',
      textAlign: 'center',
      boxShadow: '0 5px 20px rgba(30, 58, 138, 0.05)',
      border: `1px solid ${GOLD}30`,
      transition: 'all 0.3s ease',
    },
    valueName: {
      fontSize: '1.1rem',
      fontWeight: 700,
      color: PRIMARY_BLUE,
      margin: '0 0 10px 0',
    },
    valueDescription: {
      fontSize: '0.9rem',
      color: DARK_BLUE,
      lineHeight: 1.5,
      margin: 0,
      fontWeight: 500,
    },
    cardGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: `linear-gradient(90deg, ${ACCENT_BLUE}, ${GOLD}, ${ACCENT_BLUE})`,
      opacity: 0.6,
    },
    accentShape: {
      position: 'absolute',
      bottom: '-20px',
      right: '-20px',
      width: '100px',
      height: '100px',
      background: `linear-gradient(135deg, ${GOLD}10, ${ACCENT_BLUE}10)`,
      borderRadius: '30px',
      transform: 'rotate(45deg)',
      zIndex: -1,
    },
    statHighlight: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      marginTop: '60px',
      padding: '40px',
      borderRadius: '20px',
      border: `2px solid ${PRIMARY_BLUE}`,
      position: 'relative',
      overflow: 'hidden',
    },
    statItem: {
      textAlign: 'center',
      padding: '20px',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 800,
      background: `linear-gradient(135deg, ${PRIMARY_BLUE}, ${GOLD})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      margin: '0 0 10px 0',
    },
    statLabel: {
      fontSize: '1rem',
      color: PRIMARY_BLUE,
      fontWeight: 600,
      margin: 0,
    },
  };

  return (
    <section style={styles.section} id="mission">
      <div style={styles.decorativeBackground} />
      
      <div style={styles.floatingElements}>
        <motion.div
          style={styles.floatingShape1}
          animate={{
            y: [0, -20, 0],
            rotate: [45, 50, 45],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          style={styles.floatingShape2}
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          style={styles.floatingShape3}
          animate={{
            y: [0, -15, 0],
            rotate: [15, 25, 15],
          }}
          transition={{
            duration: 4,
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.sectionTitle}>Our Mission & Vision</h2>
          <p style={styles.sectionSubtitle}>
            Guiding principles that shape our approach to technology and partnership
          </p>
        </motion.div>

        <div style={styles.contentGrid}>
          {/* Mission Card */}
          <motion.div
            style={styles.card}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 20px 50px rgba(30, 58, 138, 0.12)',
            }}
          >
            <div style={styles.cardGlow} />
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>Our Mission</h3>
              <div style={styles.titleUnderline} />
            </div>
            <p style={styles.statement}>
              {missionData.mission.statement}
            </p>
            <ul style={styles.list}>
              {missionData.mission.principles.map((principle, index) => (
                <motion.li
                  key={index}
                  style={styles.listItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div style={styles.listBullet} />
                  <span style={styles.listText}>{principle}</span>
                </motion.li>
              ))}
            </ul>
            <div style={styles.accentShape} />
          </motion.div>

          {/* Vision Card */}
          <motion.div
            style={styles.card}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 20px 50px rgba(30, 58, 138, 0.12)',
            }}
          >
            <div style={styles.cardGlow} />
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>Our Vision</h3>
              <div style={styles.titleUnderline} />
            </div>
            <p style={styles.statement}>
              {missionData.vision.statement}
            </p>
            <ul style={styles.list}>
              {missionData.vision.aspirations.map((aspiration, index) => (
                <motion.li
                  key={index}
                  style={styles.listItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div style={styles.listBullet} />
                  <span style={styles.listText}>{aspiration}</span>
                </motion.li>
              ))}
            </ul>
            <div style={styles.accentShape} />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            ...styles.cardTitle,
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: '2rem'
          }}>
            {missionData.values.title}
          </h3>
          
          <div style={styles.valuesGrid}>
            {missionData.values.items.map((value, index) => (
              <motion.div
                key={value.name}
                style={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 30px rgba(30, 58, 138, 0.1)',
                  border: `2px solid ${GOLD}60`,
                }}
              >
                <h4 style={styles.valueName}>{value.name}</h4>
                <p style={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Highlight - Updated with Hero Section Background */}
        <motion.div
          style={{
            ...styles.statHighlight,
            background: "linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FFB300 100%)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Tech Background Elements - Same as Hero Section */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}>
            {/* Code Symbols */}
            {codeSymbols.slice(0, 8).map((symbol, index) => (
              <motion.div
                key={`code-${index}`}
                style={{
                  position: "absolute",
                  left: `${(index * 12) + 2}%`,
                  top: '20%',
                  color: PRIMARY_BLUE,
                  fontWeight: "bold",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '18px',
                  textShadow: "0 0 15px rgba(30, 58, 138, 0.6)",
                }}
                animate={{ 
                  y: [0, -50, 0],
                  opacity: [0, 1, 0.8, 0],
                  rotate: [0, 180]
                }}
                transition={{
                  duration: 5 + (index % 3),
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              >
                {symbol}
              </motion.div>
            ))}

            {/* Binary digits falling */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`binary-${i}`}
                style={{
                  position: "absolute",
                  left: `${(i * 8) + Math.random() * 2}%`,
                  color: "#1E40AF",
                  fontFamily: "'Fira Code', monospace",
                  fontWeight: "bold",
                  fontSize: Math.random() > 0.5 ? '14px' : '12px',
                  textShadow: "0 0 8px rgba(30, 64, 175, 0.5)",
                }}
                animate={{
                  y: [-20, 150],
                  opacity: [0, 1, 0.8, 0],
                  rotate: [0, 90]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}

            {/* Glowing orbs */}
            {[15, 40, 65, 90].map((left, i) => (
              <motion.div
                key={`orb-${i}`}
                style={{
                  position: "absolute",
                  left: `${left}%`,
                  top: `${25 + (i * 15)}%`,
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(30, 58, 138, 0.3) 0%, transparent 70%)",
                  filter: "blur(15px)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Circuit lines */}
            <svg style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.4,
            }} viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="statsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              
              <motion.path
                d="M0,30 Q20,15 40,30 T80,30"
                fill="none"
                stroke="url(#statsGrad)"
                strokeWidth="0.4"
                animate={{
                  d: [
                    "M0,30 Q20,15 40,30 T80,30",
                    "M0,40 Q20,55 40,40 T80,40",
                    "M0,30 Q20,15 40,30 T80,30",
                  ],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>

            {/* Grid overlay */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                  linear-gradient(rgba(30, 58, 138, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(30, 58, 138, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
              animate={{
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Stats Content */}
          <motion.div
            style={styles.statItem}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div style={{
              ...styles.statNumber,
              background: `linear-gradient(135deg, #FFFFFF, ${ACCENT_BLUE})`,
              textShadow: '0 2px 10px rgba(255, 255, 255, 0.5)',
            }}>100%</div>
            <p style={{
              ...styles.statLabel,
              color: 'white',
              fontWeight: 700,
              textShadow: '0 1px 5px rgba(30, 58, 138, 0.8)',
            }}>Client Satisfaction</p>
          </motion.div>
          <div style={styles.statItem}>
            <div style={{
              ...styles.statNumber,
              background: `linear-gradient(135deg, #FFFFFF, ${ACCENT_BLUE})`,
              textShadow: '0 2px 10px rgba(255, 255, 255, 0.5)',
            }}>24/7</div>
            <p style={{
              ...styles.statLabel,
              color: 'white',
              fontWeight: 700,
              textShadow: '0 1px 5px rgba(30, 58, 138, 0.8)',
            }}>Support Commitment</p>
          </div>
          <div style={styles.statItem}>
            <div style={{
              ...styles.statNumber,
              background: `linear-gradient(135deg, #FFFFFF, ${ACCENT_BLUE})`,
              textShadow: '0 2px 10px rgba(255, 255, 255, 0.5)',
            }}>100%</div>
            <p style={{
              ...styles.statLabel,
              color: 'white',
              fontWeight: 700,
              textShadow: '0 1px 5px rgba(30, 58, 138, 0.8)',
            }}>Reliability</p>
          </div>
          <div style={styles.statItem}>
            <div style={{
              ...styles.statNumber,
              background: `linear-gradient(135deg, #FFFFFF, ${ACCENT_BLUE})`,
              textShadow: '0 2px 10px rgba(255, 255, 255, 0.5)',
            }}>∞</div>
            <p style={{
              ...styles.statLabel,
              color: 'white',
              fontWeight: 700,
              textShadow: '0 1px 5px rgba(30, 58, 138, 0.8)',
            }}>Innovation Potential</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;