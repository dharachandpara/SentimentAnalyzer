import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    console.log('Navigating to: ', screenName);
    navigation.navigate(screenName);
  };

  const boxItems = [
    { id: 1, label: 'Launch', screen: 'LaunchScreen', icon: 'rocket' },
    {
      id: 2,
      label: 'Elevate',
      screen: 'ElevateScreen',
      icon: 'arrow-up-circle',
    },
    { id: 3, label: 'Hashtag', screen: 'HashScreen', icon: 'hashtag' },
    { id: 4, label: 'Create', screen: 'CreateScreen', icon: 'create' },
    { id: 5, label: 'AI', screen: 'AIScreen', icon: 'brain' }, 
    { id: 6, label: 'Dashboard', screen: 'DashboardScreen', icon: 'bar-chart' },
  ];

  return (
    <View style={styles.container}>
      {boxItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.box}
          onPress={() => navigateToScreen(item.screen)}>
          <Ionicons
            name={item.icon}
            size={60}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.boxText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  box: {
    width: '45%', 
    aspectRatio: 1, 
    backgroundColor: '#000', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 15, 
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25, 
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, 
    transition: 'all 0.3s', 
    padding: 10,
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', 
    marginTop: 10, 
  },
  icon: {
    marginBottom: 10, 
  },
});

export default HomeScreen;
