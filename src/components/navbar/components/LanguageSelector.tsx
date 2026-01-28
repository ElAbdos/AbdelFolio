import { forwardRef } from 'react';
import type { Language } from '../types';
import { LANGUAGE_CONFIG, LANGUAGES } from '../constants';

interface LanguageSelectorProps {
  currentLanguage: Language;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (lang: Language) => void;
}

// Composant pour sélectionner la langue
export const LanguageSelector = forwardRef<HTMLDivElement, LanguageSelectorProps>(({ currentLanguage, isOpen, onToggle, onSelect }, ref) => {
    return (
      <div className="language-wrapper" ref={ref}>
        <button onClick={onToggle} className="btn-language clickable">
          <div className="btn-bg"></div>
          <span className="btn-language-content">
            <span className="language-flag">{LANGUAGE_CONFIG[currentLanguage].flag}</span>
            {currentLanguage}
            <span className={`language-arrow ${isOpen ? 'rotate' : ''}`}>▼</span>
          </span>
        </button>
        <div className={`language-dropdown ${isOpen ? 'show' : ''}`}>
          {LANGUAGES.map((lang) => (
            <button key={lang} onClick={() => onSelect(lang as Language)} className={`language-option clickable ${currentLanguage === lang ? 'active' : ''}`}>
              <span className="language-option-flag">{LANGUAGE_CONFIG[lang].flag}</span>
              <span className="language-option-text">{LANGUAGE_CONFIG[lang].label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
);

LanguageSelector.displayName = 'LanguageSelector';
