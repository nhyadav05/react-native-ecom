// src/Navigation/MainNavigation.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen/HomeS';
import DrawerNavigation from './DrawerNavigation';

import AddressScreen from '../screen/CartScreen/Address/AddressScreen';
import AddAddressScreen from '../screen/CartScreen/AddAddress/AddAddressScreen';
import PaymentScreen from '../screen/CartScreen/Payment/PaymentScreen';
import SummaryScreen from '../screen/CartScreen/Summary/SummaryScreen';
import BottomTabNavigation from './BottomTabNavigation';
import { Cart } from '../screen';

const RootStack = createNativeStackNavigator();

const MainNavigation: React.FC = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
    {/* <RootStack.Screen name="Splash" component={Splash} /> */}
      <RootStack.Screen name="Drawer" component={DrawerNavigation} />
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="BottomTabNavigator" component={BottomTabNavigation} />

      {/* Uncomment these when needed */}
      <RootStack.Screen name="Cart" component={Cart} />
      <RootStack.Screen name="AddressScreen" component={AddressScreen} />
      <RootStack.Screen name="AddAddressScreen" component={AddAddressScreen} />
      <RootStack.Screen name="PaymentScreen" component={PaymentScreen} />
      <RootStack.Screen name="SummaryScreen" component={SummaryScreen} />
    </RootStack.Navigator>
  );
};

export default MainNavigation;
