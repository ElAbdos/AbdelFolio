import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Timeline from './components/timeline/Timeline';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './css/GlobalSections.css';
import './App.css';
import { ArrowUp } from 'lucide-react';

function App() {
    const [isDark, setIsDark] = useState(true);
    const [currentLanguage, setCurrentLanguage] = useState('FR');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    /* ----- Gestion de la progression du scroll ----- */
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(progress);
            setShowBackToTop(scrollTop > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* ----- Fonction retour en haut ----- */
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div data-theme={isDark ? 'dark' : 'light'}>
            <div className="scroll-indicator">
                <div
                    className="scroll-progress"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
            <div className="app-background">
                <div className="app-grid"></div>
                <div className="app-glow"></div>
            </div>

            {/* ----- Navigation ----- */}
            <Navbar isDark={isDark} setIsDark={setIsDark} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
            <Hero currentLanguage={currentLanguage} />
            <Timeline currentLanguage={currentLanguage} />
            <Skills currentLanguage={currentLanguage} />
            <Projects currentLanguage={currentLanguage} />
            <Contact currentLanguage={currentLanguage} />
            <button className={`back-to-top ${showBackToTop ? 'visible' : ''}`} onClick={scrollToTop} aria-label="Retour en haut">
                <ArrowUp size={18} />
            </button>
        </div>
    );
}
export default App;
