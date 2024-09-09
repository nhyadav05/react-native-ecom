import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchInput: React.FC<{ style?: object }> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 8, // Adjust padding for better appearance
  },
  input: {
    height: 40,
    fontSize: 16,
    width: '100%',
  },
});

export default SearchInput;
