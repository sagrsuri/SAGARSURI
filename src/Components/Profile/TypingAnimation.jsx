// TypingAnimation.js
import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed = 200 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        setIndex(0);
        setDisplayText(``);
      }
    };
    const timer = setInterval(handleTyping, speed);
    return () => clearInterval(timer);
  }, [index, text, speed]);

  return <span className='gradient-text text-3xl'>{displayText}</span>;
};

export default TypingAnimation;
