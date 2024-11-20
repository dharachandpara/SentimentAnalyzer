import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';

const { width } = Dimensions.get('window');

const LaunchScreen = ({ navigation }) => {
  const saveDiscardPage = () => {
    navigation.navigate('SavedDismissScreen');
  };

  const originalCards = [
    { id: '1', image: 'https://via.placeholder.com/250' },
    { id: '2', image: 'https://via.placeholder.com/250' },
    { id: '3', image: 'https://via.placeholder.com/250' },
  ];

  const [cards, setCards] = useState(originalCards);

  const handleCardSwiped = (cardIndex) => {
    const updatedCards = [...cards];
    const swipedCard = updatedCards.splice(cardIndex, 1);
    updatedCards.push(swipedCard[0]);
    setCards(updatedCards);

    if (updatedCards.length === 0) {
      setCards(originalCards);
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={() => console.log(`Card ${card.id} saved`)}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.discardButton]}
                onPress={() => console.log(`Card ${card.id} discarded`)}>
                <Text style={styles.buttonText}>Discard</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        onSwiped={handleCardSwiped}
        onSwipedRight={(cardIndex) =>
          console.log(`Card ${cardIndex + 1} saved`)
        }
        onSwipedLeft={(cardIndex) =>
          console.log(`Card ${cardIndex + 1} discarded`)
        }
        cardIndex={0}
        backgroundColor="transparent"
        stackSize={3}
        verticalSwipe={false}
        horizontalSwipe={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <Text
        style={{
          fontSize: 16,
          color: '#000',
          marginTop: 150,

        }}>
        Swipe Left or Right
      </Text>

      {/* Save and Discard Buttons at the bottom */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={() => {
            console.log('Save clicked');
            saveDiscardPage();
          }}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.discardButton]}
          onPress={() => {
            console.log('Discard clicked');
            saveDiscardPage();
          }}>
          <Text style={styles.buttonText}>Discard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 10,
    width: width * 0.8,
    height: 350,
    justifyContent: 'center',
  },
  cardImage: {
    width: 250,
    height: 250,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#003366',
    flex: 1,
    marginRight: 10,
  },
  discardButton: {
    backgroundColor: '#ff3d51',
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LaunchScreen;
