import { View, Text, TextInput, StyleSheet, Pressable, Dimensions } from "react-native";
import React, { useState } from "react";

// Responsive width logic
const SCREEN_WIDTH = Dimensions.get("window").width;
const COMPONENT_WIDTH = SCREEN_WIDTH > 500 ? 500 : SCREEN_WIDTH;

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [contactAddress, setContactAddress] = useState("");

  const sendMessage = () => {
    alert("Your message was sent! We'll contact you soon.");
    console.log(message, phone, contactAddress);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email Address"
        value={contactAddress}
        onChangeText={setContactAddress}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Pressable
        onPress={sendMessage}
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        disabled={phone === "" || message === "" || contactAddress === ""}
      >
        <Text style={styles.buttonText}>Send Message</Text>
      </Pressable>
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: COMPONENT_WIDTH,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
  messageInput: { height: 120, textAlignVertical: "top" },
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
