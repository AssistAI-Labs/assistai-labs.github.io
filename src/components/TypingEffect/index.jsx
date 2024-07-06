import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, callback }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else if (callback) {
      callback();
    }
  }, [index, text, callback]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
