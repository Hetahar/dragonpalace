import React from 'react';
import MenuComponent from '../components/MenuComponent';
import FooterComponent from '../components/FooterComponent';
import '../styles/MenuPage.css';

const MenuPage = () => {
  return (
    <div className="menu-page">
      <header>
        <img
          src="/DragonPalace.PNG"
          alt="Dragon Palace Logo"
          className="restaurant-logo"
        />
      </header>
      <main>
        <MenuComponent />
      </main>
      <FooterComponent />
    </div>
  );
};

export default MenuPage;
