import { useState, useEffect } from 'react';
import type { MenuItem } from './types';
import { SCROLL_THRESHOLD, ACTIVE_SECTION_OFFSET } from './constants';

// Hook pour détecter le scroll et la section active
export const useScrollDetection = (menuItems: MenuItem[]) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > SCROLL_THRESHOLD;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + ACTIVE_SECTION_OFFSET;

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, menuItems]);

  return { scrolled, activeSection, setActiveSection };
};

// Hook pour détecter les clics en dehors de plusieurs références
export const useClickOutside = (refs: Array<React.RefObject<any>>, callbacks: (() => void)[]) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      refs.forEach((ref, index) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          callbacks[index]?.();
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [refs, callbacks]);
};
