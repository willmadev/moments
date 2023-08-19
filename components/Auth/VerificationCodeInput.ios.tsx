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
  const textInputRef = useRef<TextInput>(null);
  const [codeDigits, setCodeDigits] = useState(new Array(codeLength).fill(" "));
  useEffect(() => {
    setCodeDigits((curr) =>
      curr.map((_, i) => (inputValue[i] ? inputValue[i] : " "))
    );
  }, [inputValue]);
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
        ref={textInputRef}
        style={styles.hidden}
        focusable
      />
      <Pressable
        onPress={() => textInputRef.current.focus()}
        style={styles.codeWrapper}
      >
        {codeDigits.map((val, i) => (
          <View key={i} style={styles.digitContainer}>
            <Text style={styles.digit}>{val}</Text>
          </View>
        ))}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  hidden: {
    position: "absolute",
    color: "blue",
    width: 0,
    height: 0,
    zIndex: 11,
  },
  codeWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  digitContainer: {
    width: 35,
    backgroundColor: theme.color.text,
    borderRadius: 10,
    paddingHorizontal: 2,
    paddingVertical: 6,
    alignItems: "center",
  },
  digit: {
    fontSize: theme.fontSize.header,
  },
});

export default VerificationCodeInput;
