import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

interface ActionButtonsProps {
  cvPath: string;
  primaryText: string;
  secondaryText: string;
  onScrollToProjects: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Composant pour les boutons d'action dans la section Hero
export const ActionButtons: React.FC<ActionButtonsProps> = ({cvPath, primaryText, secondaryText, onScrollToProjects,}) => {
  return (
    <div className="hero-actions">
      <a href={cvPath} download className="btn-primary">
        <Download size={18} />
        {primaryText}
      </a>
      <a href="#projects" className="btn-secondary" onClick={onScrollToProjects}>
        {secondaryText}
        <ArrowRight size={18} />
      </a>
    </div>
  );
};
