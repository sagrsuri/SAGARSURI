import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import lightFooterBg from '../../assets/bg-footer.jpg';
import darkFooterBg from '../../assets/bg-dark.jpg';
import { socialMediaLinks } from './socialMediaLinks'; // Import the social media links

const Footer = ({ darkMode }) => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle reCAPTCHA change
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // Basic email validation function
  const isEmailValid = (email) => {
    // Basic email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    if (!captchaValue) {
      setStatus('Please complete the CAPTCHA.');
      return;
    }

    // Replace these with your own EmailJS service ID, template ID, and user ID
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
      { message, email }, // Template variables
      import.meta.env.VITE_EMAILJS_USER_ID // User ID
    )
    .then((result) => {
      setStatus('Message sent successfully!');
      setMessage('');
      setEmail('');
      setCaptchaValue(null);
    }, (error) => {
      setStatus('Failed to send message.');
      console.log(error.text);
    });
  };

  // Set background image based on dark mode
  const bgFooter = darkMode ? darkFooterBg : lightFooterBg;

  return (
    <section id="Footer" className="footer py-5 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${bgFooter})` }}>
      <div className="container mx-auto px-4 py-12">
        {/* Heading */}
        <p className="bg-slate-300 shadow-transparent dark:bg-[#09355d] cursor-pointer text-center font-bold text-lg px-5 py-4">
          <a href="https://github.com/SagrSuri/sagarsuri" target='_blank' rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-[#26d1d6]">
            Contribute{' '}
            <span className="ml-1">
              <i className="fas fa-code-branch"></i>
            </span>
          </a>
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Left Column */}
          <div className="message flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-6xl mb-20 gradient-text cursor-pointer">
              <i className="far fa-handshake"></i>
            </p>
            <p className='mt-10'>
              Click the button below to donate.
            </p>
            <p className="text-xl">
              <a href="https://www.buymeacoffee.com/sagarsuri" target='_blank' rel="noopener noreferrer">
                <img className="w-full max-w-xs rounded-3xl transform scale-75 border-black border-2 shadow hover:scale-90 transition-transform duration-500" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=sagarsuri&button_colour=40DCA5&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" alt="Buy Me A Coffee" />
              </a>
            </p>
            <p className="pt-4 text-gray-800 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Thank you for visiting! Send us your feedback...
            </p>
          </div>

          {/* Right Column */}
          <div className="contact pb-8">
            <h1 className="text-3xl font-bold text-center mb-4 hover:text-[#12656c] cursor-pointer">Contact Information</h1>
            <p className="text-center font-serif mb-2">
              Email: {' '}
              <a href="mailto:sagrsuri@gmail.com" className="hover:text-blue-900 dark:hover:text-green-400">
                SAGRSURI@GMAIL.COM
              </a>
            </p>
            <p className="text-center font-serif text-[1.1rem] mb-2">
              Mobile: {' '}
              <a href="tel:+918806116794" className="hover:text-blue-900 dark:hover:text-green-400">
                +91 8446262100
              </a>
            </p>
            <p className="text-center font-serif text-[1.1rem] mb-8">
             UPI: {' '}
             {/* Custom payment link */}
             <a href="upi://pay?pa=sagarsuri@paytm&pn=Sagar&cu=INR" className="hover:text-blue-900 dark:hover:text-green-400">
              SAGARSURI@Paytm
              </a>
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
              <label htmlFor="email" className="hidden">Email</label>
              <input
                type="email"
                className="w-96 p-2 mb-3 px-4 bg-transparent border-2 border-green-800 rounded-lg outline-none italic"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="message" className="hidden">Message</label>
              <textarea
                className="w-96 p-2 mb-3 px-4 bg-transparent border-2 border-green-800 rounded-lg resize-none outline-none italic"
                name="message"
                id="message"
                placeholder="Send Message"
                required
                rows={3}
                cols={20}
                value={message}
                onChange={handleMessageChange}
              ></textarea>
           {/*  <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
                className="mb-4"
              /> */}
              <button
                type="submit"
                className="w-24 h-10 rounded-lg border-[1px] outline-none border-green-800 bg-slate-600 text-xl shadow-md hover:bg-slate-700 text-red-600 dark:text-slate-100 hover:text-white dark:hover:text-blue-600 transition duration-300"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            {status && <p className="text-center mt-2">{status}</p>}
          </div>
          {/* Social Media Links */}
          <div className="w-full flex gap-4 justify-center align-middle">
            {socialMediaLinks.map((link) => (
              <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={link.imageSrc}
                  alt={link.alt}
                  className="w-10 h-10 hover:animate-bounce"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Separator */}
        <hr className="my-12 border-2 border-slate-700 dark:border-slate-500 " />

        {/* Bottom Links */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-serif text-[10px]">
            <a href="https://sagarsuri.in/" target="_blank" rel="noopener noreferrer">
              &copy; <span className='hover:text-slate-950 px-1 py-[2px] rounded-xl font-serif hover:bg-white'>sagarsuri.in</span>
            </a>{' '}2023 - 2024
          </p>
          <p>
            <span className='font-serif font-normal text-[10px]'>All Rights Reserved. </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
