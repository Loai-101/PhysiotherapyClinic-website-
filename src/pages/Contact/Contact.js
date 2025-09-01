import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);



  return (
    <div className="contact-page">
      <section id="contact" className={`contact ${isVisible ? 'contact-visible' : ''}`}>
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">
              Get in touch with us to schedule your appointment or ask any questions
            </p>
          </div>
          
          <div className="contact-content">
                         <div className="contact-info">
               <div className="contact-cards">
                                   <div className="contact-card">
                    <div className="contact-card-icon">📍</div>
                    <h4 className="contact-card-title">Address</h4>
                    <p className="contact-card-value">Manama, Bahrain</p>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-card-icon">📞</div>
                    <h4 className="contact-card-title">Phone</h4>
                    <p className="contact-card-value">+973 17676765</p>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-card-icon">✉️</div>
                    <h4 className="contact-card-title">Email</h4>
                    <p className="contact-card-value">info@dentalcare.com</p>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-card-icon">🕒</div>
                    <h4 className="contact-card-title">Hours</h4>
                    <p className="contact-card-value">
                      Mon-Fri: 9 AM - 6 PM<br />
                      Saturday: 9:00 AM - 3:00 PM<br />
                      Sunday: Emergency Only
                    </p>
                  </div>
               </div>
            </div>
            
                         {/* Map Section */}
             <div className="contact-map-section">
               <h3 className="map-title">Find Us</h3>
               <p className="map-subtitle">PMI, Road 4574, Block 745, Building 2486, Sanad 745</p>
               <div className="map-container">
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d230120.0!2d50.5853!3d26.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbh!4v1234567890123"
                   width="100%"
                   height="400"
                   style={{ border: 0 }}
                   allowFullScreen=""
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Bahrain Map"
                   className="contact-map"
                 ></iframe>
                 <div className="map-overlay">
                   <a 
                     href="https://maps.app.goo.gl/MAkEexHwmWk4CNZG8?g_st=iw" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="map-link"
                   >
                     <div className="map-link-content">
                       <span className="map-link-icon">🗺️</span>
                       <span className="map-link-text">Open in Google Maps</span>
                     </div>
                   </a>
                 </div>
               </div>
             </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
