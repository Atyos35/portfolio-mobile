# Portfolio Mobile Interactif

> Développeur Full Stack Web & Mobile - React Native, TypeScript, Node.js

Application mobile portfolio interactive combinée à un CV, conçue comme un produit digital moderne avec un rendu premium et des interactions fluides.

[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-Expo-61dafb.svg)](https://reactnative.dev/)
[![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-lightgrey.svg)](https://expo.dev/)

---

## Fonctionnalités

### Écrans
- **Home** : Présentation développeur avec photo, nom, titre, boutons d'action et statistiques
- **Profile (CV)** : Bio complète, compétences catégorisées, expériences en timeline, formation
- **Projects** : Liste de projets avec cards interactives et navigation fluide
- **Project Detail** : Hero image, stack technique, fonctionnalités et **aperçus interactifs**

### Interactions
- **Liens fonctionnels** : Email (mailto), GitHub, LinkedIn, site web via expo-linking
- **Animations fluides** : FadeIn avec delays progressifs via react-native-reanimated
- **Navigation typée** : Passage de paramètres sécurisés entre écrans

---

## Architecture & Stack Technique

### Stack
| Technologie | Version | Usage |
|-------------|---------|-------|
| **React Native** | Expo SDK 52 | Framework mobile cross-platform |
| **TypeScript** | Strict Mode | Typage statique, aucun `any` |
| **Expo Router** | v3+ | Navigation file-based avec typage |
| **React Native Reanimated** | v3 | Animations performantes (60fps) |
| **Expo Linking** | Intégré | Ouverture de liens externes |

### Architecture du Code
```
src/
├── components/
│   ├── ui/                   # Composants réutilisables
│   │   ├── Card.tsx          # 3 variants: default, elevated, interactive
│   │   ├── Button.tsx        # 4 variants: primary, secondary, ghost, outline
│   │   ├── Tag.tsx           # Badges pour compétences et tech stack
│   │   └── FadeIn.tsx        # Animation d'entrée avec Reanimated
│   └── features/             # Aperçus interactifs (Feed, Likes, etc.)
├── screens/                  # Écrans principaux
│   ├── HomeScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── ProjectsScreen.tsx
│   └── ProjectDetailScreen.tsx
├── styles/
│   └── theme.ts              # Design system centralisé
├── types/                    # Types TypeScript stricts
│   ├── project.ts
│   ├── cv.ts
│   └── navigation.ts
└── data/                     # Données mockées typées
    ├── projects.ts
    └── cv.ts
```

### Design System (`src/styles/theme.ts`)
```typescript
// Couleurs
Colors.background.primary   // #0a0a0a - Dark premium
Colors.primary.main         // #6366f1 - Indigo
Colors.primary.light        // #818cf8
Colors.text.primary         // #ffffff
Colors.text.secondary       // #a1a1aa

// Typographie
FontSize.xs (10) -> 5xl (48)
FontWeight.regular -> extrabold

// Spacing
Spacing.xs (4) -> xl (32)

// Border Radius
BorderRadius.sm (4) -> full (9999)
```

---

## Bonnes Pratiques Implémentées

### Qualité du Code
- **TypeScript strict** : Aucun `any`, interfaces pour toutes les props
- **Navigation typée** : Routes et paramètres validés par le compilateur
- **Composants réutilisables** : DRY principle, props flexibles
- **Design system centralisé** : Cohérence visuelle garantie
- **Linting** : ESLint avec règles Expo
- **Type checking** : `tsc --noEmit` sans erreur

### Performance
- **FlatList** : Pour les listes scrollables optimisées
- **useMemo** : Mémoïsation des calculs coûteux
- **React.memo** : Évite les re-renders inutiles
- **Animations natives** : 60fps avec Reanimated

### Accessibilité
- **Contrastes vérifiés** : WCAG AA compliant
- **Tailles de texte** : Hiérarchie claire, lisibilité optimale
- **Feedback tactile** : activeOpacity sur tous les TouchableOpacity

## Structure des Fichiers

```
portfolio-mobile/
├── app/                        # Expo Router (file-based routing)
│   ├── _layout.tsx            # Root layout avec ThemeProvider
│   ├── (tabs)/                # Tab navigation
│   │   ├── index.tsx          # Home tab
│   │   ├── profile.tsx        # Profile tab
│   │   ├── projects.tsx       # Projects tab
│   │   └── _layout.tsx        # Tabs layout
│   └── project/[id].tsx       # Project detail (dynamic route)
├── src/                        # Source code organisé
│   ├── components/            # Composants réutilisables
│   ├── screens/               # Écrans principaux
│   ├── styles/                # Design system
│   ├── types/                 # Types TypeScript
│   └── data/                  # Données mockées
├── assets/                     # Images, fonts
├── constants/                  # Constantes globales
├── hooks/                      # Custom hooks
├── components/ui/             # UI components (Expo template)
└── package.json
```

## Contact

- **Email** : [valerian.guemene@gmail.com](mailto:valerian.guemene@gmail.com)
- **GitHub** : [@atyos35](https://github.com/Atyos35/portfolio-mobile)
- **LinkedIn** : [Valérian](https://www.linkedin.com/in/valerian-guemene/)

---

## Licence

Ce projet est open source et disponible sous licence MIT.

---

*Développé avec ❤️ par Valérian - Développeur Full Stack Web & Mobile*
