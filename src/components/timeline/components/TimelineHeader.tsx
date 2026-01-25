import React from 'react';

interface TimelineHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
}

//En-tête de la section Timeline
export const TimelineHeader: React.FC<TimelineHeaderProps> = ({ tag, title, subtitle }) => {
  return (
    <div className="timeline-header">
      <div className="timeline-tag">
        <span>{tag}</span>
      </div>
      <h2 className="timeline-title">{title}</h2>
      <p className="timeline-subtitle">{subtitle}</p>
    </div>
  );
};
