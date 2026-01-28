import React, { forwardRef } from 'react';
import type { MenuItem } from '../types';

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
  scrollToSection: (e: React.MouseEvent, sectionId: string) => void;
}

// Composant pour le menu mobile
export const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(({ menuItems, isOpen, activeSection, onClose, scrollToSection }, ref) => {
    return (
      <>
        <div className={`mobile-menu ${isOpen ? 'show' : ''}`} ref={ref}>
          <ul className="mobile-menu-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className={`mobile-menu-link clickable ${activeSection === item.id ? 'active' : ''}`} onClick={(e) => scrollToSection(e, item.id)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {isOpen && <div className="mobile-menu-overlay" onClick={onClose} />}
      </>
    );
  }
);

MobileMenu.displayName = 'MobileMenu';
