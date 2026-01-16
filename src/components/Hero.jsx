// noinspection JSDeprecatedSymbols

import React, { useState, useEffect } from 'react';
import '../css/Hero.css';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { translations } from '../constants/translations';

const Hero = ({ currentLanguage }) => {
    const t = translations[currentLanguage].hero;
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const typewriterTexts = t.typewriter_texts;

    /* =========================================================================
       EFFET : Effet typewriter pour le texte dynamique
       ========================================================================= */
    useEffect(() => {
        const currentFullText = typewriterTexts[textIndex];
        const handleType = () => {
            if (isDeleting) {
                setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
            } else {
                setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
            }
            if (!isDeleting && displayedText === currentFullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
            }
        };
        const timer = setTimeout(handleType, isDeleting ? 50 : 150);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, textIndex, typewriterTexts]);

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github size={22} />,
            url: 'https://github.com/ElAbdos',
            username: '@ElAbdos'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={22} />,
            url: 'https://www.linkedin.com/in/abdel-el-haroria-6a529233b/',
            username: 'Abdel El Haroria'
        },
        {
            name: 'Email',
            icon: <Mail size={22} />,
            url: 'abdeloffipro@gmail.com',
            username: 'abdeloffipro@gmail.com'
        }
    ];
    return (
        <section className="hero-section" id="home">
            <div className="glow-bg"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="internship-badge">
                        <span className="pulse-dot"></span>
                        {t.internship_badge}
                    </div>
                    <h1 className="hero-title">Abdel <br />
                        <span className="text-highlight">El Haroria</span>
                    </h1>
                    <div className="hero-subtitle">
                        <span>&lt;&gt;</span>
                        {t.subtitle_prefix} <span className="subtitle-highlight typewriter-text">{displayedText}</span>
                        <span className="cursor"></span>
                    </div>

                    <div className="hero-bio-box">
                        <p className="hero-bio">{t.bio}</p>
                    </div>
                    <div className="hero-actions">
                        <a href="../../public/Hero-section/CV%20El%20Haroria%20Abdel%20V2.pdf" download className="btn-primary">
                            <Download size={18} />
                            {t.cta_primary}
                        </a>
                        <a href="#projects" className="btn-secondary" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                            {t.cta_secondary}
                            <ArrowRight size={18} />
                        </a>
                    </div>
                    <div className="hero-quote">
                        <p className="quote-text">{t.quote}</p>
                    </div>
                </div>
                <div className="hero-visuals">
                    <div className="profile-box">
                        <div className="profile-placeholder">
                            <img className="profile-image" src="/Hero-section/photo.png" alt="Abdel El Haroria" />
                        </div>
                    </div>
                    <div className="contact-card">
                        <p className="contact-card-label">{t.social.connect}</p>
                        <div className="contact-links">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <span className="contact-link-icon">{link.icon}</span>
                                    <span className="contact-link-info">
                                        <span className="contact-link-name">{link.name}</span>
                                        <span className="contact-link-user">{link.username}</span>
                                    </span>
                                </a>
                            ))}
                        </div>
                        <div className="contact-status">
                            <span className="status-indicator"></span>
                            <span>{t.social.available}</span>
                        </div>
                    </div>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">BAC +3</span>
                        <span className="stat-label">{t.stats.years}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">7+</span>
                        <span className="stat-label">{t.stats.projects}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">30+</span>
                        <span className="stat-label">{t.stats.tech}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">12+</span>
                        <span className="stat-label">{t.stats.internship}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
