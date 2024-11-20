import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView, // Wrap content inside ScrollView to make it scrollable
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const { width } = Dimensions.get('window');

const HashtagScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  const cities = [
    'New York',
    'San Francisco',
    'Seattle',
    'San Diego',
    'Chicago',
    'Boston',
    'Dallas',
    'Los Angeles',
    'Miami',
    'Austin',
  ];

  const sampleTopics = [
    'Design',
    'Business',
    'Health & Wellness',
    'Entertainment',
  ];

  const trendingHashtags = [
    { id: '1', hashtag: '#ReactNative', score: 9 },
    { id: '2', hashtag: '#JavaScript', score: 10 },
    { id: '3', hashtag: '#NodeJS', score: 8 },
    { id: '4', hashtag: '#WebDevelopment', score: 7 },
    { id: '5', hashtag: '#Coding', score: 9 },
  ];

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = cities.filter((city) =>
      city.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const renderTrendingHashtags = ({ item }) => (
    <View style={styles.hashtagRow}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.hashtagText}>{item.hashtag}</Text>
      <Text style={styles.scoreText}>{item.score}/10</Text>
    </View>
  );

  const renderSampleTopics = ({ item }) => (
    <View style={styles.sampleTopicContainer}>
      <Text style={styles.sampleTopicText}>• {item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Search Box */}
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={20}
            color="#fff"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search for a city or topic"
            placeholderTextColor="#ddd"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>

        {/* Sample Topics (Bullet points) */}
        {searchText === '' && (
          <View style={styles.sampleTopicsContainer}>
            <Text style={styles.sampleTopicsTitle}>Sample Topics:</Text>
            <FlatList
              data={sampleTopics}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderSampleTopics}
            />
          </View>
        )}

        {/* Search Results */}
        {searchText !== '' && (
          <View style={styles.resultsContainer}>
            <FlatList
              data={filteredCities}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.resultItem}>
                  <Text style={styles.resultText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        {/* Trending Hashtags */}
        <View style={styles.trendingContainer}>
          <Text style={styles.sectionTitle}>
            Trending Hashtags{' '}
            <Ionicons
              name="trending-up"
              size={30}
              color="#000"
              style={styles.icon}
            />
          </Text>
          <FlatList
            data={trendingHashtags}
            keyExtractor={(item) => item.id}
            renderItem={renderTrendingHashtags}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 10,
    marginBottom: 20,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  sampleTopicsContainer: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  sampleTopicsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sampleTopicContainer: {
    paddingVertical: 5,
  },
  sampleTopicText: {
    fontSize: 16,
    color: '#333',
  },
  resultsContainer: {
    marginBottom: 20,
  },
  resultItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  trendingContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hashtagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bullet: {
    fontSize: 20,
    color: '#000',
    marginRight: 10,
  },
  hashtagText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  scoreText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 8,
  },
});

export default HashtagScreen;
