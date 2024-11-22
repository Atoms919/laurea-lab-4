import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import ContactForm from "../components/ContactForm";

const ContactScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ContactForm />
    </View>
  );
};

export default ContactScreen;
