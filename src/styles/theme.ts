/**
 * Design System - Premium Dark Theme
 * Couleurs, typographie, spacing, et tokens de design
 */

import { Platform } from 'react-native';

// ============================================
// COULEURS - Palette Premium Dark
// ============================================

export const Colors = {
  // Backgrounds
  background: {
    primary: '#0a0a0a',
    secondary: '#111111',
    tertiary: '#1a1a1a',
    card: '#161616',
    elevated: '#1e1e1e',
  },

  // Primary accent - Indigo/Violet gradient feel
  primary: {
    main: '#6366f1',
    light: '#818cf8',
    dark: '#4f46e5',
    glow: 'rgba(99, 102, 241, 0.3)',
  },

  // Secondary accent
  secondary: {
    main: '#ec4899',
    light: '#f472b6',
    dark: '#db2777',
  },

  // Text colors
  text: {
    primary: '#ffffff',
    secondary: '#a1a1aa',
    tertiary: '#71717a',
    muted: '#52525b',
  },

  // Status colors
  status: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Borders and dividers
  border: {
    subtle: '#27272a',
    default: '#3f3f46',
    strong: '#52525b',
  },

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.7)',
  backdrop: 'rgba(10, 10, 10, 0.8)',
} as const;

// ============================================
// TYPOGRAPHY
// ============================================

export const FontFamily = Platform.select({
  ios: {
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
    mono: 'Courier New',
  },
  android: {
    regular: 'Roboto',
    medium: 'Roboto',
    semibold: 'Roboto',
    bold: 'Roboto',
    mono: 'monospace',
  },
  default: {
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
    mono: 'monospace',
  },
});

export const FontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
} as const;

export const FontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  extrabold: '800' as const,
};

export const LineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
  loose: 2,
} as const;

// ============================================
// SPACING
// ============================================

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 9999,
} as const;

// ============================================
// SHADOWS
// ============================================

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 24,
    elevation: 12,
  },
  glow: {
    shadowColor: Colors.primary.main,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 4,
  },
} as const;

// ============================================
// ANIMATION TIMINGS
// ============================================

export const Animation = {
  fast: 150,
  normal: 250,
  slow: 350,
  duration: {
    fast: 150,
    normal: 250,
    slow: 350,
  },
  easing: {
    easeIn: 'easeIn',
    easeOut: 'easeOut',
    easeInOut: 'easeInOut',
  },
} as const;

// ============================================
// Z-INDEX
// ============================================

export const ZIndex = {
  base: 0,
  raised: 10,
  overlay: 20,
  modal: 30,
  toast: 40,
} as const;

// ============================================
// BREAKPOINTS (for responsive design)
// ============================================

export const Breakpoints = {
  xs: 320,
  sm: 380,
  md: 480,
  lg: 768,
  xl: 1024,
} as const;