import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ProductionProcess = () => {
  // Dlams Software Solutions Color Scheme - Enhanced with more vibrant options
  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const DARK_BLUE = '#1E40AF';
  const GOLD = '#FFD700';
  const BRIGHT_GOLD = '#FFC107';
  const LIGHT_GOLD = '#FFF9C4';
  const PURPLE_ACCENT = '#8B5CF6';
  const CYAN_ACCENT = '#06B6D4';

  // Production Process Steps - Enhanced with icons and more descriptive text
  const leftSteps = [
    { 
      title: "Discovery", 
      description: "Requirements gathering & stakeholder analysis", 
      delay: 0,
      icon: "🔍",
      gradient: `linear-gradient(135deg, ${PRIMARY_BLUE}, ${PURPLE_ACCENT})`
    },
    { 
      title: "Planning", 
      description: "Project scoping, architecture & roadmap", 
      delay: 0.1,
      icon: "📋",
      gradient: `linear-gradient(135deg, ${ACCENT_BLUE}, ${CYAN_ACCENT})`
    },
    { 
      title: "Design", 
      description: "UI/UX wireframes, prototypes & user testing", 
      delay: 0.2,
      icon: "🎨",
      gradient: `linear-gradient(135deg, ${PURPLE_ACCENT}, ${ACCENT_BLUE})`
    },
    { 
      title: "Development", 
      description: "Agile sprints, coding & continuous integration", 
      delay: 0.3,
      icon: "💻",
      gradient: `linear-gradient(135deg, ${CYAN_ACCENT}, ${ACCENT_BLUE})`
    },
  ];

  const rightSteps = [
    { 
      title: "Testing", 
      description: "QA automation, bug fixing & performance testing", 
      delay: 0.4,
      icon: "🧪",
      gradient: `linear-gradient(135deg, ${BRIGHT_GOLD}, ${GOLD})`
    },
    { 
      title: "Deployment", 
      description: "Launch, go live & production monitoring", 
      delay: 0.5,
      icon: "🚀",
      gradient: `linear-gradient(135deg, ${GOLD}, ${BRIGHT_GOLD})`
    },
    { 
      title: "Support", 
      description: "Maintenance, updates & 24/7 client support", 
      delay: 0.6,
      icon: "🛡️",
      gradient: `linear-gradient(135deg, ${ACCENT_BLUE}, ${PRIMARY_BLUE})`
    },
  ];

  // Neural Network Background - Static after initial load
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let nodes = [];
    let connections = [];

    // Enhanced tech symbols for software company
    const techSymbols = ['⚡', '🚀', '💻', '🔒', '🔧', '📱', '💼', '🏆', '✨', '🌟', '🔗', '🌐', '📊', '🔮', '🎯', '📈'];

    class Node {
      constructor(x, y, type = 'normal') {
        this.x = x;
        this.y = y;
        this.type = type;
        this.baseSize = Math.random() * (type === 'sparkle' ? 2 : 4) + (type === 'sparkle' ? 1 : 3);
        this.size = this.baseSize;
        this.symbol = techSymbols[Math.floor(Math.random() * techSymbols.length)];
        this.pulseSpeed = 0.01 + Math.random() * 0.02;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.opacity = type === 'sparkle' ? 0.03 + Math.random() * 0.05 : 0.08 + Math.random() * 0.1;
        this.hue = Math.random() > 0.5 ? 50 : 220;
        this.life = type === 'sparkle' ? Math.random() * 5000 + 3000 : Infinity;
        this.birth = Date.now();
      }

      update() {
        // Very subtle pulsing only
        this.size = this.baseSize + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 
          (this.type === 'sparkle' ? 0.5 : 1);
        return true;
      }

      draw() {
        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        
        gradient.addColorStop(0, `hsla(${this.hue}, 85%, 70%, ${this.opacity * 0.3})`);
        gradient.addColorStop(0.7, `hsla(${this.hue}, 85%, 60%, ${this.opacity * 0.15})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 85%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Main particle
        ctx.fillStyle = `hsla(${this.hue}, 100%, 80%, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw symbol occasionally
        if (this.type !== 'sparkle' && Math.random() > 0.6) {
          ctx.fillStyle = `hsla(${this.hue}, 100%, 100%, ${this.opacity * 1.5})`;
          ctx.font = `${this.size * 1.2}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(this.symbol, this.x, this.y);
        }
      }
    }

    class Connection {
      constructor(node1, node2) {
        this.node1 = node1;
        this.node2 = node2;
        this.length = Math.sqrt(
          Math.pow(node2.x - node1.x, 2) + Math.pow(node2.y - node1.y, 2)
        );
      }

      draw() {
        const alpha = 0.15;
        const dx = this.node2.x - this.node1.x;
        const dy = this.node2.y - this.node1.y;
        
        ctx.strokeStyle = `hsla(220, 100%, 70%, ${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.setLineDash([3, 2]);

        ctx.beginPath();
        ctx.moveTo(this.node1.x, this.node1.y);
        ctx.lineTo(this.node2.x, this.node2.y);
        ctx.stroke();

        ctx.setLineDash([]);
      }
    }

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.min(25, Math.floor((canvas.width * canvas.height) / 8000));
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          'normal'
        ));
      }
    };

    const updateConnections = () => {
      connections = [];
      const maxDistance = 150;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[j].x - nodes[i].x, 2) + 
            Math.pow(nodes[j].y - nodes[i].y, 2)
          );
          if (distance < maxDistance && Math.random() > 0.5) {
            connections.push(new Connection(nodes[i], nodes[j]));
          }
        }
      }
    };

    const drawScene = () => {
      // Clear with a fade effect
      ctx.fillStyle = 'rgba(255, 249, 196, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw very subtle grid
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.04)';
      ctx.lineWidth = 0.5;
      const gridSize = 60;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw connections
      connections.forEach(connection => {
        connection.draw();
      });

      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });
    };

    const init = () => {
      resizeCanvas();
      initNodes();
      updateConnections();
      drawScene(); // Draw once and stop
    };

    init();
    const handleResize = () => {
      resizeCanvas();
      initNodes();
      updateConnections();
      drawScene();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Enhanced code building blocks with more variety
  const codeBlocks = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: i % 3 === 0 ? 'small' : i % 3 === 1 ? 'medium' : 'large',
    color: i % 6 === 0 ? PRIMARY_BLUE : 
           i % 6 === 1 ? ACCENT_BLUE : 
           i % 6 === 2 ? GOLD : 
           i % 6 === 3 ? PURPLE_ACCENT :
           i % 6 === 4 ? CYAN_ACCENT : '#FFFFFF',
    delay: i * 0.08,
    rotation: Math.random() * 8 - 4,
    position: {
      x: (i % 4) * 25 + 10 + Math.random() * 5,
      y: Math.floor(i / 4) * 25 + 10 + Math.random() * 5
    }
  }));

  // Enhanced Styles with more visual flair
  const styles = {
    processSection: {
      padding: '25px 15px',
      background: `linear-gradient(135deg, 
        #FFF9C4 0%, 
        #FFECB3 25%, 
        #FFE082 50%, 
        #FFD54F 75%, 
        #FFCA28 100%)`,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      borderRadius: '20px',
      margin: '15px',
      border: '2px solid rgba(255, 255, 255, 0.95)',
      boxShadow: `
        0 12px 25px rgba(255, 193, 7, 0.15),
        0 0 30px rgba(59, 130, 246, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      minHeight: '35vh',
      display: 'flex',
      alignItems: 'center',
    },
    canvas: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity: 0.6,
    },
    container: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      width: '100%',
    },
    contentWrapper: {
      display: 'flex',
      gap: '30px',
      flexWrap: 'wrap',
      alignItems: 'center',
      width: '100%',
    },
    leftContent: {
      flex: '1 1 600px',
      minWidth: 300,
      position: 'relative',
    },
    rightContent: {
      flex: '1 1 400px',
      minWidth: 280,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
      fontWeight: 900,
      lineHeight: 1.1,
      margin: "0 0 25px 0",
      background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 30%, #FFD700 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: `
        0 2px 20px rgba(30, 58, 138, 0.3),
        0 0 40px rgba(59, 130, 246, 0.2)
      `,
      letterSpacing: "-0.02em",
      textAlign: "center",
      position: 'relative',
    },
    // Two column layout for process steps - Enhanced
    stepsContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      alignItems: 'start',
      position: 'relative',
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '40px',
    },
    // Enhanced step design with more visual interest
    timelineStep: {
      position: 'relative',
      zIndex: 2,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    stepContent: {
      background: `
        linear-gradient(135deg, 
          rgba(255, 255, 255, 0.98) 0%, 
          rgba(255, 255, 255, 0.95) 100%)
      `,
      padding: '14px 16px 14px 18px',
      borderRadius: '12px',
      boxShadow: `
        0 4px 12px rgba(30, 58, 138, 0.12),
        0 0 0 1px rgba(255, 255, 255, 0.95),
        0 0 0 2px rgba(255, 215, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.9),
        inset 0 -1px 0 rgba(0, 0, 0, 0.05)
      `,
      border: `1px solid ${GOLD}`,
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
    },
    stepContentGlow: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '2px',
      background: `linear-gradient(90deg, ${PRIMARY_BLUE}, ${ACCENT_BLUE}, ${GOLD})`,
      opacity: 0.6,
    },
    stepMarker: {
      width: '38px',
      height: '38px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 100%)`,
      color: 'white',
      fontWeight: 'bold',
      fontSize: '15px',
      boxShadow: `
        0 4px 12px rgba(30, 58, 138, 0.3),
        inset 0 1px 1px rgba(255, 255, 255, 0.3),
        inset 0 -1px 1px rgba(0, 0, 0, 0.2)
      `,
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
    },
    stepMarkerGlow: {
      position: 'absolute',
      top: '-10px',
      left: '-10px',
      right: '-10px',
      bottom: '-10px',
      background: 'radial-gradient(circle at center, rgba(255,215,0,0.3), transparent 70%)',
      zIndex: -1,
    },
    stepText: {
      flex: 1,
    },
    stepTitle: {
      fontSize: "1rem",
      fontWeight: 800,
      color: PRIMARY_BLUE,
      margin: '0 0 4px 0',
      background: 'linear-gradient(90deg, #1E3A8A, #3B82F6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    stepTitleIcon: {
      fontSize: '1rem',
      opacity: 0.9,
    },
    stepDescription: {
      fontSize: "0.78rem",
      color: DARK_BLUE,
      margin: 0,
      fontWeight: 500,
      lineHeight: 1.4,
      opacity: 0.95,
    },
    // Enhanced visualization section
    visualizationContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
    },
    pipelineVisualization: {
      width: "220px",
      height: "220px",
      position: "relative",
      backgroundColor: "rgba(15, 23, 42, 0.95)",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: `
        0 15px 35px rgba(0, 0, 0, 0.3),
        0 0 25px rgba(255, 215, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        inset 0 -1px 0 rgba(0, 0, 0, 0.5)
      `,
      border: "2px solid rgba(255, 215, 0, 0.4)",
    },
    codeBlock: {
      position: "absolute",
      borderRadius: "4px",
      opacity: 0.9,
      transformOrigin: 'center',
    },
    pipelineSvg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
    },
    processIndicator: {
      position: "absolute",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      background: `radial-gradient(circle at 30% 30%, ${BRIGHT_GOLD}, ${GOLD})`,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      boxShadow: `
        0 0 20px ${GOLD},
        0 0 40px rgba(255, 215, 0, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.4),
        inset 0 -2px 4px rgba(0, 0, 0, 0.3)
      `,
    },
    statsContainer: {
      display: "flex",
      gap: "15px",
      justifyContent: "center",
      width: "100%",
      marginTop: '10px',
    },
    stat: {
      textAlign: "center",
      background: `
        linear-gradient(135deg, 
          rgba(255, 255, 255, 0.98) 0%, 
          rgba(255, 255, 255, 0.95) 100%)
      `,
      padding: "14px 18px",
      borderRadius: "12px",
      boxShadow: `
        0 6px 20px rgba(30, 58, 138, 0.15),
        0 0 0 1px rgba(255, 215, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.9)
      `,
      minWidth: "110px",
      border: `1px solid ${GOLD}`,
      position: 'relative',
      overflow: 'hidden',
    },
    statGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: `linear-gradient(90deg, ${PRIMARY_BLUE}, ${GOLD})`,
      opacity: 0.5,
    },
    statNumber: {
      fontSize: "1.5rem",
      fontWeight: 900,
      color: PRIMARY_BLUE,
      marginBottom: "4px",
      textShadow: '0 1px 3px rgba(30, 58, 138, 0.2)',
    },
    statLabel: {
      fontSize: "0.8rem",
      color: DARK_BLUE,
      fontWeight: 700,
      letterSpacing: '0.5px',
    },
  };

  return (
    <section ref={containerRef} style={styles.processSection} aria-labelledby="process-heading">
      {/* Static Neural Network Background */}
      <canvas 
        ref={canvasRef} 
        style={styles.canvas}
        aria-hidden="true"
      />

      {/* Subtle background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 20% 30%, rgba(255,215,0,0.05) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(59,130,246,0.05) 0%, transparent 50%)`,
        zIndex: 1,
      }}></div>

      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          {/* Left side - Split timeline */}
          <motion.div 
            style={styles.leftContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              id="process-heading" 
              style={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Production Process
            </motion.h1>

            {/* Two column layout for process steps */}
            <div style={styles.stepsContainer}>
              {/* Left column: Steps 1-4 */}
              <div style={styles.leftColumn}>
                {leftSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    style={styles.timelineStep}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: step.delay,
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      style={styles.stepContent}
                      whileHover={{ 
                        boxShadow: `
                          0 8px 25px rgba(30, 58, 138, 0.15),
                          0 0 0 2px ${GOLD},
                          inset 0 1px 0 rgba(255, 255, 255, 0.95)
                        `,
                      }}
                    >
                      <div style={styles.stepContentGlow}></div>
                      <motion.div 
                        style={styles.stepMarker}
                        whileHover={{ 
                          scale: 1.08,
                          rotate: 5,
                          boxShadow: `
                            0 6px 20px rgba(255, 215, 0, 0.4),
                            inset 0 2px 4px rgba(255, 255, 255, 0.4)
                          `,
                        }}
                        animate={{
                          scale: [1, 1.02, 1],
                          rotate: [0, 2, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.3,
                        }}
                      >
                        <div style={styles.stepMarkerGlow}></div>
                        <motion.span
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          {index + 1}
                        </motion.span>
                      </motion.div>
                      <div style={styles.stepText}>
                        <h3 style={styles.stepTitle}>
                          <span style={styles.stepTitleIcon}>{step.icon}</span>
                          {step.title}
                        </h3>
                        <p style={styles.stepDescription}>{step.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Right column: Steps 5-7 */}
              <div style={styles.rightColumn}>
                {rightSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    style={styles.timelineStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: step.delay,
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      style={styles.stepContent}
                      whileHover={{ 
                        boxShadow: `
                          0 8px 25px rgba(30, 58, 138, 0.15),
                          0 0 0 2px ${GOLD},
                          inset 0 1px 0 rgba(255, 255, 255, 0.95)
                        `,
                      }}
                    >
                      <div style={styles.stepContentGlow}></div>
                      <motion.div 
                        style={styles.stepMarker}
                        whileHover={{ 
                          scale: 1.08,
                          rotate: 5,
                          boxShadow: `
                            0 6px 20px rgba(255, 215, 0, 0.4),
                            inset 0 2px 4px rgba(255, 255, 255, 0.4)
                          `,
                        }}
                        animate={{
                          scale: [1, 1.02, 1],
                          rotate: [0, 2, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: (index + 4) * 0.3,
                        }}
                      >
                        <div style={styles.stepMarkerGlow}></div>
                        <motion.span
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: (index + 4) * 0.5,
                          }}
                        >
                          {index + 5}
                        </motion.span>
                      </motion.div>
                      <div style={styles.stepText}>
                        <h3 style={styles.stepTitle}>
                          <span style={styles.stepTitleIcon}>{step.icon}</span>
                          {step.title}
                        </h3>
                        <p style={styles.stepDescription}>{step.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Enhanced Visualization */}
          <motion.div 
            style={styles.rightContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div style={styles.visualizationContainer}>
              {/* Production pipeline visualization */}
              <div style={styles.pipelineVisualization}>
                {codeBlocks.map((block) => (
                  <motion.div
                    key={block.id}
                    style={{
                      ...styles.codeBlock,
                      backgroundColor: block.color,
                      width: block.size === 'small' ? '16px' : 
                             block.size === 'medium' ? '24px' : '36px',
                      height: block.size === 'small' ? '16px' : 
                              block.size === 'medium' ? '24px' : '12px',
                      left: `${block.position.x}%`,
                      top: `${block.position.y}%`,
                      transform: `rotate(${block.rotation}deg)`,
                      boxShadow: `0 2px 6px rgba(0,0,0,0.3), 0 0 6px ${block.color}`,
                    }}
                    initial={{ opacity: 0, scale: 0.5, rotate: block.rotation - 10 }}
                    animate={{ 
                      opacity: 0.9,
                      scale: 1,
                      rotate: block.rotation,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: block.delay,
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Static pipeline flow line */}
                <svg style={styles.pipelineSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="pipeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={PRIMARY_BLUE} stopOpacity="0.7" />
                      <stop offset="25%" stopColor={ACCENT_BLUE} stopOpacity="0.9" />
                      <stop offset="50%" stopColor={GOLD} stopOpacity="0.9" />
                      <stop offset="75%" stopColor={ACCENT_BLUE} stopOpacity="0.9" />
                      <stop offset="100%" stopColor={PRIMARY_BLUE} stopOpacity="0.7" />
                    </linearGradient>
                  </defs>
                  
                  {/* Static pipeline path */}
                  <path
                    d="M10,50 Q30,30 50,50 T90,50"
                    fill="none"
                    stroke="url(#pipeline-gradient)"
                    strokeWidth="1.2"
                    strokeDasharray="5 3"
                  />
                </svg>

                {/* Static process indicator with very subtle pulse */}
                <motion.div 
                  style={styles.processIndicator}
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.6, 0.65, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              <motion.div 
                style={styles.statsContainer}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div style={styles.stat}>
                  <div style={styles.statGlow}></div>
                  <motion.div 
                    style={styles.statNumber}
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    7-Step
                  </motion.div>
                  <div style={styles.statLabel}>Quality Process</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statGlow}></div>
                  <motion.div 
                    style={styles.statNumber}
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1 
                    }}
                  >
                    24/7
                  </motion.div>
                  <div style={styles.statLabel}>Client Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;