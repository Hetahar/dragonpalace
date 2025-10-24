import React, { useEffect, useState } from 'react';
import '../styles/MenuComponent.css'; // Import the CSS file

const MenuComponent = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetch('/menu.json')
      .then((response) => {
        console.log('Menu fetch response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Menu data loaded:', data);
        setMenuData(data);
      })
      .catch((error) => {
        console.error('Error loading menu data:', error);
      });
  }, []);

  if (!menuData) return <div className="menu-container">Loading...</div>;

  const formatPrice = (priceLike) => {
    if (priceLike == null) return null;
    if (typeof priceLike === 'number') return priceLike.toFixed(2);
    const normalized = String(priceLike)
      .replace(',', '.')
      .replace(/[^\d.]/g, '');
    const num = Number(normalized);
    return Number.isFinite(num) ? num.toFixed(2) : String(priceLike);
  };

  return (
    <div className="menu-container">
      {menuData.categories?.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2>{category.name}</h2>

          <ul>
            {category.items?.map((item, idx) => (
              <li key={item.id ?? `${categoryIndex}-${idx}`}>
                <div>
                  {item.id && <strong>{item.id}. </strong>}
                  <strong>{item.name}</strong>
                  {item.english && <span> ({item.english})</span>}
                </div>

                {(item.price != null || item.priceText) && (
                  <div>€{formatPrice(item.price ?? item.priceText)}</div>
                )}

                {Array.isArray(item.items) && item.items.length > 0 && (
                  <ul>
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                )}

                {Array.isArray(item.options) && item.options.length > 0 && (
                  <div>
                    <em>Options:</em>
                    <ul>
                      {item.options.map((opt, oi) => (
                        <li key={oi}>{opt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
