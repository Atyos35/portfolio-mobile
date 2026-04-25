import { Stack } from 'expo-router';
import React from 'react';
import ProjectDetailScreen from '../../src/screens/ProjectDetailScreen';

export default function ProjectDetailPage(): React.ReactElement {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <ProjectDetailScreen />
        </>
    );
}
