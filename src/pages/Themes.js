import React, { useState } from 'react';
import '../App.css';

// Data for themes with sample images (place your images in public/images/)
const themesData = [
  { id: 1, name: 'Classic Elegance', imageUrl:  process.env.PUBLIC_URL + "/images/Classic-Elegance.png" },
  { id: 2, name: 'Modern Minimal', imageUrl: process.env.PUBLIC_URL + "/images/Modern-Minimal.png" },
  { id: 3, name: 'Vibrant Colors', imageUrl: process.env.PUBLIC_URL + "/images/Vibrant-Colors.png"  },
  { id: 4, name: 'Professional Bold', imageUrl:  process.env.PUBLIC_URL + "/images/Professional-Bold.png"},
  { id: 5, name: 'Sleek & Simple', imageUrl:  process.env.PUBLIC_URL + "/images/Sleek-Simple.png" },
  { id: 6, name: 'Artistic Flair', imageUrl:  process.env.PUBLIC_URL + "/images/Artistic-Flair.png" },
];

const Themes = ({ onBack, onProceed }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleSelect = (id) => {
    setSelectedTheme(id);
  };

  const handleProceed = () => {
    if (selectedTheme) {
      onProceed(selectedTheme);
    } else {
      alert('Please select a theme to proceed.');
    }
  };

  return (
    <div className="themes-page">
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

      <section className="themes-section">
        <h2>Select Your Business Card Theme</h2>
        <div className="themes-grid">
          {themesData.map((theme) => (
            <div 
              key={theme.id} 
              className={`theme-card ${selectedTheme === theme.id ? 'selected' : ''}`}
              onClick={() => handleSelect(theme.id)}
            >
              <img src={theme.imageUrl} alt={theme.name} className="theme-image" />
              <h3 className="theme-name">{theme.name}</h3>
            </div>
          ))}
        </div>
        <button className="primary-btn proceed-btn" onClick={handleProceed}>
          Proceed
        </button>
        <button className="primary-btn proceed-btn" onClick={onBack}>
          Back
        </button>
      </section>
    </div>
  );
};

export default Themes;



