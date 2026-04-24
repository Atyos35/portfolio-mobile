import React, { useState } from 'react';
import {
  Image,
  ImageStyle,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Recipe } from '../../types/project';

interface RecipeCreationPreviewProps {
  recipes: Recipe[];
  onCreateNew?: () => void;
}

interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress }) => {
  const imageSource = typeof recipe.image === 'string' 
    ? { uri: recipe.image } 
    : recipe.image;
  
  return (
    <TouchableOpacity
      style={styles.recipeCard}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={imageSource} style={styles.recipeImage} />
      <View style={styles.recipeContent}>
        <Text style={styles.recipeTitle} numberOfLines={2}>
          {recipe.title}
        </Text>
        <Text style={styles.recipeDescription} numberOfLines={2}>
          {recipe.description}
        </Text>
        <View style={styles.recipeMeta}>
          <View style={styles.metaItem}>
            <Text style={styles.metaIcon}>⏱️</Text>
            <Text style={styles.metaText}>
              {recipe.prepTime + recipe.cookTime} min
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaIcon}>🍽️</Text>
            <Text style={styles.metaText}>{recipe.servings} pers.</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const RecipeCreationPreview: React.FC<RecipeCreationPreviewProps> = ({
  recipes,
  onCreateNew,
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleRecipePress = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  if (selectedRecipe) {
    return (
      <View style={styles.container}>
        <View style={styles.detailHeader}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Retour</Text>
          </TouchableOpacity>
          <Text style={styles.detailTitle}>{selectedRecipe.title}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={typeof selectedRecipe.image === 'string' 
              ? { uri: selectedRecipe.image } 
              : selectedRecipe.image}
            style={styles.detailImage}
          />

          <View style={styles.detailContent}>
            <View style={styles.detailMeta}>
              <View style={styles.metaBadge}>
                <Text style={styles.metaBadgeText}>
                  Préparation: {selectedRecipe.prepTime} min
                </Text>
              </View>
              <View style={styles.metaBadge}>
                <Text style={styles.metaBadgeText}>
                  Cuisson: {selectedRecipe.cookTime} min
                </Text>
              </View>
              <View style={styles.metaBadge}>
                <Text style={styles.metaBadgeText}>
                  {selectedRecipe.servings} personnes
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ingrédients</Text>
              {selectedRecipe.ingredients.map((ingredient) => (
                <View key={ingredient.id} style={styles.ingredientRow}>
                  <Text style={styles.ingredientBullet}>•</Text>
                  <Text style={styles.ingredientText}>
                    {ingredient.name} - {ingredient.quantity}
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Étapes</Text>
              {selectedRecipe.steps.map((step, index) => (
                <View key={step.id} style={styles.stepRow}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.stepText}>{step.instruction}</Text>
                </View>
              ))}
            </View>

            <View style={styles.authorSection}>
              <Text style={styles.authorLabel}>Recette créée par</Text>
              <Text style={styles.authorName}>{selectedRecipe.authorName}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Création de Recettes</Text>
          <Text style={styles.subtitle}>
            Crée et partage tes propres recettes
          </Text>
        </View>
        {onCreateNew && (
          <TouchableOpacity
            style={styles.createButton}
            onPress={onCreateNew}
            activeOpacity={0.8}
          >
            <Text style={styles.createIcon}>+</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onPress={() => handleRecipePress(recipe)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingVertical: 16,
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 16,
  } as ViewStyle,
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  } as TextStyle,
  subtitle: {
    color: '#94a3b8',
    fontSize: 14,
  } as TextStyle,
  createButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  createIcon: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: -2,
  } as TextStyle,
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  } as ViewStyle,
  backButton: {
    marginRight: 16,
  } as ViewStyle,
  backButtonText: {
    color: '#6366f1',
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,
  detailTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  } as TextStyle,
  detailImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#334155',
    marginBottom: 16,
  } as ImageStyle,
  detailContent: {
    paddingHorizontal: 20,
  } as ViewStyle,
  detailMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  } as ViewStyle,
  metaBadge: {
    backgroundColor: '#334155',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  } as ViewStyle,
  metaBadgeText: {
    color: '#cbd5e1',
    fontSize: 12,
    fontWeight: '500',
  } as TextStyle,
  section: {
    marginBottom: 24,
  } as ViewStyle,
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  } as TextStyle,
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  } as ViewStyle,
  ingredientBullet: {
    color: '#6366f1',
    fontSize: 16,
    marginRight: 12,
  } as TextStyle,
  ingredientText: {
    color: '#cbd5e1',
    fontSize: 14,
    flex: 1,
  } as TextStyle,
  stepRow: {
    flexDirection: 'row',
    marginBottom: 16,
  } as ViewStyle,
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  } as ViewStyle,
  stepNumberText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  } as TextStyle,
  stepText: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
    paddingTop: 4,
  } as TextStyle,
  authorSection: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  } as ViewStyle,
  authorLabel: {
    color: '#64748b',
    fontSize: 12,
    marginBottom: 4,
  } as TextStyle,
  authorName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,
  recipeCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#334155',
  } as ViewStyle,
  recipeImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#334155',
  } as ImageStyle,
  recipeContent: {
    padding: 16,
  } as ViewStyle,
  recipeTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  } as TextStyle,
  recipeDescription: {
    color: '#94a3b8',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  } as TextStyle,
  recipeMeta: {
    flexDirection: 'row',
    gap: 16,
  } as ViewStyle,
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  } as ViewStyle,
  metaIcon: {
    fontSize: 14,
  } as TextStyle,
  metaText: {
    color: '#64748b',
    fontSize: 13,
  } as TextStyle,
});