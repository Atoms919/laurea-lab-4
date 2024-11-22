import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";

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
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.8 },
          (phone === "" || message === "" || contactAddress === "") && {
            backgroundColor: "grey",
          },
        ]}
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
    padding: 20,
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  input: {
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
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
