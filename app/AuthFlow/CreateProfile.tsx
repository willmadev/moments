import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { theme } from "../../styles/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../components/common/Button";
import { router } from "expo-router";

const CreateProfileScreen = () => {
  const [profilePicture, setProfilePicture] =
    useState<ImagePicker.ImagePickerAsset>(null);
  const [name, setName] = useState("");

  const handleImageSelector = async () => {
    let imageResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!imageResult.canceled) {
      setProfilePicture(imageResult.assets[0]);
    }
  };

  return (
    <SafeAreaView style={styles.layoutWrapper}>
      <KeyboardAvoidingView
        style={styles.layoutWrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable
          style={styles.layoutContainer}
          onPress={() => Keyboard.dismiss()}
        >
          <View style={styles.formContainer}>
            <TouchableOpacity onPress={handleImageSelector}>
              {profilePicture ? (
                <Image
                  style={styles.imageSelector}
                  source={{ uri: profilePicture.uri, height: 150, width: 150 }}
                />
              ) : (
                <View style={styles.imageSelector} />
              )}
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>
          <Button text="Create Profile" onPress={() => router.push("/")} />
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutWrapper: {
    flex: 1,
    backgroundColor: theme.color.background,
  },
  layoutContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: 40,
    justifyContent: "space-evenly",
  },
  formContainer: {
    alignItems: "center",
    gap: 40,
  },
  imageSelector: {
    width: 150,
    height: 150,
    backgroundColor: "gray",
    borderRadius: 150,
  },
  inputContainer: {
    width: 300,
  },
  inputLabel: {
    fontFamily: theme.fontFamily.inputLabel,
    fontSize: theme.fontSize.inputLabel,
    color: theme.color.text,
  },
  input: {
    backgroundColor: theme.color.text,
    fontFamily: theme.fontFamily.text,
    fontSize: theme.fontSize.text,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
  },
});
export default CreateProfileScreen;
