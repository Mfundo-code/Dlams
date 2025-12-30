import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection({
  imageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
  title = "Dlams Software Solutions",
  subtitle = "Digital Presence | Logo Design | Websites | Mobile Apps | E-commerce | Custom Enterprise Software",
  primaryLabel = "Get In Touch Now",
  onPrimary = () => window.location.href = "/contact",
}) {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section style={styles.section} aria-labelledby="hero-heading">
      {/* Tech Background */}
      <div style={styles.techBackground}>
        {/* Animated glowing orbs */}
        {[20, 40, 60, 80].map((left, i) => (
          <motion.div
            key={`orb-${i}`}
            style={{
              ...styles.glowOrb,
              left: `${left}%`,
              top: `${20 + (i * 15)}%`,
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
        {/* LEFT content (text) */}
        <motion.div 
          style={styles.left}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            id="hero-heading" 
            style={styles.title}
            animate={{
              textShadow: [
                "0 4px 30px rgba(30, 58, 138, 0.3)",
                "0 4px 40px rgba(30, 58, 138, 0.5)",
                "0 4px 30px rgba(30, 58, 138, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            style={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          <motion.div 
            style={styles.buttonsRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={onPrimary}
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
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {primaryLabel}
                <motion.svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path 
                    d="M5 12h14m-7-7l7 7-7 7" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>

          <motion.div 
            style={styles.tip}
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Transform your business with our digital solutions
          </motion.div>
        </motion.div>

        {/* RIGHT image */}
        <motion.div 
          style={styles.right}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            style={styles.imageWrapper}
            whileHover={{
              scale: 1.08,
              rotateY: 5,
              transition: { duration: 0.4 }
            }}
          >
            <img 
              src={imageUrl} 
              alt="Dlams Software Solutions" 
              style={styles.image}
              onLoad={() => setImageLoaded(true)}
            />
            <motion.div 
              style={styles.imageGlow}
              animate={{
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
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
    borderRadius: "0",
    padding: "64px 32px",
    background: "linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FFB300 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 20px 40px rgba(255, 193, 7, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    margin: 0,
  },

  techBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    pointerEvents: "none",
  },

  glowOrb: {
    position: "absolute",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255, 165, 0, 0.6) 0%, transparent 70%)",
    filter: "blur(30px)",
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
      linear-gradient(rgba(30, 58, 138, 0.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30, 58, 138, 0.2) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  },

  contentWrap: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "48px",
    maxWidth: 1200,
    margin: "0 auto",
    zIndex: 2,
  },

  left: {
    flex: "1 1 500px",
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },

  right: {
    flex: "0 1 380px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 280,
  },

  imageWrapper: {
    width: 360,
    maxWidth: "100%",
    height: 360,
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: `
      0 25px 50px rgba(30, 58, 138, 0.4),
      0 0 0 3px rgba(255,255,255,0.8),
      inset 0 1px 0 rgba(255,255,255,0.2)
    `,
    background: "linear-gradient(145deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
    position: "relative",
    border: "3px solid rgba(255, 255, 255, 0.9)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  imageGlow: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at center, rgba(30, 58, 138, 0.4) 0%, transparent 70%)",
    mixBlendMode: "multiply",
  },

  title: {
    fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
    lineHeight: 1.1,
    margin: 0,
    fontWeight: 900,
    background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 30%, #FFFFFF 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.02em",
  },

  subtitle: {
    marginTop: 24,
    color: "#1E40AF",
    maxWidth: 720,
    fontSize: "clamp(1rem, 2vw, 1.3rem)",
    lineHeight: 1.7,
    fontWeight: 600,
    textShadow: "0 2px 20px rgba(30, 58, 138, 0.8), 0 0 40px rgba(30, 58, 138, 0.6)",
  },

  buttonsRow: {
    marginTop: 32,
    display: "flex",
    gap: 16,
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  primaryBtn: (hover) => ({
    cursor: "pointer",
    borderRadius: 16,
    padding: "18px 40px",
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

  tip: {
    marginTop: 24,
    color: "#1E3A8A",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: 500,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: "12px 24px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(30, 58, 138, 0.15)",
  },
};