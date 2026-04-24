export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: ProjectFeatureUnion[];
}

// Types de base pour les features
export type FeatureType = 'feed' | 'likes' | 'creation' | 'collaboration';

// Interface commune à toutes les features
export interface ProjectFeature {
  id: string;
  title: string;
  description: string;
  type: FeatureType;
}

// Feature: Feed Social
export interface FeedPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
  isLiked?: boolean;
}

export interface FeedFeature extends ProjectFeature {
  type: 'feed';
  posts: FeedPost[];
}

// Feature: Système de likes
export interface LikeableItem {
  id: string;
  title: string;
  image: string;
  likes: number;
  isLiked: boolean;
}

export interface LikesFeature extends ProjectFeature {
  type: 'likes';
  items: LikeableItem[];
}

// Feature: Création de recettes
export interface RecipeIngredient {
  id: string;
  name: string;
  quantity: string;
}

export interface RecipeStep {
  id: string;
  instruction: string;
  image?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  authorId: string;
  authorName: string;
}

export interface CreationFeature extends ProjectFeature {
  type: 'creation';
  recipes: Recipe[];
}

// Feature: Collaboration utilisateur
export interface Collaborator {
  id: string;
  name: string;
  avatar: string;
  role: string;
  bio?: string;
}

export interface CollaborationFeature extends ProjectFeature {
  type: 'collaboration';
  collaborators: Collaborator[];
}

// Type union pour toutes les features
export type ProjectFeatureUnion = 
  | FeedFeature 
  | LikesFeature 
  | CreationFeature 
  | CollaborationFeature;