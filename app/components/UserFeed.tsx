import { StyleSheet, Dimensions, ScrollView, FlatList } from "react-native";
import UserPost from "./UserPost";
import type { Post } from "../types";
import StoriesHeader from "./StoriesHeader";
import React from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;

const COMPONENT_WIDTH = SCREEN_WIDTH > 500 ? 500 : SCREEN_WIDTH;

const mockPosts = [
  {
    id: 3,
    username: "travel_guru",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    postImage:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/Download-hd-nature-wallpaper-620x388.jpg",
    likes: 90,
    comments: 40,
    shares: 10,
    daysAgo: 1,
  },
  {
    id: 4,
    username: "foodie_fanatic",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    postImage:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Nature-Image-620x465.jpeg",
    likes: 120,
    comments: 50,
    shares: 12,
    daysAgo: 2,
  },
  {
    id: 5,
    username: "nature_lover",
    profilePic: "https://docs.material-tailwind.com/img/face-2.jpg",
    postImage:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Nature-Picture-Download-620x388.jpg",
    likes: 75,
    comments: 30,
    shares: 8,
    daysAgo: 4,
  },
  {
    id: 6,
    username: "tech_savvy",
    profilePic: "https://docs.material-tailwind.com/img/face-1.jpg",
    postImage:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/Photos-Images-HD-Nature-Wallpapers-620x349.jpg",
    likes: 60,
    comments: 25,
    shares: 6,
    daysAgo: 6,
  },
  {
    id: 7,
    username: "artist_at_heart",
    profilePic: "https://docs.material-tailwind.com/img/face-3.jpg",
    postImage:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-wallpapers-1080p-widescreen-nature-free-download-620x349.jpg",
    likes: 85,
    comments: 35,
    shares: 9,
    daysAgo: 1,
  },
  {
    id: 8,
    username: "pet_paradise",
    profilePic: "https://docs.material-tailwind.com/img/face-4.jpg",
    postImage:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Backgrounds-Nature-Wallpapers-620x349.jpg",
    likes: 50,
    comments: 22,
    shares: 4,
    daysAgo: 3,
  },
  {
    id: 9,
    username: "fitness_freak",
    profilePic: "https://docs.material-tailwind.com/img/face-5.jpg",
    postImage:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/Green-Free-Download-HD-Nature-Wallpapers-620x388.jpg",
    likes: 100,
    comments: 45,
    shares: 11,
    daysAgo: 7,
  },
  {
    id: 10,
    username: "fashionista",
    profilePic: "https://mui.com/static/images/avatar/3.jpg",
    postImage:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Download-HD-Nature-Wallpapers-Desktop-620x388.jpg",
    likes: 110,
    comments: 55,
    shares: 14,
    daysAgo: 2,
  },
];

const UserFeed = () => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={mockPosts.sort((a, b) => a.daysAgo - b.daysAgo)}
        renderItem={({ item }: { item: Post }) => <UserPost post={item} />}
        keyExtractor={(post) => post.id.toString()}
        numColumns={1}
        scrollEnabled={false}
        ListHeaderComponent={StoriesHeader}
      />
    </ScrollView>
  );
};

export default UserFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: COMPONENT_WIDTH,
  },
});
