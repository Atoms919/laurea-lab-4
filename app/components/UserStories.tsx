import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const UserStories = () => {
  return (
    <View style={styles.storiesContainer}>
      <View style={styles.story}>
        <View
          style={{
            borderRadius: 38,
            borderWidth: 4,
            padding: 1,
            borderColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Image
            source={{
              uri: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
            }}
            style={styles.storiesImage}
          />
        </View>
        <Text style={{ fontWeight: "bold" }}>2024</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderRadius: 38,
            borderWidth: 4,
            padding: 1,
            borderColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Image
            source={{
              uri: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
            }}
            style={styles.storiesImage}
          />
        </View>
        <Text style={{ fontWeight: "bold" }}>2023</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderRadius: 38,
            borderWidth: 4,
            padding: 1,
            borderColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Image
            source={{
              uri: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
            }}
            style={styles.storiesImage}
          />
        </View>
        <Text style={{ fontWeight: "bold" }}>My Life</Text>
      </View>
    </View>
  );
};

export default UserStories;

const styles = StyleSheet.create({
  storiesContainer: {
    paddingHorizontal: 30,
    width: 300,
    flexDirection: "row",
    gap: 30,
    marginVertical: 18,
  },
  story: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  storiesImage: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    padding: 10,
  },
});
