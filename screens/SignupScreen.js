import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../firebaseconfig'; // Import the auth object

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [instagramUsername, setInstagramUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            const userEmail = user.email;
            const subEmail = userEmail.match(/^(.*?)(?=@)/)[0];

            const path = "Users/" + subEmail;

            navigation.navigate("SignIn");
            Alert.alert("Sign Up Successful");
          })
          .catch((error) => {
            const errorMessage = error.message;
            Alert.alert("Error" + errorMessage);
          });

        console.log('Account created');
        navigation.navigate('LoginScreen')
  }; 

  const handleSignInRedirect = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextBox
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextBox
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextBox
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextBox
        placeholder="Instagram Username"
        value={instagramUsername}
        onChangeText={setInstagramUsername}
      />
      <TextBox
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Create Account" onPress={handleCreateAccount} />

      <Text style={styles.alreadyAccountText}>Already have an account?</Text>
      <TouchableOpacity onPress={handleSignInRedirect}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  alreadyAccountText: {
    marginTop: 15,
    fontSize: 14,
    color: '#000',
  },
  signInText: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
