import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Themes from './pages/Themes';
import CustomizationPage from './pages/CustomizationPage';
import SharingPage from './pages/SharingPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [businessCardData, setBusinessCardData] = useState(null);

  // Navigate from Landing to Themes
  const goToThemes = () => {
    console.log('Navigating to Themes page');
    setCurrentPage('themes');
  };

  // Called from Themes: set the selected theme and go to Customization page
  const handleProceedFromThemes = (themeId) => {
    console.log('Selected theme:', themeId);
    setSelectedTheme(themeId);
    setCurrentPage('customization');
  };

  // Save customized business card data and navigate to Sharing Page
  const goToSharingPage = (cardData) => {
    console.log('Navigating to Sharing page with data:', cardData);
    setBusinessCardData(cardData); // Store the customized business card data
    setCurrentPage('sharing');
  };

  // Navigation helper functions for going back
  const goBackToLanding = () => {
    console.log('Going back to Landing page');
    setCurrentPage('landing');
  };

  const goBackToThemes = () => {
    console.log('Going back to Themes page');
    setCurrentPage('themes');
  };

  const goBackToCustomization = () => {
    console.log('Going back to Customization page');
    setCurrentPage('customization');
  };

  return (
    <div className="App">
      {currentPage === 'landing' && <LandingPage onGetStarted={goToThemes} />}
      {currentPage === 'themes' && (
        <Themes onBack={goBackToLanding} onProceed={handleProceedFromThemes} />
      )}
      {currentPage === 'customization' && (
        <CustomizationPage
          selectedTheme={selectedTheme}
          onBack={goBackToThemes}
          onNavigate={goToSharingPage} // Pass function to move to sharing page
        />
      )}
      {currentPage === 'sharing' && (
        <SharingPage businessCardData={businessCardData} onBack={goBackToCustomization} />
      )}
    </div>
  );
}

export default App;





