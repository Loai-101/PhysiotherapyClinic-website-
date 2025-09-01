import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Insurance.css';

const Insurance = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible immediately when component mounts
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('insurance');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const insuranceImages = [
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214789/Screenshot_2025-08-26_100619_asydkc.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214788/Screenshot_2025-08-26_100615_tsh8v9.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214669/Screenshot_2025-08-26_100610_mvz8fh.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214648/Screenshot_2025-08-26_100603_qkgl74.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214646/Screenshot_2025-08-26_100556_kdq4gs.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214645/Screenshot_2025-08-26_100548_goqlap.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214643/Screenshot_2025-08-26_100508_bdzrip.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214642/Screenshot_2025-08-26_100504_apkp45.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214640/Screenshot_2025-08-26_100453_pixp4x.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214639/Screenshot_2025-08-26_100447_xw0eje.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214637/Screenshot_2025-08-26_100434_w3cezq.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214638/Screenshot_2025-08-26_100440_usd5wq.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214634/Screenshot_2025-08-26_100427_kyc87h.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214630/Screenshot_2025-08-26_100709_gs7r9l.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214629/Screenshot_2025-08-26_100657_rfjhbf.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214628/Screenshot_2025-08-26_100651_q2c1ri.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214626/Screenshot_2025-08-26_100647_soxihb.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214625/Screenshot_2025-08-26_100642_ildv0s.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214623/Screenshot_2025-08-26_100635_f6k4sy.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214622/Screenshot_2025-08-26_100629_a4elw2.png",
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214621/Screenshot_2025-08-26_100625_osawij.png"
  ];

  return (
    <div className="insurance-page">
      <section id="insurance" className={`insurance ${isVisible ? 'insurance-visible' : ''}`}>
        <div className="insurance-container">
          <div className="insurance-header">
            <h2 className="insurance-title">Dental Insurance</h2>
            <p className="insurance-subtitle">
              We work with most major insurance providers to make your dental care affordable and accessible
            </p>
          </div>
          
          <div className="insurance-content">
            <div className="insurance-companies-section">
              <div className="insurance-companies-grid">
                {insuranceImages.map((imageUrl, index) => (
                  <div 
                    key={index}
                    className="insurance-company-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={imageUrl} 
                      alt={`Insurance Company ${index + 1}`}
                      className="insurance-company-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="contact-section">
              <h3 className="section-title">Questions About Insurance?</h3>
              <p className="contact-description">
                Our insurance specialists are here to help you understand your coverage and maximize your benefits. 
                Contact us today to discuss your insurance options.
              </p>
              <div className="contact-buttons">
                <Link to="/contact" className="contact-button primary">Contact Insurance Team</Link>
                <Link to="/contact" className="contact-button secondary">Verify Your Coverage</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Insurance;
