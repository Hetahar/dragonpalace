import React from 'react';
import HomeComponent from '../components/HomeComponent';

const HomePage = ({ navigate }) => {
  return (
    <div className="home-page">
      <HomeComponent navigate={navigate} />
    </div>
  );
};

export default HomePage;
