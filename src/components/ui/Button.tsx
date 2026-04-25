import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import { BorderRadius, Colors, FontSize, FontWeight, Spacing } from '../../styles/theme';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    loading?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const sizeStyles = {
    sm: {
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
        fontSize: FontSize.sm,
    },
    md: {
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.lg,
        fontSize: FontSize.base,
    },
    lg: {
        paddingVertical: Spacing.base,
        paddingHorizontal: Spacing.xl,
        fontSize: FontSize.lg,
    },
} as const;

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    disabled = false,
    icon,
    iconPosition = 'left',
}): React.ReactElement => {
    const isDisabled = disabled || loading;

    return (
        <TouchableOpacity
            style={[
                styles.base,
                styles[variant],
                {
                    paddingVertical: sizeStyles[size].paddingVertical,
                    paddingHorizontal: sizeStyles[size].paddingHorizontal,
                },
                fullWidth && styles.fullWidth,
                isDisabled && styles.disabled,
            ]}
            onPress={onPress}
            disabled={isDisabled}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator
                    color={variant === 'primary' ? Colors.background.primary : Colors.primary.main}
                    size="small"
                />
            ) : (
                <>
                    {icon && iconPosition === 'left' && (
                        <>{icon}</>
                    )}
                    <Text
                        style={[
                            styles.text,
                            styles[`${variant}Text` as const],
                            { fontSize: sizeStyles[size].fontSize },
                        ]}
                    >
                        {title}
                    </Text>
                    {icon && iconPosition === 'right' && (
                        <>{icon}</>
                    )}
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: Spacing.sm,
        borderRadius: BorderRadius.lg,
        borderWidth: 2,
        borderColor: 'transparent',
    } as ViewStyle,
    fullWidth: {
        width: '100%',
    } as ViewStyle,
    disabled: {
        opacity: 0.5,
    } as ViewStyle,
    // Variants
    primary: {
        backgroundColor: Colors.primary.main,
        borderColor: Colors.primary.main,
    } as ViewStyle,
    secondary: {
        backgroundColor: Colors.secondary.main,
        borderColor: Colors.secondary.main,
    } as ViewStyle,
    ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    } as ViewStyle,
    outline: {
        backgroundColor: 'transparent',
        borderColor: Colors.primary.main,
    } as ViewStyle,
    // Text styles
    text: {
        fontWeight: FontWeight.semibold,
    } as TextStyle,
    primaryText: {
        color: Colors.background.primary,
    } as TextStyle,
    secondaryText: {
        color: Colors.background.primary,
    } as TextStyle,
    ghostText: {
        color: Colors.primary.main,
    } as TextStyle,
    outlineText: {
        color: Colors.primary.main,
    } as TextStyle,
});