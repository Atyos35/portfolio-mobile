import React from 'react';
import {
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import { BorderRadius, Colors, FontSize, FontWeight, Spacing } from '../../styles/theme';

interface TagProps {
    label: string;
    variant?: 'default' | 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
}

const sizeStyles = {
    sm: {
        paddingVertical: Spacing.xs,
        paddingHorizontal: Spacing.sm,
        fontSize: FontSize.xs,
    },
    md: {
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
        fontSize: FontSize.sm,
    },
    lg: {
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.base,
        fontSize: FontSize.base,
    },
} as const;

export const Tag: React.FC<TagProps> = ({
    label,
    variant = 'default',
    size = 'md',
    icon,
}): React.ReactElement => {
    return (
        <View
            style={[
                styles.base,
                styles[variant],
                {
                    paddingVertical: sizeStyles[size].paddingVertical,
                    paddingHorizontal: sizeStyles[size].paddingHorizontal,
                },
            ]}
        >
            {icon && <View style={styles.icon}>{icon}</View>}
            <Text
                style={[
                    styles.text,
                    styles[`${variant}Text` as const],
                    { fontSize: sizeStyles[size].fontSize },
                ]}
            >
                {label}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: Spacing.xs,
        borderRadius: BorderRadius.full,
        alignSelf: 'flex-start',
    } as ViewStyle,
    icon: {
        marginRight: Spacing.xs,
    } as ViewStyle,
    // Variants
    default: {
        backgroundColor: Colors.background.tertiary,
        borderWidth: 1,
        borderColor: Colors.border.subtle,
    } as ViewStyle,
    primary: {
        backgroundColor: Colors.primary.glow,
        borderWidth: 1,
        borderColor: Colors.primary.main,
    } as ViewStyle,
    secondary: {
        backgroundColor: 'rgba(236, 72, 153, 0.2)',
        borderWidth: 1,
        borderColor: Colors.secondary.main,
    } as ViewStyle,
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.border.default,
    } as ViewStyle,
    // Text styles
    text: {
        fontWeight: FontWeight.medium,
    } as TextStyle,
    defaultText: {
        color: Colors.text.secondary,
    } as TextStyle,
    primaryText: {
        color: Colors.primary.light,
    } as TextStyle,
    secondaryText: {
        color: Colors.secondary.light,
    } as TextStyle,
    outlineText: {
        color: Colors.text.tertiary,
    } as TextStyle,
});