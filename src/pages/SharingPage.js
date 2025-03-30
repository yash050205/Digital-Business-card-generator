import React, { useState } from 'react';
import { FaShareAlt, FaWhatsapp, FaEnvelope, FaDownload } from 'react-icons/fa';
import '../App.css';

const SharingPage = ({ businessCardData, onBack }) => {
  const [shareableLink, setShareableLink] = useState("");

  const generateLink = () => {
    const cardDataString = encodeURIComponent(JSON.stringify(businessCardData));
    const link = `${window.location.origin}/view-card?data=${cardDataString}`;
    setShareableLink(link);
  };

  const shareViaWhatsApp = () => {
    if (shareableLink) {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareableLink)}`, '_blank');
    }
  };

  const shareViaEmail = () => {
    if (shareableLink) {
      window.location.href = `mailto:?subject=My Business Card&body=${encodeURIComponent(shareableLink)}`;
    }
  };

  const downloadAsImage = () => {
    const link = document.createElement('a');
    link.href = businessCardData.cardImage;
    link.download = 'business_card.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="sharing-page">
      <header className="header">
        <div className="logo-container">
          <img src="./images/logo.png"  alt="CardMaster Logo" className="logo" />
          <span className="brand-name">CardMaster</span>
        </div>
      </header>

      <section className="sharing-section">
        <h2>Share & Export Your Business Card</h2>
        {businessCardData.cardImage && (
          <img src={businessCardData.cardImage} alt="Business Card" className="preview-image" />
        )}
        
        <div className="sharing-buttons">
          <button className="primary-btn" onClick={generateLink}><FaShareAlt /> Generate Shareable Link</button>
          <button className="primary-btn whatsapp-btn" onClick={shareViaWhatsApp}><FaWhatsapp /> Share via WhatsApp</button>
          <button className="primary-btn email-btn" onClick={shareViaEmail}><FaEnvelope /> Share via Email</button>
          <button className="primary-btn download-btn" onClick={downloadAsImage}><FaDownload /> Download as Image</button>
        </div>
      </section>

      <button className="secondary-btn" onClick={onBack}>Back to Customization</button>
    </div>
  );
};

export default SharingPage;

