import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../styles/theme";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/common/Button";

const PhoneNumberScreen = () => {
  const [input, setInput] = useState("");

  const handleChange = (text: string) => {
    setInput(text);
  };
  return (
    <SafeAreaView style={styles.layoutContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable
          style={styles.layoutContainer}
          onPress={() => Keyboard.dismiss()}
        >
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              keyboardType="phone-pad"
              style={styles.input}
              textContentType="telephoneNumber"
              autoFocus
              onChangeText={handleChange}
            />
          </View>
          <Button
            text="Next"
            onPress={() => router.push("/AuthFlow/Verification")}
          />
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    backgroundColor: theme.color.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  inputContainer: {
    gap: 5,
  },
  inputLabel: {
    fontFamily: theme.fontFamily.inputLabel,
    fontSize: theme.fontSize.inputLabel,
    color: theme.color.text,
  },
  input: {
    height: 55,
    width: 280,
    backgroundColor: theme.color.text,
    fontSize: 24,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  buttonWrapper: {
    backgroundColor: theme.color.button,
    borderRadius: 25,
  },
  buttonText: {
    color: theme.color.text,
    paddingHorizontal: theme.padding.buttonMediumHorizontal,
    paddingVertical: theme.padding.buttonMediumVertical,
    fontSize: theme.fontSize.buttonMedium,
    fontFamily: theme.fontFamily.header,
  },
});

export default PhoneNumberScreen;
