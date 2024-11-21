import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const LogInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button onPress={() => navigation.navigate("WelcomeScreen")}>
        To Welcome Screen
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
};

export default LogInScreen;
