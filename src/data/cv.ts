import { CVData, Education, Experience, Profile, Skill } from '../types/cv';

// ============================================
// PROFIL
// ============================================

export const profile: Profile = {
    name: 'Valérian GUÉMENÉ',
    title: 'Développeur Web Full-Stack',
    tagline: "Concepteur de solutions applicatives et d'interfaces utilisateur modernes",
    bio: "Concepteur développeur Full Stack, j'accompagne la conception et le développement d'applications web et mobiles modernes, performantes et centrées utilisateur. J'interviens aussi bien sur le front-end que sur le back-end, en m'appuyant sur des technologies comme Symfony ou Node.js (notamment avec NestJS), ainsi que sur des frameworks JavaScript en TypeScript côté interface. Mon approche allie exigence technique et sens du produit pour créer des solutions fiables, évolutives et adaptées aux besoins métiers.",
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
    { id: 's1', name: 'PHP', category: 'langages', level: 'expert' },
    { id: 's2', name: 'TypeScript', category: 'langages', level: 'expert' },
    { id: 's3', name: 'JavaScript', category: 'langages', level: 'expert' },

    // Frameworks
    { id: 's4', name: 'Symfony 2-6', category: 'backend', level: 'expert' },
    { id: 's5', name: 'NestJS', category: 'backend', level: 'advanced' },
    { id: 's6', name: 'API Platform', category: 'backend', level: 'expert' },
    { id: 's7', name: 'Vue.js 3', category: 'frontend', level: 'expert' },
    { id: 's8', name: 'Nuxt.js', category: 'frontend', level: 'advanced' },
    { id: 's9', name: 'Quasar', category: 'frontend', level: 'advanced' },
    { id: 's10', name: 'React', category: 'frontend', level: 'advanced' },
    { id: 's11', name: 'Pinia', category: 'frontend', level: 'advanced' },

    // Frontend
    { id: 's12', name: 'Tailwind CSS', category: 'frontend', level: 'expert' },
    { id: 's13', name: 'Bootstrap', category: 'frontend', level: 'expert' },
    { id: 's14', name: 'Daisy UI', category: 'frontend', level: 'advanced' },
    { id: 's15', name: 'jQuery', category: 'frontend', level: 'advanced' },
    { id: 's16', name: 'Twig', category: 'frontend', level: 'expert' },

    // Build & Tools
    { id: 's17', name: 'Webpack', category: 'tools', level: 'advanced' },
    { id: 's18', name: 'Vite', category: 'tools', level: 'advanced' },
    { id: 's19', name: 'Docker', category: 'tools', level: 'advanced' },
    { id: 's20', name: 'Git', category: 'tools', level: 'expert' },
    { id: 's21', name: 'GitHub Projects', category: 'tools', level: 'advanced' },
    { id: 's22', name: 'ESLint', category: 'tools', level: 'advanced' },
    { id: 's23', name: 'PHPStan', category: 'tools', level: 'advanced' },
    { id: 's24', name: 'Postman', category: 'tools', level: 'advanced' },

    // Base de données
    { id: 's25', name: 'MySQL', category: 'backend', level: 'expert' },
    { id: 's26', name: 'MongoDB', category: 'backend', level: 'intermediate' },
    { id: 's27', name: 'PostgreSQL', category: 'backend', level: 'advanced' },

    // Agilité & OS
    { id: 's28', name: 'Scrum/Agile', category: 'soft', level: 'advanced' },
    { id: 's29', name: 'Trello', category: 'tools', level: 'advanced' },
    { id: 's30', name: 'Redmine', category: 'tools', level: 'advanced' },
    { id: 's31', name: 'Linux', category: 'tools', level: 'advanced' },
    { id: 's32', name: 'Windows', category: 'tools', level: 'expert' },

    // Testing & CI/CD
    { id: 's33', name: 'Jest', category: 'tools', level: 'advanced' },
    { id: 's34', name: 'Unit Testing', category: 'tools', level: 'advanced' },
    { id: 's35', name: 'CI/CD', category: 'tools', level: 'advanced' },

    // IA
    { id: 's36', name: 'GPT', category: 'tools', level: 'advanced' },
    { id: 's37', name: 'Claude', category: 'tools', level: 'advanced' },
    { id: 's38', name: 'Gemini', category: 'tools', level: 'advanced' },
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
        description: "Projet réalisé en autonomie afin de se former sur Angular.",
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