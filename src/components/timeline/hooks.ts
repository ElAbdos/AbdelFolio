import { useState, useEffect } from 'react';
import { TIMELINE_CONFIG } from './constants';

// Hook pour détecter le scroll et animer la timeline
export const useTimelineScroll = (sectionRef: React.RefObject<HTMLElement | null>) => {
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const visibleTop = Math.max(0, -rect.top + (windowHeight / TIMELINE_CONFIG.windowHeightOffset));

      const progress = (visibleTop / totalHeight) * 100;
      setProgressHeight(Math.min(Math.max(progress, 0), 100));

      const items = sectionRef.current.querySelectorAll('.timeline-item');
      items.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight * TIMELINE_CONFIG.visibilityThreshold) {
          item.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef]);

  return progressHeight;
};


// Hook pour l'effet de suivi de souris sur les cartes
export const useCardMouseTracking = () => {
  const handleCardMouseMove = (e: MouseEvent, cardRef: HTMLElement | null) => {
    if (!cardRef) {
      return;
    }
    const rect = cardRef.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.style.setProperty('--mouse-x', `${x}%`);
    cardRef.style.setProperty('--mouse-y', `${y}%`);
  };

  return { handleCardMouseMove };
};
