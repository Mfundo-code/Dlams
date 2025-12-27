import React from "react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const GOLD = '#FFD700';
  const codeSymbols = ['</>', '{ }', '=>', '()', '[]', '/*', '==', '&&', '||', '++', 'fn', 'var'];

  return (
    <section style={styles.heroSection}>
      {/* Enhanced Animated Background */}
      <div style={styles.techBackground}>
        {/* Large floating particles */}
        {codeSymbols.map((symbol, index) => (
          <motion.div
            key={`code-${index}`}
            style={{
              ...styles.codeParticle,
              left: `${(index * 8) + 2}%`,
              fontSize: index % 2 === 0 ? '28px' : '22px',
              color: index % 2 === 0 ? GOLD : ACCENT_BLUE,
            }}
            animate={{ 
              y: [0, -80, 0],
              opacity: [0, 1, 0.8, 1, 0],
              scale: [0.5, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 6 + (index % 3),
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Binary digits falling */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            style={{
              ...styles.binaryDigit,
              left: `${(i * 5) + Math.random() * 2}%`,
              fontSize: Math.random() > 0.5 ? '18px' : '14px',
              color: i % 2 === 0 ? GOLD : ACCENT_BLUE,
            }}
            animate={{
              y: [-50, 400],
              opacity: [0, 1, 0.8, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}

        {/* Animated glowing orbs */}
        {[20, 40, 60, 80].map((left, i) => (
          <motion.div
            key={`orb-${i}`}
            style={{
              ...styles.glowOrb,
              left: `${left}%`,
              top: `${30 + (i * 15)}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Circuit lines */}
        <svg style={styles.circuitSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFA500" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,30 Q25,10 50,30 T100,30"
            fill="none"
            stroke="url(#yellowGrad)"
            strokeWidth="0.8"
            animate={{
              d: [
                "M0,30 Q25,10 50,30 T100,30",
                "M0,40 Q25,60 50,40 T100,40",
                "M0,30 Q25,10 50,30 T100,30",
              ],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.path
            d="M0,60 Q25,80 50,60 T100,60"
            fill="none"
            stroke="url(#yellowGrad)"
            strokeWidth="0.6"
            animate={{
              d: [
                "M0,60 Q25,80 50,60 T100,60",
                "M0,50 Q25,30 50,50 T100,50",
                "M0,60 Q25,80 50,60 T100,60",
              ],
              opacity: [0.8, 0.5, 0.8]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <motion.path
            d="M0,45 L100,45"
            fill="none"
            stroke="#FFA500"
            strokeWidth="0.3"
            strokeDasharray="4 4"
            animate={{
              strokeDashoffset: [0, 8],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>

        {/* Pulsing grid lines */}
        <motion.div
          style={styles.gridOverlay}
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div style={styles.container}>
        <motion.div
          style={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Professional Services
          </motion.h1>
          
          <motion.p 
            style={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From concept to production — We build scalable software solutions with robust 
            infrastructure, security, and performance optimization for businesses of all sizes.
          </motion.p>
        </motion.div>

        {/* Image Container */}
        <motion.div 
          style={styles.imageContainer}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div style={styles.codeEditor}>
            <div style={styles.editorHeader}>
              <div style={styles.editorDots}>
                <div style={{...styles.editorDot, backgroundColor: '#FF5F56'}} />
                <div style={{...styles.editorDot, backgroundColor: '#FFBD2E'}} />
                <div style={{...styles.editorDot, backgroundColor: '#27CA3F'}} />
              </div>
              <div style={styles.editorTitle}>services.jpg</div>
            </div>
            
            <div style={styles.imageContent}>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Dlams Software Services" 
                style={styles.servicesImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                }}
              />
              <div style={styles.imageOverlay}>
                <span style={styles.overlayText}>Professional Services</span>
              </div>
            </div>
            
            <div style={styles.terminalOutput}>
              <div style={styles.terminalLine}>
                $ services --list
              </div>
              <motion.div 
                style={styles.terminalLine}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 2.0, repeat: Infinity, repeatDelay: 2 }}
              >
                <span style={{color: '#4ADE80'}}>✓</span> Web Dev • Mobile • Cloud • DevOps
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div style={styles.floatingElements}>
        <motion.div 
          style={styles.floatingCircle1}
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          style={styles.floatingCircle2}
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    background: "linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FFB300 100%)",
    color: "#ffffff",
    padding: "120px 20px 100px",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    position: "relative",
    overflow: "hidden",
    borderBottom: `2px solid #FFD700`,
  },
  techBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    pointerEvents: "none",
    width: "100%",
  },
  codeParticle: {
    position: "absolute",
    fontWeight: "bold",
    fontFamily: "'Fira Code', monospace",
    textShadow: "0 0 20px rgba(30, 58, 138, 0.8), 0 0 40px rgba(30, 58, 138, 0.4)",
    zIndex: 1,
  },
  binaryDigit: {
    position: "absolute",
    fontFamily: "'Fira Code', monospace",
    fontWeight: "bold",
    textShadow: "0 0 10px rgba(30, 64, 175, 0.6)",
  },
  glowOrb: {
    position: "absolute",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255, 165, 0, 0.6) 0%, transparent 70%)",
    filter: "blur(25px)",
  },
  circuitSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 1,
  },
  gridOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(30, 58, 138, 0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30, 58, 138, 0.15) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2,
  },
  content: {
    flex: "1 1 600px",
    minWidth: 300,
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
  imageContainer: {
    flex: "0 1 300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  codeEditor: {
    width: "300px",
    height: "220px",
    background: "#1A1F2E",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.1)",
    border: `1px solid rgba(59, 130, 246, 0.3)`,
    display: "flex",
    flexDirection: "column",
  },
  editorHeader: {
    background: "#151925",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    borderBottom: "1px solid rgba(255, 215, 0, 0.1)",
    height: "36px",
    minHeight: "36px",
  },
  editorDots: {
    display: "flex",
    gap: "6px",
  },
  editorDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },
  editorTitle: {
    color: "#94A3B8",
    fontSize: "13px",
    fontFamily: "'Fira Code', monospace",
  },
  imageContent: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    background: "#0F172A",
  },
  servicesImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
    padding: "8px 12px",
  },
  overlayText: {
    color: "#FFD700",
    fontSize: "10px",
    fontWeight: "600",
    fontFamily: "'Fira Code', monospace",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  terminalOutput: {
    background: "#0F172A",
    padding: "8px 16px",
    borderTop: "1px solid rgba(255, 215, 0, 0.1)",
    fontFamily: "'Fira Code', monospace",
    fontSize: "11px",
    color: "#CBD5E1",
    height: "45px",
    minHeight: "45px",
  },
  terminalLine: {
    marginBottom: "4px",
    fontSize: "10px",
  },
  floatingElements: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    zIndex: 1,
  },
  floatingCircle1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
    top: "20%",
    right: "10%",
    filter: "blur(40px)",
  },
  floatingCircle2: {
    position: "absolute",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)",
    bottom: "20%",
    left: "10%",
    filter: "blur(30px)",
  },
};