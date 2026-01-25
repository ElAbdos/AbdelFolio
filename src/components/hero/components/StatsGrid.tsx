import React from 'react';
import type { StatItem } from '../types';

interface StatsGridProps {
  stats: StatItem[];
  translations: {
    years: string;
    projects: string;
    tech: string;
    internship: string;
  };
}

// Grille de statistiques
export const StatsGrid: React.FC<StatsGridProps> = ({ stats, translations }) => {
  return (
    <div className="hero-stats">
      {stats.map((stat) => (
        <div key={stat.labelKey} className="stat-item">
          <span className="stat-number">{stat.value}</span>
          <span className="stat-label">{translations[stat.labelKey as keyof typeof translations]}</span>
        </div>
      ))}
    </div>
  );
};
