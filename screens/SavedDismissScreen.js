import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const SavedDismissScreen = () => {
  const [items] = useState([
    {
      id: '1',
      image: 'https://via.placeholder.com/100',
      title: 'Saved Item 1',
      type: 'saved',
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/100',
      title: 'Saved Item 2',
      type: 'saved',
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/100',
      title: 'Saved Item 3',
      type: 'saved',
    },
    {
      id: '4',
      image: 'https://via.placeholder.com/100',
      title: 'Dismissed Item 1',
      type: 'dismissed',
    },
    {
      id: '5',
      image: 'https://via.placeholder.com/100',
      title: 'Dismissed Item 2',
      type: 'dismissed',
    },
  ]);

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.card,
        item.type === 'saved' ? styles.savedCard : styles.dismissedCard,
      ]}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );

  const savedItems = items.filter((item) => item.type === 'saved');
  const dismissedItems = items.filter((item) => item.type === 'dismissed');

  return (
    <ScrollView style={styles.container}>
      {/* Saved Items Section */}
      <Text style={styles.sectionTitle}>
        <Ionicons name="bookmark" size={30} color="#000" style={styles.icon} />
        Saved
      </Text>
      <FlatList
        data={savedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Dismissed Items Section */}
      <Text style={styles.sectionTitle}>
        <Ionicons name="trash" size={30} color="#000" style={styles.icon} />
        Dismissed
      </Text>
      <FlatList
        data={dismissedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  listContainer: {
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  savedCard: {
    backgroundColor: '#70b8ff',
  },
  dismissedCard: {
    backgroundColor: '#ffcdd2',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SavedDismissScreen;
