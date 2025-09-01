import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756705328/360_F_292343751_BescUQoFdnvVkcXeWJRJsEwbvQ23zHU0_zjjcy7.jpg" 
            alt="Physiotherapy Clinic Logo" 
            className="loading-logo-image"
          />
        </div>
        <h1 className="loading-title">Physiotherapy Clinic</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
