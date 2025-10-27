import React, { useEffect, useState } from 'react';
import '../styles/FooterComponent.css';

const FooterComponent = ({ navigate, isHomePage }) => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch('/dragon_palace.json')
      .then((response) => response.json())
      .then((data) => setFooterData(data));
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!isHomePage && navigate) {
      navigate('home');
    }
  };

  if (!footerData) return <div className="footer-container">Loading...</div>;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-logo-section">
            <img
              src="/SecondaryLogo.PNG"
              alt="Dragon Palace"
              className="footer-logo"
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <div className="footer-middle-section">
            <div className="footer-section">
              <h3>Sijainti / Location</h3>
              <div className="footer-info">
                <p>{footerData.fi.contact.address}</p>
              </div>
            </div>

            <div className="footer-section">
              <h3>Yhteystiedot / Contact</h3>
              <div className="footer-info">
                <p>
                  <strong>Puhelin / Phone:</strong>
                </p>
                <p>
                  <a href="tel:+3582338928">{footerData.fi.contact.phone}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Aukioloajat / Opening Hours</h3>
            <div className="hours-grid-footer">
              {Object.entries(footerData.fi.opening_hours).map(
                ([day, hours]) => (
                  <div key={day} className="hours-item-footer">
                    <span className="day">{day}</span>
                    <span className="hours">{hours}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="footer-message">
          <p>{footerData.fi.footer}</p>
          <p>{footerData.en.footer}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
