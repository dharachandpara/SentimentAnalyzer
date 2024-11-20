import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For search icon

const CreateScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  
  const defaultHashtags = [
    'ReactNative', 'JavaScript', 'NodeJS', 'WebDevelopment', 'UXDesign',
  ];

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = defaultHashtags.filter((hashtag) => hashtag.toLowerCase().includes(text.toLowerCase()));
    setFilteredSuggestions(filtered);
  };

  const renderHashtagItem = ({ item }) => (
    <TouchableOpacity style={styles.suggestionItem}>
      <Text style={styles.suggestionText}># {item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Box */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#FFF" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search for a topic"
          placeholderTextColor="#FFF" // White placeholder
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>

      {/* Display Suggestions if search is not empty */}
      {searchText !== '' && filteredSuggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsTitle}>Topic related to your search:</Text>
          <FlatList
            data={filteredSuggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderHashtagItem}
          />
        </View>
      )}

      {/* Default list of hashtags */}
      {searchText === '' && (
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsTitle}>Suggested Hashtags:</Text>
          <FlatList
            data={defaultHashtags}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderHashtagItem}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    fontFamily: 'Helvetica, Arial, sans-serif', // Use modern sans-serif font for professional feel
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', // Black background for the search box
    color: "#FFF", // White text color inside input
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 12,
    marginBottom: 24,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFF', // White text color inside input
    fontWeight: '500', // Regular font weight to maintain balance
  },
  suggestionsContainer: {
    marginTop: 10,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333', // Darker text for clear readability
    marginBottom: 12,
  },
  suggestionItem: {
    backgroundColor: '#F5F5F5', // Subtle light gray card-like background
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  suggestionText: {
    fontSize: 16,
    color: '#333', // Dark text color for readability
    fontWeight: '500', // Regular font weight for a professional look
  },
});

export default CreateScreen;
