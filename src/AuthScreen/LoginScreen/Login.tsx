// src/LoginScreen/Login.tsx

import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  Alert,
} from 'react-native';

// Static assets
const google = require('../../assets/icons/google.png');
const facebook = require('../../assets/icons/facebook.png');
const twitter = require('../../assets/icons/twitter.png');
const linkedin = require('../../assets/icons/linkedin.png');
const eyeIcon = require('../../assets/icons/eye-icon.png');

interface LoginProps {
  navigation: any;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ navigation, setIsLoggedIn }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [click, setClick] = useState(false);

  const handleLogin = () => {
    // Replace with actual authentication logic
    setIsLoggedIn(true);
  };


  // Example of navigating from a nested navigator
const handleForgotPassword = () => {
  navigation.navigate('AuthStack', { screen: 'ForgotEmail' }); // Adjust based on your navigator structure
};


  return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/ScreenImg/login-illustration.png')}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>
            Welcome To Little Drop, where you manage your daily tasks
          </Text>
        </View>

        <View style={[styles.form]}>
          <TextInput
            style={[styles.input, styles.shadowProp]}
            placeholder="Email"
            value={email}
            onChangeText={text => {
              console.log('Email Input:', text);
              setEmail(text);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View
            style={[styles.input, styles.shadowProp, styles.passwordContainer]}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => {
                console.log('Password Input:', text);
                setPassword(text);
              }}
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image source={eyeIcon} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.forgotContainer}>
            <View style={styles.switch}>
              <Switch
                value={click}
                onValueChange={setClick}
                trackColor={{true: 'green', false: 'gray'}}
              />
              <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleForgotPassword()}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.button, styles.shadowProp]}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OR</Text>

          <TouchableOpacity
            style={[styles.button, styles.shadowProp]}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialLogin}>
          <Text style={styles.socialText}>Login with</Text>
          <View style={styles.icons}>
            <TouchableOpacity>
              <Image source={google} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={facebook} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={twitter} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={linkedin} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  form: {
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#00529D',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#666666',
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 14,
    marginLeft: 8,
  },
  linkText: {
    color: '#00529D',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#00529D',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#AAAAAA',
    marginBottom: 10,
  },
  socialLogin: {
    alignItems: 'center',
  },
  socialText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Adds shadow for Android
  },
});
