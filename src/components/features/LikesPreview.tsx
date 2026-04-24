import React, { useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageStyle,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { LikeableItem } from '../../types/project';

interface LikesPreviewProps {
  items: LikeableItem[];
  onLike?: (itemId: string, isLiked: boolean) => void;
}

interface LikeableCardProps {
  item: LikeableItem;
  onLike: (itemId: string, isLiked: boolean) => void;
}

const LikeableCard: React.FC<LikeableCardProps> = ({ item, onLike }) => {
  const [isLiked, setIsLiked] = useState(item.isLiked);
  const [likesCount, setLikesCount] = useState(item.likes);
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const animateLike = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.3,
        duration: 150,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleLike = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    setLikesCount(newIsLiked ? likesCount + 1 : likesCount - 1);
    animateLike();
    onLike(item.id, newIsLiked);
  };

  return (
    <View style={styles.card}>
      <Image 
        source={typeof item.image === 'string' 
          ? { uri: item.image } 
          : item.image} 
        style={styles.cardImage} 
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <TouchableOpacity
          style={styles.likeButton}
          onPress={handleLike}
          activeOpacity={0.8}
        >
          <Animated.View style={[styles.heartContainer, { transform: [{ scale: scaleAnim }] }]}>
            <Text style={styles.heartIcon}>{isLiked ? '❤️' : '🤍'}</Text>
          </Animated.View>
          <Text style={[styles.likeCount, isLiked && styles.likedCount]}>
            {likesCount}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const LikesPreview: React.FC<LikesPreviewProps> = ({ items, onLike }) => {
  const handleLike = (itemId: string, isLiked: boolean) => {
    if (onLike) {
      onLike(itemId, isLiked);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Système de Likes</Text>
      <Text style={styles.subtitle}>
        Like tes plats préférés en un clic
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {items.map((item) => (
          <LikeableCard
            key={item.id}
            item={item}
            onLike={handleLike}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f172a',
    paddingVertical: 16,
  } as ViewStyle,
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 4,
  } as TextStyle,
  subtitle: {
    color: '#94a3b8',
    fontSize: 14,
    paddingHorizontal: 20,
    marginBottom: 16,
  } as TextStyle,
  scrollContent: {
    paddingHorizontal: 16,
    gap: 16,
  } as ViewStyle,
  card: {
    width: 160,
    backgroundColor: '#1e293b',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#334155',
  } as ViewStyle,
  cardImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#334155',
  } as ImageStyle,
  cardContent: {
    padding: 12,
    alignItems: 'center',
  } as ViewStyle,
  cardTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
    minHeight: 36,
  } as TextStyle,
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#334155',
    borderRadius: 20,
  } as ViewStyle,
  heartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  heartIcon: {
    fontSize: 20,
  } as TextStyle,
  likeCount: {
    color: '#94a3b8',
    fontSize: 14,
    fontWeight: '600',
  } as TextStyle,
  likedCount: {
    color: '#f43f5e',
  } as TextStyle,
});