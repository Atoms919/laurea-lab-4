import { View, Text, StyleSheet, Pressable } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

const ProfileImageControls = ({
  selectedImageControl,
  selectProfileView,
}: {
  selectedImageControl: number;
  selectProfileView: (style: number) => void;
}) => {
  return (
    <View style={styles.imageControls}>
      <View
        style={[
          {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          selectedImageControl === 1 && { borderBottomWidth: 3 },
        ]}
      >
        <Pressable onPress={() => selectProfileView(1)}>
          <Fontisto
            name="nav-icon-grid"
            size={24}
            color="black"
            style={{ paddingBottom: 5 }}
          />
        </Pressable>
      </View>
      <View
        style={[
          { flex: 1, justifyContent: "center", alignItems: "center" },
          selectedImageControl === 2 && { borderBottomWidth: 3 },
        ]}
      >
        <Pressable onPress={() => selectProfileView(2)}>
          <AntDesign
            name="user"
            size={30}
            color="black"
            style={{ marginBottom: 5 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileImageControls;

const styles = StyleSheet.create({
  imageControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 60,
    marginTop: 5,
  },
});
