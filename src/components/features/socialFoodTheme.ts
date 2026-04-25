/**
 * Social Food Theme - Palette de couleurs dédiée au module Social Food
 * Direction artistique : Instagram food + app premium + côté chaleureux
 * 
 * SCOPE STRICT : Ce thème ne s'applique qu'au module Social Food
 */

// ============================================
// PALETTE DE COULEURS SOCIA FOOD
// ============================================

export const SocialFoodColors = {
  // Fond principal (clair warm)
  background: {
    primary: '#FAF7F2',   // Crème warm - fond global
    surface: '#FFFFFF',   // Blanc - cartes
    secondary: '#FFF1E6', // Léger warm accent - surface secondaire
  },

  // Couleurs d'accent (chaudes)
  accent: {
    orange: '#F97316',    // Orange principal
    red: '#EF4444',       // Rouge doux
    gold: '#FACC15',      // Jaune doré
  },

  // Texte
  text: {
    primary: '#1F2937',   // Gris foncé - texte principal
    secondary: '#6B7280', // Gris moyen - texte secondaire
    muted: '#9CA3AF',     // Gris clair - texte atténué
  },

  // Bordures
  border: {
    subtle: '#E5E7EB',    // Bordure subtile
    default: '#D1D5DB',   // Bordure par défaut
  },

  // États interactifs
  interactive: {
    hover: 'rgba(249, 115, 22, 0.1)',   // Hover orange léger
    pressed: 'rgba(249, 115, 22, 0.2)', // Pressed orange
    liked: '#EF4444',                    // Rouge pour liked
  },
} as const;

// Types pour le thème
export type SocialFoodColorKey = keyof typeof SocialFoodColors;
export type SocialFoodColorCategory = typeof SocialFoodColors[SocialFoodColorKey];