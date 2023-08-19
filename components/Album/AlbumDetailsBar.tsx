import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FA from "@expo/vector-icons/FontAwesome5";
import { theme } from "../../styles/theme";

const AlbumDetailsBar = () => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.participantContainer}>
        <View style={styles.participantBubble} />
        <View style={styles.participantBubble} />
      </View>
      <TouchableOpacity activeOpacity={theme.opacity.activeOpacity}>
        <FA name={"ellipsis-h"} color="white" size={28}></FA>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  participantContainer: {
    flexDirection: "row",
    flex: 1,
    gap: -8,
  },
  participantBubble: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "white",
  },
});

export default AlbumDetailsBar;
