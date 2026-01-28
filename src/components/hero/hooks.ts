import { useState, useEffect } from 'react';

// Hook pour créer un effet de typewriter
export const useTypewriter = (texts: string[], typingSpeed = 150, deleteSpeed = 50, pauseDuration = 2000): string => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentFullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deleteSpeed, pauseDuration]);

  return displayedText;
};
