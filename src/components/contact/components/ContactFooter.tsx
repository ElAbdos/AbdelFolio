import React from 'react';

interface ContactFooterProps {
  navLabels: {
    home: string;
    skills: string;
    projects: string;
  };
  onNavigate: (e: React.MouseEvent, sectionId: string) => void;
}

// Footer de la section Contact
export const ContactFooter: React.FC<ContactFooterProps> = ({ navLabels, onNavigate }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p className="copyright">
          © {currentYear} AbdelFolio.
        </p>
        <div className="footer-links">
          <a href="#home" className="footer-link" onClick={(e) => onNavigate(e, 'home')}>
            {navLabels.home}
          </a>
          <a href="#skills" className="footer-link" onClick={(e) => onNavigate(e, 'skills')}>
            {navLabels.skills}
          </a>
          <a href="#projects" className="footer-link" onClick={(e) => onNavigate(e, 'projects')}>
            {navLabels.projects}
          </a>
        </div>
      </div>
    </footer>
  );
};
