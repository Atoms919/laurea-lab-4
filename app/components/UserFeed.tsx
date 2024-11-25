import { StyleSheet, Dimensions, ScrollView, FlatList } from "react-native";
import UserPost from "./UserPost";
import type { Post } from "../types";
import StoriesHeader from "./StoriesHeader";
import React from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;

const mockPosts = [
  {
    id: 1,
    username: "janestagram",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    postImage: "cld-sample-4",
    likes: 30,
    comments: 20,
    shares: 5,
    daysAgo: 3,
  },
  {
    id: 2,
    username: "john_doe",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    postImage: "cld-sample-2",
    likes: 45,
    comments: 15,
    shares: 7,
    daysAgo: 5,
  },
  {
    id: 3,
    username: "travel_guru",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    postImage: "cld-sample-3",
    likes: 90,
    comments: 40,
    shares: 10,
    daysAgo: 1,
  },
  {
    id: 4,
    username: "foodie_fanatic",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    postImage: "samples/coffee",
    likes: 120,
    comments: 50,
    shares: 12,
    daysAgo: 2,
  },
  {
    id: 5,
    username: "nature_lover",
    profilePic: "https://docs.material-tailwind.com/img/face-2.jpg",
    postImage: "samples/balloons",
    likes: 75,
    comments: 30,
    shares: 8,
    daysAgo: 4,
  },
  {
    id: 6,
    username: "tech_savvy",
    profilePic: "https://docs.material-tailwind.com/img/face-1.jpg",
    postImage: "cld-sample",
    likes: 60,
    comments: 25,
    shares: 6,
    daysAgo: 6,
  },
  {
    id: 7,
    username: "artist_at_heart",
    profilePic: "https://docs.material-tailwind.com/img/face-3.jpg",
    postImage: "samples/landscapes/beach-boat",
    likes: 85,
    comments: 35,
    shares: 9,
    daysAgo: 1,
  },
  {
    id: 8,
    username: "pet_paradise",
    profilePic: "https://docs.material-tailwind.com/img/face-4.jpg",
    postImage: "samples/sheep",
    likes: 50,
    comments: 22,
    shares: 4,
    daysAgo: 3,
  },
  {
    id: 9,
    username: "fitness_freak",
    profilePic: "https://docs.material-tailwind.com/img/face-5.jpg",
    postImage: "sample",
    likes: 100,
    comments: 45,
    shares: 11,
    daysAgo: 7,
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
  },
  singlePost: {},
  postHeader: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  headerProfileImage: { width: 30, height: 30, borderRadius: 15 },
  headerProfileName: { fontWeight: "bold" },
  postImage: {
    height: 350,
    width: SCREEN_WIDTH,
  },
  postBottomPanel: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
    alignItems: "center",
  },
  bottomPanelText: { fontWeight: "bold", fontSize: 15 },
  daysText: {
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.4)",
    marginHorizontal: 10,
  },
});
