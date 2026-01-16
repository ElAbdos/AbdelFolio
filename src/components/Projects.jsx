/* ==========================================================================
   FICHIER : Projects.jsx
   DESCRIPTION : Section Projets avec Carrousel 3D (Style Coverflow)
   AUTEUR : Abdel El Haroria
   ========================================================================== */

import React, { useState } from 'react';
import '../css/Projects.css';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Folder } from 'lucide-react';
import { translations } from '../constants/translations';

/* ==========================================================================
   COMPOSANT : Projects
   ========================================================================== */
const Projects = ({ currentLanguage }) => {
    const t = translations[currentLanguage].projects;
    const [activeIndex, setActiveIndex] = useState(1); // Commencer par le 2ème projet (index 1)

    const projects = t.items; // Liste des projets depuis les traductions

    // Gestion de la navigation
    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Sélection directe
    const selectProject = (index) => {
        setActiveIndex(index);
    };

    // Calcul de la classe CSS pour chaque carte (position relative à l'active)
    const getCardStyle = (index) => {
        const diff = (index - activeIndex + projects.length) % projects.length;

        // Ajustement pour gérer le bouclage correctement visuellement (ex: index 0 est "après" index last)
        // Pour simplifier ici sur peu d'items, on va faire une logique centrée simple
        // Idéalement pour un vrai carrousel infini 3D, c'est plus complexe, 
        // ici on va faire un mode "Liste finie" qui est plus clean pour un portfolio

        // Logique "Liste Finie" pour l'UX
        const distance = index - activeIndex;

        if (distance === 0) return 'active';
        if (distance === -1) return 'prev';
        if (distance === 1) return 'next';
        if (distance < -1) return 'hidden-left';
        if (distance > 1) return 'hidden-right';
        return 'hidden';
    };

    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">

                {/* ----- En-tête ----- */}
                <div className="projects-header">
                    <span className="section-tag">{t.tag}</span>
                    <h2 className="section-title">{t.title}</h2>
                    <p className="section-subtitle">{t.subtitle}</p>
                </div>

                {/* ----- Carrousel 3D ----- */}
                <div className="carousel-3d-wrapper">

                    {/* Bouton Précédent */}
                    <button
                        className="carousel-control prev"
                        onClick={prevProject}
                        disabled={activeIndex === 0}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    {/* Scène 3D */}
                    <div className="carousel-scene">
                        {projects.map((project, index) => {
                            const positionClass = getCardStyle(index);
                            return (
                                <div
                                    key={project.id}
                                    className={`project-card-3d ${positionClass}`}
                                    onClick={() => selectProject(index)}
                                    style={{ '--card-color': project.color }}
                                >
                                    {/* Image / Visuel du projet */}
                                    <div className="project-visual">
                                        <div className="project-visual-overlay"></div>
                                        {/* Placeholder visuel si pas d'image */}
                                        <div className="project-icon-placeholder">
                                            <Folder size={64} color={project.color} />
                                        </div>
                                        <div className="project-year">{project.year}</div>
                                    </div>

                                    {/* Contenu (Info) */}
                                    <div className="project-info">
                                        <span className="project-category">{project.category}</span>
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-desc">{project.description}</p>

                                        {/* Tags */}
                                        <div className="project-tags">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="project-tag">{tag}</span>
                                            ))}
                                        </div>

                                        {/* Liens (visibles seulement si actif) */}
                                        <div className="project-links">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn github">
                                                <Github size={18} />
                                                GitHub
                                            </a>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn demo">
                                                <ExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bouton Suivant */}
                    <button
                        className="carousel-control next"
                        onClick={nextProject}
                        disabled={activeIndex === projects.length - 1}
                    >
                        <ChevronRight size={32} />
                    </button>

                </div>

                {/* ----- Indicateurs (Points) ----- */}
                <div className="carousel-indicators">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => selectProject(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
