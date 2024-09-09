// src/Navigation/AuthStackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../AuthScreen/LoginScreen/Login';
import Signup from '../AuthScreen/SignUpScreen/Signup';
import ForgotEmail from '../AuthScreen/ForgotEmailScreen/ForgotEmail';
import { AuthStackParamList } from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator: React.FC<{ setIsLoggedIn: (isLoggedIn: boolean) => void }> = ({ setIsLoggedIn }) => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login">
        {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ForgotEmail" component={ForgotEmail} />
    </AuthStack.Navigator>
  );
};
export default AuthStackNavigator;