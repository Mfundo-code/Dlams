import React, { useState } from "react";
import { motion } from "framer-motion";


export default function ActionSection() {
  const [primaryHover, setPrimaryHover] = useState(false);
  
  const codeSymbols = ['</>', '{ }', '=>', '()', '[]', '/*', '==', '&&', '||', '++', 'fn', 'var'];

  return (
    <section style={styles.section} aria-labelledby="cta-heading">
      {/* VERY VISIBLE Tech Background */}
      <div style={styles.techBackground}>
        {/* Large floating particles with BRIGHT colors */}
        {codeSymbols.map((symbol, index) => (
          <motion.div
            key={`code-${index}`}
            style={{
              ...styles.codeParticle,
              left: `${(index * 8) + 2}%`,
              fontSize: index % 2 === 0 ? '28px' : '22px',
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

        {/* Large Binary digits falling */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            style={{
              ...styles.binaryDigit,
              left: `${(i * 5) + Math.random() * 2}%`,
              fontSize: Math.random() > 0.5 ? '18px' : '14px',
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

        {/* Animated circuit lines - THICK and BRIGHT */}
        <svg style={styles.circuitSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFA500" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          
          {/* Multiple animated paths */}
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

      <div style={styles.contentWrap}>
        {/* LEFT content */}
        <motion.div 
          style={styles.left}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            id="cta-heading" 
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p 
            style={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            From custom software to complete digital presence, we build solutions that drive growth 
            and enhance your digital footprint. Your satisfaction is our commitment!
          </motion.p>

          <motion.div 
            style={styles.buttonsRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => window.location.href = "/contact"}
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
              style={styles.primaryBtn(primaryHover)}
              whileHover={{ 
                scale: 1.08,
                y: -4
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: primaryHover 
                  ? [
                      "0 10px 40px rgba(30, 58, 138, 0.4)",
                      "0 16px 50px rgba(30, 58, 138, 0.6)",
                      "0 10px 40px rgba(30, 58, 138, 0.4)"
                    ]
                  : "0 10px 40px rgba(30, 58, 138, 0.4)"
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              Get Your Free Quote
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT contact card */}
        <motion.div 
          style={styles.right}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            style={styles.contactCard} 
            role="region" 
            aria-label="Contact information"
            whileHover={{ 
              scale: 1.03,
              y: -4,
              boxShadow: "0 15px 40px rgba(30, 58, 138, 0.25)"
            }}
            animate={{ 
              y: [0, -8, 0] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div style={styles.codeIconWrap}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                  stroke="#1E3A8A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div style={styles.contactContent}>
              <div style={styles.contactText}>Get in touch today</div>
              <a href="mailto:info@dlamsoft.co.za" style={styles.email} aria-label="Send email to Dlams Software Solutions">
                info@dlamsoft.co.za
              </a>
              <div style={styles.small}>Fast response — Let's discuss your project</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    color: "#1E3A8A",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    padding: "40px 20px", // Reduced side padding
    background: "linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FFB300 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 20px 40px rgba(255, 193, 7, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    margin: 0, // Removed margin
    width: "100vw", // Full viewport width
    left: "50%", // Center the element
    right: "50%", // Center the element
    marginLeft: "-50vw", // Offset to center
    marginRight: "-50vw", // Offset to center
    boxSizing: "border-box", // Include padding in width calculation
  },

  techBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    pointerEvents: "none",
    width: "100%", // Ensure it fills the container
  },

  codeParticle: {
    position: "absolute",
    color: "#1E3A8A",
    fontWeight: "bold",
    fontFamily: "'Fira Code', monospace",
    textShadow: "0 0 20px rgba(30, 58, 138, 0.8), 0 0 40px rgba(30, 58, 138, 0.4)",
    zIndex: 1,
  },

  binaryDigit: {
    position: "absolute",
    color: "#1E40AF",
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

  contentWrap: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "40px",
    maxWidth: 1200,
    margin: "0 auto",
    zIndex: 2,
    width: "100%",
  },

  left: {
    flex: "1 1 600px",
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  title: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    lineHeight: 1.1,
    margin: 0,
    fontWeight: 900,
    background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 30%, #FFFFFF 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.02em",
    textShadow: "0 4px 30px rgba(30, 58, 138, 0.5)", // Static text shadow
  },

  description: {
    marginTop: 20,
    color: "#1E40AF",
    maxWidth: 600,
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    lineHeight: 1.6,
    fontWeight: 600,
    textShadow: "0 2px 20px rgba(30, 58, 138, 0.8), 0 0 40px rgba(30, 58, 138, 0.6)",
  },

  buttonsRow: {
    marginTop: 28,
    display: "flex",
    gap: 16,
    alignItems: "center",
    flexWrap: "wrap",
  },

  primaryBtn: (hover) => ({
    cursor: "pointer",
    borderRadius: 16,
    padding: "16px 36px",
    fontWeight: 800,
    fontSize: "1.1rem",
    letterSpacing: 0.5,
    border: "none",
    background: hover 
      ? "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)"
      : "linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)",
    color: "#FFFFFF",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    position: "relative",
  }),

  right: {
    flex: "0 1 350px",
    minWidth: 280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  contactCard: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    width: "100%",
    background: "rgba(255, 255, 255, 0.95)",
    color: "#1E3A8A",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 12px 35px rgba(30, 58, 138, 0.2)",
    border: "2px solid rgba(30, 58, 138, 0.3)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  },

  codeIconWrap: {
    width: "50px",
    height: "50px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #FFD700 0%, #FFC107 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 4px 15px rgba(255, 193, 7, 0.4)",
  },

  contactContent: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    alignItems: "flex-start",
  },

  contactText: {
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "#1E3A8A",
    opacity: 0.9,
  },

  email: {
    fontSize: "1.1rem",
    fontWeight: 800,
    color: "#1E3A8A",
    textDecoration: "none",
    lineHeight: 1,
    transition: "color 0.3s ease",
  },

  small: {
    fontSize: "0.8rem",
    opacity: 0.8,
    color: "#1E40AF",
    marginTop: "4px",
  }
};