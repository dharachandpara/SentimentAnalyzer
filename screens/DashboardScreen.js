import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Logout Button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 5,
          right: 10,
          backgroundColor: '#000',
          padding: 15,
          borderRadius: 50,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 4,
        }}>
        <Ionicons name="log-out-outline" size={35} color="#fff" />
      </TouchableOpacity>

      {/* Account Details Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          <Ionicons
            name="person-outline"
            size={28}
            color="#000"
            style={styles.icon}
          />
          Account Details
        </Text>
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-outline" size={22} color="#fff" />
          </View>
          <Text style={styles.optionText}>Username</Text>
          <Ionicons name="chevron-forward-outline" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="mail-outline" size={22} color="#fff" />
          </View>
          <Text style={styles.optionText}>user@example.com</Text>
          <Ionicons name="chevron-forward-outline" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="logo-instagram" size={22} color="#fff" />
          </View>
          <Text style={styles.optionText}>@user_insta</Text>
          <Ionicons name="chevron-forward-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Management Section */}
      <View style={{ marginTop: 20, marginBottom: 70, paddingBottom: 20 }}>
        <Text style={styles.sectionTitle}>
          <Ionicons
            name="settings-outline"
            size={28}
            color="#000"
            style={styles.icon}
          />
          Management
        </Text>
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="link-outline" size={22} color="#fff" />
          </View>
          <Text style={styles.optionText}>Disconnect Account</Text>
          <Ionicons name="chevron-forward-outline" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="add-circle-outline" size={22} color="#fff" />
          </View>
          <Text style={styles.optionText}>New Account</Text>
          <Ionicons name="chevron-forward-outline" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="key-outline" size={22} color="#fff" />
          </View>
          <Text style={styles.optionText}>Change Password</Text>
          <Ionicons name="chevron-forward-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Settings Button */}
      <TouchableOpacity style={styles.settingsButton}>
        <Ionicons name="settings-outline" size={35} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  sectionContainer: {
    marginTop: 80,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#e3e3e3',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  iconContainer: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginRight: 15,
  },
  optionText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    flex: 1,
  },
  settingsButton: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    marginBottom: 10,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
});

export default Dashboard;
