import React from 'react';
import HomeComponent from '../components/HomeComponent';
import FooterComponent from '../components/FooterComponent';

const HomePage = ({ navigate }) => {
  return (
    <div className="home-page">
      <HomeComponent navigate={navigate} />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
