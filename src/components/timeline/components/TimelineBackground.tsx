import React from 'react';

// Fond d'écran pour la timeline avec decor
export const TimelineBackground: React.FC = () => {
  return (
    <>
      <div className="timeline-bg-grid" />
      <div className="timeline-bg-glow" />
      <div className="timeline-bg-orb top-left" />
      <div className="timeline-bg-orb bottom-right" />

      <div className="timeline-particles">
        <div className="timeline-particle" />
        <div className="timeline-particle" />
        <div className="timeline-particle" />
        <div className="timeline-particle" />
        <div className="timeline-particle" />
      </div>
    </>
  );
};
