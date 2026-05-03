import { useWindowDimensions } from 'react-native';

const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
};

export function useResponsiveLayout() {
  const { width } = useWindowDimensions();
  
  const isTablet = width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;
  const isDesktop = width >= BREAKPOINTS.desktop;
  const isLargeScreen = width >= BREAKPOINTS.tablet;
  const isMobile = width < BREAKPOINTS.tablet;
  
  // Container max widths for large screens
  const containerMaxWidth = isDesktop ? 800 : 600;
  
  // Button max widths for large screens
  const buttonMaxWidth = isDesktop ? 300 : 250;
  
  // Spacing adjustments for large screens
  const horizontalPadding = isDesktop ? 40 : 30;
  
  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
    isLargeScreen,
    containerMaxWidth,
    buttonMaxWidth,
    horizontalPadding,
    breakpoints: BREAKPOINTS,
  };
}