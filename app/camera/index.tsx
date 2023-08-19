import { Camera, CameraType, FlashMode } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CameraView = () => {
  const [type, setType] = useState(CameraType.back);
  const [cameraReady, setCameraReady] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const camera = useRef<Camera>(null);

  if (!permission || !permission.granted) {
    requestPermission();
    return <Text>No Permission</Text>;
  }

  const toggleCameraType = () => {
    setType((curr) =>
      curr === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePicture = async () => {
    if (camera && cameraReady) {
      const pic = await camera.current.takePictureAsync();
      console.log(pic.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.container}
        type={type}
        flashMode={FlashMode.torch}
        onCameraReady={() => setCameraReady(true)}
        ref={camera}
      >
        <View>
          <Pressable onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </Pressable>
          <Pressable onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </Pressable>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});

export default CameraView;
