import React, { useEffect, useState } from 'react';
import '../styles/HomeComponent.css';

const HomeComponent = ({ navigate }) => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch('/dragon_palace.json')
      .then((response) => response.json())
      .then((data) => setHomeData(data));
  }, []);

  if (!homeData) return <div className="home-container">Loading...</div>;

  return (
    <div className="home-container">
      <div className="home-content-card">
        {/* Logo Section */}
        <div className="logo-section">
          <img
            src="/DragonPalace.PNG"
            alt="Dragon Palace Logo"
            className="restaurant-logo"
          />
        </div>

        {/* Description Section */}
        <div className="description-section">
          <p className="description-text" style={{ whiteSpace: 'pre-line' }}>
            {homeData.fi.description}
          </p>
          <p className="description-text-en" style={{ whiteSpace: 'pre-line' }}>
            {homeData.en.description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="cta-section">
          <button onClick={() => navigate('menu')} className="menu-button">
            Menu ›
          </button>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="gallery-image">
            <img src="/buffetpoyta.jpg" alt="Buffet Table" />
          </div>
          <div className="gallery-image">
            <img src="/sushia.jpg" alt="Sushi" />
          </div>
          <div className="gallery-image">
            <img src="/buffet.jpg" alt="Buffet" />
          </div>
        </div>

        {/* Contact Note */}
        <div className="contact-note">
          <p>
            {homeData.fi.contact.note} / {homeData.en.contact.note}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
