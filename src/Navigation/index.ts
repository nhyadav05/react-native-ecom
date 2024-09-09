import React, { useEffect, useState } from 'react';
import MainNavigation from './MainNavigation';
import AuthStackNavigator from './AuthStackNavigator';
import Splash from '../screen/SplashScreen/Splash';

const Route: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Replace with your actual logic

  useEffect(() => {
    const loadApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    loadApp();
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return isLoggedIn ? (
    <MainNavigation />
  ) : (
    <AuthStackNavigator setIsLoggedIn={setIsLoggedIn} />
  );
}
export default Route;