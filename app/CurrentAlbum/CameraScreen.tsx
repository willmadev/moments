import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../styles/theme";
import {
  Camera,
  CameraCapturedPicture,
  CameraType,
  FlashMode,
} from "expo-camera";
import FA from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";

const CameraScreen = () => {
  const camera = useRef<Camera>(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [capturedImage, setCapturedImage] =
    useState<CameraCapturedPicture>(null);

  useEffect(() => {
    (async () => {
      if (!permission || !permission.granted) {
        await requestPermission();
      }
    })();
  }, [permission]);

  const toggleCameraType = () => {
    setCameraType((curr) =>
      curr === CameraType.back ? CameraType.front : CameraType.back
    );
  };
  const toggleFlash = () => {
    setFlash((curr) => (curr === FlashMode.off ? FlashMode.on : FlashMode.off));
  };

  const takePicture = useCallback(async () => {
    if (!cameraReady) return;
    const capturedPicture = await camera.current.takePictureAsync({
      quality: 1,
    });
    console.log({ capturedPicture });
    setCapturedImage(capturedPicture);
  }, [camera, cameraReady, capturedImage, setCapturedImage]);

  return (
    <SafeAreaView style={styles.layoutContainer}>
      <View style={styles.layout}>
        <Text style={styles.header}>Album Title</Text>
        <Text style={styles.text}>Ends in 13 hours</Text>
        {capturedImage === null ? (
          <View style={styles.cameraContainer}>
            <Camera
              style={styles.camera}
              type={cameraType}
              flashMode={flash}
              onCameraReady={() => setCameraReady(true)}
              ref={camera}
              ratio="4:3"
            >
              <View style={styles.shotsLeftContainer}>
                <Text style={styles.shotsLeftText}>13 shots left</Text>
              </View>
            </Camera>
            <View style={styles.cameraBtnContainer}>
              <TouchableOpacity
                onPress={toggleCameraType}
                activeOpacity={theme.opacity.activeOpacity}
              >
                <FA name="sync" size={36} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={takePicture}
                activeOpacity={theme.opacity.activeOpacity}
              >
                <Image
                  source={require("../../assets/shutter.png")}
                  style={styles.cameraBtn}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleFlash}
                activeOpacity={theme.opacity.activeOpacity}
              >
                <FA
                  name="bolt"
                  size={36}
                  color={flash === FlashMode.on ? "yellow" : "white"}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <Image source={{ uri: capturedImage.uri }} style={{ flex: 1 }} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    backgroundColor: theme.color.background,
    flex: 1,
  },
  layout: {
    flex: 1,
    margin: 15,
  },
  header: {
    color: theme.color.text,
    fontSize: theme.fontSize.header,
    fontFamily: theme.fontFamily.header,
  },
  text: {
    color: theme.color.text,
    fontSize: 26,
  },
  cameraContainer: {
    alignSelf: "center",
    // aspectRatio: 3 / 4,
    width: "100%",
    height: "90%",
    // justifyContent: "space-around",
    // margin: 15,
  },
  camera: {
    flex: 1,
  },
  shotsLeftContainer: {
    position: "absolute",
    bottom: 10,
    marginHorizontal: "auto",
    width: "100%",
  },
  shotsLeftText: {
    color: theme.color.text,
    textAlign: "center",
    backgroundColor: "gray",
  },
  cameraBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 25,
  },
  cameraBtn: {
    height: 60,
    width: 60,
  },
});

export default CameraScreen;
