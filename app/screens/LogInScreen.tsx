import { View, Text, TextInput, StyleSheet, Pressable, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase"; // Firebase imports
import { query, where, getDocs, collection } from "firebase/firestore"; // Firestore query functions

// Responsive width logic
const SCREEN_WIDTH = Dimensions.get("window").width;
const COMPONENT_WIDTH = SCREEN_WIDTH > 500 ? 500 : SCREEN_WIDTH;

const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailOrUsername, setEmailOrUsername] = useState(""); // This field will handle both email and username
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!emailOrUsername || !password) {
      alert("Please fill out both fields.");
      return;
    }

    try {
      let userEmail = "";

      // Check if the input is an email or a username
      if (emailOrUsername.includes("@")) {
        // It's an email, proceed with login using email directly
        userEmail = emailOrUsername;
      } else {
        // It's a username, search Firestore for the email associated with this username
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", emailOrUsername));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          alert("Username not found.");
          return;
        }

        // Get the email from the Firestore document
        const userDoc = querySnapshot.docs[0];
        userEmail = userDoc.data().email;
      }

      // Now use the found email to sign in
      await signInWithEmailAndPassword(auth, userEmail, password);

      alert("Login successful!");
      navigation.navigate("WelcomeScreen"); // Navigate to another screen after successful login
    } catch (error: any) {
      alert("Error logging in: " + error.message); // Show error message if login fails
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email or Username</Text>
      <TextInput
        style={styles.input}
        value={emailOrUsername}
        onChangeText={setEmailOrUsername}
        placeholder="Enter email or username"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: COMPONENT_WIDTH,
    marginHorizontal: "auto",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
    width: "80%",
  },
  input: {
    width: "80%",
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
