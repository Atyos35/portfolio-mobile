import { StyleSheet } from 'react-native';

export const projectsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 20,
  },
  header: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  scrollView: {
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#0f172a',
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  viewMore: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '600',
  },
});