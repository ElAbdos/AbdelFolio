import React from 'react';
import type { SocialLink } from '../types';

interface ContactCardProps {
  socialLinks: SocialLink[];
  connectLabel: string;
  availableLabel: string;
}

// Composant pour la carte de contact dans la section Hero
export const ContactCard: React.FC<ContactCardProps> = ({socialLinks, connectLabel, availableLabel,}) => {
  return (
    <div className="contact-card">
      <p className="contact-card-label">{connectLabel}</p>
      <div className="contact-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-link-icon">{link.icon}</span>
            <span className="contact-link-info">
              <span className="contact-link-name">{link.name}</span>
              <span className="contact-link-user">{link.username}</span>
            </span>
          </a>
        ))}
      </div>
      <div className="contact-status">
        <span className="status-indicator"></span>
        <span>{availableLabel}</span>
      </div>
    </div>
  );
};
