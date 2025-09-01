import React, { useState, useEffect } from 'react';
import './Team.css';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

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

    const element = document.getElementById('team');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Senior Physiotherapist",
      experience: "12 years",
      description: "Dr. Sarah specializes in comprehensive physiotherapy care and preventive rehabilitation. She is known for her gentle approach and patient education.",
      skills: ["Manual Therapy", "Exercise Prescription", "Posture & Ergonomics", "Movement Assessment", "Rehabilitation Planning", "Patient Education"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216185/d206ac53273ccf64b50c776db6d333692fe4a0e0-1920x1280_lqh5zq.jpg"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Sports Physiotherapist",
      experience: "15 years",
      description: "Dr. Michael is a leading sports physiotherapist with expertise in return‑to‑sport and performance rehab.",
      skills: ["Return‑to‑Play Plans", "Injury Prevention", "Strength & Conditioning", "Taping & Bracing", "Biomechanics", "Load Management"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215713/898905_gdo9db.jpg"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Orthopedic Physiotherapist",
      experience: "10 years",
      description: "Dr. Emily is passionate about restoring function through evidence‑based orthopedic rehabilitation and personalized treatment plans.",
      skills: ["Back & Neck Rehab", "Shoulder/Knee Rehab", "Joint Mobilization", "Post‑Op Protocols", "Gait Training", "Pain Management"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
    },
    {
      id: 4,
      name: "Dr. David Thompson",
      specialty: "Rehabilitation Specialist",
      experience: "18 years",
      description: "Dr. David is a highly skilled rehabilitation specialist for complex cases and acute injuries.",
      skills: ["Post‑Operative Rehab", "Acute Injury Care", "Shockwave/Modalities", "Balance Training", "Functional Re‑training", "Complex Case Management"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756215714/Alex_in_the_surgery_at_Munro_Dental_eawjzy.webp"
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      specialty: "Pediatric Physiotherapist",
      experience: "8 years",
      description: "Dr. Lisa creates a fun and comfortable environment for children while providing excellent physiotherapy and education.",
      skills: ["Developmental Therapy", "Gross Motor Skills", "Respiratory Physio", "Parent Coaching", "Balance & Coordination", "Posture Training"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216187/Signs-Good-Dentist_zmorau.jpg"
    },
    {
      id: 6,
      name: "Dr. Robert Wilson",
      specialty: "Neurological Physiotherapist",
      experience: "14 years",
      description: "Dr. Robert specializes in neurological conditions and advanced neuro‑rehabilitation.",
      skills: ["Stroke Rehab", "Parkinson’s Programs", "Balance & Gait", "Neurofacilitation", "Spasticity Management", "Functional Training"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216191/How-Often-Should-I-See-the-Dentist-scaled_etmpkb.jpg"
    },
    {
      id: 7,
      name: "Dr. Amanda Foster",
      specialty: "Manual Therapist",
      experience: "11 years",
      description: "Dr. Amanda is an expert in hands‑on therapies and evidence‑based pain relief.",
      skills: ["Myofascial Release", "Joint Mobilization", "Soft Tissue Therapy", "Trigger Point Treatment", "Pain Education", "Movement Restoration"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216190/vsm_1277540215_k6i0jh.jpg"
    },
    {
      id: 8,
      name: "Dr. James Martinez",
      specialty: "Geriatric Physiotherapist",
      experience: "16 years",
      description: "Dr. James focuses on mobility, independence and healthy aging.",
      skills: ["Fall Prevention", "Strength & Endurance", "Balance Training", "Gait Re‑education", "Home Program Design", "Posture & Flexibility"],
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1756216183/dental-associate-job-1170x780_ipoxli.jpg"
    }
  ];

  const openPopup = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closePopup = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="team-page">
      <section id="team" className={`team ${isVisible ? 'team-visible' : ''}`}>
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title">Meet Our Team</h2>
            <p className="team-subtitle">
              Experienced physiotherapy professionals dedicated to your mobility and wellness
            </p>
          </div>
          
          <div className="team-content">
            <div className="doctors-grid">
              {doctors.map((doctor, index) => (
                <div 
                  key={doctor.id}
                  className="doctor-card"
                  onClick={() => openPopup(doctor)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="doctor-image">
                    {doctor.image.startsWith('http') ? (
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="doctor-avatar-image"
                      />
                    ) : (
                      <span className="doctor-avatar">{doctor.image}</span>
                    )}
                  </div>
                  
                  <div className="doctor-info">
                    <h3 className="doctor-name">{doctor.name}</h3>
                    <p className="doctor-specialty">{doctor.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Popup */}
      {selectedDoctor && (
        <div className="doctor-popup-overlay" onClick={closePopup}>
          <div className="doctor-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>×</button>
            
            <div className="popup-content">
                             <div className="popup-header">
                 {selectedDoctor.image.startsWith('http') ? (
                   <img 
                     src={selectedDoctor.image} 
                     alt={selectedDoctor.name}
                     className="popup-avatar-image"
                   />
                 ) : (
                   <span className="popup-avatar">{selectedDoctor.image}</span>
                 )}
                 <h3 className="popup-name">{selectedDoctor.name}</h3>
                 <p className="popup-specialty">{selectedDoctor.specialty}</p>
               </div>
              
              <div className="popup-details">
                <div className="popup-experience">
                  <h4>Experience</h4>
                  <p>{selectedDoctor.experience}</p>
                </div>
                
                <div className="popup-description">
                  <h4>About</h4>
                  <p>{selectedDoctor.description}</p>
                </div>
                
                <div className="popup-skills">
                  <h4>Specializations</h4>
                  <div className="skills-grid">
                    {selectedDoctor.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Team;
