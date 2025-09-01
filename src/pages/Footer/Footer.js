import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>Physiotherapy Clinic</h3>
          <p>Your trusted partner for optimal mobility and physical wellness. We are committed to providing exceptional physiotherapy care in a comfortable environment.</p>
                     <div className="footer-social">
             <a href="https://facebook.com/physiotherapyclinic" className="social-icon" target="_blank" rel="noopener noreferrer">
               <FaFacebook />
             </a>
             <a href="https://twitter.com/physiotherapyclinic" className="social-icon" target="_blank" rel="noopener noreferrer">
               <FaTwitter />
             </a>
             <a href="https://instagram.com/physiotherapyclinic" className="social-icon" target="_blank" rel="noopener noreferrer">
               <FaInstagram />
             </a>
             <a href="https://linkedin.com/company/physiotherapyclinic" className="social-icon" target="_blank" rel="noopener noreferrer">
               <FaLinkedin />
             </a>
           </div>
        </div>

        <div className="footer-section footer-quick-links">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li className="footer-link-item">
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li className="footer-link-item">
              <Link to="/services" className="footer-link">
                Services
              </Link>
            </li>
            <li className="footer-link-item">
              <Link to="/insurance" className="footer-link">
                Insurance
              </Link>
            </li>
            <li className="footer-link-item">
              <Link to="/team" className="footer-link">
                Team
              </Link>
            </li>
            <li className="footer-link-item">
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-services">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li><Link to="/services" className="footer-link">General Dentistry</Link></li>
            <li><Link to="/services" className="footer-link">Cosmetic Dentistry</Link></li>
            <li><Link to="/services" className="footer-link">Orthodontics</Link></li>
            <li><Link to="/services" className="footer-link">Emergency Care</Link></li>
            <li><Link to="/services" className="footer-link">Pediatric Dentistry</Link></li>
          </ul>
        </div>

                 <div className="footer-section footer-contact">
           <h3>Contact Us</h3>
           <p><FaMapMarkerAlt /> Manama, Bahrain</p>
           <p><FaPhone /> +973 17676765</p>
           <p><FaEnvelope /> info@dentalcare.com</p>
           <p><FaClock /> Mon-Fri: 9 AM - 6 PM</p>
           <div className="footer-emergency">
             <h4>Emergency? Call Us!</h4>
             <p>+973 17676765</p>
           </div>
         </div>
      </div>

             <div className="footer-bottom">
         <div className="footer-bottom-content">
           <span>&copy; 2023 Physiotherapy Clinic. All rights reserved.</span>
           <span className="footer-separator">|</span>
           <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
           <span className="footer-separator">|</span>
           <a href="/terms-of-service" className="footer-link">Terms of Service</a>
           <span className="footer-separator">|</span>
                                   <a 
              href="https://it-solutions.pmi-me.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pmi-developer"
            >
              <span className="developed-by">Developed by PMI</span>
              <img 
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_auto,q_auto/v1756121005/PMI_Purple_j8wvsj" 
                alt="PMI Logo" 
                className="pmi-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <span className="pmi-logo-text" style={{display: 'none'}}>PMI</span>
            </a>
         </div>
       </div>
    </footer>
  );
};

export default Footer;
