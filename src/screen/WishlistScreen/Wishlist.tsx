// src/screens/Wishlist.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Wishlist: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wishlist Screen</Text>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});