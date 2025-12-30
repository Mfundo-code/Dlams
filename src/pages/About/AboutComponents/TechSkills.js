// ServicesComponents/TechSkills.js
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function TechSkills() {
  const [activeCategory, setActiveCategory] = useState("development");
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Dlams Software Solutions Color Scheme
  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const GOLD = '#FFD700';
  const LIGHT_GOLD = '#FFECB3';
  const LIGHT_BLUE = '#E6F7FF';
  const DARK_BLUE = '#1E40AF';

  const CATEGORY_COLOR = PRIMARY_BLUE;

  const serviceCategories = {
    development: {
      title: "Development",
      icon: "🚀",
      color: CATEGORY_COLOR,
      skills: [
        {
          name: "Frontend Development",
          description: "Modern web applications with responsive design",
          solutions: ["Web Design", "SPAs", "Dashboards"],
          tools: ["React", "Vue.js", "Next.js"]
        },
        {
          name: "Backend Development",
          description: "Robust APIs and database solutions",
          solutions: ["APIs", "Authentication", "Payment Integration"],
          tools: ["Node.js", ".NET", "PostgreSQL"]
        },
        {
          name: "Mobile Apps",
          description: "Cross-platform iOS and Android applications",
          solutions: ["Native Performance", "Push Notifications"],
          tools: ["React Native", "Expo"]
        }
      ]
    },
    infrastructure: {
      title: "Infrastructure",
      icon: "☁️",
      color: CATEGORY_COLOR,
      skills: [
        {
          name: "Cloud Hosting",
          description: "Scalable cloud infrastructure",
          solutions: ["Web Hosting", "Auto-scaling"],
          tools: ["Azure", "AWS", "Docker"]
        },
        {
          name: "DevOps",
          description: "Automated deployment and monitoring",
          solutions: ["CI/CD", "Monitoring"],
          tools: ["GitHub Actions", "Jenkins"]
        },
        {
          name: "Security",
          description: "SSL certificates and data protection",
          solutions: ["SSL", "Encryption"],
          tools: ["Let's Encrypt", "Firewalls"]
        }
      ]
    },
    solutions: {
      title: "Solutions",
      icon: "💼",
      color: CATEGORY_COLOR,
      skills: [
        {
          name: "E-commerce",
          description: "Complete online shopping platforms",
          solutions: ["Shopping Cart", "Payment Gateway"],
          tools: ["Shopify", "WooCommerce"]
        },
        {
          name: "Digital Presence",
          description: "Complete branding package",
          solutions: ["Website", "Logo", "Email"],
          tools: ["Custom Design", "Mail Servers"]
        },
        {
          name: "Enterprise Software",
          description: "Tailored business solutions",
          solutions: ["Workflow Automation", "CRM"],
          tools: ["Custom Development", "APIs"]
        }
      ]
    },
    support: {
      title: "Support",
      icon: "🛡️",
      color: CATEGORY_COLOR,
      skills: [
        {
          name: "Technical Support",
          description: "Round-the-clock assistance",
          solutions: ["Bug Fixing", "Monitoring"],
          tools: ["Ticketing", "Live Chat"]
        },
        {
          name: "Optimization",
          description: "Performance and speed tuning",
          solutions: ["Speed", "Caching"],
          tools: ["CDN", "Database Optimization"]
        },
        {
          name: "Maintenance",
          description: "Regular updates and security patches",
          solutions: ["Updates", "Backups"],
          tools: ["Automated Systems"]
        }
      ]
    }
  };

  // Enhanced Neural Network Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let nodes = [];
    let connections = [];
    const mouse = { x: 0, y: 0, active: false };

    const techSymbols = ['⚡', '🚀', '💻', '🔗', '🌐', '📱', '🔧', '🎯', '✨', '🌟'];

    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseSize = Math.random() * 5 + 3;
        this.size = this.baseSize;
        this.symbol = techSymbols[Math.floor(Math.random() * techSymbols.length)];
        this.pulseSpeed = 0.02 + Math.random() * 0.02;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.opacity = 0.15 + Math.random() * 0.2;
        this.hue = Math.random() > 0.7 ? 50 : 220;
        this.saturation = 80 + Math.random() * 20;
        this.brightness = 70 + Math.random() * 20;
      }

      update() {
        this.size = this.baseSize + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 2;
        
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2.5
        );
        gradient.addColorStop(0, `hsla(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.opacity * 0.4})`);
        gradient.addColorStop(1, `hsla(${this.hue}, ${this.saturation}%, ${this.brightness}%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.brightness + 10}%, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        if (Math.random() > 0.6) {
          ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, 95%, ${this.opacity * 1.3})`;
          ctx.font = `${this.size * 1.1}px Arial`;
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
        this.progress = Math.random() * Math.PI * 2;
        this.speed = 0.02 + Math.random() * 0.02;
        this.hue = (node1.hue + node2.hue) / 2;
      }

      update() {
        this.progress += this.speed;
      }

      draw() {
        const alpha = (Math.sin(this.progress) + 1) * 0.25 + 0.2;
        
        const gradient = ctx.createLinearGradient(
          this.node1.x, this.node1.y,
          this.node2.x, this.node2.y
        );
        gradient.addColorStop(0, `hsla(${this.node1.hue}, 85%, 75%, ${alpha * 0.3})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 90%, 85%, ${alpha * 0.4})`);
        gradient.addColorStop(1, `hsla(${this.node2.hue}, 85%, 75%, ${alpha * 0.3})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([3, 2]);
        ctx.lineDashOffset = -this.progress * 8;

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
          Math.random() * canvas.height
        ));
      }
    };

    const updateConnections = () => {
      connections = [];
      const maxDistance = 160;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodes[j].x - nodes[i].x, 2) + Math.pow(nodes[j].y - nodes[i].y, 2)
          );
          
          if (distance < maxDistance && Math.random() > 0.25) {
            connections.push(new Connection(nodes[i], nodes[j]));
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      connections.forEach(connection => {
        connection.update();
        connection.draw();
      });

      nodes.forEach(node => {
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const force = (120 - distance) / 120;
            node.x -= dx * force * 0.02;
            node.y -= dy * force * 0.02;
          }
        }

        node.update();
        node.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      initNodes();
      updateConnections();
      animate();
    };

    init();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initNodes();
      updateConnections();
    });

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const styles = {
    section: {
      padding: '60px 15px',
      background: `linear-gradient(135deg, 
        rgba(255, 215, 0, 0.1) 0%, 
        ${LIGHT_BLUE} 25%,
        rgba(255, 255, 255, 0.95) 50%,
        ${LIGHT_BLUE} 75%,
        rgba(255, 215, 0, 0.1) 100%
      )`,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      borderRadius: '24px',
      margin: '20px 10px',
      border: `2px solid ${GOLD}`,
      boxShadow: `0 25px 50px rgba(30, 58, 138, 0.1), 0 0 40px rgba(255, 215, 0, 0.15)`,
      minHeight: '400px',
    },
    canvas: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity: 0.6,
      zIndex: 1,
    },
    container: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    title: {
      fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
      fontWeight: 800,
      background: `linear-gradient(135deg, ${PRIMARY_BLUE} 0%, ${ACCENT_BLUE} 45%, ${GOLD} 100%)`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      margin: "0 0 15px 0",
      textShadow: `0 4px 30px ${PRIMARY_BLUE}20, 0 0 50px rgba(255, 215, 0, 0.2)`,
      letterSpacing: '-0.3px',
      position: 'relative',
      padding: '0 10px',
    },
    subtitle: {
      fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
      color: DARK_BLUE,
      maxWidth: 600,
      margin: "0 auto",
      lineHeight: 1.6,
      background: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(12px)",
      padding: "15px",
      borderRadius: "16px",
      border: `1px solid ${GOLD}`,
      fontWeight: 600,
      boxShadow: `0 10px 30px ${PRIMARY_BLUE}10, inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
    },
    categories: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "30px",
      padding: '0 10px',
    },
    categoryButton: (isActive) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "12px 20px",
      borderRadius: "50px",
      border: "none",
      background: isActive 
        ? `linear-gradient(135deg, ${CATEGORY_COLOR} 0%, ${ACCENT_BLUE} 100%)` 
        : "rgba(255, 255, 255, 0.9)",
      color: isActive ? "white" : PRIMARY_BLUE,
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      fontWeight: 700,
      fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
      backdropFilter: "blur(10px)",
      border: `1px solid ${isActive ? CATEGORY_COLOR : GOLD}`,
      transform: isActive ? "scale(1.05)" : "scale(1)",
      boxShadow: isActive 
        ? `0 8px 25px ${CATEGORY_COLOR}40, 0 0 0 1px ${CATEGORY_COLOR}20, 0 0 15px rgba(59, 130, 246, 0.3)` 
        : `0 4px 15px ${PRIMARY_BLUE}08`,
      position: 'relative',
      overflow: 'hidden',
      minWidth: 'fit-content',
    }),
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
      gap: "20px",
      padding: '0 10px',
    },
    skillCard: {
      background: "rgba(255, 255, 255, 0.92)",
      backdropFilter: "blur(15px)",
      border: `1px solid ${GOLD}`,
      borderRadius: "20px",
      padding: "24px",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      overflow: "hidden",
      boxShadow: `0 10px 30px ${PRIMARY_BLUE}05, 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.6)`,
      zIndex: 2,
      textAlign: 'center',
    },
    skillHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "15px",
      position: "relative",
    },
    skillName: {
      fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
      fontWeight: 800,
      margin: "0 0 10px 0",
      background: `linear-gradient(90deg, ${CATEGORY_COLOR}, ${ACCENT_BLUE})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: `0 2px 15px ${CATEGORY_COLOR}20`,
      textAlign: 'center',
    },
    skillDescription: {
      color: DARK_BLUE,
      fontSize: "clamp(0.9rem, 2vw, 1rem)",
      lineHeight: 1.6,
      marginBottom: "20px",
      fontWeight: 500,
      padding: "12px",
      background: `linear-gradient(135deg, ${LIGHT_GOLD}08, ${LIGHT_BLUE}08)`,
      borderRadius: "12px",
      borderLeft: `3px solid ${GOLD}`,
      textAlign: 'center',
    },
    projectsSection: {
      marginTop: "15px",
    },
    sectionTitle: {
      fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
      fontWeight: 700,
      color: PRIMARY_BLUE,
      margin: "0 0 12px 0",
      textTransform: "uppercase",
      letterSpacing: "1px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "6px 0",
      borderBottom: `1px solid ${GOLD}40`,
    },
    tags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      justifyContent: "center",
    },
    tag: {
      padding: "6px 14px",
      background: `linear-gradient(135deg, ${CATEGORY_COLOR}15, ${CATEGORY_COLOR}05)`,
      border: `1px solid ${CATEGORY_COLOR}30`,
      borderRadius: "20px",
      fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
      color: CATEGORY_COLOR,
      fontWeight: 600,
      transition: "all 0.3s ease",
      boxShadow: `0 4px 12px ${CATEGORY_COLOR}15`,
      backdropFilter: "blur(4px)",
      textAlign: 'center',
    },
  };

  return (
    <section ref={containerRef} style={styles.section} aria-labelledby="skills-heading">
      <canvas 
        ref={canvasRef} 
        style={styles.canvas}
        aria-hidden="true"
      />

      <motion.div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '80px',
          height: '80px',
          background: `radial-gradient(circle, ${GOLD}20, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(15px)',
          zIndex: 1,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          width: '60px',
          height: '60px',
          background: `radial-gradient(circle, ${ACCENT_BLUE}20, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(12px)',
          zIndex: 1,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div style={styles.container}>
        <motion.div 
          style={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            id="skills-heading" 
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Services & Solutions
          </motion.h2>
          <motion.p 
            style={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional digital solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <motion.div 
          style={styles.categories}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {Object.entries(serviceCategories).map(([key, category]) => (
            <motion.button
              key={key}
              style={styles.categoryButton(activeCategory === key)}
              onClick={() => setActiveCategory(key)}
              whileHover={{ 
                scale: 1.08, 
                y: -2,
                boxShadow: `0 10px 30px ${CATEGORY_COLOR}30, 0 0 0 1px ${CATEGORY_COLOR}40`
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}
              >
                {category.icon}
              </motion.span>
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          style={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={activeCategory}
        >
          {serviceCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              style={styles.skillCard}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                boxShadow: `0 15px 35px ${PRIMARY_BLUE}15, 0 0 0 1px ${CATEGORY_COLOR}40, inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
              }}
              custom={index}
            >
              <motion.div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, ${CATEGORY_COLOR}30, ${ACCENT_BLUE}50, ${GOLD}30)`,
                  opacity: 0.6,
                }}
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />

              <div style={styles.skillHeader}>
                <div>
                  <h3 style={styles.skillName}>
                    {skill.name}
                  </h3>
                </div>
              </div>

              <p style={styles.skillDescription}>
                {skill.description}
              </p>

              <div style={styles.projectsSection}>
                <h4 style={styles.sectionTitle}>
                  <span>🎯</span>
                  Key Features
                </h4>
                <div style={styles.tags}>
                  {skill.solutions.map(solution => (
                    <motion.span 
                      key={solution} 
                      style={styles.tag}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {solution}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div style={styles.projectsSection}>
                <h4 style={styles.sectionTitle}>
                  <span>🛠️</span>
                  Technology
                </h4>
                <div style={styles.tags}>
                  {skill.tools.map(tool => (
                    <motion.span 
                      key={tool} 
                      style={styles.tag}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}