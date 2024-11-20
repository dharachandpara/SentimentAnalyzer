import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import LaunchScreen from '../screens/LaunchScreen';
import ElevateScreen from '../screens/ElevateScreen';
import HashScreen from '../screens/HashScreen';
import CreateScreen from '../screens/CreateScreen';
import AIScreen from '../screens/AIScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SavedDismissScreen from '../screens/SavedDismissScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword';

import { MaterialIcons } from '@expo/vector-icons'; // Icon library for Hamburger icon
import { useNavigation } from '@react-navigation/native';

// Create Stack and Drawer Navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HamburgerMenuIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={{ marginRight: 10 }}>
      <MaterialIcons name="menu" size={30} color="black" />
    </TouchableOpacity>
  );
};

const DrawerMenu = () => (
  <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 40 }}>
    <TouchableOpacity style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Dashboard</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Rate Us</Text>
    </TouchableOpacity>
  </View>
);

const LoginScreenWithHamburge = ({ navigation }) => (
  <LoginScreen navigation={navigation} />
);

const SignupScreenWithHamburger = ({ navigation }) => (
  <SignupScreen navigation={navigation} />
);

const SaveDiscardScreenWithHamburger = ({ navigation }) => (
  <SavedDismissScreen navigation={navigation} />
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="LaunchScreen"
        drawerContent={DrawerMenu}
        drawerType="slide"
        drawerPosition="right"
        drawerStyle={{ width: 250 }}>
        {/* Login Screen */}
        <Drawer.Screen
          name="LoginScreen"
          component={LoginScreenWithHamburge}
          options={{
            headerLeft: () => (
              <Image
                source={require('../assets/LOGO.png')}
                style={{ width: 0, height: 0, marginLeft: 10 }}
              />
            ),
            headerRight: () => <HamburgerMenuIcon />,
          }}
        />
        {/* Signup Screen */}
        <Drawer.Screen
          name="SignupScreen"
          component={SignupScreenWithHamburger}
          options={{
            title: 'Sign Up',
            headerLeft: () => (
              <Image
                source={require('../assets/LOGO.png')}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            ),
            headerRight: () => <HamburgerMenuIcon />,
          }}
        />
        {/* Home Screen */}
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerLeft: () => (
              <Image
                source={require('../assets/LOGO.png')}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            ),
            headerRight: () => <HamburgerMenuIcon />,
          }}
        />

        <Drawer.Screen
          name="LaunchScreen"
          component={LaunchScreen}
          options={{
            title: 'Launch',
            headerLeft: () => (
              <Image
                source={require('../assets/LOGO.png')}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            ),
            headerRight: () => <HamburgerMenuIcon />,
          }}
        />

        <Drawer.Screen
          name="ElevateScreen"
          component={ElevateScreen}
          options={{
            title: 'Elevate',
            headerLeft: () => (
              <Image
                source={require('../assets/LOGO.png')}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            ),
            headerRight: () => <HamburgerMenuIcon />,
          }}
        />

        <Drawer.Screen
          name="HashScreen"
          component={HashScreen}
          options={{
            title: 'Hash',
            headerLeft: () => (
              <Image
                source={require('../assets/LOGO.png')}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            ),
            headerRight: () => <HamburgerMenuIcon />,
          }}
        />

        <Drawer.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={{
            title: 'Create',
            headerLeft: () => (
              <Image
                source={require('../assets/LOGO.png')}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            ),
            headerRight: () => <HamburgerMenuIcon />,
          }}
        />

        <Drawer.Screen
          name="AIScreen"
          component={AIScreen}
          options={{
            title: 'AI',
            headerLeft: () => (
              <Image
                source={require('../assets/LOGO.png')}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            ),
            headerRight: () => <HamburgerMenuIcon />,
          }}
        />

        <Drawer.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            title: 'Dashboard',
            headerLeft: () => (
              <Image
                source={require('../assets/LOGO.png')}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            ),
            headerRight: () => <HamburgerMenuIcon />,
          }}
        />

        <Drawer.Screen
          name="SavedDismissScreen"
          component={SaveDiscardScreenWithHamburger}
          options={{
            title: 'Save & Dismiss',
            headerLeft: () => (
              <Image
                source={require('../assets/LOGO.png')}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            ),
            headerRight: () => <HamburgerMenuIcon />,
          }}
        />

        <Drawer.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
