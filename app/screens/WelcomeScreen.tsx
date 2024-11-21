import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>WelcomeScreen</Text>
      <Button onPress={() => navigation.navigate("ContactScreen")}>
        To Contact Screen
      </Button>
      <Button onPress={() => navigation.navigate("ProfileScreen")}>
        To Profile
      </Button>
      <Button onPress={() => navigation.navigate("LogInScreen")}>
        To Login
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
};

export default WelcomeScreen;
