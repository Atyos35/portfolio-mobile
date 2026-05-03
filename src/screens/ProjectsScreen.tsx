import { IconSymbol } from '@/components/ui/icon-symbol';
import { useResponsiveLayout } from '@/hooks/use-responsive-layout';
import { useRouter } from 'expo-router';
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
import { Colors, FontSize, FontWeight, Spacing } from '../styles/theme';

export default function ProjectsScreen(): React.ReactElement {
    const router = useRouter();
    const { isLargeScreen, containerMaxWidth } = useResponsiveLayout();

    const handleProjectPress = (projectId: string): void => {
        router.push({
            pathname: '/project/[id]',
            params: { id: projectId },
        });
    };

    return (
        <View style={styles.container}>
            <View style={isLargeScreen ? { maxWidth: containerMaxWidth, width: '100%' } : undefined}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <IconSymbol name="briefcase.fill" size={24} color={Colors.primary.light} />
                        <Text style={[styles.headerTitle, isLargeScreen && styles.largeScreenHeaderTitle]}>Mes Projets</Text>
                    </View>
                    <Text style={styles.headerSubtitle}>
                        {PROJECTS.length} projet{PROJECTS.length > 1 ? 's' : ''}
                    </Text>
                </View>
            </View>
            <View style={isLargeScreen ? { maxWidth: containerMaxWidth, width: '100%' } : undefined}>
                <ProjectList
                    projects={PROJECTS}
                    onProjectPress={handleProjectPress}
                    containerStyle={isLargeScreen ? { paddingHorizontal: 0 } : styles.listContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.primary,
        paddingTop: Spacing.xl,
    } as ViewStyle,
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Spacing.xl,
        marginBottom: Spacing.xl,
    } as ViewStyle,
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.md,
    } as ViewStyle,
    headerTitle: {
        color: Colors.text.primary,
        fontSize: FontSize['2xl'],
        fontWeight: FontWeight.bold,
    } as TextStyle,
    headerSubtitle: {
        color: Colors.text.tertiary,
        fontSize: FontSize.sm,
    } as TextStyle,
    listContainer: {
        paddingHorizontal: Spacing.xl,
    } as ViewStyle,
    // Large screen styles
    largeScreenHeaderTitle: {
        fontSize: FontSize['3xl'],
    } as TextStyle,
});