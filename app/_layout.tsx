import { Stack, SplashScreen, useNavigation } from "expo-router";
import * as Fonts from "expo-font";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const fonts = {
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
};

export default function Layout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Fonts.loadAsync(fonts)
      .then(() => setFontsLoaded(true))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
