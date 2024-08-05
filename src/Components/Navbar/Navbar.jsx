import React, { useEffect, useState } from 'react';
import resume from '../../assets/resume.pdf'; // Import resume file
import {
  IoSunnySharp,
  IoMoonSharp,
  IoMenuSharp,
  IoCloseSharp,
} from 'react-icons/io5'; // Import icons from react-icons library
import toggleSound from '../../assets/toggel.mp3'; // Import sound file for toggle
import { menuLinks } from './menuLinks'; // Import menu links data


// Navbar component definition
const Navbar = ({ darkMode, toggleDarkMode }) => {
  // State to track the currently active section based on scrolling
  const [activeSection, setActiveSection] = useState(menuLinks[0].id); // Default to first link
  // State to add a shadow to the navbar when scrolling
  const [navbarShadow, setNavbarShadow] = useState(false);
  // State to trigger sound play on toggle
  const [playSound, setPlaySound] = useState(false);
  // State to control mobile menu visibility
  const [showMenu, setShowMenu] = useState(false);

  // Function to handle theme toggle with sound
  const handleToggle = () => {
    toggleDarkMode(); // Call the toggle function passed as a prop
    setPlaySound(true); // Trigger sound effect
  };

  // Effect to handle intersection observer for active section and scroll events
  useEffect(() => {
    // Options for the IntersectionObserver
    const options = {
      root: null, // Observe relative to viewport
      rootMargin: '0px',
      threshold: 0.5, // 50% of the element must be visible
    };

    // IntersectionObserver callback function
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section when it comes into view
        }
      });
    }, options);

    // Select all sections by their tag name
    const sections = document.querySelectorAll('section');
    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Scroll event handler to update navbar shadow and active section
    const handleScroll = () => {
      setNavbarShadow(window.scrollY > 0); // Add shadow if scrolled

      // Check which section is in view and set as active
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    // Cleanup function to remove observers and event listeners
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to play sound on toggle
  useEffect(() => {
    if (playSound) {
      const audio = new Audio(toggleSound);
      audio.play();
      setPlaySound(false); // Reset sound trigger
    }
  }, [playSound]);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to handle link click and scroll to section
  const handleLinkClick = (linkId) => {
    setShowMenu(false); // Close the mobile menu after selection

    // Scroll to the clicked section if needed
    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle CV download
  const handleDownloadCV = (e) => {
    e.preventDefault(); // Prevent the default anchor click behavior
    const userConfirmed = window.confirm('Do you want to download the CV?');
    if (userConfirmed) {
      window.open(resume, '_blank'); // Open resume in a new tab
    }
  };

  return (
    <div
      className={`navbar w-full fixed top-0 z-50 transition duration-300 ${
        navbarShadow ? 'shadow-lg' : ''
      }`}
    >
      <div className="navbar-wrapper flex justify-between items-center bg-slate-50 dark:bg-slate-950 py-1">
        {/* Left Logo/Brand Name - Hidden on mobile */}
        <div className="hidden md:flex justify-start align-middle gap-1 m-1 p-1 cursor-pointer">
          <h1 className="text-3xl font-serif flex justify-center items-center text-blue-700 dark:text-blue-300">
            <i className="fa-regular gradient-text fa-handshake"></i>
          </h1>
          <h1 className="text-3xl font-serif flex justify-center items-center">
            
              Portfolio<span className="text-blue-700 dark:text-blue-300">.</span>
           
          </h1>
        </div>

        {/* Centered Links (visible on desktop, hidden on mobile) */}
        <div className="hidden md:flex m-1 p-1 text-[16px] font-serif">
          <ul className="flex gap-3 justify-start align-middle">
            {menuLinks.map((link) => (
              <li
                key={link.id}
                className={`fill-left-to-right w-full text-center dark:border-white rounded-full border-[1px] border-black ${
                  activeSection === link.id ? 'bg-gradient-to-r from-[#ff9408db] via-[#ff06ee] to-[#f5ffd5] dark:bg-blue-600' : ''
                }`}
              >
                <a
                  className="rounded-2xl px-3 pt-[1px]"
                  href={`#${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Mobile Menu (visible on mobile, hidden on desktop) */}
        <div className="md:hidden flex justify-end align-middle m-1 p-1">
          <button
            className="text-2xl text-gray-900 dark:text-gray-300"
            onClick={toggleMenu}
          >
            {showMenu ? <IoCloseSharp /> : <IoMenuSharp />}
          </button>
        </div>

        {/* Responsive Mobile Menu */}
        {showMenu && (
          <div className="md:hidden absolute left-1 top-12 rounded bg-slate-100 border-[1px] border-black dark:border-pink-500 font-serif dark:bg-slate-950 py-2 px-4 w-[auto]">
            <ul className="flex flex-col gap-4 items-start">
              {menuLinks.map((link) => (
                <li
                  key={link.id}
                  className={`fill-left-to-right w-full text-center dark:border-white rounded-full border-[1px] border-black ${
                    activeSection === link.id ? 'bg-red-500 dark:bg-blue-600' : ''
                  }`}
                >
                  <a
                    className="rounded-2xl px-3 pt-[1px]"
                    href={`#${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Download CV Button */}
        <div className="flex justify-between align-middle m-1 p-1 gap-1">
          <div className="bg-white fill-right-to-left hover:bg-slate-200 hover:dark:bg-slate-950 dark:bg-black dark:border-white rounded-s-full border-[1px] border-black">
            <button
              className="rounded-2xl px-4 pt-[1px] font-semibold"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </div>
          <div className="mr-2 fill-left-to-right-nav bg-white dark:border-[1px] border-[1px] border-black dark:border-green-500 dark:bg-slate-800 w-[40px] h-[30px] rounded-e-full">
            <button
              className="w-6 pt-[2px] pl-[2px] rounded-xl flex items-center justify-center"
              onClick={handleToggle}
            >
              {darkMode ? (
                <IoSunnySharp className="w-6 h-6 pl-1 active:animate-spin text-yellow-500 hover:text-white" />
              ) : (
                <IoMoonSharp className="w-6 h-6 pl-1 text-gray-900 active:animate-spin drop-shadow-[0.5px_1px_1px_#ffffff]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
