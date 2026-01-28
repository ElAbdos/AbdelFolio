import React from 'react';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

interface ContactInfoProps {
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

// Composant pour afficher les informations de contact
export const ContactInfo: React.FC<ContactInfoProps> = ({ copiedEmail, onCopyEmail }) => {
  return (
    <div className="contact-info-col">
      <div className="email-card" onClick={onCopyEmail} title="Copier l'email">
        <div className="email-icon-circle">
          <Mail size={24} />
        </div>
        <div className="email-details">
          <span className="email-label">Email</span>
          <h3 className="email-address">{CONTACT_EMAIL}</h3>
        </div>
        <div className="copy-icon">
          {copiedEmail ? <Check size={20} color="#6bcb77" /> : <Copy size={20} />}
        </div>
      </div>

      <div className="location-badge">
        <MapPin size={18} className="location-icon" />
        <span>France, Toulouse</span>
      </div>
      <div className="social-grid">
        <a href="https://github.com/ElAbdos" target="_blank" rel="noopener noreferrer" className="social-card github">
          <Github size={24} />
          <span>GitHub</span>
          <ExternalLink size={14} className="social-arrow" />
        </a>
        <a href="https://www.linkedin.com/in/abdel-el-haroria-6a529233b/" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
          <Linkedin size={24} />
          <span>LinkedIn</span>
          <ExternalLink size={14} className="social-arrow" />
        </a>
      </div>
    </div>
  );
};
