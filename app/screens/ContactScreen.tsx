import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import type { ContactScreenProps } from "../types";

const ContactScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ContactScreen</Text>
      <Button onPress={() => navigation.navigate("WelcomeScreen")}>
        To Welcome Screen
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
};

export default ContactScreen;
