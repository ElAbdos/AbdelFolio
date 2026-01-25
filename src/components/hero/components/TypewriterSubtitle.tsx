import React from 'react';

interface TypewriterSubtitleProps {
  prefix: string;
  displayedText: string;
}

// Sous-titre avec effet machine à écrire
export const TypewriterSubtitle: React.FC<TypewriterSubtitleProps> = ({ prefix, displayedText }) => {
  return (
    <div className="hero-subtitle">
      <span>&lt;&gt;</span>
      {prefix} <span className="subtitle-highlight typewriter-text">{displayedText}</span>
      <span className="cursor"></span>
    </div>
  );
};
