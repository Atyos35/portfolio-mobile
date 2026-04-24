import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valérian</Text>

      <Text style={styles.subtitle}>
        Mobile Developer Portfolio
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Go to projects')}
      >
        <Text style={styles.buttonText}>
          Voir mes projets
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 16,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
});