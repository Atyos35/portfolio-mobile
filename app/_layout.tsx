import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {
    const colorScheme = useColorScheme();

    const customDarkTheme = useMemo(
        () => ({
            ...DarkTheme,
            colors: {
                ...DarkTheme.colors,
                primary: '#6366f1',
                background: '#0a0a0a',
                card: '#161616',
                text: '#ffffff',
                border: '#27272a',
                notification: '#6366f1',
            },
        }),
        []
    );

    return (
        <ThemeProvider value={colorScheme === 'dark' ? customDarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
            </Stack>
            <StatusBar style="light" />
        </ThemeProvider>
    );
}