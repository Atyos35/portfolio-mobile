import { CVData, Education, Experience, Profile, Skill } from '../types/cv';

// ============================================
// PROFIL
// ============================================

export const profile: Profile = {
    name: 'Valérian GUÉMENÉ',
    title: 'Développeur Web Full-Stack',
    tagline: "Concepteur de solutions applicatives et d'interfaces utilisateur modernes",
    bio: "Développeur Full Stack freelance, j’accompagne mes clients dans la conception et la réalisation de leurs projets web et mobiles, de l’idée jusqu’à la mise en production. J’interviens aussi bien sur le front que sur le back pour créer des solutions modernes, performantes et réellement adaptées aux besoins métier.",
    location: 'Rennes, France',
    email: 'Valerian.guemene@gmail.com',
    social: {
        github: 'https://github.com/Atyos',
        linkedin: 'https://linkedin.com/in/valerian',
    },
};

// ============================================
// COMPÉTENCES
// ============================================

export const skills: Skill[] = [
    // Langages
    { id: '1', name: 'PHP', category: 'langages', level: 'expert' },
    { id: '2', name: 'TypeScript', category: 'langages', level: 'expert' },
    { id: '3', name: 'JavaScript', category: 'langages', level: 'expert' },

    // Backend
    { id: '4', name: 'Symfony (5/6)', category: 'backend', level: 'expert' },
    { id: '5', name: 'API Platform', category: 'backend', level: 'expert' },
    { id: '6', name: 'NestJS', category: 'backend', level: 'advanced' },

    // Frontend
    { id: '7', name: 'React', category: 'frontend', level: 'advanced' },
    { id: '8', name: 'Vue.js 3', category: 'frontend', level: 'expert' },
    { id: '9', name: 'Nuxt.js', category: 'frontend', level: 'advanced' },

    // Mobile
    { id: '10', name: 'React Native', category: 'mobile', level: 'expert' },
    { id: '11', name: 'Expo', category: 'mobile', level: 'expert' },

    // State Management & Data
    { id: '12', name: 'TanStack Query', category: 'state-management', level: 'advanced' },
    { id: '13', name: 'Pinia', category: 'state-management', level: 'advanced' },

    // Styling
    { id: '14', name: 'Tailwind CSS', category: 'styling', level: 'expert' },
    { id: '15', name: 'Bootstrap', category: 'styling', level: 'expert' },
    { id: '16', name: 'DaisyUI', category: 'styling', level: 'advanced' },
    { id: '17', name: 'StyleSheet (React Native)', category: 'styling', level: 'expert' },

    // Bases de données
    { id: '18', name: 'PostgreSQL', category: 'bases-de-donnees', level: 'advanced' },
    { id: '19', name: 'MySQL', category: 'bases-de-donnees', level: 'expert' },
    { id: '20', name: 'MongoDB', category: 'bases-de-donnees', level: 'intermediate' },

    // Outils & Environnement
    { id: '21', name: 'Git', category: 'outils-environnement', level: 'expert' },
    { id: '22', name: 'Docker', category: 'outils-environnement', level: 'advanced' },
    { id: '23', name: 'Vite', category: 'outils-environnement', level: 'advanced' },
    { id: '24', name: 'Webpack', category: 'outils-environnement', level: 'advanced' },
    { id: '25', name: 'Linux / Windows', category: 'outils-environnement', level: 'expert' },

    // Qualité & Tests
    { id: '26', name: 'Jest', category: 'qualite-tests', level: 'advanced' },
    { id: '27', name: 'ESLint', category: 'qualite-tests', level: 'advanced' },
    { id: '28', name: 'PHPStan', category: 'qualite-tests', level: 'advanced' },
    { id: '29', name: 'Tests unitaires', category: 'qualite-tests', level: 'advanced' },

    // API & Communication
    { id: '30', name: 'Axios', category: 'api-communication', level: 'advanced' },
    { id: '31', name: 'Postman', category: 'api-communication', level: 'advanced' },
    { id: '32', name: 'Authentification JWT', category: 'api-communication', level: 'advanced' },

    // Gestion de projet
    { id: '33', name: 'GitHub Projects', category: 'gestion-projet', level: 'advanced' },
    { id: '34', name: 'Trello', category: 'gestion-projet', level: 'advanced' },
    { id: '35', name: 'Redmine', category: 'gestion-projet', level: 'advanced' },
    { id: '36', name: 'Scrum / Agile', category: 'gestion-projet', level: 'advanced' },

    // IA & Outils modernes
    { id: '37', name: 'GPT', category: 'ia-outils', level: 'advanced' },
    { id: '38', name: 'Claude', category: 'ia-outils', level: 'advanced' },
    { id: '39', name: 'Gemini', category: 'ia-outils', level: 'advanced' },
];

// ============================================
// EXPÉRIENCES PROFESSIONNELLES
// ============================================

export const experiences: Experience[] = [
    {
        id: 'e1',
        title: 'Concepteur Développeur Web Full Stack',
        company: 'Groupe Pandora',
        location: 'Rennes',
        startDate: '2022-09',
        endDate: '2025-05',
        current: false,
        description: "Développeur Full Stack dans une équipe de 4 développeurs. Modernisation des environnements de travail avec Git, tests unitaires, CI/CD et Docker. Développement en méthodologie agile avec sprints d'une semaine.",
        achievements: [
            "Développement d'un module de suivi de campagnes commerciales en Vue 3/TypeScript",
            'Mise en place de larchitecture Atomic Design avec Tailwind CSS et Daisy UI',
            "Développement de microservices NestJS avec consommation d'API tierces",
            "Création d'un microservice d'éligibilité avec affichage cartographique Leaflet",
            "Évolution et maintenance du CRM interne Symfony 6/PHP 8",
            "Mise en place de l'authentication 2FA",
            'Dockerisation des environnements de développement et production',
        ],
        technologies: ['Symfony 6', 'NestJS', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Docker', 'Git'],
    },
    {
        id: 'e2',
        title: 'Concepteur Développeur Web Full Stack',
        company: 'Samsic Groupe',
        location: 'Cesson-Sévigné',
        startDate: '2021-10',
        endDate: '2022-04',
        current: false,
        description: "Développeur Web Full Stack au sein du pôle Samsic RH, en autonomie sur un projet de transformation digitale.",
        achievements: [
            "Transformation d'un workflow Excel en application web complète",
            'Conception du modèle de base de données et architecture Symfony 5',
            "Développement d'un système d'export/import Excel/CSV",
            "Mise en place d'ElasticSearch pour la recherche full-text",
            "Intégration de RabbitMQ pour les traitements asynchrones",
        ],
        technologies: ['Symfony 5', 'PHP 7', 'ElasticSearch', 'RabbitMQ', 'Git'],
    },
    {
        id: 'e3',
        title: 'Commercial',
        company: 'Commercial Academy',
        location: 'Cesson-Sévigné',
        startDate: '2020-10',
        endDate: '2021-03',
        current: false,
        description: 'Formation accélérée au métier de commercial avec mise en pratique sur le terrain.',
        achievements: [
            'Prospection et phoning',
            'Gestion de la clientèle et plans de tournée',
            'Techniques de négociation commerciale',
        ],
        technologies: [],
    },
    {
        id: 'e4',
        title: 'Concepteur Développeur Web Full Stack',
        company: 'Néo-Soft',
        location: 'Rennes',
        startDate: '2019-07',
        endDate: '2019-08',
        current: false,
        description: "Conception et développement d'une application web intranet en autonomie.",
        achievements: [
            "Création d'une application web intranet complète",
            "Développement d'une API REST avec API Platform/Symfony",
            "Mise en place de l'authentication JWT",
            'Développement de formulaires dynamiques en Angular',
            'Système de gestion de statuts et notifications email',
        ],
        technologies: ['Symfony', 'API Platform', 'Angular', 'MySQL', 'JWT'],
    },
    {
        id: 'e5',
        title: 'Concepteur Développeur Web Full Stack',
        company: 'OUEST-FRANCE',
        location: 'Rennes',
        startDate: '2018-09',
        endDate: '2019-06',
        current: false,
        description: 'Consultant Développeur au sein du SIC OUEST-FRANCE dans une équipe de 4 personnes en méthodologie agile (sprints de 2 semaines).',
        achievements: [
            'Maintenance applicative et évolutive sur loutil de gestion d\'abonnements',
            'Participation aux cérémonies SCRUM (daily, sprint review, rétrospective)',
            'Consommation de Web Services JAVA pour synchronisation de données',
            "Développement de la fonctionnalité de changement d'adresse",
            'Corrections et améliorations mineures Front-End Bootstrap/jQuery',
        ],
        technologies: ['Symfony 3', 'PHP 5', 'jQuery', 'Bootstrap', 'MySQL'],
    },
    {
        id: 'e6',
        title: 'Concepteur Développeur Web Full Stack (Alternance)',
        company: 'CER France',
        location: 'Rennes',
        startDate: '2016-11',
        endDate: '2018-06',
        current: false,
        description: "Projet de maintenance et refonte sous Symfony d'une application de création de lettres de mission, en équipe de 2 personnes.",
        achievements: [
            "Refonte complète de l'application sous Symfony 3 (nouvelle architecture MVC)",
            'Conception du modèle de base de données et gestion des droits',
            'Développement de formulaires multi-étapes dynamiques',
            'Génération de contrats PDF et envoi de mails automatiques',
            "Développement d'un outil d'accès distant pour le télétravail",
        ],
        technologies: ['Symfony 3', 'jQuery/AJAX', 'Bootstrap', 'MySQL'],
    },
    {
        id: 'e7',
        title: 'Concepteur Développeur Web Full Stack (Alternance)',
        company: "L'Univers NOZ",
        location: 'Saint-Berthevin',
        startDate: '2015-09',
        endDate: '2016-09',
        current: false,
        description: "Développeur au sein d'une équipe de 4 personnes. Développement d'un outil de ticketing et d'un formulaire de génération de contrats.",
        achievements: [
            "Développement d'un outil de ticketing complet avec gestion des statuts",
            "Mise en place de l'authentication et gestion des rôles utilisateurs",
            "Envoi de mails automatiques à chaque changement de statut",
            "Création d'un formulaire dynamique de demande de contrat de travail",
            'Génération PDF des contrats et envoi automatique au service RH',
        ],
        technologies: ['Symfony 2', 'jQuery/AJAX', 'Bootstrap', 'MySQL'],
    },
];

// ============================================
// FORMATION
// ============================================

export const education: Education[] = [
    {
        id: 'ed1',
        degree: 'Concepteur Développeur en Projets Numériques',
        school: 'École IMIE',
        location: 'Bruz',
        startDate: '2016-09',
        endDate: '2018-07',
        description: "Titre de niveau II (BAC+4) en alternance chez CER France",
    },
    {
        id: 'ed2',
        degree: 'Développeur Logiciel',
        school: 'École IMIE',
        location: 'Bruz',
        startDate: '2014-09',
        endDate: '2016-07',
        description: "Titre de niveau III (BAC+2) en alternance chez L'Univers NOZ",
    },
    {
        id: 'ed3',
        degree: 'BAC PRO Logistique',
        school: 'Lycée Bel Air',
        location: 'Tinténiac',
        startDate: '2009-09',
        endDate: '2011-06',
    },
    {
        id: 'ed4',
        degree: 'BEP C.S.T.R (Conduite et Service dans les Transports Routiers)',
        school: 'Lycée Bel Air',
        location: 'Tinténiac',
        startDate: '2006-09',
        endDate: '2009-07',
    },
];

// ============================================
// CV DATA COMBINÉ
// ============================================

export const cvData: CVData = {
    profile,
    skills,
    experiences,
    education,
};