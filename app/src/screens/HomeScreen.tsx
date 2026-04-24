import type { FC } from 'react';
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

interface HomeScreenProps {
  navigation?: any;
}

const HomeScreen: FC<HomeScreenProps> = () => {
  const containerStyle: ViewStyle = {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
    justifyContent: 'center',
  };

  const titleStyle: TextStyle = {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  };

  const subtitleStyle: TextStyle = {
    color: '#94a3b8',
    fontSize: 16,
    marginBottom: 40,
  };

  const buttonStyle: ViewStyle = {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 12,
  };

  const buttonTextStyle: TextStyle = {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  };

  const handleProjectsPress = (): void => {
    console.log('Go to projects');
  };

  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Valérian</Text>
      <Text style={subtitleStyle}>Mobile Developer Portfolio</Text>
      <TouchableOpacity style={buttonStyle} onPress={handleProjectsPress}>
        <Text style={buttonTextStyle}>Voir mes projets</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
