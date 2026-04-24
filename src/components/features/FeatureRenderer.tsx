import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { ProjectFeatureUnion } from '../../types/project';
import { CollaborationPreview, FeedPreview, LikesPreview, RecipeCreationPreview } from './index';

interface FeatureRendererProps {
  feature: ProjectFeatureUnion;
}

export const FeatureRenderer: React.FC<FeatureRendererProps> = ({ feature }) => {
  switch (feature.type) {
    case 'feed':
      return <FeedPreview posts={feature.posts} />;
    case 'likes':
      return <LikesPreview items={feature.items} />;
    case 'creation':
      return <RecipeCreationPreview recipes={feature.recipes} />;
    case 'collaboration':
      return <CollaborationPreview collaborators={feature.collaborators} />;
    default:
      return (
        <View style={styles.fallback}>
          <Text style={styles.fallbackText}>Feature non disponible</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  fallback: {
    padding: 20,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    alignItems: 'center',
  } as ViewStyle,
  fallbackText: {
    color: '#64748b',
    fontSize: 14,
  } as TextStyle,
});