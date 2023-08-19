import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../styles/theme";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.layoutContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.subheader}>Film your</Text>
        <Text style={styles.header}>Moments</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => router.push("/AuthFlow/PhoneNumber")}
        >
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    backgroundColor: theme.color.background,
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 70,
  },
  subheader: {
    color: theme.color.text,
    fontFamily: theme.fontFamily.header,
    fontSize: 30,
  },
  header: {
    color: theme.color.brand,
    fontFamily: theme.fontFamily.brand,
    fontSize: 48,
  },
  buttonContainer: {
    flex: 1,
    position: "absolute",
    bottom: 80,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  buttonWrapper: {
    backgroundColor: theme.color.button,
    borderRadius: 150,
    flex: 1,
  },
  buttonText: {
    color: theme.color.text,
    paddingHorizontal: theme.padding.buttonLargeHorizontal,
    paddingVertical: theme.padding.buttonLargeVertical,
    fontSize: theme.fontSize.buttonLarge,
    fontFamily: theme.fontFamily.buttonLarge,
  },
});

export default WelcomeScreen;
