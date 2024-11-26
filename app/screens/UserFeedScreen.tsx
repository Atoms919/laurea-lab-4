import { View, Text } from "react-native";
import React from "react";
import UserFeed from "../components/UserFeed";

const UserFeedScreen = () => {
  return (
    <View style={{ flex: 1, marginHorizontal: "auto" }}>
      <UserFeed />
    </View>
  );
};

export default UserFeedScreen;
