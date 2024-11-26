import { View, StyleSheet } from "react-native";
import React from "react";
import ContactForm from "../components/ContactForm";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <ContactForm />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center", // Centers content horizontally
    justifyContent: "center", // Centers content vertically if needed
  },
});
