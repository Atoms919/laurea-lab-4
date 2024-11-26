import { View, Text, TextInput, StyleSheet, Pressable, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

// Responsive width logic
const SCREEN_WIDTH = Dimensions.get("window").width;
const COMPONENT_WIDTH = SCREEN_WIDTH > 500 ? 500 : SCREEN_WIDTH;

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");
    navigation.navigate("WelcomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm password"
        secureTextEntry
      />
      <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
};

export default RegisterScreen;

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
