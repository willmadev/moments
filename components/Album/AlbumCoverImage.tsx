import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../styles/theme";

const AlbumCoverImage = () => {
  return (
    <View style={styles.albumImage}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "transparent",
          "rgba(0,0,0,0.3)",
          "rgba(0,0,0,0.4)",
          "rgba(0,0,0,0.8)",
        ]}
        locations={[0, 0.6, 0.7, 0.9]}
        style={styles.albumBackground}
      />
      <Text style={styles.albumTitle}>CJ's Birthday Party</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  albumImage: {
    aspectRatio: 3 / 4,
    backgroundColor: "white",
    borderRadius: 20,
  },
  albumBackground: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  albumTitle: {
    position: "absolute",
    bottom: 15,
    left: 15,

    color: theme.color.text,
    fontFamily: theme.fontFamily.header,
    fontSize: theme.fontSize.header,
  },
});

export default AlbumCoverImage;
