import { Link, Redirect, router } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={{ gap: 30 }}>
      <Text>Home</Text>
      <Pressable
        style={{ height: 50, backgroundColor: "blue" }}
        onPress={() => router.push("/CurrentAlbum/CameraScreen")}
      >
        <Text style={{ fontSize: 50 }}>Camera</Text>
      </Pressable>
      <Pressable
        style={{ height: 50, backgroundColor: "blue" }}
        onPress={() => router.push("/AuthFlow/Welcome")}
      >
        <Text style={{ fontSize: 50 }}>Auth Flow</Text>
      </Pressable>
      <Pressable
        style={{ height: 50, backgroundColor: "blue" }}
        onPress={() => router.push("/Album/Gallery")}
      >
        <Text style={{ fontSize: 50 }}>Album</Text>
      </Pressable>
    </SafeAreaView>
    // <Redirect href={"/AuthFlow/Welcome"} />
  );
};

export default App;
