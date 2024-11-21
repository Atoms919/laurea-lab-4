import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Us</Text>
      <Text>Email: contact@glimpseapp.com</Text>
      <Text>Phone: +123 456 7890</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ContactPage;