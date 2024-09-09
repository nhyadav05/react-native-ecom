// src/components/Header.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import SearchInput from './SearchInput';

const Header: React.FC = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Text style={styles.iconText}>☰</Text>
      </TouchableOpacity>

        <Text style={styles.logoText}>Flipkart</Text>
      </View>

      {isSearchVisible && <SearchInput style={styles.searchInput} />}

      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setSearchVisible(!isSearchVisible)}
        >
          <Image source={require('../../assets/icons/search.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../assets/icons/shopping-cart.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#00529D',
    width: '100%',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 16,
  },
  searchInput: {
    flex: 1,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconButton: {
    padding: 8,
  },
  iconText: {
    fontSize: 24,
    color: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default Header;
