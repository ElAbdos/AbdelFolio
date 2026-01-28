import React, { useState, useRef, useMemo } from 'react';
import { translations } from '@/constants/translations';
import { useScrollDetection, useClickOutside } from './hooks';
import type { NavbarProps, MenuItem } from './types';
import { Logo } from './components/Logo';
import { NavMenu } from './components/NavMenu';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageSelector } from './components/LanguageSelector';
import { HamburgerButton } from './components/HamburgerButton';
import { MobileMenu } from './components/MobileMenu';
import './styles/index.css';

const Navbar: React.FC<NavbarProps> = ({isDark, setIsDark, currentLanguage, setCurrentLanguage,}) => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const t = translations[currentLanguage].nav;

  const menuItems: MenuItem[] = useMemo(
    () => [
      { name: t.home, href: '#home', id: 'home' },
      { name: t.skills, href: '#skills', id: 'skills' },
      { name: t.projects, href: '#projects', id: 'projects' },
      { name: t.contact, href: '#contact', id: 'contact' },
    ],
    [t.home, t.skills, t.projects, t.contact]
  );

  const { scrolled, activeSection, setActiveSection } = useScrollDetection(menuItems);
  const languageRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    [languageRef, mobileMenuRef],
    [() => setShowLanguageMenu(false), () => setShowMobileMenu(false)]
  );

  const toggleTheme = (): void => setIsDark(!isDark);
  const toggleLanguageMenu = (): void => setShowLanguageMenu(!showLanguageMenu);
  const selectLanguage = (lang: 'FR' | 'EN'): void => {
    setCurrentLanguage(lang);
    setShowLanguageMenu(false);
  };
  const toggleMobileMenu = (): void => setShowMobileMenu(!showMobileMenu);
  const scrollToSection = (e: React.MouseEvent, sectionId: string): void => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setShowMobileMenu(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Logo scrollToSection={scrollToSection} />
        <NavMenu menuItems={menuItems} activeSection={activeSection} scrollToSection={scrollToSection}/>

        <div className="actions">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <LanguageSelector ref={languageRef} currentLanguage={currentLanguage} isOpen={showLanguageMenu} onToggle={toggleLanguageMenu} onSelect={selectLanguage}/>
          <HamburgerButton isOpen={showMobileMenu} onToggle={toggleMobileMenu} />
        </div>
      </nav>

      <MobileMenu ref={mobileMenuRef} menuItems={menuItems} isOpen={showMobileMenu} activeSection={activeSection} onClose={() => setShowMobileMenu(false)} scrollToSection={scrollToSection}/>
    </>
  );
};

export default Navbar;
