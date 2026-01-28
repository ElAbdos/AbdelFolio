export const translations = {
    FR: {
        nav: {
            home: 'Accueil',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact'
        },

        hero: {
            name_highlight: 'El Haroria',
            subtitle_prefix: 'Je suis',
            subtitle_highlight: 'Passionné d\'informatique',
            internship_badge: 'Recherche stage 12-16 semaines (Mars 2026)',
            typewriter_texts: [
                "Passionné d'informatique",
                "Développeur Full Stack",
                "Créatif & Rigoureux",
                "Autonome & Proactif"
            ],
            bio: 'Étudiant passionné d\'informatique, j\'ai pu acquérir une vision globale du domaine grâce à mon cursus diversifié. De l\'infrastructure aux bases de données, du développement à l\'intelligence artificielle, en passant par la sécurité informatique. Cette approche pluridisciplinaire me permet de créer des solutions numériques innovantes en combinant créativité, performance technique et professionnalisme.',
            cta_primary: 'Télécharger CV',
            cta_secondary: 'Voir mes projets',
            quote: '"L\'informatique n\'est pas qu\'une science, c\'est un art de résoudre des problèmes."',
            social: {
                connect: 'Me retrouver',
                available: 'Disponible pour opportunités'
            },
            stats: {
                years: "Années d'études",
                projects: "Projets réalisés",
                tech: "Technologies maitrisés",
                internship: "Semaines de stage"
            }
        },

        skills: {
            tag: 'Compétences',
            title: 'Compétences & Stack Technique',
            subtitle: 'Un ensemble de technologies et d’outils mis en pratique à travers des projets concrets et collaboratifs.',
            sectionLabels: {
                technologies: 'Technologies',
                frameworks: 'Méthodes & Frameworks',
                libraries: 'Bibliothèques IA',
                architectures: 'Architecture',
                tests: 'Tests',
                methods: 'Méthodes',
                tools: 'Outils'
            },
            categories: {
                realiser: {
                    title: 'Réaliser',
                    subtitle: 'Concevoir, coder, développer',
                    description: 'Développement d\'applications informatiques complexes (Web, Mobile, Bureau). Maîtrise des langages et frameworks.',
                    full_title: 'RÉALISER'
                },
                optimiser: {
                    title: 'Optimiser',
                    subtitle: 'Performance & Algorithmique',
                    description: 'Analyse des performances, optimisation du code, choix des structures de données et algorithmes avancés.',
                    full_title: 'OPTIMISER'
                },
                administrer: {
                    title: 'Administrer',
                    subtitle: 'Système, Réseaux & Sécurité',
                    description: 'Installation, configuration et sécurisation des systèmes d\'exploitation et réseaux (Linux, Windows, Cisco).',
                    full_title: 'ADMINISTRER'
                },
                gerer: {
                    title: 'Gérer',
                    subtitle: 'Données & Patrimoine Informatique',
                    description: 'Conception et exploitation des bases de données (SQL, NoSQL), RGPD, et gestion des actifs informatiques.',
                    full_title: 'GÉRER'
                },
                conduire: {
                    title: 'Conduire',
                    subtitle: 'Gestion de Projet',
                    description: 'Pilotage de projets, méthodes Agiles (Scrum), analyse des besoins et planification.',
                    full_title: 'CONDUIRE'
                },
                collaborer: {
                    title: 'Collaborer',
                    subtitle: 'Travail d\'équipe & Communication',
                    description: 'Communication professionnelle (Français/Anglais), travail collaboratif et management d\'équipe.',
                    full_title: 'COLLABORER'
                }
            }
        },

        timeline: {
            tag: 'Parcours',
            title: 'Ma Progression',
            subtitle: 'Mon itinéraire d\'acquisition de compétences depuis le BUT 1.',
            steps: [
                {
                    year: '2023 - 2024',
                    title: 'BUT 1 : La Découverte',
                    description: 'Acquisition des fondamentaux du développement (Algo, C, HTML/CSS). Premiers pas en administration système (Linux) et bases de données.',
                    icon: 'Compass'
                },
                {
                    year: '2024 - 2025',
                    title: 'BUT 2 : L\'Approfondissement',
                    description: 'Développement d\'applications complexes, optimisation des structures de données et administration système avancée (Services réseaux, Virtualisation). Gestion de projets en méthode Agile.',
                    icon: 'Cpu',
                    experiences: [
                        {
                            company: 'Stage au sein de l\'entreprise LIDR Solutions',
                            position: 'Stagiaire - Développement IA',
                            duration: 'Avril - Juillet 2025',
                            description: 'Développement d’un agent intelligent et mise en place de workflows d’automatisation.\n' +
                                'Conception de solutions d’IA appliquées à des cas d’usage métiers, intégration d’API et orchestration de processus via N8N, en collaboration avec une équipe technique agile.',
                            status: 'completed'
                        }
                    ]
                },
                {
                    year: '2025 - 2026',
                    title: 'BUT 3 : La Professionnalisation',
                    description: 'Approfondissement des compétences en conception et développement d’applications, administration systèmes Linux, gestion de bases de données, virtualisation et méthodes de gestion de projet (Agile/Scrum), à travers des projets pratiques et collaboratifs',
                    icon: 'Rocket',
                    experiences: [
                        {
                            company: 'En recherche',
                            position: 'Stage de BUT 3',
                            duration: '2026',
                            description: 'À la recherche d\'une entreprise pour un stage de (12-16 semaines) dans le domaine de l\'informatique.',
                            status: 'searching'
                        }
                    ]
                }
            ]
        },

        projects: {
            tag: 'Portfolio',
            title: 'Réalisations & Preuves',
            subtitle: 'Projets démontrant l\'acquisition concrète des compétences.',
            view_skills: 'Voir les compétences liées',
            technicalStack: 'Stack technique',
            skillsUsed: 'Compétences utilisées',
            items: [
                {
                    id: 1,
                    title: 'E-Commerce Platform',
                    category: 'Développement Web',
                    description: 'Plateforme complète prouvant la capacité à "Réaliser" et "Gérer" des données transactionnelles.',
                    year: '2025',
                    color: '#8f7aff',
                    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                    linkedSkills: ['frontend', 'backend', 'data'],
                    github: 'https://github.com',
                    demo: 'https://demo.com'
                },
                {
                    id: 2,
                    title: 'Secure Network Infra',
                    category: 'Réseau & Sécurité',
                    description: 'Architecture réseau validant la compétence "Administrer" et la sécurisation des échanges.',
                    year: '2024',
                    color: '#00d4ff',
                    tags: ['Cisco', 'pfSense', 'VPN', 'VLAN'],
                    linkedSkills: ['backend', 'devops'],
                    github: 'https://github.com',
                    demo: '#'
                },
                {
                    id: 3,
                    title: 'AI Image Classifier',
                    category: 'Intelligence Artificielle',
                    description: 'Projet d\'IA illustrant la capacité à "Optimiser" des algorithmes complexes.',
                    year: '2024',
                    color: '#6bcb77',
                    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
                    linkedSkills: ['data', 'devops'],
                    github: 'https://github.com',
                    demo: '#'
                },
                {
                    id: 4,
                    title: 'Task Manager App',
                    category: 'Mobile Development',
                    description: 'App mobile collaborative, preuve de "Collaborer" et "Conduire" un projet agile.',
                    year: '2023',
                    color: '#ff6b6b',
                    tags: ['Flutter', 'Firebase', 'Dart'],
                    linkedSkills: ['frontend', 'project'],
                    github: 'https://github.com',
                    demo: '#'
                }
            ]
        },

        contact: {
            tag: 'Contact',
            title_start: 'Démarrons un',
            title_highlight: 'Projet Ensemble',
            subtitle: 'Une proposition ? Une question ? Ou juste pour dire bonjour. Je suis toujours à l\'écoute.',
            email_label: 'M\'écrire directement',
            nav: {
                home: 'Accueil',
                skills: 'Compétences',
                projects: 'Projets'
            },
            form: {
                name: 'Nom',
                name_ph: 'Exemple Exemple',
                email: 'Email',
                email_ph: 'exemple@example.com',
                subject: 'Objet',
                subject_ph: 'Proposition de stage / projet...',
                message: 'Votre message',
                message_ph: 'Bonjour, j\'aimerais discuter de...',
                send: 'Envoyer le message',
                sent: 'Message envoyé !',
                error: 'Erreur, réessayez.'
            }
        }
    },

    /* =========================================================================
       TRADUCTIONS ANGLAISES
       ========================================================================= */
    EN: {
        nav: {
            home: 'Home',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },

        hero: {
            name_highlight: 'El Haroria',
            subtitle_prefix: 'I am',
            subtitle_highlight: 'Passionate about IT',
            internship_badge: 'Seeking 12-16 week internship (March 2026)',
            typewriter_texts: [
                "Passionate about IT",
                "Full Stack Developer",
                "Creative & Rigorous",
                "Autonomous & Proactive"
            ],
            bio: 'Passionate computer science student, I have acquired a global vision of the field through my diversified curriculum. From infrastructure to databases, from development to artificial intelligence, including IT security. This multidisciplinary approach allows me to create innovative digital solutions by combining creativity, technical performance, and professionalism.',
            cta_primary: 'Download CV',
            cta_secondary: 'View my projects',
            quote: '"Computer science is not just a science, it is an art of solving problems."',
            social: {
                connect: 'Connect with me',
                available: 'Open for opportunities'
            },
            stats: {
                years: "Years of study",
                projects: "Projects completed",
                tech: "Technologies mastered",
                internship: "Weeks of internship"
            }
        },

        skills: {
            tag: 'Skills',
            title: 'Tech Stack & Skills',
            subtitle: 'A set of technologies and tools applied through hands-on and collaborative projects.',
            sectionLabels: {
                technologies: 'Technologies',
                frameworks: 'Methods & Frameworks',
                libraries: 'AI Libraries',
                architectures: 'Architecture',
                tests: 'Tests',
                methods: 'Methods',
                tools: 'Tools'
            },
            categories: {
                realiser: {
                    title: 'Develop',
                    subtitle: 'Design, code, build',
                    description: 'Development of complex IT applications (Web, Mobile, Desktop). Mastery of languages and frameworks.',
                    full_title: 'DEVELOP'
                },
                optimiser: {
                    title: 'Optimize',
                    subtitle: 'Performance & Algorithmic',
                    description: 'Performance analysis, code optimization, choice of data structures and advanced algorithms.',
                    full_title: 'OPTIMIZE'
                },
                administrer: {
                    title: 'Administer',
                    subtitle: 'System, Networks & Security',
                    description: 'Installation, configuration and security of operating systems and networks (Linux, Windows, Cisco).',
                    full_title: 'ADMINISTER'
                },
                gerer: {
                    title: 'Manage',
                    subtitle: 'Data & IT Assets',
                    description: 'Design and operation of databases (SQL, NoSQL), GDPR, and IT asset management.',
                    full_title: 'MANAGE'
                },
                conduire: {
                    title: 'Lead',
                    subtitle: 'Project Management',
                    description: 'Project steering, Agile methods (Scrum), requirements analysis and planning.',
                    full_title: 'LEAD'
                },
                collaborer: {
                    title: 'Collaborate',
                    subtitle: 'Teamwork & Communication',
                    description: 'Professional communication (French/English), collaborative work and team management.',
                    full_title: 'COLLABORATE'
                }
            }
        },

        timeline: {
            tag: 'Pathway',
            title: 'My Progression',
            subtitle: 'My journey of skill acquisition since Year 1.',
            steps: [
                {
                    year: '2023 - 2024',
                    title: 'Year 1: Discovery',
                    description: 'Acquiring development fundamentals (Algo, C, HTML/CSS). First steps in system administration (Linux) and databases.',
                    icon: 'BookOpen'
                },
                {
                    year: '2024 - 2025',
                    title: 'Year 2: Deepening',
                    description: 'Skill enhancement on modern frameworks (React, Symfony). Realizing complex projects in teams (Agile).',
                    icon: 'Code',
                    experiences: [
                        {
                            company: 'Internship at LIDR Solutions',
                            position: 'Intern - AI Development',
                            duration: 'April - July 2025',
                            description: 'Development of an intelligent agent and implementation of automation workflows. Design of AI solutions applied to business use cases, API integration and process orchestration via N8N, in collaboration with an agile technical team.',
                            status: 'completed'
                        }
                    ]
                },
                {
                    year: '2025 - 2026',
                    title: 'Towards Expertise',
                    description: 'Advanced training in application design and development, Linux system administration, database management, virtualization, and project management methodologies (Agile/Scrum), through hands-on and collaborative projects.',
                    icon: 'Briefcase',
                    experiences: [
                        {
                            company: 'Looking for',
                            position: 'End-of-studies Internship',
                            duration: '2026',
                            description: 'Looking for a company for my end-of-studies internship (12-16 weeks) in the IT field.',
                            status: 'searching'
                        }
                    ]
                }
            ]
        },

        projects: {
            tag: 'Portfolio',
            title: 'Achievements & Proofs',
            subtitle: 'Projects demonstrating concrete skill acquisition.',
            view_skills: 'View related skills',
            technicalStack: 'Tech Stack',
            skillsUsed: 'Skills Used',
            items: [
                {
                    id: 1,
                    title: 'E-Commerce Platform',
                    category: 'Web Development',
                    description: 'Complete platform proving the ability to "Build" and "Manage" transactional data.',
                    year: '2025',
                    color: '#8f7aff',
                    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                    linkedSkills: ['frontend', 'backend', 'data'],
                    github: 'https://github.com',
                    demo: 'https://demo.com'
                },
                {
                    id: 2,
                    title: 'Secure Network Infra',
                    category: 'Network & Security',
                    description: 'Network architecture validating "Administer" competence and exchange security.',
                    year: '2024',
                    color: '#00d4ff',
                    tags: ['Cisco', 'pfSense', 'VPN', 'VLAN'],
                    linkedSkills: ['backend', 'devops'],
                    github: 'https://github.com',
                    demo: '#'
                },
                {
                    id: 3,
                    title: 'AI Image Classifier',
                    category: 'Artificial Intelligence',
                    description: 'AI project illustrating the ability to "Optimize" complex algorithms.',
                    year: '2024',
                    color: '#6bcb77',
                    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
                    linkedSkills: ['data', 'devops'],
                    github: 'https://github.com',
                    demo: '#'
                },
                {
                    id: 4,
                    title: 'Task Manager App',
                    category: 'Mobile Development',
                    description: 'Collaborative mobile app, proof of "Collaborate" and "Lead" an agile project.',
                    year: '2023',
                    color: '#ff6b6b',
                    tags: ['Flutter', 'Firebase', 'Dart'],
                    linkedSkills: ['frontend', 'project'],
                    github: 'https://github.com',
                    demo: '#'
                }
            ]
        },

        contact: {
            tag: 'Contact',
            title_start: 'Let\'s start a',
            title_highlight: 'Project Together',
            subtitle: 'A proposal? A question? Or just to say hello. I am always listening.',
            email_label: 'Write me directly',
            nav: {
                home: 'Home',
                skills: 'Skills',
                projects: 'Projects'
            },
            form: {
                name: 'Name',
                name_ph: 'Exemple Example',
                email: 'Email',
                email_ph: 'Exemple@exemple.com',
                subject: 'Subject',
                subject_ph: 'Internship proposal / project...',
                message: 'Your message',
                message_ph: 'Hi, I would like to discuss...',
                send: 'Send Message',
                sent: 'Message sent!',
                error: 'Error, try again.'
            }
        }
    }
};
