import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../styles/theme";
import { router } from "expo-router";

const PastAlbumCard = () => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={theme.opacity.activeOpacity}
      onPress={() => {
        router.push("/Album/ViewAlbum");
      }}
    >
      <View style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.albumTitle}>CJ's Birthday Party</Text>
        <Text style={styles.dateText}>Jun 9 2023</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.color.cardBackground,
    width: "100%",
    height: 110,
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 75,
    height: 75,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  textContainer: {
    height: "100%",
    gap: 5,
  },
  dateText: {
    fontFamily: theme.fontFamily.text,
    fontSize: theme.fontSize.text,
    color: theme.color.background,
  },
  albumTitle: {
    color: theme.color.background,
    fontFamily: theme.fontFamily.header,
    fontSize: theme.fontSize.cardTitleMedium,
  },
});

export default PastAlbumCard;
