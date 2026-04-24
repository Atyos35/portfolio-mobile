import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onPress: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onPress,
}): React.ReactElement => {
  const handlePress = (): void => {
    onPress(project.id);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: project.image }}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{project.title}</Text>
        <Text style={styles.cardDescription}>
          {project.description}
        </Text>
        <Text style={styles.viewMore}>Voir plus →</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155',
  } as ViewStyle,
  cardImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#0f172a',
  } as ImageStyle,
  cardContent: {
    padding: 16,
  } as ViewStyle,
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  } as TextStyle,
  cardDescription: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  } as TextStyle,
  viewMore: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '600',
  } as TextStyle,
});