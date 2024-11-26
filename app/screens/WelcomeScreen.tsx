import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { useEffect } from "react";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Glimpse!</Text>
      <Button onPress={() => navigation.navigate("ContactScreen")}>
        To Contact Screen
      </Button>
      <Button onPress={() => navigation.navigate("ProfileScreen")}>
        To Profile
      </Button>
      <Button onPress={() => navigation.navigate("LogInScreen")}>
        To Login
      </Button>
      <Button onPress={() => navigation.navigate("RegisterScreen")}>
        To Register
      </Button>
      <Button onPress={() => navigation.navigate("UserFeedScreen")}>
        To User Feed
      </Button>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
