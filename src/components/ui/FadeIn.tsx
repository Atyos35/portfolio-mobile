import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Animated, {
    FadeInUp
} from 'react-native-reanimated';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    style?: ViewStyle;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    duration = 300,
    style,
}): React.ReactElement => {
    return (
        <Animated.View
            entering={FadeInUp.duration(duration).delay(delay)}
            style={[styles.container, style]}
        >
            {children}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {},
});