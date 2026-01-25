import React from 'react';

interface BioBoxProps {
  bio: string;
}

// Composant pour afficher une courte biographie dans la section héros
export const BioBox: React.FC<BioBoxProps> = ({ bio }) => {
  return (
    <div className="hero-bio-box">
      <p className="hero-bio">{bio}</p>
    </div>
  );
};
