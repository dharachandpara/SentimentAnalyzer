import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import { FaUserAlt } from 'react-icons/fa';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Submit clicked');
        navigation.navigate('HomeScreen');

  };

  const handleCreateAccount = () => {
    navigation.navigate('SignupScreen');
  };

    const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back to ABC</Text>

      <Image source={require('../assets/LOGO.png')} style={styles.logo} />

      <TextBox
        placeholder="Username or Email"
        value={username}
        onChangeText={setUsername}
      />
      <TextBox
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText} onPress ={
          handleForgotPassword
        }>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Don't Have an Account..?</Text>

      {/* Create Account Button with an Icon */}
      <Button title="Create Account" onPress={handleCreateAccount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#6ddf53',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  orText: {
    fontSize: 16,
    color: '#000',
    marginVertical: 3,
  },
  forgotPassword: {
    marginTop: 5,
  },
  forgotPasswordText: {
    color: '#000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
