import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const imageData = ["image1", "image2", "image3", "image4", "image5"];

const AlbumGallery = () => {
  return (
    <FlatList
      style={styles.container}
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
    // <View style={styles.container}>
    //   <View style={styles.imageContainer}>
    //     <View style={styles.image} />
    //   </View>
    //   <View style={styles.imageContainer}>
    //     <View style={styles.image} />
    //   </View>
    //   <View style={styles.imageContainer}>
    //     <View style={styles.image} />
    //   </View>
    //   <View style={styles.imageContainer}>
    //     <View style={styles.image} />
    //   </View>
    //   <View style={styles.imageContainer}>
    //     <View style={styles.image} />
    //   </View>
    //   <View style={styles.imageContainer}>
    //     <View style={styles.image} />
    //   </View>
    //   <View style={styles.imageContainer}>
    //     <View style={styles.image} />
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // gap: 5,
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

export default AlbumGallery;
