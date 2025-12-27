import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Cloud, Smartphone, ShoppingCart, 
  Database, Shield, Zap, CheckCircle, X,
  Users, BarChart, Globe, Cpu, Lock, Settings
} from "lucide-react";

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Define all color constants at the top
  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const GOLD = '#FFD700';
  const BRIGHT_GOLD = '#FFC107';
  const LIGHT_BLUE = '#E6F7FF';
  const DARK_BLUE = '#1E3A8A';

  const services = [
    {
      id: 1,
      title: "Custom Web Development",
      icon: <Code />,
      description: "Build responsive, high-performance web applications tailored to your business needs.",
      fullDescription: "We create custom web applications that are scalable, secure, and user-friendly. From enterprise solutions to startup MVPs, we deliver robust applications using modern technologies.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "Real-time Applications",
        "API Integration"
      ],
      tools: [
        { name: "React", color: "#61DAFB" },
        { name: "Next.js", color: "#000000" },
        { name: "Vue.js", color: "#4FC08D" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Node.js", color: "#339933" },
        { name: "GraphQL", color: "#E10098" }
      ],
      process: [
        "Requirement Analysis",
        "UI/UX Design",
        "Development",
        "Testing & QA",
        "Deployment",
        "Maintenance"
      ],
      benefits: [
        { icon: <Settings />, title: "100% Custom Solution", desc: "Tailored to your specific needs" },
        { icon: <Globe />, title: "SEO Optimized", desc: "Rank higher in search results" },
        { icon: <Smartphone />, title: "Mobile Responsive", desc: "Works perfectly on all devices" },
        { icon: <Zap />, title: "Fast Loading", desc: "Optimized for maximum speed" },
        { icon: <Cpu />, title: "Scalable Architecture", desc: "Grows with your business" },
        { icon: <Lock />, title: "Security Built-in", desc: "Enterprise-grade protection" }
      ],
      stats: [
        { value: "30%", label: "Faster Time-to-Market" },
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "50+", label: "Projects Delivered" },
        { value: "24/7", label: "Support Available" }
      ]
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: <Smartphone />,
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      fullDescription: "Create engaging mobile experiences with our expert development team. We build both native and cross-platform applications that provide optimal performance and user experience.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "iOS Native Apps",
        "Android Native Apps",
        "Cross-platform Solutions",
        "Push Notifications",
        "Offline Capabilities",
        "App Store Optimization"
      ],
      tools: [
        { name: "React Native", color: "#61DAFB" },
        { name: "Flutter", color: "#02569B" },
        { name: "Swift", color: "#FA7343" },
        { name: "Kotlin", color: "#7F52FF" },
        { name: "Firebase", color: "#FFCA28" },
        { name: "Expo", color: "#000020" }
      ],
      process: [
        "App Strategy",
        "Wireframing",
        "UI/UX Design",
        "Development",
        "Testing",
        "Store Deployment"
      ],
      benefits: [
        { icon: <Cpu />, title: "Native Performance", desc: "Smooth and responsive experience" },
        { icon: <BarChart />, title: "Cost-effective", desc: "Save up to 40% on development" },
        { icon: <Zap />, title: "Faster Development", desc: "60% faster delivery time" },
        { icon: <Settings />, title: "Easy Maintenance", desc: "Single codebase management" },
        { icon: <Code />, title: "Code Reusability", desc: "Share code across platforms" },
        { icon: <Cloud />, title: "Regular Updates", desc: "Continuous improvement" }
      ],
      stats: [
        { value: "40%", label: "Cost Reduction" },
        { value: "2M+", label: "App Downloads" },
        { value: "4.8★", label: "Average Rating" },
        { value: "99%", label: "Client Satisfaction" }
      ]
    },
    {
      id: 3,
      title: "Cloud Solutions & DevOps",
      icon: <Cloud />,
      description: "Scalable cloud infrastructure and automated deployment pipelines for your applications.",
      fullDescription: "Implement robust cloud solutions with automated CI/CD pipelines, containerization, and infrastructure as code. We ensure your applications are scalable, secure, and highly available.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Cloud Migration",
        "Container Orchestration",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Disaster Recovery"
      ],
      tools: [
        { name: "AWS", color: "#FF9900" },
        { name: "Azure", color: "#0078D4" },
        { name: "Docker", color: "#2496ED" },
        { name: "Kubernetes", color: "#326CE5" },
        { name: "Terraform", color: "#7B42BC" },
        { name: "GitHub Actions", color: "#2088FF" }
      ],
      process: [
        "Assessment",
        "Architecture Design",
        "Implementation",
        "Security Setup",
        "Deployment",
        "Monitoring"
      ],
      benefits: [
        { icon: <Settings />, title: "Auto-scaling", desc: "Automatically scale based on demand" },
        { icon: <Zap />, title: "High Availability", desc: "99.99% uptime guarantee" },
        { icon: <BarChart />, title: "Cost Optimization", desc: "Reduce cloud costs by 30%" },
        { icon: <Lock />, title: "Security Compliance", desc: "Meet industry standards" },
        { icon: <Cloud />, title: "Automated Backups", desc: "Zero data loss guarantee" },
        { icon: <Cpu />, title: "24/7 Monitoring", desc: "Real-time performance tracking" }
      ],
      stats: [
        { value: "99.99%", label: "Uptime" },
        { value: "60%", label: "Faster Deployment" },
        { value: "30%", label: "Cost Savings" },
        { value: "100%", label: "Security Compliance" }
      ]
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      icon: <ShoppingCart />,
      description: "Complete online store solutions with payment integration and inventory management.",
      fullDescription: "Launch your online store with our comprehensive e-commerce solutions. We handle everything from store setup to payment integration and marketing automation.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Store Setup & Design",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing",
        "Shipping Integration",
        "Marketing Automation"
      ],
      tools: [
        { name: "Shopify", color: "#7AB55C" },
        { name: "WooCommerce", color: "#96588A" },
        { name: "Magento", color: "#EE6723" },
        { name: "Stripe", color: "#635BFF" },
        { name: "PayPal", color: "#00457C" },
        { name: "Mailchimp", color: "#FFE01B" }
      ],
      process: [
        "Market Research",
        "Store Design",
        "Development",
        "Payment Setup",
        "Testing",
        "Launch & Marketing"
      ],
      benefits: [
        { icon: <Smartphone />, title: "Mobile Optimized", desc: "Seamless mobile shopping" },
        { icon: <Lock />, title: "Secure Payments", desc: "PCI DSS compliant" },
        { icon: <Globe />, title: "SEO Friendly", desc: "Rank higher in search" },
        { icon: <BarChart />, title: "Analytics Dashboard", desc: "Real-time sales insights" },
        { icon: <Users />, title: "Multi-language", desc: "Global customer support" },
        { icon: <Settings />, title: "Multi-currency", desc: "Accept worldwide payments" }
      ],
      stats: [
        { value: "3x", label: "Conversion Rate" },
        { value: "40%", label: "Cart Abandonment Reduced" },
        { value: "2.5x", label: "Mobile Traffic" },
        { value: "99.5%", label: "Payment Success Rate" }
      ]
    },
    {
      id: 5,
      title: "Database Solutions",
      icon: <Database />,
      description: "Robust database design, optimization, and management for your applications.",
      fullDescription: "Design and implement scalable database architectures that ensure data integrity, performance, and security for your applications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Database Design",
        "Performance Optimization",
        "Data Migration",
        "Backup & Recovery",
        "Security Implementation",
        "Replication Setup"
      ],
      tools: [
        { name: "PostgreSQL", color: "#336791" },
        { name: "MongoDB", color: "#47A248" },
        { name: "MySQL", color: "#4479A1" },
        { name: "Redis", color: "#DC382D" },
        { name: "Elasticsearch", color: "#005571" },
        { name: "Firestore", color: "#FFCA28" }
      ],
      process: [
        "Requirement Analysis",
        "Schema Design",
        "Implementation",
        "Optimization",
        "Security Setup",
        "Monitoring"
      ],
      benefits: [
        { icon: <Zap />, title: "High Performance", desc: "Millisecond response times" },
        { icon: <Lock />, title: "Data Security", desc: "Enterprise-grade encryption" },
        { icon: <Cpu />, title: "Scalability", desc: "Handle millions of records" },
        { icon: <Settings />, title: "Real-time Updates", desc: "Instant data synchronization" },
        { icon: <Cloud />, title: "Automatic Backups", desc: "Zero data loss guarantee" },
        { icon: <Shield />, title: "Disaster Recovery", desc: "Quick recovery from failures" }
      ],
      stats: [
        { value: "10x", label: "Query Performance" },
        { value: "100%", label: "Data Integrity" },
        { value: "99.99%", label: "Availability" },
        { value: "<100ms", label: "Response Time" }
      ]
    },
    {
      id: 6,
      title: "Security & Compliance",
      icon: <Shield />,
      description: "Comprehensive security solutions and compliance implementation for your applications.",
      fullDescription: "Protect your applications with our security solutions including penetration testing, vulnerability assessment, and compliance implementation.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "SSL Implementation",
        "GDPR Compliance",
        "Security Audits",
        "Firewall Setup"
      ],
      tools: [
        { name: "OWASP", color: "#000000" },
        { name: "Let's Encrypt", color: "#003A70" },
        { name: "Cloudflare", color: "#F38020" },
        { name: "Nessus", color: "#00AEEF" },
        { name: "Burp Suite", color: "#FF6B35" },
        { name: "Wireshark", color: "#1679B7" }
      ],
      process: [
        "Security Assessment",
        "Risk Analysis",
        "Implementation",
        "Testing",
        "Compliance Check",
        "Documentation"
      ],
      benefits: [
        { icon: <Lock />, title: "Data Protection", desc: "End-to-end encryption" },
        { icon: <Settings />, title: "Regulatory Compliance", desc: "GDPR, HIPAA, PCI DSS" },
        { icon: <Shield />, title: "Threat Prevention", desc: "Real-time threat detection" },
        { icon: <BarChart />, title: "Regular Audits", desc: "Continuous security checks" },
        { icon: <Users />, title: "Security Training", desc: "Team awareness programs" },
        { icon: <Zap />, title: "Incident Response", desc: "24/7 emergency support" }
      ],
      stats: [
        { value: "100%", label: "Compliance Rate" },
        { value: "0", label: "Security Breaches" },
        { value: "99.9%", label: "Threat Detection" },
        { value: "24/7", label: "Monitoring" }
      ]
    }
  ];

  // Styles object defined after all variables
  const styles = {
    section: {
      padding: '100px 20px',
      background: `linear-gradient(135deg, 
        rgba(30, 58, 138, 0.05) 0%, 
        ${LIGHT_BLUE} 20%,
        rgba(255, 255, 255, 0.98) 40%,
        ${LIGHT_BLUE} 60%,
        rgba(255, 215, 0, 0.05) 100%
      )`,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      minHeight: '100vh',
    },
    animatedBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    },
    floatingShape: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(15px)',
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
      maxWidth: 700,
      margin: '0 auto',
      lineHeight: 1.6,
      fontWeight: 500,
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
    },
    serviceCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      overflow: 'hidden',
      border: `1px solid ${GOLD}`,
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(30, 58, 138, 0.1)',
      cursor: 'pointer',
    },
    cardContent: {
      padding: '30px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    serviceHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      marginBottom: '20px',
    },
    serviceIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60px',
      height: '60px',
      borderRadius: '15px',
      background: `linear-gradient(135deg, ${GOLD}20, ${ACCENT_BLUE}20)`,
      color: PRIMARY_BLUE,
      flexShrink: 0,
    },
    serviceTitleSection: {
      flex: 1,
    },
    serviceTitle: {
      fontSize: '1.4rem',
      fontWeight: 700,
      color: PRIMARY_BLUE,
      margin: '0 0 10px 0',
      lineHeight: 1.3,
    },
    serviceDescription: {
      fontSize: '0.95rem',
      color: '#4B5563',
      lineHeight: 1.6,
      margin: 0,
    },
    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '12px',
      marginBottom: '20px',
      height: '150px',
    },
    serviceImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    imageOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(to top, rgba(30, 58, 138, 0.8), transparent)',
      padding: '15px 20px',
    },
    overlayText: {
      color: GOLD,
      fontSize: '14px',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
    viewDetailsButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '12px 20px',
      background: `linear-gradient(135deg, ${PRIMARY_BLUE}, ${ACCENT_BLUE})`,
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      marginTop: 'auto',
      transition: 'all 0.3s ease',
    },
    // Modal/DETAILS VIEW Styles
    detailsOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflowY: 'auto',
    },
    detailsContainer: {
      background: 'white',
      borderRadius: '24px',
      maxWidth: '1200px',
      width: '100%',
      maxHeight: '90vh',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
    },
    detailsHeader: {
      background: `linear-gradient(135deg, ${PRIMARY_BLUE}, ${ACCENT_BLUE})`,
      padding: '40px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
    },
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
      maxWidth: '800px',
    },
    headerIcon: {
      width: '80px',
      height: '80px',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
      flexShrink: 0,
    },
    headerTitleSection: {
      flex: 1,
    },
    headerTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      margin: '0 0 15px 0',
      color: 'white',
    },
    headerDescription: {
      fontSize: '1.1rem',
      opacity: 0.9,
      lineHeight: 1.6,
      margin: 0,
    },
    detailsContent: {
      padding: '40px',
      overflowY: 'auto',
      maxHeight: 'calc(90vh - 200px)',
    },
    fullDescription: {
      fontSize: '1.1rem',
      color: '#4B5563',
      lineHeight: 1.8,
      marginBottom: '40px',
      maxWidth: '800px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '20px',
      marginBottom: '40px',
    },
    statCard: {
      background: `linear-gradient(135deg, ${GOLD}10, ${ACCENT_BLUE}10)`,
      border: `1px solid ${GOLD}30`,
      borderRadius: '15px',
      padding: '20px',
      textAlign: 'center',
    },
    statValue: {
      fontSize: '2rem',
      fontWeight: 700,
      background: `linear-gradient(135deg, ${PRIMARY_BLUE}, ${ACCENT_BLUE})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: '0 0 5px 0',
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#4B5563',
      margin: 0,
    },
    detailsSections: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '40px',
    },
    detailSection: {
      background: 'rgba(255, 255, 255, 0.5)',
      padding: '25px',
      borderRadius: '15px',
      border: `1px solid ${GOLD}20`,
    },
    detailTitle: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: PRIMARY_BLUE,
      margin: '0 0 20px 0',
      display: 'flex',
      alignItems: 'center',
    },
    featuresList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.95rem',
      color: '#4B5563',
    },
    bulletPoint: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: GOLD,
      marginRight: '12px',
      flexShrink: 0,
    },
    toolsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
    },
    toolBadge: {
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      padding: '8px 15px',
      borderRadius: '25px',
      border: `1px solid ${ACCENT_BLUE}30`,
      fontSize: '0.9rem',
      fontWeight: 500,
      color: PRIMARY_BLUE,
      transition: 'all 0.3s ease',
    },
    toolColor: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      marginRight: '8px',
    },
    processBenefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '40px',
    },
    processSteps: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    processStep: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    stepNumber: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${GOLD}, ${BRIGHT_GOLD})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.9rem',
      fontWeight: 700,
      color: PRIMARY_BLUE,
      flexShrink: 0,
    },
    stepText: {
      fontSize: '0.95rem',
      color: '#4B5563',
      fontWeight: 500,
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
    },
    benefitCard: {
      background: `linear-gradient(135deg, ${GOLD}10, ${ACCENT_BLUE}10)`,
      border: `1px solid ${GOLD}30`,
      borderRadius: '12px',
      padding: '20px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '15px',
      transition: 'all 0.3s ease',
    },
    benefitIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: `linear-gradient(135deg, ${GOLD}30, ${ACCENT_BLUE}30)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: PRIMARY_BLUE,
      flexShrink: 0,
    },
    benefitContent: {
      flex: 1,
    },
    benefitTitle: {
      fontSize: '1rem',
      fontWeight: 600,
      color: PRIMARY_BLUE,
      margin: '0 0 5px 0',
    },
    benefitDesc: {
      fontSize: '0.85rem',
      color: '#4B5563',
      margin: 0,
      lineHeight: 1.5,
    },
    viewLessButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '15px 30px',
      background: `linear-gradient(135deg, ${PRIMARY_BLUE}, ${ACCENT_BLUE})`,
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: 600,
      cursor: 'pointer',
      marginTop: '20px',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <>
      <section style={styles.section}>
        {/* Animated Background */}
        <div style={styles.animatedBackground}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                ...styles.floatingShape,
                left: `${(i * 5) % 100}%`,
                top: `${30 + (i * 3) % 50}%`,
                width: `${20 + i * 2}px`,
                height: `${20 + i * 2}px`,
                background: `radial-gradient(circle, ${
                  i % 2 === 0 ? ACCENT_BLUE : GOLD
                }15, transparent 70%)`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
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
              Our Services
            </motion.div>
            <motion.h2 
              style={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Comprehensive Software Solutions
            </motion.h2>
            <motion.p
              style={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We offer end-to-end software development services, from initial concept to 
              deployment and maintenance, using cutting-edge technologies.
            </motion.p>
          </motion.div>

          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                style={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 20px 40px ${PRIMARY_BLUE}20`
                }}
                onClick={() => setSelectedService(service)}
              >
                <div style={styles.cardContent}>
                  {/* Service Header */}
                  <div style={styles.serviceHeader}>
                    <motion.div
                      style={styles.serviceIcon}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div style={styles.serviceTitleSection}>
                      <h3 style={styles.serviceTitle}>{service.title}</h3>
                      <p style={styles.serviceDescription}>{service.description}</p>
                    </div>
                  </div>

                  {/* Service Image */}
                  <div style={styles.imageContainer}>
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      style={styles.serviceImage}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                      }}
                    />
                    <div style={styles.imageOverlay}>
                      <span style={styles.overlayText}>{service.title}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    style={styles.viewDetailsButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            style={styles.detailsOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              style={styles.detailsContainer}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div style={styles.detailsHeader}>
                <button
                  style={styles.closeButton}
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </button>
                
                <div style={styles.headerContent}>
                  <motion.div
                    style={styles.headerIcon}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    {selectedService.icon}
                  </motion.div>
                  <div style={styles.headerTitleSection}>
                    <h2 style={styles.headerTitle}>{selectedService.title}</h2>
                    <p style={styles.headerDescription}>{selectedService.fullDescription}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={styles.detailsContent}>
                {/* Stats */}
                <div style={styles.statsGrid}>
                  {selectedService.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      style={styles.statCard}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <h3 style={styles.statValue}>{stat.value}</h3>
                      <p style={styles.statLabel}>{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Features and Tools */}
                <div style={styles.detailsSections}>
                  {/* Features */}
                  <div style={styles.detailSection}>
                    <h4 style={styles.detailTitle}>
                      <CheckCircle size={24} style={{ marginRight: 10 }} />
                      Key Features
                    </h4>
                    <div style={styles.featuresList}>
                      {selectedService.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          style={styles.featureItem}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                        >
                          <div style={styles.bulletPoint} />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div style={styles.detailSection}>
                    <h4 style={styles.detailTitle}>
                      <Code size={24} style={{ marginRight: 10 }} />
                      Technology Stack
                    </h4>
                    <div style={styles.toolsGrid}>
                      {selectedService.tools.map((tool, idx) => (
                        <motion.div
                          key={idx}
                          style={styles.toolBadge}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <div
                            style={{
                              ...styles.toolColor,
                              backgroundColor: tool.color,
                            }}
                          />
                          <span>{tool.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Process and Benefits */}
                <div style={styles.processBenefitsGrid}>
                  {/* Process */}
                  <div style={styles.detailSection}>
                    <h4 style={styles.detailTitle}>
                      <Settings size={24} style={{ marginRight: 10 }} />
                      Our Process
                    </h4>
                    <div style={styles.processSteps}>
                      {selectedService.process.map((step, idx) => (
                        <motion.div
                          key={idx}
                          style={styles.processStep}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.05 }}
                        >
                          <div style={styles.stepNumber}>{idx + 1}</div>
                          <span style={styles.stepText}>{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div style={styles.detailSection}>
                    <h4 style={styles.detailTitle}>
                      <CheckCircle size={24} style={{ marginRight: 10 }} />
                      Key Benefits
                    </h4>
                    <div style={styles.benefitsGrid}>
                      {selectedService.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          style={styles.benefitCard}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.05 }}
                          whileHover={{ y: -5, boxShadow: `0 10px 20px ${PRIMARY_BLUE}10` }}
                        >
                          <div style={styles.benefitIcon}>
                            {benefit.icon}
                          </div>
                          <div style={styles.benefitContent}>
                            <h5 style={styles.benefitTitle}>{benefit.title}</h5>
                            <p style={styles.benefitDesc}>{benefit.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Less Button */}
                <motion.button
                  style={styles.viewLessButton}
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  View Less
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceSection;