import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  ScrollView, // Wrap in ScrollView to make screen scrollable
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AIScreen = () => {
  const [query, setQuery] = useState('');
  const [suggestedActions] = useState([
    'Track my order',
    'Get latest updates',
    'Help with account settings',
    'Find nearby locations',
    'Report an issue',
  ]);

  const handleQueryChange = (text) => {
    setQuery(text);
  };

  const renderSuggestedAction = ({ item }) => (
    <View style={styles.suggestionItem}>
      <Text style={styles.suggestionText}>• {item}</Text>
    </View>
  );

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Centered View */}
        <View style={styles.centeredView}>
          <View style={styles.messageBox}>
            <Ionicons
              name="chatbox-ellipses"
              size={40}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.helpText}>What can I help you with?</Text>
          </View>

          {/* Suggested Actions List */}
          <View style={styles.suggestionsContainer}>
            <Text style={styles.suggestionsTitle}>Suggested actions:</Text>
            <FlatList
              data={suggestedActions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderSuggestedAction}
            />
          </View>
        </View>
      </ScrollView>

      {/* Input Box for User Query (Outside ScrollView) */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your query"
          placeholderTextColor="#bbb"
          value={query}
          onChangeText={handleQueryChange}
        />
        <Ionicons
          name="arrow-up-circle"
          size={24}
          color="#fff"
          style={styles.arrowIcon}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '22%',
  },
  messageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 15,
  },
  helpText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  suggestionsContainer: {
    marginTop: 15,
    width: '100%',
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  suggestionItem: {
    paddingVertical: 12,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  suggestionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    marginBottom: 40, // To ensure space above the input box
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 40,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#000',
  },
  arrowIcon: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
});

export default AIScreen;
