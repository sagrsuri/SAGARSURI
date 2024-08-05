// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Skills from "./Components/Skills/Skills";
import Certificate from "./Components/Certificate/Certificate";
import Loader from "./Components/Loader/Loader";
import MetaTags from "./Components/MetaTags/MetaTags";
import metaData from "./Components/MetaTags/metaData"; // Corrected filename to match import
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("loaderShown");
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("loaderShown", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-100">
      <MetaTags {...metaData.home} />
      {loading ? (
        <Loader darkMode={darkMode} />
      ) : (
        <>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Profile />
          <Skills />
          <Project />
          <Certificate />
          <Footer darkMode={darkMode} />
        </>
      )}
    </div>
  );
};

export default App;
