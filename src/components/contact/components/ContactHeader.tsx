import React from 'react';

interface ContactHeaderProps {
  tag: string;
  titleStart: string;
  titleHighlight: string;
  subtitle: string;
}

// Header de la section Contact
export const ContactHeader: React.FC<ContactHeaderProps> = ({tag, titleStart, titleHighlight, subtitle}) => {
  return (
    <div className="contact-header">
      <div className="contact-badge">
        <span>{tag}</span>
      </div>
      <h2 className="contact-title">
        {titleStart} <span className="text-gradient">{titleHighlight}</span>
      </h2>
      <p className="contact-subtitle">{subtitle}</p>
    </div>
  );
};
