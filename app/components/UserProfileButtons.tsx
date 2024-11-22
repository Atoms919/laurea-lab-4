import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const UserProfileButtons = () => {
  return (
    <View style={styles.profileButtons}>
      <Pressable
        style={styles.button}
        onPress={() => alert("Editing profile...")}
      >
        <Text style={styles.buttonText}>Edit profile</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => alert("Sharing profile...")}
      >
        <Text style={styles.buttonText}>Share profile</Text>
      </Pressable>
    </View>
  );
};

export default UserProfileButtons;

const styles = StyleSheet.create({
  profileButtons: {
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    marginVertical: 10,
    gap: 4,
  },
  button: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
  },
  buttonText: { color: "white", fontWeight: "bold", textAlign: "center" },
});
