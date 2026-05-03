/**
 * Types pour le CV / Profil
 */

// ============================================
// COMPÉTENCES
// ============================================

export type SkillCategory = 
    | 'frontend' 
    | 'backend' 
    | 'mobile' 
    | 'tools' 
    | 'design' 
    | 'soft' 
    | 'langages'
    | 'state-management'
    | 'styling'
    | 'bases-de-donnees'
    | 'outils-environnement'
    | 'qualite-tests'
    | 'api-communication'
    | 'gestion-projet'
    | 'ia-outils';

export interface Skill {
    id: string;
    name: string;
    category: SkillCategory;
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    icon?: string;
}

// ============================================
// EXPÉRIENCES PROFESSIONNELLES
// ============================================

export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string;
    achievements: string[];
    technologies: string[];
}

// ============================================
// FORMATION
// ============================================

export interface Education {
    id: string;
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string;
    highlights?: string[];
}

// ============================================
// PROFIL / BIO
// ============================================

export interface Profile {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    avatar?: string;
    location: string;
    email?: string;
    social: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        website?: string;
    };
}

// ============================================
// TYPE COMBINÉ POUR LE CV
// ============================================

export interface CVData {
    profile: Profile;
    skills: Skill[];
    experiences: Experience[];
    education: Education[];
}