import React, { useEffect, useState } from 'react';
import '../styles/FooterComponent.css';

const FooterComponent = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch('/dragon_palace.json')
      .then((response) => response.json())
      .then((data) => setFooterData(data));
  }, []);

  if (!footerData) return <div className="footer-container">Loading...</div>;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contact-section">
          <h3>Yhteystiedot / Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Osoite / Address:</strong>
              <span>{footerData.fi.contact.address}</span>
            </div>
            <div className="contact-item">
              <strong>Puhelin / Phone:</strong>
              <span>{footerData.fi.contact.phone}</span>
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
