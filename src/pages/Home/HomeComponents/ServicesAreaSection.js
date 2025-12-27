import React from "react";

const ServicesAreaSection = () => {
  const services = [
    {
      id: 1,
      title: "Digital Presence Package",
      description: "Complete digital branding solution including website, logo design, templates, professional emails, business cards and email signatures.",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description: "Full e-commerce platforms with payment integration, inventory management, secure checkout and everything needed for online selling.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      title: "Mobile Applications",
      description: "Cross-platform mobile applications for iOS and Android, built with React Native for maximum reach and performance.",
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      title: "Custom Software Solutions",
      description: "Tailored enterprise software solutions built specifically for your business workflows and requirements.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Our Services</h2>
        <p style={styles.subtitle}>
          Comprehensive digital solutions for businesses, startups and NGOs
        </p>
      </div>

      <div style={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={service.id} style={styles.serviceCard}>
            <div style={styles.imageContainer}>
              <img 
                src={service.image} 
                alt={service.title}
                style={styles.image}
              />
              <div style={styles.imageOverlay} />
            </div>
            
            <div style={styles.cardContent}>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
              
              <div style={styles.features}>
                {getServiceFeatures(service.id).map((feature, idx) => (
                  <div key={idx} style={styles.featureItem}>
                    <span style={styles.checkmark}>✓</span>
                    <span style={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button style={styles.learnMoreButton}>
                Get Quote
                <span style={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Helper function to return features based on service type
const getServiceFeatures = (serviceId) => {
  const features = {
    1: ["Website Design", "Logo Creation", "Business Templates", "Professional Emails"],
    2: ["Payment Integration", "Inventory Management", "Order Tracking", "Secure Checkout"],
    3: ["iOS & Android", "Cross-Platform", "Push Notifications", "App Store Deployment"],
    4: ["Custom Development", "Workflow Automation", "API Integration", "Cloud Hosting"]
  };
  return features[serviceId] || [];
};

export default ServicesAreaSection;

/* =========================
   Dlams Color Scheme - Same Design Structure
   ========================= */
const styles = {
  container: {
    padding: "3rem 1.5rem",
    background: "transparent",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
    maxWidth: "700px",
    margin: "0 auto 3rem",
  },
  title: {
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
    fontWeight: "bold",
    color: "#1E3A8A",
    margin: "0 0 0.8rem 0",
    background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #FFD700 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#1E40AF",
    lineHeight: 1.5,
    margin: 0,
    fontWeight: "600",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  serviceCard: {
    background: "#ffffff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 6px 20px rgba(30, 58, 138, 0.12)",
    transition: "all 0.3s ease",
    border: "2px solid #FFD700", // Yellow border added
    position: "relative",
  },
  imageContainer: {
    position: "relative",
    height: "180px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(30, 58, 138, 0.7) 0%, rgba(255, 215, 0, 0.4) 100%)",
  },
  cardContent: {
    padding: "1.5rem",
  },
  serviceTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#1E3A8A",
    margin: "0 0 0.8rem 0",
    lineHeight: 1.3,
  },
  serviceDescription: {
    color: "#1E40AF",
    lineHeight: 1.5,
    margin: "0 0 1.2rem 0",
    fontSize: "0.85rem",
    fontWeight: "500",
  },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    marginBottom: "1.5rem",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
  checkmark: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: "0.9rem",
    minWidth: "16px",
  },
  featureText: {
    color: "#475569",
    fontSize: "0.8rem",
    fontWeight: "500",
  },
  learnMoreButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "0.85rem",
    boxShadow: "0 3px 12px rgba(30, 58, 138, 0.25)",
    width: "100%",
    justifyContent: "center",
  },
  arrow: {
    transition: "transform 0.3s ease",
    fontSize: "0.9rem",
  },
};

// Add hover effects
const hoverStyles = `
  @media (hover: hover) {
    .service-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 25px rgba(30, 58, 138, 0.15);
      border-color: #FFC107; /* Slightly brighter yellow on hover */
    }
    
    .service-card:hover .service-image {
      transform: scale(1.05);
    }
    
    .learn-more-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(30, 58, 138, 0.35);
      background: linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%);
    }
    
    .learn-more-btn:hover .arrow {
      transform: translateX(2px);
    }
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }
    
    .service-card {
      margin: 0 0.8rem;
    }
    
    .image-container {
      height: 160px;
    }
    
    .card-content {
      padding: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 2rem 1rem;
    }
    
    .header {
      margin-bottom: 2rem;
    }
    
    .service-card {
      margin: 0;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`;

// Inject styles and add class names
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = hoverStyles;
  document.head.appendChild(styleElement);
}

// Add class names to elements for CSS targeting
const addServiceClassNames = () => {
  if (typeof document !== 'undefined') {
    setTimeout(() => {
      const cards = document.querySelectorAll('[style*="background: #ffffff"]');
      cards.forEach(card => {
        if (card.style.borderRadius === '16px') {
          card.classList.add('service-card');
        }
      });
      
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.style.objectFit === 'cover') {
          img.classList.add('service-image');
        }
      });
      
      const buttons = document.querySelectorAll('button');
      buttons.forEach(btn => {
        if (btn.style.background && btn.style.background.includes('linear-gradient')) {
          btn.classList.add('learn-more-btn');
        }
      });
      
      const arrows = document.querySelectorAll('[style*="transition: transform 0.3s ease"]');
      arrows.forEach(arrow => {
        arrow.classList.add('arrow');
      });
    }, 100);
  }
};

addServiceClassNames();