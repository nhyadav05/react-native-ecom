// src/Navigation/types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Splash: undefined; // No parameters
  Login: undefined;  // No parameters
  Signup: undefined; // No parameters
  ForgotEmail: undefined; // No parameters
};

export type AuthStackNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export type RootStackParamList = {
  AuthStack: undefined;
  Main: undefined;
  Drawer: undefined;
  HomeScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Category: undefined;
  Cart: undefined;
  Wishlist: undefined;
  Profile: undefined;
};
