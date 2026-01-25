import React from 'react';

interface QuoteProps {
  text: string;
}

// Composant de citation
export const Quote: React.FC<QuoteProps> = ({ text }) => {
  return (
    <div className="hero-quote">
      <p className="quote-text">{text}</p>
    </div>
  );
};
