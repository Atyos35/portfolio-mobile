import { IconSymbol } from '@/components/ui/icon-symbol';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
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
import { FeatureRenderer } from '../components/features/FeatureRenderer';
import { PROJECTS } from '../data/projects';
import { BorderRadius, Colors, FontSize, FontWeight, Spacing } from '../styles/theme';
import { Project, ProjectFeatureUnion } from '../types/project';

// Tech stack data for projects
const techStack: Record<string, string[]> = {
    '1': ['React Native', 'TypeScript', 'Expo', 'React Navigation'],
    '2': ['React Native', 'Firebase', 'TypeScript', 'Redux'],
};

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
                    <IconSymbol name="arrow.left" size={16} color={Colors.primary.light} />
                    <Text style={styles.backButtonText}>Retour</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const projectTechStack = techStack[project.id] || ['React Native', 'TypeScript', 'Expo'];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Hero Image */}
            <View style={styles.heroContainer}>
                <Image source={{ uri: project.image }} style={styles.heroImage} />
                <View style={styles.heroOverlay} />
                <TouchableOpacity
                    style={styles.backButtonAbsolute}
                    onPress={() => router.push('/(tabs)/projects')}
                >
                    <IconSymbol name="arrow.left" size={20} color={Colors.text.primary} />
                </TouchableOpacity>
            </View>

            {/* Content */}
            <View style={styles.content}>
                {/* Title Section */}
                <View style={styles.titleSection}>
                    <Text style={styles.title}>{project.title}</Text>
                    <Text style={styles.description}>{project.description}</Text>
                </View>

                {/* Tech Stack */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Technologies</Text>
                    <View style={styles.techContainer}>
                        {projectTechStack.map((tech) => (
                            <View key={tech} style={styles.techTag}>
                                <Text style={styles.techText}>{tech}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* About Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>À propos du projet</Text>
                    <Text style={styles.sectionText}>
                        Ce projet showcase met en avant les compétences en développement mobile
                        avec React Native et Expo. Il démontre la capacité à créer des
                        applications modernes, performantes et esthétiques.
                    </Text>
                </View>

                {/* Key Features */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Fonctionnalités clés</Text>
                    <View style={styles.featuresList}>
                        <View style={styles.featureItem}>
                            <View style={styles.featureIcon}>
                                <IconSymbol name="sparkles" size={16} color={Colors.primary.light} />
                            </View>
                            <Text style={styles.featureText}>Interface utilisateur moderne et intuitive</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <View style={styles.featureIcon}>
                                <IconSymbol name="bolt.fill" size={16} color={Colors.primary.light} />
                            </View>
                            <Text style={styles.featureText}>Performance optimisée</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <View style={styles.featureIcon}>
                                <IconSymbol name="phone.fill" size={16} color={Colors.primary.light} />
                            </View>
                            <Text style={styles.featureText}>Compatible iOS et Android</Text>
                        </View>
                        <View style={styles.featureItem}>
                            <View style={styles.featureIcon}>
                                <IconSymbol name="paintbrush.fill" size={16} color={Colors.primary.light} />
                            </View>
                            <Text style={styles.featureText}>Design soigné et cohérent</Text>
                        </View>
                    </View>
                </View>

                {/* Interactive Features Preview */}
                {project.features && project.features.length > 0 && (
                    <View style={styles.featuresSection}>
                        <Text style={styles.sectionTitle}>Aperçu interactif</Text>
                        <Text style={styles.sectionSubtitle}>
                            Explorez les fonctionnalités de cette application
                        </Text>
                        {project.features.map((feature: ProjectFeatureUnion) => (
                            <View key={feature.id} style={styles.featurePreviewContainer}>
                                <FeatureRenderer feature={feature} />
                            </View>
                        ))}
                    </View>
                )}

                {/* Bottom padding */}
                <View style={styles.bottomPadding} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.primary,
    } as ViewStyle,
    // Hero Section
    heroContainer: {
        position: 'relative',
        height: 280,
    } as ViewStyle,
    heroImage: {
        width: '100%',
        height: '100%',
    } as ImageStyle,
    heroOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 150,
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
    } as ViewStyle,
    backButtonAbsolute: {
        position: 'absolute',
        top: 16,
        left: 16,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    // Content
    content: {
        padding: Spacing.xl,
    } as ViewStyle,
    // Title Section
    titleSection: {
        marginBottom: Spacing.xl,
    } as ViewStyle,
    title: {
        color: Colors.text.primary,
        fontSize: FontSize['2xl'],
        fontWeight: FontWeight.bold,
        marginBottom: Spacing.sm,
    } as TextStyle,
    description: {
        color: Colors.text.secondary,
        fontSize: FontSize.base,
        lineHeight: 24,
    } as TextStyle,
    // Sections
    section: {
        marginBottom: Spacing.xl,
    } as ViewStyle,
    sectionTitle: {
        color: Colors.text.primary,
        fontSize: FontSize.lg,
        fontWeight: FontWeight.semibold,
        marginBottom: Spacing.md,
    } as TextStyle,
    sectionSubtitle: {
        color: Colors.text.tertiary,
        fontSize: FontSize.sm,
        marginBottom: Spacing.md,
    } as TextStyle,
    sectionText: {
        color: Colors.text.secondary,
        fontSize: FontSize.base,
        lineHeight: 24,
    } as TextStyle,
    // Tech Stack
    techContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.sm,
    } as ViewStyle,
    techTag: {
        backgroundColor: Colors.primary.glow,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.sm,
        borderRadius: BorderRadius.full,
        borderWidth: 1,
        borderColor: Colors.primary.main,
    } as ViewStyle,
    techText: {
        color: Colors.primary.light,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.medium,
    } as TextStyle,
    // Features List
    featuresList: {
        gap: Spacing.md,
    } as ViewStyle,
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.md,
    } as ViewStyle,
    featureIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: Colors.background.tertiary,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    featureText: {
        color: Colors.text.secondary,
        fontSize: FontSize.base,
        flex: 1,
    } as TextStyle,
    // Features Section
    featuresSection: {
        marginTop: Spacing.lg,
    } as ViewStyle,
    featurePreviewContainer: {
        backgroundColor: Colors.background.card,
        borderRadius: BorderRadius.xl,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.border.subtle,
        marginBottom: Spacing.xl,
    } as ViewStyle,
    // Back Button
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        backgroundColor: Colors.background.card,
        borderRadius: BorderRadius.lg,
        borderWidth: 1,
        borderColor: Colors.border.subtle,
    } as ViewStyle,
    backButtonText: {
        color: Colors.primary.light,
        fontSize: FontSize.base,
        fontWeight: FontWeight.semibold,
    } as TextStyle,
    // Error
    errorContainer: {
        flex: 1,
        backgroundColor: Colors.background.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Spacing.xl,
    } as ViewStyle,
    errorText: {
        color: Colors.text.secondary,
        fontSize: FontSize.lg,
        marginBottom: Spacing.xl,
    } as TextStyle,
    // Bottom padding
    bottomPadding: {
        height: Spacing.xl,
    } as ViewStyle,
});