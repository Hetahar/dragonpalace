import React from 'react';
import MenuComponent from '../components/MenuComponent';
import FooterComponent from '../components/FooterComponent';
import '../styles/MenuPage.css';

const MenuPage = ({ navigate }) => {
  return (
    <div className="menu-page">
      <button
        className="back-to-home-button"
        onClick={() => navigate('home')}
        aria-label="Back to homepage"
      >
        <img src="/left-arrow.png" alt="Back" />
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
