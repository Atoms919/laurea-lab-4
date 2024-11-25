import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

const NewPost = () => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    // Image selection is automatically run when the new post component is opened
    if (!image) changeImage();
  }, []);

  const changeImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = () => {};

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image
            ? image
            : "https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Nature-Picture-Download-620x388.jpg",
        }}
        style={styles.imagePicker}
      />
      <Text style={styles.imagePickerText} onPress={changeImage}>
        Change Image
      </Text>

      <Pressable style={styles.uploadButton} onPress={uploadImage}>
        <Text style={styles.uploadButtonText}>Share</Text>
      </Pressable>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 6, alignItems: "center" },
  imagePicker: {
    width: 250,
    height: 250 * (4 / 3),
    borderRadius: 10,
    marginTop: 50,
  },
  imagePickerText: {
    color: "#3083ba",
    fontWeight: "bold",
    fontSize: 18,
    margin: 15,
  },
  uploadButton: {
    backgroundColor: "black",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    width: 250,
  },
  uploadButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
