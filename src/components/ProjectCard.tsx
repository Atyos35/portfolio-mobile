import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { BorderRadius, Colors, FontSize, FontWeight, Spacing } from '../styles/theme';
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
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: project.image }}
                    style={styles.cardImage}
                />
                <View style={styles.imageOverlay} />
                <View style={styles.featureBadge}>
                    <IconSymbol name="star.fill" size={12} color={Colors.status.warning} />
                    <Text style={styles.featureBadgeText}>Projet</Text>
                </View>
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{project.title}</Text>
                <Text style={styles.cardDescription} numberOfLines={2}>
                    {project.description}
                </Text>
                <View style={styles.cardFooter}>
                    <Text style={styles.viewMore}>Voir le projet</Text>
                    <IconSymbol name="arrow.right" size={16} color={Colors.primary.light} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.background.card,
        borderRadius: BorderRadius.xl,
        overflow: 'hidden',
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border.subtle,
    } as ViewStyle,
    imageContainer: {
        position: 'relative',
    } as ViewStyle,
    cardImage: {
        width: '100%',
        height: 180,
        backgroundColor: Colors.background.tertiary,
    } as ImageStyle,
    imageOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: 'rgba(10, 10, 10, 0.6)',
    } as ViewStyle,
    featureBadge: {
        position: 'absolute',
        top: Spacing.md,
        right: Spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xs,
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        paddingHorizontal: Spacing.sm,
        paddingVertical: Spacing.xs,
        borderRadius: BorderRadius.full,
    } as ViewStyle,
    featureBadgeText: {
        color: Colors.text.secondary,
        fontSize: FontSize.xs,
        fontWeight: FontWeight.medium,
    } as TextStyle,
    cardContent: {
        padding: Spacing.lg,
    } as ViewStyle,
    cardTitle: {
        color: Colors.text.primary,
        fontSize: FontSize.lg,
        fontWeight: FontWeight.bold,
        marginBottom: Spacing.sm,
    } as TextStyle,
    cardDescription: {
        color: Colors.text.secondary,
        fontSize: FontSize.sm,
        lineHeight: 20,
        marginBottom: Spacing.md,
    } as TextStyle,
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    } as ViewStyle,
    viewMore: {
        color: Colors.primary.light,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.semibold,
    } as TextStyle,
});