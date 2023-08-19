import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { theme } from "../../styles/theme";
import AlbumCoverImage from "../../components/Album/AlbumCoverImage";
import AlbumDetailsBar from "../../components/Album/AlbumDetailsBar";
import AlbumGallery from "../../components/Album/AlbumGallery";

const imageData = ["image1", "image2", "image3", "image4", "image5"];

const ViewAlbumScreen = () => {
  return (
    <SafeAreaView style={styles.layoutContainer}>
      <FlatList
        ListHeaderComponent={
          <>
            <AlbumCoverImage />
            <AlbumDetailsBar />
          </>
        }
        ListHeaderComponentStyle={styles.headerContainer}
        style={styles.listContainer}
        data={imageData}
        numColumns={2}
        renderItem={(item) => (
          <View style={styles.imageContainer}>
            <View style={styles.image} />
          </View>
        )}
        contentContainerStyle={{ gap: 5 }}
        columnWrapperStyle={{ gap: 5 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: theme.color.background,
    height: "100%",
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  headerContainer: {
    gap: 20,
    marginBottom: 20,
  },
  imageContainer: {
    width: "45%",
    maxWidth: "50%",
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 3 / 4,
    backgroundColor: "white",
  },
});

export default ViewAlbumScreen;
