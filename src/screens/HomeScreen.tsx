import { IconSymbol } from '@/components/ui/icon-symbol';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
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
    ViewStyle
} from 'react-native';
import { Button, FadeIn } from '../components/ui';
import { profile } from '../data/cv';
import { BorderRadius, Colors, FontSize, FontWeight, Spacing } from '../styles/theme';

export default function HomeScreen(): React.ReactElement {
    const router = useRouter();

    const handleViewProjects = (): void => {
        router.push('/(tabs)/projects');
    };

    const handleViewProfile = (): void => {
        router.push('/(tabs)/profile');
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            {/* Hero Section */}
            <FadeIn delay={100} style={styles.heroSection}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Image
                            source={require('@/assets/images/profile_picture.jpg')}
                            style={styles.avatarImage}
                        />
                    </View>
                    <View style={styles.statusIndicator} />
                </View>

                <Text style={styles.greeting}>Bonjour, je suis</Text>

                <Text style={styles.name}>{profile.name}</Text>

                <Text style={styles.title}>{profile.title}</Text>

                <Text style={styles.tagline}>{profile.tagline}</Text>
            </FadeIn>

            {/* Quick Actions */}
            <FadeIn delay={200} style={styles.actionsSection}>
                <Button
                    title="Voir mes projets"
                    onPress={handleViewProjects}
                    variant="primary"
                    size="lg"
                    fullWidth
                />

                <View style={styles.actionSpacer} />

                <Button
                    title="Voir mon CV"
                    onPress={handleViewProfile}
                    variant="outline"
                    size="lg"
                    fullWidth
                />
            </FadeIn>

            {/* Quick Stats */}
            <FadeIn delay={300} style={styles.statsSection}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>7+</Text>
                    <Text style={styles.statLabel}>Années d expérience</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>15+</Text>
                    <Text style={styles.statLabel}>Compétences</Text>
                </View>
            </FadeIn>

            {/* Bio Preview */}
            <FadeIn delay={400} style={styles.bioSection}>
                <Text style={styles.sectionTitle}>À propos</Text>
                <Text style={styles.bioText}>{profile.bio}</Text>

                <View style={styles.locationRow}>
                    <IconSymbol name="location.fill" size={14} color={Colors.text.tertiary} />
                    <Text style={styles.locationText}>{profile.location}</Text>
                </View>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={500} style={styles.socialSection}>
                <Text style={styles.sectionTitle}>Me contacter</Text>
                <View style={styles.socialRow}>
                    {profile.email && (
                        <TouchableOpacity
                            style={styles.socialButton}
                            onPress={() => {
                                Linking.openURL(`mailto:${profile.email}`);
                            }}
                        >
                            <IconSymbol name="envelope.fill" size={24} color={Colors.primary.light} />
                        </TouchableOpacity>
                    )}
                    {profile.social.github && (
                        <TouchableOpacity
                            style={styles.socialButton}
                            onPress={() => {
                                if (profile.social.github) {
                                    Linking.openURL(profile.social.github);
                                }
                            }}
                        >
                            <IconSymbol name="github" size={24} color={Colors.text.secondary} />
                        </TouchableOpacity>
                    )}
                    {profile.social.linkedin && (
                        <TouchableOpacity
                            style={styles.socialButton}
                            onPress={() => {
                                if (profile.social.linkedin) {
                                    Linking.openURL(profile.social.linkedin);
                                }
                            }}
                        >
                            <IconSymbol name="linkedin" size={24} color={Colors.text.secondary} />
                        </TouchableOpacity>
                    )}
                    {profile.social.website && (
                        <TouchableOpacity
                            style={styles.socialButton}
                            onPress={() => {
                                if (profile.social.website) {
                                    Linking.openURL(profile.social.website);
                                }
                            }}
                        >
                            <IconSymbol name="globe" size={24} color={Colors.text.secondary} />
                        </TouchableOpacity>
                    )}
                </View>
            </FadeIn>

            {/* Bottom padding for safe area */}
            <View style={styles.bottomPadding} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.primary,
    } as ViewStyle,
    contentContainer: {
        padding: Spacing.xl,
    } as ViewStyle,
    // Hero Section
    heroSection: {
        alignItems: 'center',
        paddingTop: Spacing.xl,
        paddingBottom: Spacing.xl,
    } as ViewStyle,
    avatarContainer: {
        position: 'relative',
        marginBottom: Spacing.lg,
    } as ViewStyle,
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.background.tertiary,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    avatarImage: {
        width: '100%',
        height: '100%',
    } as ImageStyle,
    statusIndicator: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: Colors.status.success,
        borderWidth: 3,
        borderColor: Colors.background.primary,
    } as ViewStyle,
    greeting: {
        color: Colors.text.tertiary,
        fontSize: FontSize.md,
        fontWeight: FontWeight.medium,
        marginBottom: Spacing.xs,
    } as TextStyle,
    name: {
        color: Colors.text.primary,
        fontSize: 36,
        fontWeight: FontWeight.extrabold,
        marginBottom: Spacing.sm,
    } as TextStyle,
    title: {
        color: Colors.primary.light,
        fontSize: FontSize.xl,
        fontWeight: FontWeight.semibold,
        textAlign: 'center',
        marginBottom: Spacing.sm,
    } as TextStyle,
    tagline: {
        color: Colors.text.secondary,
        fontSize: FontSize.base,
        textAlign: 'center',
        lineHeight: 22,
    } as TextStyle,
    // Actions Section
    actionsSection: {
        marginTop: Spacing.xl,
    } as ViewStyle,
    actionSpacer: {
        height: Spacing.md,
    } as ViewStyle,
    // Stats Section
    statsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Spacing.xl,
        gap: Spacing.md,
    } as ViewStyle,
    statCard: {
        flex: 1,
        backgroundColor: Colors.background.card,
        borderRadius: BorderRadius.lg,
        padding: Spacing.md,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border.subtle,
    } as ViewStyle,
    statNumber: {
        color: Colors.primary.light,
        fontSize: 28,
        fontWeight: FontWeight.bold,
        marginBottom: Spacing.xs,
    } as TextStyle,
    statLabel: {
        color: Colors.text.tertiary,
        fontSize: FontSize.sm,
        textAlign: 'center',
    } as TextStyle,
    // Bio Section
    bioSection: {
        marginTop: Spacing.xl,
    } as ViewStyle,
    sectionTitle: {
        color: Colors.text.primary,
        fontSize: FontSize.lg,
        fontWeight: FontWeight.semibold,
        marginBottom: Spacing.md,
    } as TextStyle,
    bioText: {
        color: Colors.text.secondary,
        fontSize: FontSize.base,
        lineHeight: 24,
        marginBottom: Spacing.md,
    } as TextStyle,
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
    } as ViewStyle,
    locationText: {
        color: Colors.text.tertiary,
        fontSize: FontSize.sm,
    } as TextStyle,
    // Social Section
    socialSection: {
        marginTop: Spacing.xl,
    } as ViewStyle,
    socialRow: {
        flexDirection: 'row',
        gap: Spacing.md,
    } as ViewStyle,
    socialButton: {
        width: 48,
        height: 48,
        borderRadius: BorderRadius.lg,
        backgroundColor: Colors.background.card,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border.subtle,
    } as ViewStyle,
    bottomPadding: {
        height: Spacing.xl,
    } as ViewStyle,
});