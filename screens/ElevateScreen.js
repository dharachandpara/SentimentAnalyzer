import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ElevateScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cards Section */}
      <View style={styles.cardsContainer}>
        {/* First Card */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://via.placeholder.com/120' }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>• Bullet Point 1</Text>
            <Text style={styles.cardText}>• Bullet Point 2</Text>
            <Text style={styles.cardText}>• Bullet Point 3</Text>
          </View>
        </View>

        {/* Second Card */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://via.placeholder.com/120' }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>• Bullet Point 1</Text>
            <Text style={styles.cardText}>• Bullet Point 2</Text>
            <Text style={styles.cardText}>• Bullet Point 3</Text>
          </View>
        </View>
      </View>

      {/* Trending Topics Section */}
      <View style={styles.trendingSection}>
        <Text style={styles.sectionTitle}>
          Trending Topics
          <Ionicons
            name="trending-up"
            size={30}
            color="#000"
            style={{
              marginBottom: -50
            }}
          />
        </Text>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>
            Topic 1: Understanding React Native
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>
            Topic 2: Building Mobile Apps with Expo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>
            Topic 3: Best Practices in JavaScript
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>
            Topic 4: Advanced Redux Patterns
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#000',
    color: '#FFF',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  cardContent: {
    marginTop: 10,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 8,
  },
  trendingSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#000',
    color: '#FFF',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '600',
    flex: 1,
  },
});

export default ElevateScreen;
