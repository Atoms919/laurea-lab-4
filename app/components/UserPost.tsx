import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import type { Post } from "../types";
import React from "react";
import { AdvancedImage } from "cloudinary-react-native";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../cloudinary";

const SCREEN_WIDTH = Dimensions.get("window").width;

const UserPost = ({ post }: { post: Post }) => {
  const image = cld.image(post.postImage);

  image.resize(thumbnail().width(SCREEN_WIDTH).height(350));

  return (
    <View style={styles.container}>
      <View style={styles.singlePost}>
        <View style={styles.postHeader}>
          <Image
            source={{
              uri: post.profilePic,
            }}
            style={styles.headerProfileImage}
          />
          <Text style={styles.headerProfileName}>{post.username}</Text>
        </View>
        <View>
          <AdvancedImage cldImg={image} style={styles.postImage} />
        </View>
        <View style={styles.postBottomPanel}>
          <Pressable onPress={() => alert("Like!")}>
            <FontAwesome name="heart-o" size={24} color="black" />
            <Text style={styles.bottomPanelText}>{post.likes}</Text>
          </Pressable>
          <Pressable onPress={() => alert("Comment!")}>
            <FontAwesome name="comment-o" size={24} color="black" />
            <Text style={styles.bottomPanelText}>{post.comments}</Text>
          </Pressable>
          <Pressable onPress={() => alert("Share!")}>
            <FontAwesome name="share" size={24} color="black" />
            <Text style={styles.bottomPanelText}>{post.shares}</Text>
          </Pressable>
        </View>
        <Text style={styles.daysText}>{post.daysAgo} days ago</Text>
      </View>
    </View>
  );
};

export default UserPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
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
