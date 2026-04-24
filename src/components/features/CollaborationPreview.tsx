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
import { Collaborator } from '../../types/project';

interface CollaborationPreviewProps {
  collaborators: Collaborator[];
  onCollaboratorPress?: (collaborator: Collaborator) => void;
}

interface CollaboratorCardProps {
  collaborator: Collaborator;
  onPress: () => void;
}

const CollaboratorCard: React.FC<CollaboratorCardProps> = ({
  collaborator,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.collaboratorCard}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={{ uri: collaborator.avatar }} style={styles.avatar} />
      <View style={styles.collaboratorInfo}>
        <Text style={styles.collaboratorName}>{collaborator.name}</Text>
        <Text style={styles.collaboratorRole}>{collaborator.role}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface CollaboratorDetailProps {
  collaborator: Collaborator;
  onBack: () => void;
}

const CollaboratorDetail: React.FC<CollaboratorDetailProps> = ({
  collaborator,
  onBack,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailHeader}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Retour</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailContent}>
        <Image source={{ uri: collaborator.avatar }} style={styles.detailAvatar} />
        <Text style={styles.detailName}>{collaborator.name}</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleBadgeText}>{collaborator.role}</Text>
        </View>

        {collaborator.bio && (
          <View style={styles.bioSection}>
            <Text style={styles.bioLabel}>À propos</Text>
            <Text style={styles.bioText}>{collaborator.bio}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contacter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const CollaborationPreview: React.FC<CollaborationPreviewProps> = ({
  collaborators,
  onCollaboratorPress,
}) => {
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);

  const handleCollaboratorPress = (collaborator: Collaborator) => {
    setSelectedCollaborator(collaborator);
    if (onCollaboratorPress) {
      onCollaboratorPress(collaborator);
    }
  };

  const handleBack = () => {
    setSelectedCollaborator(null);
  };

  if (selectedCollaborator) {
    return (
      <CollaboratorDetail
        collaborator={selectedCollaborator}
        onBack={handleBack}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collaboration</Text>
      <Text style={styles.subtitle}>
        Travaille avec des chefs et experts culinaires
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {collaborators.map((collaborator) => (
          <CollaboratorCard
            key={collaborator.id}
            collaborator={collaborator}
            onPress={() => handleCollaboratorPress(collaborator)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f172a',
    paddingVertical: 16,
  } as ViewStyle,
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 4,
  } as TextStyle,
  subtitle: {
    color: '#94a3b8',
    fontSize: 14,
    paddingHorizontal: 20,
    marginBottom: 16,
  } as TextStyle,
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
    flexDirection: 'column',
  } as ViewStyle,
  collaboratorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
    minWidth: 280,
  } as ViewStyle,
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#334155',
  } as ImageStyle,
  collaboratorInfo: {
    marginLeft: 12,
    flex: 1,
  } as ViewStyle,
  collaboratorName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  } as TextStyle,
  collaboratorRole: {
    color: '#6366f1',
    fontSize: 13,
    fontWeight: '500',
  } as TextStyle,
  detailHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
  } as ViewStyle,
  backButton: {
    alignSelf: 'flex-start',
  } as ViewStyle,
  backButtonText: {
    color: '#6366f1',
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,
  detailContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  } as ViewStyle,
  detailAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#334155',
    marginBottom: 16,
  } as ImageStyle,
  detailName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  } as TextStyle,
  roleBadge: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 24,
  } as ViewStyle,
  roleBadgeText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  } as TextStyle,
  bioSection: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    marginBottom: 24,
  } as ViewStyle,
  bioLabel: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  } as TextStyle,
  bioText: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
  } as TextStyle,
  contactButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  } as ViewStyle,
  contactButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,
});