import React, { useState, useEffect } from "react";
import {
  TextInput,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
} from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, get, child, set, onValue } from "firebase/database";
import Flashcard from "./Flashcard";

const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const dbRef = ref(getDatabase());

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("./logo.png")} style={styles.logo} />
      <Text style={styles.title}>Gramalytics</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AdminSignIn")}
      >
        <Text style={styles.buttonText}>Admin Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function SignUp({ navigation }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userEmail = user.email;
        const subEmail = userEmail.match(/^(.*?)(?=@)/)[0];
        let trackLevel = {
          level: 0,
        };
        const path = "Users/" + subEmail;

        set(ref(getDatabase(), path), trackLevel);
        navigation.navigate("SignIn");
        Alert.alert("Sign Up Successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert("Error" + errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

function SignIn({ navigation }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userEmail = user.email;
        const subEmail = userEmail.match(/^(.*?)(?=@)/)[0];

        get(child(dbRef, `Users/${subEmail}`))
          .then((snapshot) => {
            let trackLevel = snapshot.val();
            navigation.navigate("SelectLanguage", {
              trackLevel: trackLevel,
              subEmail: subEmail,
            });
          })
          .catch((error) => {
            console.error("Error reading data:", error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert("Error" + errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

function AdminSignIn({ navigation }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        get(child(dbRef, `Requests/`))
          .then((snapshot) => {
            let requests = snapshot.val();
            navigation.navigate("Requests", {
              requests: requests
            });
          })
          .catch((error) => {
            console.error("Error reading data:", error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert("Error" + errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

function Requests({ navigation }) {

  const accept = async () => {
let request = {
                    request: "accept",
                  };
                  const path = "Requests/" + "user";

                  set(ref(getDatabase(), path), request);
                  Alert.alert("The user will be notified about the decision.");
  };

  const deny = async () => {
  let request = {
                      request: "deny",
                    };
                    const path = "Requests/" + "user";

                    set(ref(getDatabase(), path), request);
                    Alert.alert("The user will be notified about the decision.");
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Email: user@gmail.com</Text>
    <Text style={styles.title}>This user requested permission to access Premium Levels</Text>
      <TouchableOpacity style={styles.button} onPress={accept}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={deny}>
              <Text style={styles.buttonText}>Deny</Text>
            </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#c87449",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="AdminSignIn" component={AdminSignIn} />
        <Stack.Screen name="Requests" component={Requests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#c87449",
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#000",
    marginBottom: 10,
  },
  logo: {
    marginTop: 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7bf8eb",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  button: {
    marginVertical: 10,
    width: "80%",
    backgroundColor: "#c87449",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#000",
  },
  disabledButton: {
    backgroundColor: "#efd8cc",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  questionNumber: {
    fontSize: 20,
    marginBottom: 10,
    color: "black",
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
    color: "black",
  },
  optionsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e7c4b2",
    padding: 20,
  },
  optionButton: {
    marginVertical: 10,
    width: "80%",
    backgroundColor: "#efd8cc",
    padding: 10,
    borderRadius: 0,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  optionText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  completedContainer: {
    alignItems: "center",
  },
  completedText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "black",
  },
  scoreText: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
});

export default App;
