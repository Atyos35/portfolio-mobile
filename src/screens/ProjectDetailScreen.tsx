import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageStyle, ScrollView, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { FeatureRenderer } from '../components/features/FeatureRenderer';
import { PROJECTS } from '../data/projects';
import { Project, ProjectFeatureUnion } from '../types/project';

export default function ProjectDetailScreen(): React.ReactElement {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const project: Project | undefined = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Projet non trouvé</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/(tabs)/projects')}
        >
          <Text style={styles.backButtonText}>← Retour</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/(tabs)/projects')}
      >
        <Text style={styles.backButtonText}>← Retour</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: project.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description}>{project.description}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>À propos</Text>
          <Text style={styles.sectionText}>
            Un projet showcase mettant en avant les compétences en développement mobile avec React Native et Expo.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technologies</Text>
          <View style={styles.techContainer}>
            <View style={styles.techTag}>
              <Text style={styles.techText}>React Native</Text>
            </View>
            <View style={styles.techTag}>
              <Text style={styles.techText}>TypeScript</Text>
            </View>
            <View style={styles.techTag}>
              <Text style={styles.techText}>Expo</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Voir le code</Text>
        </TouchableOpacity>
      </View>

      {/* Features interactives pour Food Social App */}
      {project.features && project.features.length > 0 && (
        <View style={styles.featuresSection}>
          {project.features.map((feature: ProjectFeatureUnion) => (
            <View key={feature.id} style={styles.featureContainer}>
              <FeatureRenderer feature={feature} />
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  } as ViewStyle,
  backButton: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  } as ViewStyle,
  backButtonText: {
    color: '#6366f1',
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,
  errorContainer: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  errorText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  } as TextStyle,
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#1e293b',
  } as ImageStyle,
  content: {
    padding: 24,
  } as ViewStyle,
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  } as TextStyle,
  description: {
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  } as TextStyle,
  section: {
    marginBottom: 24,
  } as ViewStyle,
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  } as TextStyle,
  sectionText: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 22,
  } as TextStyle,
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  } as ViewStyle,
  techTag: {
    backgroundColor: '#334155',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  } as ViewStyle,
  techText: {
    color: '#6366f1',
    fontSize: 12,
    fontWeight: '600',
  } as TextStyle,
  actionButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  } as ViewStyle,
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  } as TextStyle,
  featuresSection: {
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#334155',
  } as ViewStyle,
  featureContainer: {
    minHeight: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingBottom: 24,
    marginBottom: 24,
  } as ViewStyle,
});
