import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/menu') {
      setCurrentPage('menu');
    } else {
      setCurrentPage('home');
    }
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/menu') {
        setCurrentPage('menu');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div>
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'menu' && <MenuPage navigate={navigate} />}
    </div>
  );
}

export default App;
