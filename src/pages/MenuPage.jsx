import React, { useState, useEffect } from 'react';
import MenuComponent from '../components/MenuComponent';
import FooterComponent from '../components/FooterComponent';
import leftArrow from '../assets/left-arrow.png';
import '../styles/MenuPage.css';

const MenuPage = ({ navigate }) => {
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100px
      if (window.scrollY > 100) {
        setShowBackButton(true);
      } else {
        setShowBackButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate('home'), 300);
  };

  return (
    <div className="menu-page">
      <button
        className={`back-to-home-button ${showBackButton ? 'visible' : ''}`}
        onClick={handleBackClick}
        aria-label="Back to homepage"
      >
        <img src={leftArrow} alt="Back" />
      </button>
      <header>
        <img
          src="/DragonPalace.PNG"
          alt="Dragon Palace Logo"
          className="restaurant-logo"
          onClick={() => navigate('home')}
          style={{ cursor: 'pointer' }}
        />
      </header>
      <main>
        <MenuComponent />
      </main>
      <FooterComponent navigate={navigate} />
    </div>
  );
};

export default MenuPage;
