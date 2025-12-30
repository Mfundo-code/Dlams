import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Code, Settings, TrendingUp, Users, BarChart, Globe, Shield, Zap, Database, Cloud, Lock, Smartphone, Activity, ShoppingCart, Package, Briefcase, Calendar } from "lucide-react";

const ProjectSection = () => {
  const [selected, setSelected] = useState(null);
  const [videoModal, setVideoModal] = useState(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (selected || videoModal) ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selected, videoModal]);

  const C = { primary: '#1E3A8A', accent: '#3B82F6', dark: '#0F172A', gold: '#FFD700', lightBlue: '#E6F7FF' };

  const projects = [
    {
      id: "crm", title: "CRM Solution", icon: <Users />, desc: "Complete customer relationship management suite.",
      full: "Comprehensive customer management with marketing automation, lead tracking, and AI-powered insights.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [{ v: "40%", l: "Sales Increase" }, { v: "35%", l: "Churn Reduction" }, { v: "80%", l: "Automation" }, { v: "99%", l: "Satisfaction" }],
      features: ["Lead Management & Tracking", "Marketing Automation", "Sales Pipeline", "Customer Analytics", "Mobile Access", "Cloud Integration"],
      benefits: [
        { icon: <TrendingUp />, t: "Revenue Growth", d: "40% sales boost" },
        { icon: <Users />, t: "Retention", d: "35% churn reduction" },
        { icon: <Zap />, t: "Automation", d: "80% tasks automated" },
        { icon: <BarChart />, t: "Insights", d: "Real-time analytics" },
        { icon: <Smartphone />, t: "Mobile", d: "Access anywhere" },
        { icon: <Lock />, t: "Security", d: "Enterprise-grade" }
      ],
      process: ["Analysis", "Design", "Development", "Migration", "Testing", "Launch"]
    },
    {
      id: "healthcare", title: "Healthcare Systems", icon: <Activity />, desc: "eHealth solutions for modern medical practices.",
      full: "End-to-end cloud healthcare platform integrating clinical, administrative, and financial operations.",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      video: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stats: [{ v: "99.9%", l: "Uptime" }, { v: "24/7", l: "Access" }, { v: "HIPAA", l: "Compliant" }, { v: "500+", l: "Facilities" }],
      features: ["Electronic Health Records", "Practice Management", "Patient Engagement", "Billing & Insurance", "Telemedicine", "AI Analytics"],
      benefits: [
        { icon: <Activity />, t: "Patient Care", d: "Better outcomes" },
        { icon: <Cloud />, t: "Cloud-based", d: "Access anywhere" },
        { icon: <Lock />, t: "HIPAA Secure", d: "Full compliance" },
        { icon: <Zap />, t: "Fast Access", d: "Instant records" },
        { icon: <BarChart />, t: "Analytics", d: "Population health" },
        { icon: <Smartphone />, t: "Telehealth", d: "Virtual care" }
      ],
      process: ["Requirements", "System Design", "Development", "Integration", "Training", "Deployment"]
    },
    {
      id: "asset", title: "Asset Management", icon: <Package />, desc: "Complete visibility and optimization of all assets.",
      full: "Enterprise asset management for IT hardware, machinery, facilities, and mobile devices.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [{ v: "100%", l: "Visibility" }, { v: "30%", l: "Cost Savings" }, { v: "IoT", l: "Ready" }, { v: "24/7", l: "Monitoring" }],
      features: ["Asset Tracking", "Lifecycle Management", "Predictive Maintenance", "Compliance Management", "IoT Integration", "ROI Analytics"],
      benefits: [
        { icon: <Package />, t: "Full Tracking", d: "Real-time visibility" },
        { icon: <TrendingUp />, t: "Cost Savings", d: "30% reduction" },
        { icon: <Settings />, t: "Maintenance", d: "Predictive AI" },
        { icon: <Shield />, t: "Compliance", d: "Regulatory ready" },
        { icon: <Database />, t: "IoT Ready", d: "Smart devices" },
        { icon: <BarChart />, t: "Analytics", d: "Performance insights" }
      ],
      process: ["Discovery", "Planning", "Implementation", "Integration", "Optimization", "Support"]
    },
    {
      id: "workplace", title: "Digital Workplace", icon: <Briefcase />, desc: "Unified platform for seamless collaboration.",
      full: "Modern workplace connecting people, processes, and technology for smart collaboration.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [{ v: "50%", l: "Productivity" }, { v: "Unified", l: "Platform" }, { v: "Secure", l: "Environment" }, { v: "24/7", l: "Available" }],
      features: ["Unified Communication", "Document Management", "Workflow Automation", "Mobile Workforce", "Enterprise Security", "Analytics Dashboard"],
      benefits: [
        { icon: <Users />, t: "Collaboration", d: "Seamless teamwork" },
        { icon: <Zap />, t: "Productivity", d: "50% increase" },
        { icon: <Cloud />, t: "Cloud-based", d: "Work anywhere" },
        { icon: <Lock />, t: "Secure", d: "Enterprise-grade" },
        { icon: <Settings />, t: "Automation", d: "Smart workflows" },
        { icon: <BarChart />, t: "Insights", d: "Real-time data" }
      ],
      process: ["Assessment", "Design", "Development", "Migration", "Training", "Launch"]
    },
    {
      id: "ecommerce", title: "E-commerce Platform", icon: <ShoppingCart />, desc: "Complete online store with payment integration.",
      full: "Scalable e-commerce solutions from store setup to payment integration and marketing.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [{ v: "3x", l: "Conversion" }, { v: "Multi", l: "Channel" }, { v: "Secure", l: "Payments" }, { v: "24/7", l: "Support" }],
      features: ["Store Setup & Design", "Payment Integration", "Inventory Management", "Multi-channel Selling", "Analytics Dashboard", "Marketing Tools"],
      benefits: [
        { icon: <ShoppingCart />, t: "Sales Boost", d: "3x conversion rate" },
        { icon: <Lock />, t: "Secure Pay", d: "PCI compliant" },
        { icon: <Globe />, t: "Multi-channel", d: "Sell everywhere" },
        { icon: <BarChart />, t: "Analytics", d: "Sales insights" },
        { icon: <Smartphone />, t: "Mobile", d: "Optimized store" },
        { icon: <Zap />, t: "Fast", d: "Quick checkout" }
      ],
      process: ["Planning", "Store Design", "Development", "Payment Setup", "Testing", "Launch"]
    },
    {
      id: "booking", title: "Booking Systems", icon: <Calendar />, desc: "Professional booking with real-time availability.",
      full: "Reservation systems for hotels, restaurants, and services with automated confirmations.",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [{ v: "Real-time", l: "Availability" }, { v: "Auto", l: "Confirm" }, { v: "Mobile", l: "Booking" }, { v: "99%", l: "Uptime" }],
      features: ["Real-time Availability", "Mobile Booking", "Online Payments", "Automated Notifications", "Analytics & Reporting", "Staff Management"],
      benefits: [
        { icon: <Calendar />, t: "Real-time", d: "Instant booking" },
        { icon: <Smartphone />, t: "Mobile", d: "Book anywhere" },
        { icon: <Lock />, t: "Secure", d: "Safe payments" },
        { icon: <Zap />, t: "Automated", d: "Auto confirmations" },
        { icon: <BarChart />, t: "Reports", d: "Booking trends" },
        { icon: <Users />, t: "Staff Mgmt", d: "Schedule control" }
      ],
      process: ["Analysis", "Design", "Development", "Integration", "Testing", "Deployment"]
    }
  ];

  const s = {
    section: { padding: mobile ? '20px 15px' : '60px 20px', background: `linear-gradient(135deg, ${C.primary}05 0%, ${C.lightBlue} 30%, #fff 50%, ${C.lightBlue} 70%, ${C.gold}05 100%)`, minHeight: '100vh', fontFamily: "'Inter', sans-serif", position: 'relative' },
    container: { maxWidth: 1400, margin: '0 auto' },
    header: { textAlign: 'center', marginBottom: mobile ? '40px' : '60px' },
    badge: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: `linear-gradient(135deg, ${C.gold}20, ${C.accent}20)`, border: `1px solid ${C.gold}`, borderRadius: '50px', padding: mobile ? '8px 16px' : '10px 24px', fontSize: mobile ? '12px' : '14px', fontWeight: 600, color: C.primary, marginBottom: '20px' },
    title: { fontSize: mobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(3rem, 5vw, 4rem)', fontWeight: 900, background: `linear-gradient(135deg, ${C.primary}, ${C.accent}, ${C.gold})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '0 0 20px 0', lineHeight: 1.1 },
    subtitle: { fontSize: mobile ? '1rem' : '1.3rem', color: '#475569', maxWidth: 800, margin: '0 auto', lineHeight: 1.7, padding: mobile ? '0 10px' : '0' },
    grid: { display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))', gap: mobile ? '25px' : '35px' },
    card: { background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderRadius: '24px', overflow: 'hidden', border: `1px solid ${C.gold}40`, boxShadow: '0 10px 30px rgba(30,58,138,0.1)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' },
    cardContent: { padding: mobile ? '25px 20px 20px' : '35px 35px 25px' },
    cardHeader: { display: 'flex', alignItems: 'flex-start', gap: mobile ? '15px' : '20px', marginBottom: '20px', flexWrap: 'wrap' },
    icon: { width: mobile ? '50px' : '60px', height: mobile ? '50px' : '60px', borderRadius: '15px', background: `linear-gradient(135deg, ${C.gold}20, ${C.accent}20)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.primary, flexShrink: 0 },
    cardTitle: { fontSize: mobile ? '1.4rem' : '1.6rem', fontWeight: 700, color: C.dark, margin: '0 0 10px 0', lineHeight: 1.3 },
    cardDesc: { fontSize: mobile ? '0.95rem' : '1.05rem', color: '#64748B', lineHeight: 1.6, margin: 0 },
    img: { width: '100%', height: mobile ? '180px' : '220px', objectFit: 'cover', transition: 'transform 0.3s ease' },
    footer: { padding: mobile ? '20px' : '25px 35px 35px', borderTop: '1px solid rgba(0,0,0,0.04)', marginTop: 'auto' },
    btn: { width: '100%', padding: mobile ? '14px' : '16px', background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: 'white', border: 'none', borderRadius: '14px', fontSize: mobile ? '0.95rem' : '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: mobile ? 'flex-start' : 'center', justifyContent: 'center', padding: mobile ? '0' : '20px', overflowY: 'auto' },
    modal: { background: 'white', borderRadius: mobile ? '20px 20px 0 0' : '28px', maxWidth: '1100px', width: '100%', maxHeight: mobile ? '100vh' : '90vh', marginTop: mobile ? '60px' : '0', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.3)' },
    modalHeader: { background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, padding: mobile ? '60px 20px 20px' : '50px 50px 30px', color: 'white', position: 'relative' },
    close: { position: mobile ? 'fixed' : 'absolute', top: mobile ? '10px' : '25px', right: mobile ? '10px' : '25px', background: 'rgba(255,255,255,0.2)', border: 'none', width: mobile ? '40px' : '50px', height: mobile ? '40px' : '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', backdropFilter: 'blur(10px)', zIndex: 10 },
    modalTitle: { fontSize: mobile ? '1.6rem' : '2.2rem', fontWeight: 800, margin: '0 0 15px 0', lineHeight: 1.2 },
    modalContent: { padding: mobile ? '25px 20px 80px' : '40px 50px 100px', overflowY: 'auto', maxHeight: mobile ? 'calc(100vh - 150px)' : 'calc(90vh - 200px)', WebkitOverflowScrolling: 'touch' },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: mobile ? '10px' : '20px', marginBottom: mobile ? '30px' : '40px' },
    stat: { background: `linear-gradient(135deg, ${C.gold}10, ${C.accent}10)`, border: `1px solid ${C.gold}30`, borderRadius: '15px', padding: mobile ? '15px' : '20px', textAlign: 'center' },
    statVal: { fontSize: mobile ? '1.5rem' : '2rem', fontWeight: 800, background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '0 0 5px 0' },
    statLbl: { fontSize: mobile ? '0.8rem' : '0.9rem', color: '#64748B', margin: 0 },
    section2: { background: 'rgba(255,255,255,0.5)', padding: mobile ? '20px' : '25px', borderRadius: '15px', border: `1px solid ${C.gold}20`, marginBottom: mobile ? '20px' : '30px' },
    sectionTitle: { fontSize: mobile ? '1rem' : '1.2rem', fontWeight: 600, color: C.primary, margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' },
    list: { display: 'flex', flexDirection: 'column', gap: '10px' },
    listItem: { display: 'flex', alignItems: 'center', fontSize: mobile ? '0.85rem' : '0.95rem', color: '#4B5563' },
    bullet: { width: '8px', height: '8px', borderRadius: '50%', background: C.gold, marginRight: '12px', flexShrink: 0 },
    benefitsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: mobile ? '12px' : '20px', marginBottom: mobile ? '20px' : '30px' },
    benefit: { background: `linear-gradient(135deg, ${C.gold}10, ${C.accent}10)`, border: `1px solid ${C.gold}30`, borderRadius: '12px', padding: mobile ? '15px' : '20px', display: 'flex', gap: '15px', transition: 'all 0.3s ease' },
    benefitIcon: { width: '40px', height: '40px', borderRadius: '10px', background: `linear-gradient(135deg, ${C.gold}30, ${C.accent}30)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.primary, flexShrink: 0 },
    benefitTitle: { fontSize: mobile ? '0.9rem' : '1rem', fontWeight: 600, color: C.primary, margin: '0 0 5px 0' },
    benefitDesc: { fontSize: mobile ? '0.75rem' : '0.85rem', color: '#4B5563', margin: 0 },
    processSteps: { display: 'flex', flexDirection: 'column', gap: '15px' },
    step: { display: 'flex', alignItems: 'center', gap: '15px' },
    stepNum: { width: '30px', height: '30px', borderRadius: '50%', background: `linear-gradient(135deg, ${C.gold}, ${C.accent})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 700, color: 'white', flexShrink: 0 },
    stepTxt: { fontSize: mobile ? '0.85rem' : '0.95rem', color: '#4B5563', fontWeight: 500 },
    closeBtn: { width: '100%', padding: mobile ? '16px' : '18px', background: `linear-gradient(135deg, ${C.accent}, ${C.primary})`, color: 'white', border: 'none', borderRadius: '14px', fontSize: mobile ? '1rem' : '1.05rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease', marginTop: mobile ? '30px' : '40px', boxShadow: '0 4px 15px rgba(59,130,246,0.3)' },
    videoSection: { position: 'relative', marginBottom: mobile ? '30px' : '40px', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer' },
    videoThumb: { width: '100%', height: mobile ? '220px' : '350px', objectFit: 'cover' },
    playBtn: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: mobile ? '60px' : '70px', height: mobile ? '60px' : '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', color: C.accent, fontSize: mobile ? '24px' : '28px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' },
    videoModal: { position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001, padding: mobile ? '10px' : '20px' },
    videoContainer: { width: '100%', maxWidth: mobile ? '100%' : '1000px', position: 'relative' },
    video: { width: '100%', height: mobile ? '250px' : '500px', borderRadius: mobile ? '12px' : '20px' }
  };

  return (
    <>
      <section style={s.section}>
        <div style={s.container}>
          <motion.div style={s.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <motion.div style={s.badge} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <Zap size={16} />
              Our Solutions
            </motion.div>
            <motion.h2 style={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
              Solution Portfolio
            </motion.h2>
            <motion.p style={s.subtitle} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
              Comprehensive software solutions designed to address business challenges and drive digital transformation.
            </motion.p>
          </motion.div>

          <div style={s.grid}>
            {projects.map((p, i) => (
              <motion.div key={p.id} style={s.card} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true, amount: 0.1 }} whileHover={!mobile ? { y: -8, boxShadow: '0 25px 60px rgba(0,0,0,0.15)' } : {}} onClick={() => setSelected(p)}>
                <div style={s.cardContent}>
                  <div style={s.cardHeader}>
                    <motion.div style={s.icon} whileHover={{ rotate: 15, scale: 1.1 }}>
                      {React.cloneElement(p.icon, { size: mobile ? 24 : 28 })}
                    </motion.div>
                    <div style={{ flex: 1 }}>
                      <h3 style={s.cardTitle}>{p.title}</h3>
                      <p style={s.cardDesc}>{p.desc}</p>
                    </div>
                  </div>
                </div>
                <motion.img src={p.img} alt={p.title} style={s.img} whileHover={{ scale: 1.05 }} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"; }} />
                <div style={s.footer}>
                  <motion.button style={s.btn} whileHover={!mobile ? { scale: 1.02 } : {}} whileTap={{ scale: 0.98 }}>
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div style={s.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div style={s.modal} initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} transition={{ type: "spring", damping: 25 }} onClick={(e) => e.stopPropagation()}>
              <motion.button style={s.close} onClick={() => setSelected(null)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <X size={mobile ? 20 : 24} />
              </motion.button>

              <div style={s.modalHeader}>
                <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? '15px' : '30px', flexWrap: 'wrap' }}>
                  <motion.div style={{ ...s.icon, width: mobile ? '50px' : '80px', height: mobile ? '50px' : '80px' }} animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                    {React.cloneElement(selected.icon, { size: mobile ? 28 : 48 })}
                  </motion.div>
                  <div style={{ flex: 1 }}>
                    <h2 style={s.modalTitle}>{selected.title}</h2>
                    <p style={{ fontSize: mobile ? '0.95rem' : '1.1rem', opacity: 0.9, margin: 0 }}>{selected.full}</p>
                  </div>
                </div>
              </div>

              <div style={s.modalContent}>
                {selected.video && (
                  <motion.div style={s.videoSection} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onClick={() => setVideoModal(selected)}>
                    <img src={selected.video} alt="Video" style={s.videoThumb} />
                    <button style={s.playBtn}>▶</button>
                  </motion.div>
                )}

                <div style={s.statsGrid}>
                  {selected.stats.map((st, i) => (
                    <motion.div key={i} style={s.stat} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                      <h3 style={s.statVal}>{st.v}</h3>
                      <p style={s.statLbl}>{st.l}</p>
                    </motion.div>
                  ))}
                </div>

                <div style={s.section2}>
                  <h4 style={s.sectionTitle}>
                    <CheckCircle size={mobile ? 20 : 24} />
                    Key Features
                  </h4>
                  <div style={s.list}>
                    {selected.features.map((f, i) => (
                      <motion.div key={i} style={s.listItem} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05 }}>
                        <div style={s.bullet} />
                        {f}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div style={s.section2}>
                  <h4 style={s.sectionTitle}>
                    <Settings size={mobile ? 20 : 24} />
                    Implementation Process
                  </h4>
                  <div style={s.processSteps}>
                    {selected.process.map((pr, i) => (
                      <motion.div key={i} style={s.step} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }}>
                        <div style={s.stepNum}>{i + 1}</div>
                        <span style={s.stepTxt}>{pr}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div style={s.section2}>
                  <h4 style={s.sectionTitle}>
                    <TrendingUp size={mobile ? 20 : 24} />
                    Key Benefits
                  </h4>
                  <div style={s.benefitsGrid}>
                    {selected.benefits.map((b, i) => (
                      <motion.div key={i} style={s.benefit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.05 }} whileHover={{ y: -5, boxShadow: `0 10px 20px ${C.primary}10` }}>
                        <div style={s.benefitIcon}>
                          {React.cloneElement(b.icon, { size: mobile ? 18 : 20 })}
                        </div>
                        <div>
                          <h5 style={s.benefitTitle}>{b.t}</h5>
                          <p style={s.benefitDesc}>{b.d}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button style={s.closeBtn} onClick={() => setSelected(null)} whileHover={!mobile ? { scale: 1.02, boxShadow: '0 10px 30px rgba(59,130,246,0.4)' } : {}} whileTap={{ scale: 0.98 }}>
                  View Less
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {videoModal && (
          <motion.div style={s.videoModal} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setVideoModal(null)}>
            <motion.div style={s.videoContainer} initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              <button style={{ ...s.close, position: 'absolute' }} onClick={() => setVideoModal(null)}>✕</button>
              <iframe src={videoModal.videoUrl} title={videoModal.title} style={s.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectSection;