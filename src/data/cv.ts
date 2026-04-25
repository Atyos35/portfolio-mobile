import { CVData, Education, Experience, Profile, Skill } from '../types/cv';

// ============================================
// PROFIL
// ============================================

export const profile: Profile = {
    name: 'Valérian',
    title: 'Développeur Full Stack Web & Mobile',
    tagline: "Concepteur de solutions applicatives et d'interfaces utilisateur modernes",
    bio: 'Concepteur développeur Full Stack, à l\'aise aussi bien sur le back-end que le front-end, je conçois et développe des applications web et mobiles modernes et performantes. J\'utilise des technologies comme PHP avec Symfony, ainsi que Node.js avec ou sans framework (notamment NestJS) côté serveur, et des frameworks JavaScript en TypeScript côté front. Mon approche allie rigueur technique et sens du produit pour créer des solutions fiables, évolutives et orientées utilisateur.',
    location: 'Rennes, France',
    email: 'valerian.guemene@gmail.com',
    social: {
        github: 'https://github.com/Atyos35/portfolio-mobile',
        linkedin: 'https://www.linkedin.com/in/valerian-guemene/',
    },
};

// ============================================
// COMPÉTENCES
// ============================================

export const skills: Skill[] = [
    // Frontend Mobile
    { id: 's1', name: 'React Native', category: 'mobile', level: 'expert' },
    { id: 's2', name: 'Expo', category: 'mobile', level: 'expert' },
    { id: 's3', name: 'TypeScript', category: 'mobile', level: 'expert' },
    { id: 's4', name: 'React', category: 'frontend', level: 'advanced' },

    // Frontend Web
    { id: 's5', name: 'JavaScript', category: 'frontend', level: 'expert' },
    { id: 's6', name: 'HTML/CSS', category: 'frontend', level: 'advanced' },
    { id: 's7', name: 'Next.js', category: 'frontend', level: 'advanced' },

    // Backend
    { id: 's8', name: 'Node.js', category: 'backend', level: 'advanced' },
    { id: 's9', name: 'Firebase', category: 'backend', level: 'advanced' },
    { id: 's10', name: 'PostgreSQL', category: 'backend', level: 'intermediate' },
    { id: 's11', name: 'GraphQL', category: 'backend', level: 'intermediate' },

    // Tools
    { id: 's12', name: 'Git', category: 'tools', level: 'expert' },
    { id: 's13', name: 'Docker', category: 'tools', level: 'intermediate' },
    { id: 's14', name: 'CI/CD', category: 'tools', level: 'advanced' },
    { id: 's15', name: 'Figma', category: 'design', level: 'advanced' },

    // Soft Skills
    { id: 's16', name: 'Agile/Scrum', category: 'soft', level: 'advanced' },
    { id: 's17', name: 'Code Review', category: 'soft', level: 'expert' },
    { id: 's18', name: 'Mentoring', category: 'soft', level: 'advanced' },
];

// ============================================
// EXPÉRIENCES PROFESSIONNELLES
// ============================================

export const experiences: Experience[] = [
    {
        id: 'e1',
        title: 'Senior Mobile Developer',
        company: 'TechCorp Innovation',
        location: 'Paris, France',
        startDate: '2022-01',
        current: true,
        description: 'Lead développeur sur des applications mobile React Native utilisées par plus de 500k utilisateurs. Architecture technique, mentoring et bonnes pratiques.',
        achievements: [
            "Développement d'une app React Native avec 500k+ utilisateurs actifs",
            "Mise en place de l'architecture CI/CD et des tests automatisés",
            'Mentoring de 3 développeurs juniors',
            'Réduction du temps de build de 40%',
        ],
        technologies: ['React Native', 'TypeScript', 'Firebase', 'GraphQL'],
    },
    {
        id: 'e2',
        title: 'Mobile Developer',
        company: 'Digital Agency Studio',
        location: 'Lyon, France',
        startDate: '2019-06',
        endDate: '2021-12',
        current: false,
        description: "Développement d'applications mobile pour divers clients dans les secteurs retail, santé et fintech.",
        achievements: [
            'Livraison de 8 applications mobiles pour des clients variés',
            "Intégration de paiements mobiles et fonctionnalités natives",
            'Optimisation des performances et réduction des crashs de 60%',
        ],
        technologies: ['React Native', 'JavaScript', 'Redux', 'Firebase'],
    },
    {
        id: 'e3',
        title: 'Junior Web Developer',
        company: 'StartupLab',
        location: 'Paris, France',
        startDate: '2017-09',
        endDate: '2019-05',
        current: false,
        description: 'Développement frontend et backend pour des applications web progressives.',
        achievements: [
            'Création de dashboards analytiques interactifs',
            "Migration d'une app legacy vers React",
            'Implementation de tests unitaires et E2E',
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    },
];

// ============================================
// FORMATION
// ============================================

export const education: Education[] = [
    {
        id: 'ed1',
        degree: 'Master en Ingénierie Logicielle',
        school: 'École Polytechnique',
        location: 'Paris, France',
        startDate: '2015-09',
        endDate: '2017-07',
        description: 'Spécialisation en développement mobile et architectures distribuées.',
        highlights: [
            "Mémoire sur l'optimisation des performances React Native",
            "Projet de fin d'études : Application de santé mobile",
            'Major de promotion',
        ],
    },
    {
        id: 'ed2',
        degree: 'Licence Informatique',
        school: 'Université Paris-Saclay',
        location: 'Orsay, France',
        startDate: '2012-09',
        endDate: '2015-06',
        description: "Fondamentaux de l'informatique : algorithmes, structures de données, bases de données.",
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