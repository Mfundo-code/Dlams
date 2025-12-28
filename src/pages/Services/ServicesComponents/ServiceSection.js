import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Cloud, Smartphone, ShoppingCart, 
  Database, Shield, Zap, CheckCircle, X,
  Users, BarChart, Globe, Cpu, Lock, Settings,
  Wifi, Palette, Rocket, TrendingUp
} from "lucide-react";

const ServiceSection = ({ selectedServiceSlug, onServiceSelect }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define all color constants at the top
  const PRIMARY_BLUE = '#1E3A8A';
  const ACCENT_BLUE = '#3B82F6';
  const GOLD = '#FFD700';
  const BRIGHT_GOLD = '#FFC107';
  const LIGHT_BLUE = '#E6F7FF';
  const DARK_BLUE = '#1E3A8A';

  // Define service data with slugs
  const services = [
    {
      id: 1,
      slug: "digital-presence-package",
      title: "Digital Presence Package",
      icon: <Globe />,
      description: "Complete digital solution including website, SEO, and social media integration.",
      fullDescription: "Our Digital Presence Package is a comprehensive solution designed to establish and enhance your brand's online visibility.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Responsive Website Design",
        "Search Engine Optimization (SEO)",
        "Social Media Integration",
        "Google Analytics Setup",
        "Content Management System",
        "Mobile Optimization"
      ],
      tools: [
        { name: "WordPress", color: "#21759B" },
        { name: "React", color: "#61DAFB" },
        { name: "SEO Tools", color: "#4285F4" },
        { name: "Google Analytics", color: "#FF6D01" },
        { name: "Social APIs", color: "#1DA1F2" },
        { name: "Cloudflare", color: "#F38020" }
      ],
      process: [
        "Strategy & Planning",
        "Design & Development",
        "SEO Optimization",
        "Social Media Setup",
        "Testing & Launch",
        "Ongoing Support"
      ],
      benefits: [
        { icon: <Globe />, title: "360° Online Presence", desc: "Complete digital ecosystem" },
        { icon: <TrendingUp />, title: "Increased Visibility", desc: "Rank higher in search results" },
        { icon: <Users />, title: "Social Engagement", desc: "Connect with your audience" },
        { icon: <BarChart />, title: "Analytics Insights", desc: "Data-driven decisions" },
        { icon: <Rocket />, title: "Quick Launch", desc: "Fast deployment time" },
        { icon: <Settings />, title: "Easy Management", desc: "Simple content updates" }
      ],
      stats: [
        { value: "40%", label: "Traffic Increase" },
        { value: "70%", label: "Faster Launch" },
        { value: "3x", label: "Social Engagement" },
        { value: "24/7", label: "Support Available" }
      ]
    },
    {
      id: 2,
      slug: "e-commerce-solutions",
      title: "E-commerce Solutions",
      icon: <ShoppingCart />,
      description: "Complete online store solutions with payment integration and inventory management.",
      fullDescription: "Launch your online store with our comprehensive e-commerce solutions.",
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
      id: 3,
      slug: "mobile-app-development",
      title: "Mobile App Development",
      icon: <Smartphone />,
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      fullDescription: "Create engaging mobile experiences with our expert development team.",
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
      id: 4,
      slug: "custom-software-development",
      title: "Custom Software Development",
      icon: <Code />,
      description: "Tailored software solutions built specifically for your business requirements.",
      fullDescription: "We develop custom software that addresses your unique business challenges.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Enterprise Applications",
        "Business Process Automation",
        "Custom CRM/ERP Systems",
        "API Development",
        "Legacy System Migration",
        "Scalable Architecture"
      ],
      tools: [
        { name: ".NET", color: "#512BD4" },
        { name: "Java", color: "#007396" },
        { name: "Python", color: "#3776AB" },
        { name: "Node.js", color: "#339933" },
        { name: "Docker", color: "#2496ED" },
        { name: "AWS", color: "#FF9900" }
      ],
      process: [
        "Requirement Analysis",
        "System Design",
        "Development",
        "Quality Assurance",
        "Deployment",
        "Maintenance"
      ],
      benefits: [
        { icon: <Settings />, title: "Tailored Solution", desc: "Built specifically for your needs" },
        { icon: <TrendingUp />, title: "Competitive Advantage", desc: "Unique features for your business" },
        { icon: <Cpu />, title: "Scalable Architecture", desc: "Grows with your business" },
        { icon: <Lock />, title: "Enhanced Security", desc: "Custom security protocols" },
        { icon: <BarChart />, title: "Cost Efficiency", desc: "Reduce operational costs" },
        { icon: <Rocket />, title: "Faster Processes", desc: "Automate manual tasks" }
      ],
      stats: [
        { value: "50%", label: "Process Automation" },
        { value: "60%", label: "Cost Reduction" },
        { value: "99.9%", label: "Uptime" },
        { value: "3x", label: "Productivity Increase" }
      ]
    },
    {
      id: 5,
      slug: "custom-web-development",
      title: "Web Development",
      icon: <Code />,
      description: "Build responsive, high-performance web applications tailored to your business needs.",
      fullDescription: "We create custom web applications that are scalable, secure, and user-friendly.",
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
      id: 6,
      slug: "business-automation",
      title: "Business Automation",
      icon: <Settings />,
      description: "Streamline your business processes with intelligent automation solutions.",
      fullDescription: "Transform your business operations with our automation solutions. We help you eliminate manual tasks, reduce errors, and increase efficiency through custom automation workflows.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Workflow Automation",
        "Process Optimization",
        "Data Integration",
        "Reporting Automation",
        "Notification Systems",
        "RPA Implementation"
      ],
      tools: [
        { name: "Zapier", color: "#FF4A00" },
        { name: "Make", color: "#00C7B7" },
        { name: "Power Automate", color: "#0078D4" },
        { name: "Python", color: "#3776AB" },
        { name: "APIs", color: "#FF6C37" },
        { name: "Cloud Services", color: "#4285F4" }
      ],
      process: [
        "Process Analysis",
        "Automation Design",
        "Development",
        "Testing",
        "Deployment",
        "Monitoring"
      ],
      benefits: [
        { icon: <Zap />, title: "Time Savings", desc: "Reduce manual work by 80%" },
        { icon: <TrendingUp />, title: "Increased Accuracy", desc: "Eliminate human errors" },
        { icon: <BarChart />, title: "Cost Reduction", desc: "Lower operational costs" },
        { icon: <Settings />, title: "Scalability", desc: "Handle increased workload" },
        { icon: <Cpu />, title: "24/7 Operation", desc: "Run processes continuously" },
        { icon: <Rocket />, title: "Faster Results", desc: "Accelerate business outcomes" }
      ],
      stats: [
        { value: "80%", label: "Time Saved" },
        { value: "90%", label: "Error Reduction" },
        { value: "50%", label: "Cost Savings" },
        { value: "3x", label: "Productivity Boost" }
      ]
    }
  ];

  // Handle URL-based service selection
  useEffect(() => {
    if (selectedServiceSlug) {
      const service = services.find(s => s.slug === selectedServiceSlug);
      if (service) {
        setSelectedService(service);
        // Scroll to the service section
        setTimeout(() => {
          const element = document.getElementById('services-section');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [selectedServiceSlug]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const handleCardClick = (service) => {
    if (onServiceSelect) {
      onServiceSelect(service.slug);
    } else {
      setSelectedService(service);
    }
  };

  // Styles object defined after all variables
  const styles = {
    section: {
      padding: 'clamp(60px, 10vw, 100px) clamp(15px, 4vw, 20px)',
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
      marginBottom: 'clamp(40px, 8vw, 60px)',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      background: `linear-gradient(135deg, ${GOLD}20, ${ACCENT_BLUE}20)`,
      border: `1px solid ${GOLD}`,
      borderRadius: '50px',
      padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 24px)',
      fontSize: 'clamp(12px, 2.5vw, 14px)',
      fontWeight: 600,
      color: PRIMARY_BLUE,
      marginBottom: 'clamp(15px, 3vw, 20px)',
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
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
      color: '#1E40AF',
      maxWidth: 700,
      margin: '0 auto',
      lineHeight: 1.6,
      fontWeight: 500,
      padding: '0 15px',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
      gap: 'clamp(20px, 4vw, 30px)',
    },
    serviceCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: 'clamp(15px, 4vw, 20px)',
      overflow: 'hidden',
      border: `1px solid ${GOLD}`,
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(30, 58, 138, 0.1)',
      cursor: 'pointer',
    },
    cardContent: {
      padding: 'clamp(20px, 5vw, 30px)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    serviceHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'clamp(15px, 4vw, 20px)',
      marginBottom: 'clamp(15px, 4vw, 20px)',
      flexWrap: 'wrap',
    },
    serviceIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'clamp(50px, 12vw, 60px)',
      height: 'clamp(50px, 12vw, 60px)',
      borderRadius: 'clamp(12px, 3vw, 15px)',
      background: `linear-gradient(135deg, ${GOLD}20, ${ACCENT_BLUE}20)`,
      color: PRIMARY_BLUE,
      flexShrink: 0,
    },
    serviceTitleSection: {
      flex: 1,
      minWidth: '150px',
    },
    serviceTitle: {
      fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
      fontWeight: 700,
      color: PRIMARY_BLUE,
      margin: '0 0 clamp(8px, 2vw, 10px) 0',
      lineHeight: 1.3,
    },
    serviceDescription: {
      fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)',
      color: '#4B5563',
      lineHeight: 1.6,
      margin: 0,
    },
    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'clamp(10px, 2.5vw, 12px)',
      marginBottom: 'clamp(15px, 4vw, 20px)',
      height: 'clamp(120px, 30vw, 150px)',
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
      padding: 'clamp(12px, 3vw, 15px) clamp(15px, 4vw, 20px)',
    },
    overlayText: {
      color: GOLD,
      fontSize: 'clamp(12px, 2.5vw, 14px)',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
    viewDetailsButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: 'clamp(10px, 2.5vw, 12px) clamp(16px, 4vw, 20px)',
      background: `linear-gradient(135deg, ${PRIMARY_BLUE}, ${ACCENT_BLUE})`,
      color: 'white',
      border: 'none',
      borderRadius: 'clamp(8px, 2vw, 10px)',
      fontSize: 'clamp(0.9rem, 2.3vw, 1rem)',
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
      padding: 'min(20px, 5vw)',
      overflowY: 'auto',
    },
    detailsContainer: {
      background: 'white',
      borderRadius: 'min(24px, 4vw)',
      maxWidth: '1200px',
      width: '100%',
      maxHeight: '90vh',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
    },
    detailsHeader: {
      background: `linear-gradient(135deg, ${PRIMARY_BLUE}, ${ACCENT_BLUE})`,
      padding: 'clamp(20px, 5vw, 40px)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    },
    closeButton: {
      position: 'absolute',
      top: 'clamp(10px, 3vw, 20px)',
      right: 'clamp(10px, 3vw, 20px)',
      background: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      width: 'clamp(40px, 10vw, 50px)',
      height: 'clamp(40px, 10vw, 50px)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      zIndex: 10,
    },
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(15px, 4vw, 30px)',
      maxWidth: '100%',
      flexWrap: 'wrap',
    },
    headerIcon: {
      width: 'clamp(50px, 12vw, 80px)',
      height: 'clamp(50px, 12vw, 80px)',
      borderRadius: 'clamp(10px, 3vw, 20px)',
      background: 'rgba(255, 255, 255, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
      flexShrink: 0,
    },
    headerTitleSection: {
      flex: 1,
      minWidth: '200px',
    },
    headerTitle: {
      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      fontWeight: 700,
      margin: '0 0 clamp(8px, 2vw, 15px) 0',
      color: 'white',
      lineHeight: 1.2,
    },
    headerDescription: {
      fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
      opacity: 0.9,
      lineHeight: 1.6,
      margin: 0,
    },
    detailsContent: {
      padding: 'clamp(20px, 5vw, 40px)',
      overflowY: 'auto',
      maxHeight: 'calc(90vh - 200px)',
      WebkitOverflowScrolling: 'touch',
    },
    fullDescription: {
      fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
      color: '#4B5563',
      lineHeight: 1.8,
      marginBottom: 'clamp(20px, 5vw, 40px)',
      maxWidth: '100%',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: 'clamp(10px, 3vw, 20px)',
      marginBottom: 'clamp(20px, 5vw, 40px)',
    },
    statCard: {
      background: `linear-gradient(135deg, ${GOLD}10, ${ACCENT_BLUE}10)`,
      border: `1px solid ${GOLD}30`,
      borderRadius: 'clamp(10px, 3vw, 15px)',
      padding: 'clamp(15px, 4vw, 20px)',
      textAlign: 'center',
    },
    statValue: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      fontWeight: 700,
      background: `linear-gradient(135deg, ${PRIMARY_BLUE}, ${ACCENT_BLUE})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: '0 0 5px 0',
    },
    statLabel: {
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      color: '#4B5563',
      margin: 0,
    },
    detailsSections: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
      gap: 'clamp(15px, 4vw, 30px)',
      marginBottom: 'clamp(20px, 5vw, 40px)',
    },
    detailSection: {
      background: 'rgba(255, 255, 255, 0.5)',
      padding: 'clamp(15px, 4vw, 25px)',
      borderRadius: 'clamp(10px, 3vw, 15px)',
      border: `1px solid ${GOLD}20`,
    },
    detailTitle: {
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
      fontWeight: 600,
      color: PRIMARY_BLUE,
      margin: '0 0 clamp(12px, 3vw, 20px) 0',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap',
    },
    featuresList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(8px, 2vw, 12px)',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)',
      color: '#4B5563',
      lineHeight: 1.5,
    },
    bulletPoint: {
      width: 'clamp(6px, 1.5vw, 8px)',
      height: 'clamp(6px, 1.5vw, 8px)',
      borderRadius: '50%',
      background: GOLD,
      marginRight: 'clamp(8px, 2vw, 12px)',
      flexShrink: 0,
    },
    toolsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(6px, 2vw, 10px)',
    },
    toolBadge: {
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      padding: 'clamp(6px, 1.5vw, 8px) clamp(10px, 3vw, 15px)',
      borderRadius: 'clamp(15px, 4vw, 25px)',
      border: `1px solid ${ACCENT_BLUE}30`,
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      fontWeight: 500,
      color: PRIMARY_BLUE,
      transition: 'all 0.3s ease',
    },
    toolColor: {
      width: 'clamp(10px, 2.5vw, 12px)',
      height: 'clamp(10px, 2.5vw, 12px)',
      borderRadius: '50%',
      marginRight: 'clamp(6px, 1.5vw, 8px)',
      flexShrink: 0,
    },
    processBenefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
      gap: 'clamp(15px, 4vw, 30px)',
      marginBottom: 'clamp(20px, 5vw, 40px)',
    },
    processSteps: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(10px, 2.5vw, 15px)',
    },
    processStep: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(10px, 3vw, 15px)',
    },
    stepNumber: {
      width: 'clamp(28px, 7vw, 30px)',
      height: 'clamp(28px, 7vw, 30px)',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${GOLD}, ${BRIGHT_GOLD})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      fontWeight: 700,
      color: PRIMARY_BLUE,
      flexShrink: 0,
    },
    stepText: {
      fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)',
      color: '#4B5563',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
      gap: 'clamp(12px, 3vw, 20px)',
    },
    benefitCard: {
      background: `linear-gradient(135deg, ${GOLD}10, ${ACCENT_BLUE}10)`,
      border: `1px solid ${GOLD}30`,
      borderRadius: 'clamp(10px, 2.5vw, 12px)',
      padding: 'clamp(15px, 4vw, 20px)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'clamp(10px, 3vw, 15px)',
      transition: 'all 0.3s ease',
    },
    benefitIcon: {
      width: 'clamp(35px, 8vw, 40px)',
      height: 'clamp(35px, 8vw, 40px)',
      borderRadius: 'clamp(8px, 2vw, 10px)',
      background: `linear-gradient(135deg, ${GOLD}30, ${ACCENT_BLUE}30)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: PRIMARY_BLUE,
      flexShrink: 0,
    },
    benefitContent: {
      flex: 1,
      minWidth: 0,
    },
    benefitTitle: {
      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
      fontWeight: 600,
      color: PRIMARY_BLUE,
      margin: '0 0 clamp(3px, 1vw, 5px) 0',
      lineHeight: 1.3,
    },
    benefitDesc: {
      fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
      color: '#4B5563',
      margin: 0,
      lineHeight: 1.5,
    },
    viewLessButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: 'clamp(12px, 3vw, 15px) clamp(20px, 5vw, 30px)',
      background: `linear-gradient(135deg, ${PRIMARY_BLUE}, ${ACCENT_BLUE})`,
      color: 'white',
      border: 'none',
      borderRadius: 'clamp(10px, 2.5vw, 12px)',
      fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
      fontWeight: 600,
      cursor: 'pointer',
      marginTop: 'clamp(15px, 4vw, 20px)',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <section style={styles.section} id="services-section">
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
              onClick={() => handleCardClick(service)}
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
                    handleCardClick(service);
                  }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
                <motion.button
                  style={styles.closeButton}
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={isMobile ? 20 : 24} />
                </motion.button>
                
                <div style={styles.headerContent}>
                  <motion.div
                    style={styles.headerIcon}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    {React.cloneElement(selectedService.icon, { 
                      size: isMobile ? 28 : 48 
                    })}
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
                      <CheckCircle size={isMobile ? 20 : 24} style={{ flexShrink: 0 }} />
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
                      <Code size={isMobile ? 20 : 24} style={{ flexShrink: 0 }} />
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
                      <Settings size={isMobile ? 20 : 24} style={{ flexShrink: 0 }} />
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
                      <CheckCircle size={isMobile ? 20 : 24} style={{ flexShrink: 0 }} />
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
                            {React.cloneElement(benefit.icon, { 
                              size: isMobile ? 18 : 20 
                            })}
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
    </section>
  );
};

export default ServiceSection;