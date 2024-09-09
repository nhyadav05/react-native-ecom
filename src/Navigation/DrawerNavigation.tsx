// src/Navigation/DrawerNavigation.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import SideMenu from '../screen/components/SideMenu';

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <SideMenu {...props} />}
    >
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
