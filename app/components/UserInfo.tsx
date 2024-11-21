import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const UserInfo = () => {
  return (
    <View style={styles.userInfoContainer}>
      <Image
        source={{
          uri: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.userInfo}>
        <View>
          <Text style={styles.userInfoCount}>13</Text>
          <Text>posts</Text>
        </View>
        <View>
          <Text style={styles.userInfoCount}>500</Text>
          <Text>followers</Text>
        </View>
        <View>
          <Text style={styles.userInfoCount}>300</Text>
          <Text>following</Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  image: { width: 80, height: 80, borderRadius: 40 },
  userInfoCount: { textAlign: "center", fontWeight: "bold", fontSize: 16 },
  userInfo: { flexDirection: "row", gap: 60 },
});
