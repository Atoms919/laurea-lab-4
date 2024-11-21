import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import UserProfile from "../components/UserProfile";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <UserProfile />
    </View>
  );
};

export default ProfileScreen;
