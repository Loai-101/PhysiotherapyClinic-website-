import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    patients: 0,
    satisfaction: 0,
    emergency: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          // Start counting animation only once when statistics section becomes visible
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      
      setCounts({
        experience: Math.floor(8 * progress),
        patients: Math.floor(3200 * progress),
        satisfaction: Math.floor(95 * progress),
        emergency: 24 // Keep this static as it's "24/7"
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Ensure final values are exact
        setCounts({
          experience: 8,
          patients: 3200,
          satisfaction: 95,
          emergency: 24
        });
      }
    }, stepDuration);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Video Background */}
        <div className="hero-video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source 
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1756711157/WhatsApp_Video_2025-09-01_at_10.18.48_a4ab3bd7_nxcpvy.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to Physiotherapy Clinic
            </h1>
            <p className="hero-description">
              Professional dental services for you and your family
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="hero-button hero-button-primary">
                Our Services
              </Link>
              <Link to="/contact" className="hero-button hero-button-secondary">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Text Bar */}
      <section className="moving-text-section">
        <div className="moving-text-container">
                      <div className="moving-text-content">
              <span className="moving-text-item">Your mobility is your freedom, and we are here to restore it.</span>
              <span className="moving-text-item">At our clinic, healthy movement means a better quality of life.</span>
              <span className="moving-text-item">Advanced rehabilitation techniques and specialized physiotherapists for optimal recovery.</span>
              <span className="moving-text-item">We provide comfortable, effective physiotherapy treatment.</span>
              <span className="moving-text-item">Because your movement is priceless, we offer exceptional care.</span>
              <span className="moving-text-item">From injury recovery to sports rehabilitation… all under one roof.</span>
              <span className="moving-text-item">Our clinic cares for your body and your well-being.</span>
              <span className="moving-text-item">A healthy body is the foundation of an active life.</span>
              <span className="moving-text-item">We use the latest equipment to ensure safe treatment and optimal results.</span>
              <span className="moving-text-item">Our goal is to restore your mobility and improve your quality of life.</span>
            </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{counts.experience}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.patients}+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.satisfaction}%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.emergency}/7</div>
              <div className="stat-label">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about ${isVisible ? 'about-visible' : ''}`}>
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">About Our Clinic</h2>
            <p className="about-subtitle">
              Providing exceptional physiotherapy care with compassion and expertise
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <div className="about-section">
                <h3 className="about-section-title">Our Mission</h3>
                <p className="about-description">
                  At Physiotherapy Clinic, we are committed to providing the highest quality 
                  rehabilitation care in a comfortable and welcoming environment. Our mission is to 
                  help our patients restore mobility, reduce pain, and improve function through 
                  personalized treatment plans, evidence-based practice, and modern rehabilitation technology.
                </p>
              </div>
              
              <div className="about-section">
                <h3 className="about-section-title">Why Choose Our Physiotherapy Clinic</h3>
                <div className="about-features">
                  <div className="about-feature">
                    <div className="about-feature-icon">
                      <img 
                        src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756195644/Screenshot_2025-08-26_110705_ap8z4i.png" 
                        alt="Experienced Team" 
                        className="about-feature-image"
                      />
                    </div>
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">Experienced Team</h4>
                      <p className="about-feature-text">
                        Our team of physiotherapy professionals has years of experience and 
                        stays up to date with the latest rehabilitation practices and guidelines.
                      </p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-feature-icon">
                      <img 
                        src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756709262/physical-therapy-logo-design-concept-free-vector_ltgrwd.jpg" 
                        alt="Modern Technology" 
                        className="about-feature-image"
                      />
                    </div>
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">Modern Technology</h4>
                      <p className="about-feature-text">
                        We use the latest rehabilitation technology and equipment to ensure 
                        precise, comfortable, and effective therapy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-feature-icon">
                      <img 
                        src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756196106/Careconnect_picture_logo_jxbfgk.webp" 
                        alt="Patient-Centered Care" 
                        className="about-feature-image"
                      />
                    </div>
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">Patient-Centered Care</h4>
                      <p className="about-feature-text">
                        Every patient is unique. We create personalized rehabilitation plans 
                        that align with your goals for mobility, strength, and pain relief.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
