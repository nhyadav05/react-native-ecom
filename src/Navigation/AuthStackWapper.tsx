// AuthStackWrapper.tsx

import React from 'react';
import AuthStackNavigator from './AuthStackNavigator';

interface AuthStackWrapperProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const AuthStackWrapper: React.FC<AuthStackWrapperProps> = ({ setIsLoggedIn }) => {
  return <AuthStackNavigator setIsLoggedIn={setIsLoggedIn} />;
};

export default AuthStackWrapper;
