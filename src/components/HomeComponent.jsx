import React, { useEffect, useState } from 'react';
import '../styles/HomeComponent.css';

const HomeComponent = ({ navigate }) => {
  const [homeData, setHomeData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: '/buffet.jpg', alt: 'Buffet' },
    { src: '/sushia.jpg', alt: 'Sushi' },
    { src: '/buffetpöytä.jpg', alt: 'Buffet Table' },
    { src: '/eteinen.jpg', alt: 'Entrance' },
    { src: '/sisätila.jpg', alt: 'Interior' },
    { src: '/sisätila2.jpg', alt: 'Interior 2' },
  ];

  useEffect(() => {
    fetch('/dragon_palace.json')
      .then((response) => response.json())
      .then((data) => setHomeData(data));
  }, []);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!homeData) return <div className="home-container">Loading...</div>;

  return (
    <div className="home-container">
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
        <p className="description-text">{homeData.fi.description}</p>
        <p className="description-text-en">{homeData.en.description}</p>
      </div>

      {/* CTA Button */}
      <div className="cta-section">
        <button onClick={() => navigate('menu')} className="menu-button">
          Katso Menu / View Menu
        </button>
      </div>

      {/* Image Carousel */}
      <div className="carousel-section">
        <div className="carousel-container">
          <div className="carousel-image">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
            />
          </div>
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentImageIndex ? 'active' : ''
                }`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Opening Hours and Contact */}
      <div className="info-section">
        <div className="opening-hours">
          <h3>Aukioloajat / Opening Hours</h3>
          <div className="hours-grid">
            {Object.entries(homeData.fi.opening_hours).map(([day, hours]) => (
              <div key={day} className="hours-item">
                <span className="day">{day}</span>
                <span className="hours">{hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-note">
          <p>{homeData.fi.contact.note}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
