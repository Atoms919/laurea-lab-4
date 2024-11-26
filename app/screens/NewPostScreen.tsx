import { View, Text } from "react-native";
import NewPost from "../components/NewPost";
import React from "react";

const NewPostScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <NewPost />
    </View>
  );
};

export default NewPostScreen;
