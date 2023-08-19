import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../styles/theme";

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  text: string;
}

const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default Button;
