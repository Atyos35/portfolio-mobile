import { useRouter } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { ProjectList } from '../components/ProjectList';
import { PROJECTS } from '../data/projects';

export default function ProjectsScreen(): React.ReactElement {
  const router = useRouter();

  const handleProjectPress = (projectId: string): void => {
    router.push({
      pathname: '/(tabs)/project/[id]',
      params: { id: projectId },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/')}
      >
        <Text style={styles.backButtonText}>← Retour</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Mes Projets</Text>
      <ProjectList
        projects={PROJECTS}
        onProjectPress={handleProjectPress}
        containerStyle={styles.scrollView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 20,
  } as ViewStyle,
  header: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 24,
    marginBottom: 24,
  } as TextStyle,
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
  scrollView: {
    paddingHorizontal: 24,
  } as ViewStyle,
});
