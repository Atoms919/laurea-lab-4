import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Responsive width logic
const SCREEN_WIDTH = Dimensions.get("window").width;
const COMPONENT_WIDTH = SCREEN_WIDTH > 500 ? 500 : SCREEN_WIDTH;

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Glimpse!</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        onPress={() => navigation.navigate("ContactScreen")}
      >
        <Text style={styles.buttonText}>To Contact Screen</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Text style={styles.buttonText}>To Profile</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        onPress={() => navigation.navigate("LogInScreen")}
      >
        <Text style={styles.buttonText}>To Login</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={styles.buttonText}>To Register</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        onPress={() => navigation.navigate("UserFeedScreen")}
      >
        <Text style={styles.buttonText}>To User Feed</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: COMPONENT_WIDTH, // Constrain the layout to COMPONENT_WIDTH
    marginHorizontal: "auto", // Center layout horizontally
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center", // Ensures proper alignment for all screen sizes
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    width: "80%", // Responsive button width relative to COMPONENT_WIDTH
    maxWidth: 300, // Optional: cap the button width for very large screens
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
