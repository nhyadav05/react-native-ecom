// src/Navigation/BottomTabNavigation.tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Wishlist from '../screen/WishlistScreen/Wishlist';
import Profile from '../screen/ProfileScreen/Profile';
import { Cart, Category } from '../screen';
import HomeScreen from '../screen/HomeScreen/HomeS';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarActiveTintColor: '#FFC300',
        tabBarInactiveTintColor: '#4d4d4d',
        tabBarIcon: ({ focused }) => {
          let icon;
          switch (route.name) {
            case 'Home':
              icon = '🏠';
              break;
            case 'Category':
              icon = '🛍️';
              break;
            case 'Cart':
              icon = '🛒';
              break;
            case 'Wishlist':
              icon = '❤️';
              break;
            case 'Profile':
              icon = '👤';
              break;
          }
          return (
            <Text style={[styles.icon, { color: focused ? '#FFC300' : '#4d4d4d' }]}>
              {icon}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 65,
    paddingBottom: 10,
    backgroundColor: 'white',
    position: 'absolute',
  },
  tabBarLabelStyle: {
    fontSize: 12,
    marginBottom: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  tabBarIconStyle: {
    marginBottom: -5,
  },
  icon: {
    fontSize: 24,
  },
});
export default BottomTabNavigation;