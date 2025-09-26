// src/pages/Blog.js
import React, { useState } from 'react';
import AdvertisingLine from '../components/AdvertisingLine';

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: 'Why Subscription-Based Pricing Works for South African SMEs',
      excerpt: 'Exploring how monthly payment models make quality technology accessible to small businesses and help them manage cash flow effectively.',
      date: '2024-01-15',
      category: 'Business',
      readTime: '5 min read',
      image: '💳'
    },
    {
      id: 2,
      title: 'Building Mobile Apps for the South African Market',
      excerpt: 'Key considerations when developing mobile applications for local users, including data costs, device limitations, and user behavior patterns.',
      date: '2024-01-10',
      category: 'Technology',
      readTime: '7 min read',
      image: '📱'
    },
    {
      id: 3,
      title: 'The Future of Internet Cafés in Digital South Africa',
      excerpt: 'How traditional internet cafés can evolve to serve modern community needs and become digital hubs for education and entrepreneurship.',
      date: '2024-01-05',
      category: 'Community',
      readTime: '4 min read',
      image: '🏪'
    },
    {
      id: 4,
      title: 'Cost-Effective Cloud Solutions for Startups',
      excerpt: 'Leveraging AWS and other cloud platforms without breaking the bank. Practical tips for startups and small businesses.',
      date: '2024-01-01',
      category: 'Technology',
      readTime: '6 min read',
      image: '☁️'
    },
    {
      id: 5,
      title: 'Digital Transformation for Taxi Associations',
      excerpt: 'How technology can improve operations, safety, and customer experience for South African taxi associations.',
      date: '2023-12-28',
      category: 'Case Study',
      readTime: '8 min read',
      image: '🚕'
    },
    {
      id: 6,
      title: 'The Importance of Localized Software Solutions',
      excerpt: 'Why understanding local context and challenges is crucial for developing effective software solutions in South Africa.',
      date: '2023-12-20',
      category: 'Insights',
      readTime: '5 min read',
      image: '🌍'
    }
  ]);

  const sharePost = (platform, title, url) => {
    const shareUrl = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    }[platform];
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const styles = {
    hero: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '50vh',
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
      padding: '60px 0',
      backgroundColor: '#f8fafc',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    posts: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
    },
    post: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
    },
    postHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    },
    postImage: {
      fontSize: '4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '150px',
      background: 'linear-gradient(135deg, #4a9dff 0%, #1a3a8f 100%)',
      color: 'white',
    },
    postContent: {
      padding: '25px',
    },
    postMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.9rem',
      color: '#64748b',
      marginBottom: '15px',
    },
    postCategory: {
      background: 'rgba(74, 157, 255, 0.1)',
      color: '#4a9dff',
      padding: '4px 12px',
      borderRadius: '20px',
      fontWeight: '500',
    },
    postTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#1a3a8f',
      lineHeight: '1.4',
    },
    postExcerpt: {
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    shareButtons: {
      display: 'flex',
      gap: '10px',
    },
    shareBtn: {
      padding: '8px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      fontSize: '0.8rem',
      cursor: 'pointer',
      background: 'white',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    shareBtnHover: {
      background: '#4a9dff',
      color: 'white',
      borderColor: '#4a9dff',
    },
  };

  return (
    <>
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Dlamsoft Blog</h1>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={{textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', marginBottom: '50px', color: '#1a3a8f'}}>
            Latest Insights
          </h2>
          
          <div style={styles.posts}>
            {posts.map(post => (
              <article 
                key={post.id} 
                style={styles.post}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
                }}
              >
                <div style={styles.postImage}>{post.image}</div>
                
                <div style={styles.postContent}>
                  <div style={styles.postMeta}>
                    <span style={styles.postCategory}>{post.category}</span>
                    <span>{post.date} • {post.readTime}</span>
                  </div>
                  
                  <h3 style={styles.postTitle}>{post.title}</h3>
                  <p style={styles.postExcerpt}>{post.excerpt}</p>
                  
                  <div style={styles.shareButtons}>
                    <button 
                      style={styles.shareBtn}
                      onClick={() => sharePost('twitter', post.title, window.location.href)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#4a9dff';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.borderColor = '#4a9dff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = 'inherit';
                        e.currentTarget.style.borderColor = '#e5e7eb';
                      }}
                    >
                      🐦 Twitter
                    </button>
                    <button 
                      style={styles.shareBtn}
                      onClick={() => sharePost('facebook', post.title, window.location.href)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#4a9dff';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.borderColor = '#4a9dff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = 'inherit';
                        e.currentTarget.style.borderColor = '#e5e7eb';
                      }}
                    >
                      📘 Facebook
                    </button>
                    <button 
                      style={styles.shareBtn}
                      onClick={() => sharePost('linkedin', post.title, window.location.href)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#4a9dff';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.borderColor = '#4a9dff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = 'inherit';
                        e.currentTarget.style.borderColor = '#e5e7eb';
                      }}
                    >
                      💼 LinkedIn
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;