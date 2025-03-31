import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import '../App.css';

const Customizationpage = ({ selectedTheme, onNavigate }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [photo, setPhoto] = useState(null);
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(false);
  const cardRef = useRef(null); // Ref for canvas capture

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleLogoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  // Capture card as image using canvas
  const generateCardImage = () => {
    if (!cardRef.current) return;

    html2canvas(cardRef.current, { backgroundColor: null }).then((canvas) => {
      const imgURL = canvas.toDataURL('image/png');
<<<<<<< HEAD
      //setCardImage(imgURL);
=======
>>>>>>> 95c52ef (adding package)
      onNavigate('SharingPage', imgURL); // Send image to SharingPage
    });
  };

  let themeClass = '';
  switch (selectedTheme) {
    case 1: themeClass = 'theme-classic-elegance'; break;
    case 2: themeClass = 'theme-modern-minimal'; break;
    case 3: themeClass = 'theme-vibrant-colors'; break;
    case 4: themeClass = 'theme-professional-bold'; break;
    case 5: themeClass = 'theme-sleek-simple'; break;
    case 6: themeClass = 'theme-artistic-flair'; break;
    default: themeClass = '';
  }

  return (
    <div className="customization-page">
      <header className="header">
        <div className="logo-container">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="CardMaster Logo" className="logo" />
          <span className="brand-name">CardMaster</span>
        </div>
      </header>

      <section className="customization-section">
        <h2>Customize Your Business Card</h2>
        <form className="customization-form" onSubmit={handlePreview}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Business Designation:</label>
            <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website Name:</label>
            <input type="url" id="website" value={website} onChange={(e) => setWebsite(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Upload Your Photo:</label>
            <input type="file" id="photo" accept="image/*" onChange={handlePhotoUpload} />
          </div>
          <div className="form-group">
            <label htmlFor="logo">Upload Your Company Logo:</label>
            <input type="file" id="logo" accept="image/*" onChange={handleLogoUpload} />
          </div>
          <button type="submit" className="primary-btn">Preview Business Card</button>
        </form>
      </section>

      {preview && (
        <section className="preview-section">
          <h2>Business Card Preview</h2>
          <div ref={cardRef} className={`card-preview ${themeClass}`}>
            {logo && <img src={logo} alt="Company Logo" className="card-logo" />}
            <div className="card-details">
              <h3 className="card-name">{name || 'Your Name'}</h3>
              <p className="card-designation">{designation || 'Your Designation'}</p>
              <p className="card-phone">{phone || 'Phone Number'}</p>
              <p className="card-address">{address || 'Address'}</p>
              <p className="card-website">{website || 'Website'}</p>
            </div>
            {photo && <img src={photo} alt="User" className="card-photo" />}
          </div>
          <div className="preview-buttons">
            <button className="primary-btn" onClick={generateCardImage}>Share/Export</button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Customizationpage;

