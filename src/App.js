import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Insurance from './pages/Insurance/Insurance';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './App.css';

// Wrapper component that can use useLocation
function AppContent() {
  const [isLoading, setIsLoading] = useState(true); // Start with loading screen visible
  const [isFadingOut, setIsFadingOut] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loading screen on initial load and route changes
    setIsLoading(true);
    setIsFadingOut(false);
    
    // Start fade out after 1.7 seconds (to allow for 0.3s transition)
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1700);
    
    // Hide loading screen completely after 2 seconds
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
      setIsFadingOut(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  // Initial page load effect
  useEffect(() => {
    // Show loading screen on initial page load
    setIsLoading(true);
    setIsFadingOut(false);
    
    // Start fade out after 1.7 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1700);
    
    // Hide loading screen completely after 2 seconds
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
      setIsFadingOut(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []); // Empty dependency array for initial load only

  return (
    <>
      {isLoading && <LoadingScreen fadeOut={isFadingOut} />}
      {!isLoading && (
        <div className="App">
          <Header />
          <main className="main-content content-visible">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

function App() {

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
