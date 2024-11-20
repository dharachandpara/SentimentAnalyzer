import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import TextBox from '../components/TextBox'; // Assuming you have this component
import Button from '../components/Button'; // Assuming you have this component

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSendOTP = () => {
    // Simulate OTP sending process
    console.log('Send OTP clicked');
    setModalVisible(true);
  };

  const handleCloseDialog = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <TextBox
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Send OTP" onPress={handleSendOTP} />

      {/* Success Dialog */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={handleCloseDialog}>
        <View style={styles.modalOverlay}>
          <View style={styles.dialogContainer}>
            <Image
              source={require('../assets/LOGO.png')} // Assuming you have a logo image
              style={styles.dialogLogo}
            />
            <Text style={styles.dialogText}>
              We have successfully sent the reset password link to your email.
            </Text>
            <Button title="Close" onPress={handleCloseDialog} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  dialogText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ForgotPasswordScreen;
