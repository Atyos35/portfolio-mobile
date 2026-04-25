import { Collaborator, FeedPost, LikeableItem, Project, Recipe } from '../types/project';

// Mock data pour le Feed Social
const feedPosts: FeedPost[] = [
  {
    id: '1',
    userId: 'u1',
    userName: 'Marie Chef',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'Viens de terminer ce délicieux pad thaï ! 🍜 La recette traditionnelle thaïlandaise avec une touche personnelle.',
    image: require('@/assets/images/pad-thai.jpg'),
    likes: 42,
    comments: 8,
    timestamp: 'Il y a 2h',
    isLiked: false,
  },
  {
    id: '2',
    userId: 'u2',
    userName: 'Pierre Gourmet',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    content: 'Brunch du dimanche réussi ! Pancakes moelleux, œufs brouillés et avocat toast 🥑',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0',
    likes: 128,
    comments: 23,
    timestamp: 'Il y a 5h',
    isLiked: true,
  },
  {
    id: '3',
    userId: 'u3',
    userName: 'Sophie Pâtisserie',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'Nouveau gâteau créé : fraise et chocolat blanc, une pure merveille ! ✨',
    likes: 256,
    comments: 45,
    timestamp: 'Il y a 1j',
    isLiked: false,
  },
];

// Mock data pour le Système de likes
const likeableItems: LikeableItem[] = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3',
    likes: 342,
    isLiked: false,
  },
  {
    id: '2',
    title: 'Sushi Roll Saumon',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    likes: 567,
    isLiked: true,
  },
  {
    id: '3',
    title: 'Tiramisu Classique',
    image: require('@/assets/images/tiramisu.jpg'),
    likes: 289,
    isLiked: false,
  },
  {
    id: '4',
    title: 'Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    likes: 198,
    isLiked: true,
  },
];

// Mock data pour la Création de recettes
const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Ratatouille Provençale',
    description: 'Un classique de la cuisine française, coloré et savoureux.',
    image: require('@/assets/images/ratatouille.jpg'),
    prepTime: 30,
    cookTime: 45,
    servings: 4,
    ingredients: [
      { id: 'i1', name: 'Courgette', quantity: '2 moyennes' },
      { id: 'i2', name: 'Aubergine', quantity: '1 grosse' },
      { id: 'i3', name: 'Poivrons', quantity: '2 (rouge et jaune)' },
      { id: 'i4', name: 'Tomates', quantity: '4 bien mûres' },
      { id: 'i5', name: 'Oignon', quantity: '1' },
      { id: 'i6', name: 'Ail', quantity: '2 gousses' },
    ],
    steps: [
      { id: 's1', instruction: 'Laver et couper tous les légumes en rondelles fines.' },
      { id: 's2', instruction: "Faire revenir l'oignon et l'ail dans l'huile d'olive." },
      { id: 's3', instruction: 'Ajouter les tomates concassées et laisser mijoter 10min.' },
      { id: 's4', instruction: 'Disposer les légumes en spirale et cuire 35min au four.' },
    ],
    authorId: 'a1',
    authorName: 'Chef Antoine',
  },
];

// Mock data pour la Collaboration
const collaborators: Collaborator[] = [
  {
    id: 'c1',
    name: 'Julie Martin',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    role: 'Chef Exécutif',
    bio: "15 ans d'expérience dans les étoiles Michelin",
  },
  {
    id: 'c2',
    name: 'Thomas Bernard',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    role: 'Nutritionniste',
    bio: 'Spécialiste en alimentation équilibrée',
  },
  {
    id: 'c3',
    name: 'Emma Petit',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    role: 'Food Stylist',
    bio: 'Rend chaque plat instagrammable',
  },
  {
    id: 'c4',
    name: 'Lucas Moreau',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    role: 'Développeur Fullstack',
    bio: 'Crée l\'architecture technique de l\'app',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '2',
    title: 'Food Social App',
    description: "Concept d'application sociale autour de la food",
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
    features: [
      {
        id: 'f1',
        title: 'Feed Social',
        description: 'Partage et découvre des créations culinaires',
        type: 'feed',
        posts: feedPosts,
      },
      {
        id: 'f2',
        title: 'Système de Likes',
        description: 'Like tes plats préférés',
        type: 'likes',
        items: likeableItems,
      },
      {
        id: 'f3',
        title: 'Création de Recettes',
        description: 'Crée et partage tes propres recettes',
        type: 'creation',
        recipes: recipes,
      },
      {
        id: 'f4',
        title: 'Collaboration',
        description: 'Travaille avec des chefs et experts',
        type: 'collaboration',
        collaborators: collaborators,
      },
    ],
  },
];
