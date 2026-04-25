/**
 * Types pour la navigation
 */

import type { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// ============================================
// ROOT STACK
// ============================================

export type RootStackParamList = {
    MainTabs: NavigatorScreenParams<MainTabParamList>;
    ProjectDetail: { id: string };
    Profile: undefined;
};

// ============================================
// MAIN TABS
// ============================================

export type MainTabParamList = {
    Home: undefined;
    Profile: undefined;
    Projects: undefined;
};

// ============================================
// PROJECT STACK
// ============================================

export type ProjectStackParamList = {
    ProjectList: undefined;
    ProjectDetail: { id: string };
};

// ============================================
// NAVIGATION HELPERS
// ============================================

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type MainTabNavigationProp = NativeStackNavigationProp<MainTabParamList>;
export type RootRouteProp = RouteProp<RootStackParamList>;
export type MainTabRouteProp = RouteProp<MainTabParamList>;