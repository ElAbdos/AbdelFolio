/* ==========================================================================
   FICHIER : Skills.jsx
   DESCRIPTION : Section Skills avec interface à onglets interactifs (Design Premium)
   AUTEUR : Abdel El Haroria
   ========================================================================== */

import React, { useState } from 'react';
import '../css/Skills.css';
import { Layout, Server, Database, Zap, Code2, PenTool, GitBranch, Terminal } from 'lucide-react';
import { translations } from '../constants/translations';

/* ==========================================================================
   COMPOSANT : Skills
   ========================================================================== */
const Skills = ({ currentLanguage }) => {
    const t = translations[currentLanguage].skills;
    const [activeTab, setActiveTab] = useState('frontend');

    /* ----- Configuration des domaines ----- */
    const skillCategories = [
        {
            id: 'frontend',
            icon: <Layout size={24} />,
            title: t.categories.frontend.title,
            description: t.categories.frontend.description,
            tagline: "Pixel perfect & User Centric.",
            skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Vue.js', 'Flutter'],
            tools: ['Tailwind CSS', 'Figma', 'Sass', 'Responsive Design'],
            color: '#8f7aff'
        },
        {
            id: 'backend',
            icon: <Server size={24} />,
            title: t.categories.backend.title,
            description: t.categories.backend.description,
            tagline: "Scalable & Secure Infrastructure.",
            skills: ['Node.js', 'PHP / Laravel', 'Java', 'Python', 'C / C++'],
            tools: ['Docker', 'Linux Admin', 'Nginx', 'Apache'],
            color: '#00d4ff'
        },
        {
            id: 'data',
            icon: <Database size={24} />,
            title: t.categories.data.title,
            description: t.categories.data.description,
            tagline: "Insights from raw data.",
            skills: ['SQL (MySQL, PostgreSQL)', 'NoSQL (MongoDB)', 'PL/SQL', 'Data Modeling'],
            tools: ['N8N (Automation)', 'Python Data Stack', 'ETL Processes', 'Redis'],
            color: '#ff6b6b'
        },
        {
            id: 'project',
            icon: <Zap size={24} />,
            title: t.categories.project.title,
            description: t.categories.project.description,
            tagline: "Efficiency & Collaboration.",
            skills: ['Agile / Scrum', 'Eco-conception', 'Team Work', 'Problem Solving'],
            tools: ['Git / GitHub / GitLab', 'Trello / Jira', 'VS Code', 'JetBrains IDEs'],
            color: '#ffd93d'
        }
    ];

    // Trouver la catégorie active
    const activeCategory = skillCategories.find(c => c.id === activeTab);

    return (
        <section className="skills-section" id="skills">
            <div className="skills-container-premium">

                {/* ----- Colonne Gauche : Navigation ----- */}
                <div className="skills-nav">
                    <div className="skills-header-minimal">
                        <span className="premium-tag">{t.tag}</span>
                        <h2 className="premium-title">{t.title}</h2>
                        <p className="premium-subtitle">{t.subtitle}</p>
                    </div>

                    <div className="skills-menu">
                        {skillCategories.map((category) => (
                            <button
                                key={category.id}
                                className={`skill-menu-item ${activeTab === category.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(category.id)}
                                aria-label={`Voir compétences ${category.title}`}
                                style={{
                                    '--hover-color': category.color
                                }}
                            >
                                <span className="menu-item-icon" style={{ color: activeTab === category.id ? category.color : 'inherit' }}>{category.icon}</span>
                                <span className="menu-item-text">{category.title}</span>
                                {activeTab === category.id && <div className="active-indicator" style={{ backgroundColor: category.color }}></div>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ----- Colonne Droite : Contenu Dynamique ----- */}
                <div className="skills-display-area">
                    <div className="skill-content-card" key={activeCategory.id}> {/* Clé pour forcer le remount animation */}

                        {/* En-tête de la carte */}
                        <div className="content-header" style={{ '--accent-color': activeCategory.color }}>
                            <div className="content-icon-wrapper" style={{ background: `${activeCategory.color}15`, borderColor: `${activeCategory.color}30` }}>
                                {React.cloneElement(activeCategory.icon, { size: 32, color: activeCategory.color })}
                            </div>
                            <div className="content-title-wrapper">
                                <h3 className="content-title">{activeCategory.title}</h3>
                                <span className="content-tagline" style={{ color: activeCategory.color }}>{activeCategory.tagline}</span>
                            </div>
                        </div>

                        <p className="content-description">
                            {activeCategory.description}
                        </p>

                        <div className="content-divider"></div>

                        {/* Grille de détails */}
                        <div className="content-details-grid">

                            {/* Colonne Compétences */}
                            <div className="detail-column">
                                <h4 className="detail-title">
                                    <Code2 size={16} style={{ marginRight: 8, verticalAlign: 'text-bottom' }} />
                                    Compétences Techniques
                                </h4>
                                <ul className="detail-list">
                                    {activeCategory.skills.map((skill, idx) => (
                                        <li key={idx} className="detail-item">
                                            <span className="bullet-point" style={{ backgroundColor: activeCategory.color }}></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Colonne Outils */}
                            <div className="detail-column">
                                <h4 className="detail-title">
                                    <Terminal size={16} style={{ marginRight: 8, verticalAlign: 'text-bottom' }} />
                                    {t.tools}
                                </h4>
                                <div className="tools-cloud">
                                    {activeCategory.tools.map((tool, idx) => (
                                        <span key={idx} className="tool-badge" style={{ borderColor: `${activeCategory.color}30` }}>
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Background Decoratif */}
                        <div
                            className="card-bg-glow"
                            style={{ background: `radial-gradient(circle at 90% 10%, ${activeCategory.color}15, transparent 60%)` }}
                        ></div>
                        <div
                            className="card-bg-glow-secondary"
                            style={{ background: `radial-gradient(circle at 10% 90%, ${activeCategory.color}05, transparent 50%)` }}
                        ></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
