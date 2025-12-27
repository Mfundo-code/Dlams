import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  // Dlams Software Solutions Color Scheme
  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const GOLD = '#FFD700';

  // Timeline steps telling our story
  const storySteps = [
    { title: "Concept", description: "Ideation begins", icon: "💡", delay: 0 },
    { title: "Design", description: "Crafting the vision", icon: "🎨", delay: 0.5 },
    { title: "Build", description: "Development phase", icon: "⚡", delay: 1 },
    { title: "Test", description: "Quality assurance", icon: "✅", delay: 1.5 },
    { title: "Launch", description: "Product deployment", icon: "🚀", delay: 2 },
    { title: "Scale", description: "Growth & evolution", icon: "📈", delay: 2.5 },
  ];

  // Code building blocks animation
  const codeBlocks = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() > 0.5 ? 'square' : 'rectangle',
    color: i % 4 === 0 ? PRIMARY_BLUE : i % 4 === 1 ? ACCENT_BLUE : i % 4 === 2 ? GOLD : '#FFFFFF',
    delay: i * 0.1,
    position: {
      x: (i % 5) * 20 + 10,
      y: Math.floor(i / 5) * 20 + 10
    }
  }));

  return (
    <section style={styles.heroSection}>
      {/* Animated background with storytelling particles */}
      <div style={styles.animatedBackground}>
        {/* Story elements floating around */}
        {['💡', '🎨', '⚡', '✅', '🚀', '📈'].map((icon, i) => (
          <motion.div
            key={`story-${i}`}
            style={{
              ...styles.storyElement,
              fontSize: '32px',
              color: i % 2 === 0 ? GOLD : ACCENT_BLUE,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100, 0],
              x: Math.sin(i * Math.PI / 3) * 100
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
        ))}

        {/* Building code architecture */}
        <svg style={styles.architectureSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="storyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_BLUE} stopOpacity="0.8" />
              <stop offset="50%" stopColor={ACCENT_BLUE} stopOpacity="0.8" />
              <stop offset="100%" stopColor={GOLD} stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Growing architecture lines */}
          <motion.path
            d="M10,10 L40,10 L40,40 L70,40 L70,70 L90,70"
            fill="none"
            stroke="url(#storyGradient)"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut"
            }}
          />

          <motion.path
            d="M10,90 L40,90 L40,60 L70,60 L70,30 L90,30"
            fill="none"
            stroke="url(#storyGradient)"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0.5,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      <div style={styles.container}>
        {/* Left side - Story timeline */}
        <div style={styles.leftContent}>
          <motion.h1 
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Journey
          </motion.h1>
          
          <motion.p 
            style={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From a simple idea to complex digital solutions — we architect success stories through innovation, dedication, and technical excellence.
          </motion.p>

          {/* Animated timeline */}
          <div style={styles.timelineContainer}>
            {storySteps.map((step, index) => (
              <motion.div
                key={step.title}
                style={styles.timelineStep}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: step.delay,
                  repeat: Infinity,
                  repeatDelay: 6
                }}
              >
                <motion.div 
                  style={styles.stepIcon}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0],
                    boxShadow: [
                      `0 0 0 2px ${PRIMARY_BLUE}`,
                      `0 0 20px ${GOLD}`,
                      `0 0 0 2px ${PRIMARY_BLUE}`
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: step.delay,
                    ease: "easeInOut"
                  }}
                >
                  {step.icon}
                </motion.div>
                <div style={styles.stepContent}>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepDescription}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side - Building animation */}
        <div style={styles.rightContent}>
          {/* Code structure being built */}
          <div style={styles.codeStructure}>
            {codeBlocks.map((block) => (
              <motion.div
                key={block.id}
                style={{
                  ...styles.codeBlock,
                  backgroundColor: block.color,
                  width: block.size === 'square' ? '30px' : '60px',
                  height: block.size === 'square' ? '30px' : '15px',
                  left: `${block.position.x}%`,
                  top: `${block.position.y}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1, 0],
                  y: [50, 0, 0, -50]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: block.delay,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Connection lines between blocks */}
            <svg style={styles.connectionSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.line
                x1="20" y1="20" x2="50" y2="35"
                stroke={PRIMARY_BLUE}
                strokeWidth="1"
                strokeDasharray="4 4"
                animate={{
                  strokeDashoffset: [0, 8],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.line
                x1="50" y1="35" x2="80" y2="50"
                stroke={ACCENT_BLUE}
                strokeWidth="1"
                strokeDasharray="4 4"
                animate={{
                  strokeDashoffset: [0, 8],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: "linear"
                }}
              />
              <motion.line
                x1="30" y1="60" x2="60" y2="75"
                stroke={GOLD}
                strokeWidth="1"
                strokeDasharray="4 4"
                animate={{
                  strokeDashoffset: [0, 8],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6,
                  ease: "linear"
                }}
              />
            </svg>

            {/* Pulsing center core */}
            <motion.div 
              style={styles.core}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                boxShadow: [
                  `0 0 20px ${PRIMARY_BLUE}`,
                  `0 0 40px ${GOLD}`,
                  `0 0 20px ${PRIMARY_BLUE}`
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <motion.div 
            style={styles.statsContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div style={styles.stat}>
              <motion.div 
                style={styles.statNumber}
                animate={{ 
                  textShadow: [
                    `0 0 10px ${PRIMARY_BLUE}`,
                    `0 0 20px ${GOLD}`,
                    `0 0 10px ${PRIMARY_BLUE}`
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                50+
              </motion.div>
              <div style={styles.statLabel}>Projects Delivered</div>
            </div>
            <div style={styles.stat}>
              <motion.div 
                style={styles.statNumber}
                animate={{ 
                  textShadow: [
                    `0 0 10px ${ACCENT_BLUE}`,
                    `0 0 20px ${GOLD}`,
                    `0 0 10px ${ACCENT_BLUE}`
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                5+
              </motion.div>
              <div style={styles.statLabel}>Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating innovation particles */}
      <div style={styles.innovationParticles}>
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`innovation-${i}`}
            style={{
              ...styles.innovationParticle,
              backgroundColor: i % 3 === 0 ? PRIMARY_BLUE : i % 3 === 1 ? ACCENT_BLUE : GOLD,
            }}
            animate={{
              x: [0, Math.sin(i) * 100, 0],
              y: [0, Math.cos(i) * 50, 0],
              rotate: [0, 360],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    background: "linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FFB300 100%)",
    color: "#ffffff",
    padding: "100px 20px",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  animatedBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  },
  storyElement: {
    position: "absolute",
    fontSize: "24px",
    textShadow: "0 0 20px currentColor",
  },
  architectureSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  container: {
    maxWidth: 1400,
    margin: "0 auto",
    display: "flex",
    gap: "60px",
    flexWrap: "wrap",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },
  leftContent: {
    flex: "1 1 600px",
    minWidth: 300,
  },
  rightContent: {
    flex: "1 1 500px",
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    fontWeight: 800,
    lineHeight: 1.1,
    margin: "0 0 24px 0",
    background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 30%, #FFFFFF 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 4px 30px rgba(30, 58, 138, 0.3)",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    lineHeight: 1.6,
    color: "#1E40AF",
    margin: "0 0 40px 0",
    maxWidth: 600,
    fontWeight: 700,
    textShadow: "0 2px 20px rgba(30, 58, 138, 0.8), 0 0 40px rgba(30, 58, 138, 0.6)",
  },
  timelineContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "40px",
  },
  timelineStep: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(30, 58, 138, 0.15)",
    backdropFilter: "blur(10px)",
  },
  stepIcon: {
    fontSize: "24px",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "white",
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#1E3A8A",
    margin: "0 0 5px 0",
  },
  stepDescription: {
    fontSize: "0.9rem",
    color: "#3B82F6",
    margin: 0,
    fontWeight: 500,
  },
  codeStructure: {
    width: "300px",
    height: "300px",
    position: "relative",
    backgroundColor: "rgba(26, 31, 46, 0.9)",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2)",
    border: "2px solid rgba(255, 215, 0, 0.3)",
    marginBottom: "30px",
  },
  codeBlock: {
    position: "absolute",
    borderRadius: "4px",
    opacity: 0.8,
  },
  connectionSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  core: {
    position: "absolute",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#FFD700",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  },
  statsContainer: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    width: "100%",
  },
  stat: {
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px 30px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(30, 58, 138, 0.2)",
  },
  statNumber: {
    fontSize: "2.5rem",
    fontWeight: 800,
    color: "#1E3A8A",
    marginBottom: "5px",
  },
  statLabel: {
    fontSize: "0.9rem",
    color: "#3B82F6",
    fontWeight: 600,
  },
  innovationParticles: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    zIndex: 1,
  },
  innovationParticle: {
    position: "absolute",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  },
};

export default AboutHero;