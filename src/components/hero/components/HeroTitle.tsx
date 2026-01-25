import React from 'react';

interface HeroTitleProps {
  nameHighlight?: string;
}

// Composant pour le titre principal de la section Hero
export const HeroTitle: React.FC<HeroTitleProps> = ({ nameHighlight = 'El Haroria' }) => {
  return (
    <h1 className="hero-title">
      Abdel <br/>
      <span className="text-highlight">{nameHighlight}</span>
    </h1>
  );
};
