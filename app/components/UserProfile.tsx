import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import UserStories from "./UserStories";
import UserInfo from "./UserInfo";
import UserProfileButtons from "./UserProfileButtons";
import ProfileImageControls from "./ProfileImageControls";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;

const COMPONENT_WIDTH = windowWidth > 520 ? 520 : windowWidth;

const images = [
  { id: 1, uri: "https://via.placeholder.com/150" },
  { id: 2, uri: "https://via.placeholder.com/150" },
  { id: 3, uri: "https://via.placeholder.com/150" },
  { id: 4, uri: "https://via.placeholder.com/150" },
  { id: 5, uri: "https://via.placeholder.com/150" },
  { id: 6, uri: "https://via.placeholder.com/150" },
  { id: 7, uri: "https://via.placeholder.com/150" },
];

const renderItem = ({ item }: { item: { id: number; uri: string } }) => {
  return (
    <View>
      <Pressable>
        <Image style={styles.singleImage} source={{ uri: item.uri }} />
      </Pressable>
    </View>
  );
};

const UserProfile = () => {
  const [selectedImageControl, setSelectedImageControl] = useState(1);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>janestagram</Text>
      <View>
        <UserInfo />
        <View style={styles.userDescription}>
          <Text style={{ fontWeight: "bold" }}>Jane Doe</Text>
          <Text>Live, Love, Laugh </Text>
        </View>
        <UserProfileButtons />
        <UserStories />
        <ProfileImageControls
          selectedImageControl={selectedImageControl}
          selectProfileView={setSelectedImageControl}
        />
        {selectedImageControl === 1 && (
          <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            scrollEnabled={false}
          />
        )}
        {selectedImageControl === 2 && (
          <View style={styles.taggedMode}>
            <AntDesign
              name="user"
              size={100}
              color="black"
              style={{ marginBottom: 5 }}
            />
            <Text>Nothing here yet...</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: COMPONENT_WIDTH,
  },
  text: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  userDescription: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  singleImage: {
    height: COMPONENT_WIDTH / 3,
    width: COMPONENT_WIDTH / 3,
    borderColor: "black",
    margin: 1,
  },
  taggedMode: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
