import React from 'react';
import {
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import { ProjectList } from '../components/ProjectList';
import { PROJECTS } from '../data/projects';

export default function ProjectsScreen(): React.ReactElement {
  const handleProjectPress = (projectId: string): void => {
    console.log(`Navigate to project: ${projectId}`);
    // TODO: Navigation vers détail du projet
  };

  return (
    <View style={styles.container}>
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
  scrollView: {
    paddingHorizontal: 24,
  } as ViewStyle,
});