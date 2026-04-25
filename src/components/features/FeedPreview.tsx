import React, { useState } from 'react';
import {
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
import { FeedPost } from '../../types/project';
import { SocialFoodColors } from './socialFoodTheme';

interface FeedPreviewProps {
  posts: FeedPost[];
  onLike?: (postId: string) => void;
}

interface FeedPostCardProps {
  post: FeedPost;
  onLike: (postId: string) => void;
}

const FeedPostCard: React.FC<FeedPostCardProps> = ({ post, onLike }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked ?? false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    setLikesCount(newIsLiked ? likesCount + 1 : likesCount - 1);
    onLike(post.id);
  };

  return (
    <View style={styles.postCard}>
      {/* Header */}
      <View style={styles.postHeader}>
        <Image
          source={typeof post.userAvatar === 'string' 
            ? { uri: post.userAvatar } 
            : post.userAvatar}
          style={styles.userAvatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{post.userName}</Text>
          <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
      </View>

      {/* Content */}
      <Text style={styles.postContent}>{post.content}</Text>

      {/* Image */}
      {post.image && (
        <Image 
          source={typeof post.image === 'string' 
            ? { uri: post.image } 
            : post.image} 
          style={styles.postImage} 
        />
      )}

      {/* Actions */}
      <View style={styles.postActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleLike}
          activeOpacity={0.7}
        >
          <Text style={[styles.actionIcon, isLiked && styles.likedIcon]}>
            {isLiked ? '❤️' : '🤍'}
          </Text>
          <Text style={[styles.actionText, isLiked && styles.likedText]}>
            {likesCount}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionText}>{post.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
          <Text style={styles.actionIcon}>🔗</Text>
          <Text style={styles.actionText}>Partager</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const FeedPreview: React.FC<FeedPreviewProps> = ({ posts, onLike }) => {
  const handleLike = (postId: string) => {
    if (onLike) {
      onLike(postId);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed Social</Text>
      <Text style={styles.subtitle}>
        Découvre les dernières créations de la communauté
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {posts.map((post) => (
          <FeedPostCard
            key={post.id}
            post={post}
            onLike={handleLike}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SocialFoodColors.background.primary,
    paddingTop: 16,
    paddingBottom: 44, // Extra padding for Android navigation bar
  } as ViewStyle,
  title: {
    color: SocialFoodColors.text.primary,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 4,
  } as TextStyle,
  subtitle: {
    color: SocialFoodColors.text.secondary,
    fontSize: 14,
    paddingHorizontal: 20,
    marginBottom: 16,
  } as TextStyle,
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  } as ViewStyle,
  postCard: {
    backgroundColor: SocialFoodColors.background.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: SocialFoodColors.border.subtle,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  } as ViewStyle,
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  } as ViewStyle,
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: SocialFoodColors.background.secondary,
  } as ImageStyle,
  userInfo: {
    marginLeft: 12,
    flex: 1,
  } as ViewStyle,
  userName: {
    color: SocialFoodColors.text.primary,
    fontSize: 15,
    fontWeight: '600',
  } as TextStyle,
  timestamp: {
    color: SocialFoodColors.text.muted,
    fontSize: 12,
    marginTop: 2,
  } as TextStyle,
  postContent: {
    color: SocialFoodColors.text.secondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  } as TextStyle,
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: SocialFoodColors.background.secondary,
    marginBottom: 12,
  } as ImageStyle,
  postActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: SocialFoodColors.border.subtle,
    paddingTop: 12,
    gap: 16,
  } as ViewStyle,
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  } as ViewStyle,
  actionIcon: {
    fontSize: 18,
  } as TextStyle,
  likedIcon: {
    transform: [{ scale: 1.2 }],
  } as TextStyle,
  actionText: {
    color: SocialFoodColors.text.secondary,
    fontSize: 13,
    fontWeight: '500',
  } as TextStyle,
  likedText: {
    color: SocialFoodColors.interactive.liked,
    fontWeight: '600',
  } as TextStyle,
});
