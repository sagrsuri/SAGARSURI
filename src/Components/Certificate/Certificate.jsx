import React, { useState, useEffect } from 'react';
import './Certificate.css';
import certificates from './certificateData.js'; // Import the certificate data

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    if (selectedImage === src) {
      // Close modal if the same image is clicked again
      setSelectedImage(null);
    } else {
      // Open modal with the selected image
      setSelectedImage(src);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Effect to handle page scroll
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Cleanup function to ensure scrolling is re-enabled
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <section id="Certificate" className="project bg-slate-200 w-full h-full dark:bg-slate-900 py-16">
      <h1 className="text-center mt-[20px] text-4xl font-bold">Certificate</h1>

      <div className="flex mt-14 justify-center align-middle flex-wrap gap-10">
        {certificates.map(certificate => (
          <img
            key={certificate.id}
            className='certificate cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-[1.01] '
            src={certificate.src}
            alt={certificate.alt}
            onClick={() => handleImageClick(certificate.src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out opacity-100" onClick={handleCloseModal}>
          <img src={selectedImage} alt="Certificate" className="modal-image max-w-full max-h-full object-contain transition-transform duration-500 ease-in-out transform scale-100" />
        </div>
      )}
    </section>
  );
};

export default Certificate;
