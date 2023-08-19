import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { theme } from "../../styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import VerificationCodeInput from "../../components/Auth/VerificationCodeInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import Button from "../../components/common/Button";

const VerificationScreen = () => {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView style={styles.layoutContainer}>
      <KeyboardAvoidingView
        style={styles.layoutWrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable
          style={styles.layoutContainer}
          onPress={() => Keyboard.dismiss()}
        >
          <Text style={styles.text}>
            Please enter the 6 digit verification code sent to your number.
          </Text>
          <VerificationCodeInput
            codeLength={6}
            inputValue={input}
            setInputValue={setInput}
          />
          <Button
            text="Next"
            onPress={() => router.push("/AuthFlow/CreateProfile")}
          />
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
    backgroundColor: theme.color.background,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  text: {
    color: theme.color.text,
    fontFamily: theme.fontFamily.inputLabel,
    fontSize: theme.fontSize.inputLabel,
  },
});

export default VerificationScreen;
