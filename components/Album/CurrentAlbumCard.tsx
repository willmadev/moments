import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../styles/theme";
import { router } from "expo-router";

const CurrentAlbumCard = () => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={theme.opacity.activeOpacity}
      onPress={() => router.push("/CurrentAlbum/")}
    >
      <View>
        <Text style={styles.currentAlbumText}>Current Album</Text>
        <Text style={styles.albumTitle}>Harsimran's Birthday Party</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.color.cardBackground,
    width: "92%",
    height: 150,
    padding: 15,
    borderRadius: 15,
  },
  currentAlbumText: {
    color: theme.color.background,
    fontFamily: theme.fontFamily.text,
    fontSize: theme.fontSize.text,
  },
  albumTitle: {
    color: theme.color.background,
    fontFamily: theme.fontFamily.header,
    fontSize: theme.fontSize.cardTitleLarge,
  },
});
export default CurrentAlbumCard;
