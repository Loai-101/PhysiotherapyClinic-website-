import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaRunning,
  FaChild,
  FaDumbbell,
  FaBrain,
  FaHandsHelping,
  FaBolt,
  FaUserNurse,
  FaHeartbeat,
  FaWalking
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const openServicePopup = (service) => {
    setSelectedService(service);
  };

  const closeServicePopup = () => {
    setSelectedService(null);
  };

  const services = [
    {
      id: 1,
      name: "Orthopedic Rehabilitation",
      description: "Recovery programs for joint and muscle injuries (back, knee, shoulder)",
      doctors: [
        {
          name: "Dr. Sarah Johnson",
          specialty: "Senior Physiotherapist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216185/d206ac53273ccf64b50c776db6d333692fe4a0e0-1920x1280_lqh5zq.jpg"
        }
      ],
      icon: <FaRunning />,
      features: ["Joint Mobilization", "Strengthening Programs", "Posture Correction", "Gait Training"]
    },
    {
      id: 2,
      name: "Pediatric Physiotherapy",
      description: "Gentle, family-centered therapy for infants, children and teens",
      doctors: [
        {
          name: "Dr. Lisa Park",
          specialty: "Pediatric Physiotherapist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216187/Signs-Good-Dentist_zmorau.jpg"
        }
      ],
      icon: <FaChild />,
      features: ["Developmental Therapy", "Balance & Coordination", "Respiratory Physio", "Parent Education"]
    },
    {
      id: 3,
      name: "Sports Injury Rehabilitation",
      description: "Return-to-sport programs with evidence-based progressions",
      doctors: [
        {
          name: "Dr. Michael Chen",
          specialty: "Sports Physiotherapist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215713/898905_gdo9db.jpg"
        }
      ],
      icon: <FaDumbbell />,
      features: ["Sprain/Strain Rehab", "ACL/Post‑op Protocols", "Return‑to‑Play Plans", "Injury Prevention"]
    },
    {
      id: 4,
      name: "Neurological Rehabilitation",
      description: "Therapy for stroke, MS, Parkinson’s and nerve injuries",
      doctors: [
        {
          name: "Dr. Sarah Johnson",
          specialty: "Neurological Physiotherapist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216185/d206ac53273ccf64b50c776db6d333692fe4a0e0-1920x1280_lqh5zq.jpg"
        }
      ],
      icon: <FaBrain />,
      features: ["Neurofacilitation", "Balance & Coordination", "Functional Training", "Spasticity Management"]
    },
    {
      id: 5,
      name: "Manual Therapy",
      description: "Hands‑on techniques to reduce pain and improve mobility",
      doctors: [
        {
          name: "Dr. James Martinez",
          specialty: "Manual Therapist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216183/dental-associate-job-1170x780_ipoxli.jpg"
        }
      ],
      icon: <FaHandsHelping />,
      features: ["Myofascial Release", "Joint Mobilization", "Trigger Point Therapy", "Soft Tissue Techniques"]
    },
    {
      id: 6,
      name: "Electrotherapy & Modalities",
      description: "Therapeutic technologies for pain relief and tissue healing",
      doctors: [
        {
          name: "Dr. Amanda Foster",
          specialty: "Physiotherapist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
        }
      ],
      icon: <FaBolt />,
      features: ["TENS/EMS", "Ultrasound", "Shockwave", "Heat & Cold Therapy"]
    },
    {
      id: 7,
      name: "Post‑Operative Rehabilitation",
      description: "Structured recovery after orthopedic and soft‑tissue surgeries",
      doctors: [
        {
          name: "Dr. Sarah Johnson",
          specialty: "Rehabilitation Specialist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216185/d206ac53273ccf64b50c776db6d333692fe4a0e0-1920x1280_lqh5zq.jpg"
        }
      ],
      icon: <FaUserNurse />,
      features: ["Protocol‑Based Progression", "Swelling Control", "ROM Restoration", "Strength & Function"]
    },
    {
      id: 8,
      name: "Pain Management",
      description: "Personalized programs to manage acute and chronic pain",
      doctors: [
        {
          name: "Dr. Robert Wilson",
          specialty: "Pain Management Physiotherapist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216191/How-Often-Should-I-See-the-Dentist-scaled_etmpkb.jpg"
        }
      ],
      icon: <FaHeartbeat />,
      features: ["Education & Self‑Management", "Manual Therapy", "Exercise Therapy", "Modalities"]
    },
    {
      id: 9,
      name: "Geriatric Physiotherapy",
      description: "Mobility, balance and fall‑prevention programs for older adults",
      doctors: [
        {
          name: "Dr. David Thompson",
          specialty: "Geriatric Physiotherapist",
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215714/Alex_in_the_surgery_at_Munro_Dental_eawjzy.webp"
        }
      ],
      icon: <FaWalking />,
      features: ["Balance Training", "Strength & Endurance", "Gait Re‑education", "Home Safety Advice"]
    }
  ];

  return (
    <div className="services-page">
      {/* Services Section */}
      <section id="services" className={`services ${isVisible ? 'services-visible' : ''}`}>
        <div className="services-container">
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => openServicePopup(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <span className="service-icon-text">{service.icon}</span>
                </div>
                
                <div className="service-content">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  

                  
                  <div className="service-features">
                    <h4 className="features-title">Services Include:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact" className="service-button">
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Services Bar (moved below the services grid) */}
      <div className="moving-services-bar">
        <div className="moving-services-content">
          <span>Orthopedic Rehabilitation</span>
          <span>•</span>
          <span>Pediatric Physiotherapy</span>
          <span>•</span>
          <span>Sports Injury Rehabilitation</span>
          <span>•</span>
          <span>Neurological Rehabilitation</span>
          <span>•</span>
          <span>Manual Therapy</span>
          <span>•</span>
          <span>Electrotherapy & Modalities</span>
          <span>•</span>
          <span>Post‑Operative Rehabilitation</span>
          <span>•</span>
          <span>Pain Management</span>
          <span>•</span>
          <span>Geriatric Physiotherapy</span>
          <span>•</span>
          <span>Orthopedic Rehabilitation</span>
          <span>•</span>
          <span>Pediatric Physiotherapy</span>
          <span>•</span>
          <span>Sports Injury Rehabilitation</span>
          <span>•</span>
          <span>Neurological Rehabilitation</span>
          <span>•</span>
          <span>Manual Therapy</span>
          <span>•</span>
          <span>Electrotherapy & Modalities</span>
          <span>•</span>
          <span>Post‑Operative Rehabilitation</span>
          <span>•</span>
          <span>Pain Management</span>
          <span>•</span>
          <span>Geriatric Physiotherapy</span>
        </div>
      </div>

      {/* Service Doctors Popup */}
      {selectedService && (
        <div className="service-popup-overlay" onClick={closeServicePopup}>
          <div className="service-popup" onClick={(e) => e.stopPropagation()}>
            <button className="service-popup-close-btn" onClick={closeServicePopup}>×</button>
            
            <div className="service-popup-content">
              <div className="service-popup-header">
                <div className="service-popup-icon">
                  {selectedService.iconImage ? (
                    <img 
                      src={selectedService.iconImage} 
                      alt={selectedService.name}
                      className="service-popup-icon-image"
                    />
                  ) : (
                    <span className="service-popup-icon-text">{selectedService.icon}</span>
                  )}
                </div>
                <h3 className="service-popup-name">{selectedService.name}</h3>
                <p className="service-popup-description">{selectedService.description}</p>
              </div>
              
              <div className="service-popup-doctors">
                <h4 className="doctors-title">Doctors who perform this service:</h4>
                <div className="doctors-list">
                  {selectedService.doctors.map((doctor, index) => (
                    <div key={index} className="doctor-item">
                      <div className="doctor-image">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="doctor-avatar"
                        />
                      </div>
                      <div className="doctor-info">
                        <span className="doctor-name">{doctor.name}</span>
                        <span className="doctor-specialty">{doctor.specialty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="service-popup-features">
                <h4 className="features-title">Services Include:</h4>
                <ul className="features-list">
                  {selectedService.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Services;
