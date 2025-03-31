import React from 'react';
import '../App.css';
const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo-container">
          <img 
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="CardMaster Logo" 
            className="logo"
          />
          <span className="brand-name">CardMaster</span>
        </div>
      </header>

      <section className="hero-section" id="hero">
        <div className="hero-content">
          <h1>Welcome to CardMaster</h1>
          <p>Your elegant digital business card generator for modern professionals.</p>
          <button className="primary-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </section>

      <section className="features-section" id="features">
        <h2>Why Choose CardMaster?</h2>
        <div className="features-container">
          <div className="feature-card">
            <i className="fas fa-pencil-alt feature-icon"></i>
            <h3>Customizable Themes</h3>
            <p>Select from a variety of elegant themes to match your brand.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-mobile-alt feature-icon"></i>
            <h3>Responsive Design</h3>
            <p>Your card looks stunning on any device.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-share-alt feature-icon"></i>
            <h3>Easy Sharing</h3>
            <p>Share your card instantly with a click.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <h2>Make Your First Impression Count</h2>
        <p>Create your digital business card with CardMaster today!</p>
        <button className="primary-btn" onClick={onGetStarted}>
          Create Your Card
        </button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} CardMaster. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#cta">Get Started</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;


