import React, { useEffect } from 'react';
import './Loader.css'; // Ensure you have your updated CSS for the loader

const Loader = ({ darkMode }) => {
  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.getElementById('loading');
      setTimeout(() => {
        preloader.style.display = 'none'; // Hide preloader after 4 seconds
      }, 4000); // 4000ms (4 seconds) delay
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`loader ${darkMode ? 'bg-dark' : 'bg-light'}`} id="loading">
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <span className="loading">LOADING...</span>
    </div>
  );
};

export default Loader;
