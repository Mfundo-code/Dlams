import React from "react";

const AdvertisingSection = () => {
  const features = [
    "100% Client Trust & Satisfaction",
    "Reliable & Secure Solutions", 
    "Flexible Payment Options",
    "Tailored to Your Workflow"
  ];

  return (
    <section className="ad-container">
      <div className="ad-overlay" />
      <div className="ad-content">
        
        {/* Text Content - Top on Mobile */}
        <div className="ad-text-section">
          <h2 className="ad-title">Ready to Transform Your Business?</h2>
          <p className="ad-description">
            From custom software to complete digital presence, we build solutions that drive growth 
            and enhance your digital footprint. Your satisfaction is our commitment!
          </p>
        </div>

        {/* Features Card - Bottom on Mobile */}
        <div className="ad-card-section">
          <div className="ad-feature-card">
            <div className="ad-features">
              {features.map((feature, index) => (
                <div key={index} className="ad-feature-item">
                  <span className="ad-checkmark">✓</span>
                  <span className="ad-feature-text">{feature}</span>
                </div>
              ))}
            </div>
            <button className="ad-cta-button">
              Get Your Free Quote
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        .ad-container {
          position: relative;
          min-height: 400px;
          background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          border-radius: 24px;
          margin: 20px;
          box-shadow: 0 20px 40px rgba(255, 193, 7, 0.25);
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
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .ad-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 0;
          color: white;
          font-weight: 600;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
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
          background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
          color: white;
          border: none;
          padding: 15px 30px;
          font-size: 1.1rem;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
          width: 100%;
          font-family: 'Inter', sans-serif;
        }
        
        .ad-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(30, 58, 138, 0.4);
          background: linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%);
          color: white;
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
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AdvertisingSection;