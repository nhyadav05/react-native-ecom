// src/components/CategoryCard.tsx
import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface CategoryCardProps {
  name: string;
  image: any; // Replace with appropriate type for images
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CategoryCard;