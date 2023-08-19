import { useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { theme } from "../../styles/theme";

interface VerificationCodeInputProps {
  codeLength: number;
  inputValue: string;
  setInputValue: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  codeLength,
  inputValue,
  setInputValue,
  style,
}) => {
  return (
    <View>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        textContentType="oneTimeCode"
        autoComplete="sms-otp"
        keyboardType="number-pad"
        autoFocus
        maxLength={codeLength}
        style={styles.input}
        focusable
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 55,
    width: 280,
    backgroundColor: theme.color.text,
    fontSize: 24,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
});

export default VerificationCodeInput;
