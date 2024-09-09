import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Dimensions,
  Text,
} from 'react-native';

const splashblue = require('../../assets/ScreenImg/splashblue.png');
const welcome = require('../../assets/icons/welcome.png');

const Splash: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="transparent"
      />
      <Image source={splashblue} style={styles.splashblue} resizeMode="cover" />
      <View style={styles.overlay}>
        <Image source={welcome} style={styles.welcome} resizeMode="contain" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>
          Explore your next favorite destination.
        </Text>
        <Text style={styles.subtext}>We get you the best deals.</Text>
      </View>
    </View>
  );
};

export default Splash;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashblue: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcome: {
    width: '50%',
    height: '10%',
    marginTop: 150,
    padding: 40,
  },
  textContainer: {
    alignItems: 'center',
    color: 'white',
  },
  welcomeText: {
    color: '#00529D',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtext: {
    color: '#00529D',
    fontSize: width * 0.035,
    fontWeight: '500',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
});
