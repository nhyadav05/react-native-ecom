import "react-native-gesture-handler";
import React from "react";
import { enableScreens } from "react-native-screens";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/Navigation/MainNavigation";


enableScreens();

const App: React.FC = () => {
  console.log("Rendering App");

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;

// import 'react-native-gesture-handler';
// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import { enableScreens } from 'react-native-screens';
// import Route from './src/Navigation'; // This should be your main route logic
// import MainNavigation from './src/Navigation/MainNavigation';
// import AuthStackNavigator from './src/Navigation/AuthStack';
// import { NavigationContainer } from '@react-navigation/native';

// enableScreens();

// const App: React.FC = () => {
//   console.log('Rendering App');

//   return (

// <SafeAreaView>
//     <MainNavigation/>
// </SafeAreaView>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
