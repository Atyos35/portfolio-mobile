import React from 'react';
import {
  ScrollView,
  View,
  ViewStyle,
} from 'react-native';
import { Project } from '../types/project';
import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
  onProjectPress: (projectId: string) => void;
  containerStyle?: ViewStyle;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  onProjectPress,
  containerStyle,
}): React.ReactElement => {
  return (
    <ScrollView
      style={containerStyle}
      showsVerticalScrollIndicator={false}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onPress={onProjectPress}
        />
      ))}
    </ScrollView>
  );
};