import { IconSymbol } from '@/components/ui/icon-symbol';
import React, { useMemo } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';
import { Card, Tag } from '../components/ui';
import { cvData, education, experiences, skills } from '../data/cv';
import { BorderRadius, Colors, FontSize, FontWeight, Spacing } from '../styles/theme';
import { SkillCategory } from '../types/cv';

// Category labels and colors
const categoryConfig: Record<SkillCategory, { label: string; color: string }> = {
    frontend: { label: 'Frontend', color: Colors.primary.main },
    backend: { label: 'Backend', color: Colors.secondary.main },
    mobile: { label: 'Mobile', color: Colors.status.info },
    tools: { label: 'Outils', color: Colors.status.warning },
    design: { label: 'Design', color: Colors.status.success },
    soft: { label: 'Soft Skills', color: Colors.text.secondary },
};

export default function ProfileScreen(): React.ReactElement {
    const skillsByCategory = useMemo(() => {
        const grouped: Record<string, typeof skills> = {};
        skills.forEach((skill) => {
            if (!grouped[skill.category]) {
                grouped[skill.category] = [];
            }
            grouped[skill.category].push(skill);
        });
        return grouped;
    }, []);

    const formatDate = (dateStr: string): string => {
        const [year, month] = dateStr.split('-');
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        return `${months[parseInt(month) - 1]} ${year}`;
    };

    const handleContactPress = (): void => {
        // In a real app, this would open email or contact form
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>CV</Text>
                <TouchableOpacity
                    style={styles.contactButton}
                    onPress={handleContactPress}
                >
                    <IconSymbol name="message.fill" size={18} color={Colors.primary.light} />
                    <Text style={styles.contactButtonText}>Me contacter</Text>
                </TouchableOpacity>
            </View>

            {/* Bio Section */}
            <Card variant="elevated" padding="xl" style={styles.bioCard}>
                <View style={styles.bioHeader}>
                    <View style={styles.avatarLarge}>
                        <Text style={styles.avatarText}>
                            {cvData.profile.name.charAt(0)}
                        </Text>
                    </View>
                    <View style={styles.bioInfo}>
                        <Text style={styles.name}>{cvData.profile.name}</Text>
                        <Text style={styles.title}>{cvData.profile.title}</Text>
                        <View style={styles.locationRow}>
                            <IconSymbol name="location.fill" size={14} color={Colors.text.tertiary} />
                            <Text style={styles.locationText}>{cvData.profile.location}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.bioText}>{cvData.profile.bio}</Text>
            </Card>

            {/* Skills Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Compétences</Text>
                {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                    <View key={category} style={styles.categoryGroup}>
                        <View style={styles.categoryHeader}>
                            <View
                                style={[
                                    styles.categoryDot,
                                    { backgroundColor: categoryConfig[category as SkillCategory].color },
                                ]}
                            />
                            <Text style={styles.categoryLabel}>
                                {categoryConfig[category as SkillCategory].label}
                            </Text>
                        </View>
                        <View style={styles.skillsRow}>
                            {categorySkills.map((skill) => (
                                <Tag
                                    key={skill.id}
                                    label={skill.name}
                                    variant="outline"
                                    size="sm"
                                />
                            ))}
                        </View>
                    </View>
                ))}
            </View>

            {/* Experience Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Expériences</Text>
                <View style={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <View key={exp.id} style={styles.timelineItem}>
                            <View style={styles.timelineMarker} />
                            {index < experiences.length - 1 && <View style={styles.timelineLine} />}
                            <Card variant="default" padding="lg" style={styles.timelineCard}>
                                <View style={styles.timelineHeader}>
                                    <View style={styles.timelineTitleSection}>
                                        <Text style={styles.timelineTitle}>{exp.title}</Text>
                                        <Text style={styles.timelineCompany}>{exp.company}</Text>
                                    </View>
                                    <View style={styles.timelineBadge}>
                                        <Text style={styles.timelineBadgeText}>
                                            {exp.current
                                                ? `${formatDate(exp.startDate)} - Présent`
                                                : `${formatDate(exp.startDate)} - ${formatDate(exp.endDate!)}`}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={styles.timelineDescription}>{exp.description}</Text>
                                <View style={styles.achievementsList}>
                                    {exp.achievements.map((achievement, i) => (
                                        <View key={i} style={styles.achievementItem}>
                                            <IconSymbol name="checkmark" size={14} color={Colors.primary.light} />
                                            <Text style={styles.achievementText}>{achievement}</Text>
                                        </View>
                                    ))}
                                </View>
                                <View style={styles.techStack}>
                                    {exp.technologies.map((tech) => (
                                        <Tag key={tech} label={tech} variant="primary" size="sm" />
                                    ))}
                                </View>
                            </Card>
                        </View>
                    ))}
                </View>
            </View>

            {/* Education Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Formation</Text>
                {education.map((edu) => (
                    <Card key={edu.id} variant="default" padding="lg" style={styles.educationCard}>
                        <View style={styles.educationHeader}>
                            <View style={styles.educationIcon}>
                                <IconSymbol name="school.fill" size={24} color={Colors.primary.light} />
                            </View>
                            <View style={styles.educationInfo}>
                                <Text style={styles.educationDegree}>{edu.degree}</Text>
                                <Text style={styles.educationSchool}>{edu.school}</Text>
                                <View style={styles.educationMeta}>
                                    <Text style={styles.educationLocation}>{edu.location}</Text>
                                    <Text style={styles.educationDate}>
                                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {edu.description && (
                            <Text style={styles.educationDescription}>{edu.description}</Text>
                        )}
                        {edu.highlights && edu.highlights.length > 0 && (
                            <View style={styles.highlightsList}>
                                {edu.highlights.map((highlight, i) => (
                                    <View key={i} style={styles.highlightItem}>
                                        <IconSymbol name="star.fill" size={12} color={Colors.status.warning} />
                                        <Text style={styles.highlightText}>{highlight}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </Card>
                ))}
            </View>

            {/* Bottom padding */}
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
    // Header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.xl,
    } as ViewStyle,
    headerTitle: {
        color: Colors.text.primary,
        fontSize: FontSize['2xl'],
        fontWeight: FontWeight.bold,
    } as TextStyle,
    contactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.sm,
        borderRadius: BorderRadius.lg,
        backgroundColor: Colors.background.card,
        borderWidth: 1,
        borderColor: Colors.primary.main,
    } as ViewStyle,
    contactButtonText: {
        color: Colors.primary.light,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.semibold,
    } as TextStyle,
    // Bio Card
    bioCard: {
        marginBottom: Spacing.xl,
    } as ViewStyle,
    bioHeader: {
        flexDirection: 'row',
        marginBottom: Spacing.lg,
    } as ViewStyle,
    avatarLarge: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.primary.main,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    avatarText: {
        color: Colors.background.primary,
        fontSize: 28,
        fontWeight: FontWeight.bold,
    } as TextStyle,
    bioInfo: {
        flex: 1,
        marginLeft: Spacing.md,
        justifyContent: 'center',
    } as ViewStyle,
    name: {
        color: Colors.text.primary,
        fontSize: FontSize.xl,
        fontWeight: FontWeight.bold,
        marginBottom: Spacing.xs,
    } as TextStyle,
    title: {
        color: Colors.primary.light,
        fontSize: FontSize.base,
        fontWeight: FontWeight.medium,
        marginBottom: Spacing.xs,
    } as TextStyle,
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.xs,
    } as ViewStyle,
    locationText: {
        color: Colors.text.tertiary,
        fontSize: FontSize.sm,
    } as TextStyle,
    bioText: {
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
    // Skills
    categoryGroup: {
        marginBottom: Spacing.md,
    } as ViewStyle,
    categoryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    } as ViewStyle,
    categoryDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: Spacing.sm,
    } as ViewStyle,
    categoryLabel: {
        color: Colors.text.secondary,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.medium,
    } as TextStyle,
    skillsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.sm,
    } as ViewStyle,
    // Timeline
    timeline: {
        paddingLeft: Spacing.sm,
    } as ViewStyle,
    timelineItem: {
        position: 'relative',
        paddingLeft: Spacing.xl,
        marginBottom: Spacing.md,
    } as ViewStyle,
    timelineMarker: {
        position: 'absolute',
        left: -5,
        top: 20,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.primary.main,
    } as ViewStyle,
    timelineLine: {
        position: 'absolute',
        left: 0,
        top: 30,
        bottom: -20,
        width: 2,
        backgroundColor: Colors.border.subtle,
    } as ViewStyle,
    timelineCard: {
        marginBottom: Spacing.sm,
    } as ViewStyle,
    timelineHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: Spacing.sm,
    } as ViewStyle,
    timelineTitleSection: {
        flex: 1,
        marginRight: Spacing.md,
    } as ViewStyle,
    timelineTitle: {
        color: Colors.text.primary,
        fontSize: FontSize.base,
        fontWeight: FontWeight.semibold,
        marginBottom: Spacing.xs,
    } as TextStyle,
    timelineCompany: {
        color: Colors.primary.light,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.medium,
    } as TextStyle,
    timelineBadge: {
        backgroundColor: Colors.background.tertiary,
        paddingHorizontal: Spacing.sm,
        paddingVertical: Spacing.xs,
        borderRadius: BorderRadius.sm,
    } as ViewStyle,
    timelineBadgeText: {
        color: Colors.text.tertiary,
        fontSize: FontSize.xs,
    } as TextStyle,
    timelineDescription: {
        color: Colors.text.secondary,
        fontSize: FontSize.sm,
        lineHeight: 20,
        marginBottom: Spacing.md,
    } as TextStyle,
    achievementsList: {
        marginBottom: Spacing.md,
    } as ViewStyle,
    achievementItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
        marginBottom: Spacing.xs,
    } as ViewStyle,
    achievementText: {
        color: Colors.text.secondary,
        fontSize: FontSize.sm,
        flex: 1,
    } as TextStyle,
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.xs,
    } as ViewStyle,
    // Education
    educationCard: {
        marginBottom: Spacing.md,
    } as ViewStyle,
    educationHeader: {
        flexDirection: 'row',
        marginBottom: Spacing.md,
    } as ViewStyle,
    educationIcon: {
        width: 40,
        height: 40,
        borderRadius: BorderRadius.md,
        backgroundColor: Colors.primary.glow,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    educationInfo: {
        flex: 1,
        marginLeft: Spacing.md,
    } as ViewStyle,
    educationDegree: {
        color: Colors.text.primary,
        fontSize: FontSize.base,
        fontWeight: FontWeight.semibold,
        marginBottom: Spacing.xs,
    } as TextStyle,
    educationSchool: {
        color: Colors.primary.light,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.medium,
        marginBottom: Spacing.xs,
    } as TextStyle,
    educationMeta: {
        flexDirection: 'row',
        gap: Spacing.md,
    } as ViewStyle,
    educationLocation: {
        color: Colors.text.tertiary,
        fontSize: FontSize.sm,
    } as TextStyle,
    educationDate: {
        color: Colors.text.tertiary,
        fontSize: FontSize.sm,
    } as TextStyle,
    educationDescription: {
        color: Colors.text.secondary,
        fontSize: FontSize.sm,
        lineHeight: 20,
        marginBottom: Spacing.md,
    } as TextStyle,
    highlightsList: {
        marginTop: Spacing.sm,
    } as ViewStyle,
    highlightItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
        marginBottom: Spacing.xs,
    } as ViewStyle,
    highlightText: {
        color: Colors.text.secondary,
        fontSize: FontSize.sm,
    } as TextStyle,
    bottomPadding: {
        height: Spacing.xl,
    } as ViewStyle,
});