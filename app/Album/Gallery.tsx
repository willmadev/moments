import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FA from "@expo/vector-icons/FontAwesome5";
import { theme } from "../../styles/theme";
import CurrentAlbumCard from "../../components/Album/CurrentAlbumCard";
import PastAlbumCard from "../../components/Album/PastAlbumCard";

const AlbumGalleryScreen = () => {
  return (
    <SafeAreaView style={styles.layoutWrapper}>
      <ScrollView
        contentContainerStyle={styles.layoutContainer}
        alwaysBounceVertical={false}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Moments</Text>
          <TouchableOpacity
            style={styles.settings}
            activeOpacity={theme.opacity.activeOpacity}
          >
            <FA name={"cog"} color="white" size={36} />
          </TouchableOpacity>
        </View>
        <View style={styles.currentAlbumContainer}>
          <CurrentAlbumCard />
        </View>
        <View style={styles.pastAlbumWrapper}>
          <Text style={styles.pastAlbumHeader}>Past Albums</Text>
          <View style={styles.pastAlbumContainer}>
            <PastAlbumCard />
            <PastAlbumCard />
            <PastAlbumCard />
            <PastAlbumCard />
            <PastAlbumCard />
            <PastAlbumCard />
            <PastAlbumCard />
            <PastAlbumCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutWrapper: {
    flex: 1,
    backgroundColor: theme.color.background,
    height: "100%",
  },
  layoutContainer: {
    gap: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerText: {
    fontFamily: theme.fontFamily.brand,
    fontSize: theme.fontSize.header,
    color: theme.color.brand,
  },
  settings: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  currentAlbumContainer: {
    alignItems: "center",
  },
  pastAlbumWrapper: {
    width: "88%",
    gap: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  pastAlbumHeader: {
    color: theme.color.text,
    width: "100%",
  },
  pastAlbumContainer: {
    gap: 12,
    width: "100%",
  },
});

export default AlbumGalleryScreen;
