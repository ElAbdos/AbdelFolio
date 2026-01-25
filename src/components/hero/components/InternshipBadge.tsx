import React from 'react';

interface InternshipBadgeProps {
  text: string;
}

// Composant de stage
export const InternshipBadge: React.FC<InternshipBadgeProps> = ({ text }) => {
  return (
    <div className="internship-badge">
      <span className="pulse-dot"></span>
      {text}
    </div>
  );
};
