import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const mockStories = [
  {
    id: 1,
    username: "foodie_fanatic",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 2,
    username: "john_doe",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  },
  {
    id: 3,
    username: "travel_guru",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  },
];

const StoriesHeader = () => {
  return (
    <View style={styles.container}>
      {mockStories.map((story) => (
        <View style={styles.story} key={story.id}>
          <View style={styles.storyBorder}>
            <Image
              style={styles.storyImage}
              source={{ uri: story.profilePic }}
            />
          </View>
          <Text>{story.username}</Text>
        </View>
      ))}
    </View>
  );
};

export default StoriesHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    gap: 6,
    marginLeft: 10,
  },
  story: { justifyContent: "center", alignItems: "center" },
  storyImage: { width: 65, height: 65, borderRadius: 32.5, padding: 10 },
  storyBorder: {
    borderRadius: 38,
    borderWidth: 4,
    padding: 1,
    borderColor: "rgba(245, 40, 145, 0.8)",
  },
});
