import React, { useState } from "react";
import { motion } from "framer-motion";

const AdvertisingSection = () => {
  const [primaryHover, setPrimaryHover] = useState(false);
  
  const features = [
    "100% Client Trust & Satisfaction",
    "Reliable & Secure Solutions", 
    "Flexible Payment Options",
    "Tailored to Your Workflow"
  ];

  // Tech background symbols for the floating animation
  const codeSymbols = ['</>', '{ }', '=>', '()', '[]', '/*', '==', '&&', '||', '++', 'fn', 'var'];

  return (
    <section className="ad-container">
      {/* Tech Background Elements */}
      <div className="tech-background">
        {codeSymbols.map((symbol, index) => (
          <motion.div
            key={`code-${index}`}
            className="code-particle"
            style={{
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

        {/* Binary digits falling */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="binary-digit"
            style={{
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
            className="glow-orb"
            style={{
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

        {/* Animated circuit lines */}
        <svg className="circuit-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
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
        </svg>

        {/* Pulsing grid lines */}
        <motion.div
          className="grid-overlay"
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

      <div className="ad-overlay" />
      <div className="ad-content">
        
        {/* Text Content - Top on Mobile */}
        <motion.div 
          className="ad-text-section"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="ad-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="ad-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            From custom software to complete digital presence, we build solutions that drive growth 
            and enhance your digital footprint. Your satisfaction is our commitment!
          </motion.p>
        </motion.div>

        {/* Features Card - Bottom on Mobile */}
        <motion.div 
          className="ad-card-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="ad-feature-card"
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
            <div className="ad-features">
              {features.map((feature, index) => (
                <div key={index} className="ad-feature-item">
                  <span className="ad-checkmark">✓</span>
                  <span className="ad-feature-text">{feature}</span>
                </div>
              ))}
            </div>
            <motion.button 
              className="ad-cta-button"
              onClick={() => window.location.href = "/contact"}
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
              style={{
                background: primaryHover 
                  ? "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)"
                  : "linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)"
              }}
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
              Send Us A Message
            </motion.button>
          </motion.div>
        </motion.div>

      </div>

      <style jsx>{`
        .ad-container {
          position: relative;
          min-height: 400px;
          background: linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FFB300 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          border-radius: 24px;
          margin: 20px;
          box-shadow: 0 20px 40px rgba(255, 193, 7, 0.25);
          overflow: hidden;
        }

        .tech-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .code-particle {
          position: absolute;
          color: #1E3A8A;
          font-weight: bold;
          font-family: 'Fira Code', monospace;
          text-shadow: 0 0 20px rgba(30, 58, 138, 0.8), 0 0 40px rgba(30, 58, 138, 0.4);
          z-index: 1;
        }

        .binary-digit {
          position: absolute;
          color: #1E40AF;
          font-family: 'Fira Code', monospace;
          font-weight: bold;
          text-shadow: 0 0 10px rgba(30, 64, 175, 0.6);
        }

        .glow-orb {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 165, 0, 0.6) 0%, transparent 70%);
          filter: blur(25px);
        }

        .circuit-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 1;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(30, 58, 138, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 138, 0.15) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .ad-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.6) 0%, rgba(255, 193, 7, 0.4) 100%);
          border-radius: 24px;
        }
        
        .ad-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }
        
        .ad-text-section {
          color: white;
          flex: 1;
          max-width: 600px;
        }
        
        .ad-title {
          font-size: 3rem;
          font-weight: 800;
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
          background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 30%, #FFFFFF 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 30px rgba(30, 58, 138, 0.5);
        }
        
        .ad-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 0;
          color: #1E40AF;
          font-weight: 600;
          text-shadow: 0 2px 20px rgba(30, 58, 138, 0.8), 0 0 40px rgba(30, 58, 138, 0.6);
        }
        
        .ad-card-section {
          flex: 0 0 auto;
          width: 100%;
          max-width: 400px;
        }
        
        .ad-feature-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          width: 100%;
          text-align: center;
          border: 2px solid #1E3A8A;
        }
        
        .ad-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .ad-feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem 0;
        }
        
        .ad-checkmark {
          color: #1E3A8A;
          font-weight: bold;
          font-size: 1.3rem;
          min-width: 20px;
        }
        
        .ad-feature-text {
          font-size: 1rem;
          color: #1E3A8A;
          text-align: left;
          font-weight: 700;
        }
        
        .ad-cta-button {
          color: white;
          border: none;
          padding: 16px 36px;
          font-size: 1.1rem;
          font-weight: 800;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(30, 58, 138, 0.4);
          width: 100%;
          font-family: 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
        }
        
        /* Tablet and Below - Stack Vertically */
        @media (max-width: 968px) {
          .ad-content {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }
          
          .ad-text-section {
            text-align: center;
            max-width: 100%;
          }
          
          .ad-card-section {
            max-width: 500px;
            width: 100%;
            margin: 0 auto;
          }
        }
        
        /* Mobile */
        @media (max-width: 768px) {
          .ad-container {
            padding: 2rem 1rem;
            min-height: auto;
            margin: 16px;
            border-radius: 20px;
          }
          
          .ad-content {
            gap: 1.5rem;
          }
          
          .ad-feature-card {
            padding: 1.5rem;
          }
          
          .ad-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .ad-description {
            font-size: 1rem;
          }

          .ad-cta-button {
            padding: 14px 28px;
            font-size: 1rem;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .ad-container {
            padding: 1.5rem 0.75rem;
            margin: 12px;
            border-radius: 16px;
          }
          
          .ad-content {
            gap: 1rem;
          }
          
          .ad-feature-card {
            padding: 1.25rem;
          }
          
          .ad-title {
            font-size: 1.8rem;
            margin-bottom: 0.8rem;
          }
          
          .ad-feature-item {
            gap: 0.8rem;
            padding: 0.4rem 0;
          }
          
          .ad-feature-text {
            font-size: 0.9rem;
          }
          
          .ad-cta-button {
            padding: 12px 24px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AdvertisingSection;