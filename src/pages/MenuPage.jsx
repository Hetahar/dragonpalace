import React from "react";
import MenuComponent from "../components/MenuComponent";
import "../styles/MenuPage.css";

const MenuPage = () => {
  return (
    <div className="menu-page">
      <header>
        <h1>Welcome to the Menu Page</h1>
      </header>
      <main>
        <MenuComponent />
      </main>
    </div>
  );
};

export default MenuPage;
