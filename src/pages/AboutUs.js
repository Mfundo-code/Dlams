// src/pages/AboutUs.js
import React from 'react';
import AdvertisingLine from '../components/AdvertisingLine';

const AboutUs = () => {
  const founders = [
    {
      name: 'Mfundo Dlamini',
      role: 'Co-founder & Head of Tech Services',
      bio: 'Responsible for software development, client delivery, technical strategy, and product development. With extensive experience in Django, .NET, and cloud technologies.',
      expertise: ['Django/.NET Development', 'Cloud Architecture', 'Technical Strategy', 'Software Engineering'],
      image: '👨‍💻'
    },
    {
      name: 'Khodani Mashavha',
      role: 'Co-founder & Head of Physical Operations',
      bio: 'Responsible for facilities management, customer experience, and retail operations for the Internet Café. Focused on community engagement and local partnerships.',
      expertise: ['Operations Management', 'Customer Experience', 'Local Partnerships', 'Community Development'],
      image: '👨‍💼'
    }
  ];

  const values = [
    {
      icon: '👥',
      title: 'Customer-First',
      description: 'Clear communication and dependable delivery. We prioritize understanding your needs and delivering solutions that exceed expectations.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Transparent pricing and honest timelines. We believe in building trust through honesty and reliability in all our interactions.'
    },
    {
      icon: '🌍',
      title: 'Community',
      description: 'Hire locally and offer affordable training. We are committed to empowering local communities through technology and education.'
    },
    {
      icon: '⚡',
      title: 'Agility',
      description: 'Fast iteration and practical solutions. We adapt quickly to changing requirements and deliver practical, effective solutions.'
    }
  ];

  const styles = {
    hero: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      color: 'white',
      marginBottom: '20px',
    },
    section: {
      padding: '80px 0',
    },
    sectionLight: {
      backgroundColor: '#f8fafc',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#1a3a8f',
      textAlign: 'center',
    },
    sectionSubtitle: {
      fontSize: '1.2rem',
      color: '#64748b',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 50px',
      lineHeight: '1.6',
    },
    foundersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginBottom: '60px',
    },
    founderCard: {
      background: 'white',
      borderRadius: '15px',
      padding: '40px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
      textAlign: 'center',
    },
    founderImage: {
      fontSize: '4rem',
      marginBottom: '20px',
    },
    founderName: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '10px',
      color: '#1a3a8f',
    },
    founderRole: {
      color: '#4a9dff',
      marginBottom: '20px',
      fontWeight: '500',
    },
    founderBio: {
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '25px',
    },
    expertiseList: {
      textAlign: 'left',
    },
    expertiseTitle: {
      fontWeight: '600',
      marginBottom: '15px',
      color: '#1a3a8f',
    },
    expertiseItem: {
      marginBottom: '8px',
      color: '#64748b',
      display: 'flex',
      alignItems: 'center',
    },
    expertiseBullet: {
      color: '#4a9dff',
      marginRight: '10px',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    valueCard: {
      textAlign: 'center',
      padding: '30px',
    },
    valueIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      color: '#4a9dff',
    },
    valueTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#1a3a8f',
    },
    valueDescription: {
      color: '#64748b',
      lineHeight: '1.6',
    },
  };

  return (
    <>
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>About Dlamsoft</h1>
        </div>
      </section>

      {/* Story Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <p style={styles.sectionSubtitle}>
            Dlamsoft was founded with a vision to make quality technology accessible to South African SMEs 
            and communities. We believe that every business, regardless of size, deserves access to 
            reliable, affordable digital solutions that drive growth and innovation.
          </p>

          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <p style={{color: '#64748b', lineHeight: '1.8', marginBottom: '25px', fontSize: '1.1rem'}}>
              Starting as a remote-first tech solutions provider, Dlamsoft offers software development, 
              web & mobile applications, cloud integration, and managed IT services. Our initial focus is 
              on generating sustainable recurring revenue through subscription plans, retainers, and 
              affordable one-off projects.
            </p>
            <p style={{color: '#64748b', lineHeight: '1.8', marginBottom: '25px', fontSize: '1.1rem'}}>
              Within 12 months, we plan to open a physical office that will host an Internet Café and a 
              client-facing hub. The long-term goal is to become a leading South African software solutions 
              company serving SMEs, taxi associations, retailers, educational institutions, and NGOs.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section style={{...styles.section, ...styles.sectionLight}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Meet the Founders</h2>
          <p style={styles.sectionSubtitle}>
            Our leadership team brings together technical expertise and business acumen to deliver 
            exceptional value to our clients.
          </p>

          <div style={styles.foundersGrid}>
            {founders.map((founder, index) => (
              <div key={index} style={styles.founderCard}>
                <div style={styles.founderImage}>{founder.image}</div>
                <h3 style={styles.founderName}>{founder.name}</h3>
                <div style={styles.founderRole}>{founder.role}</div>
                <p style={styles.founderBio}>{founder.bio}</p>
                
                <div style={styles.expertiseList}>
                  <div style={styles.expertiseTitle}>Areas of Expertise:</div>
                  {founder.expertise.map((item, idx) => (
                    <div key={idx} style={styles.expertiseItem}>
                      <span style={styles.expertiseBullet}>•</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Values</h2>
          <p style={styles.sectionSubtitle}>
            These core values guide everything we do and define how we work with our clients and community.
          </p>

          <div style={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} style={styles.valueCard}>
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;