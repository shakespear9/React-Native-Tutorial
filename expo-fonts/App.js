import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ArchitectsDaughter_400Regular } from "@expo-google-fonts/architects-daughter";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default function App() {
  let [fontLoaded, error] = useFonts({
    Regular: ArchitectsDaughter_400Regular,
    Kanit: require("./assets/fonts/Kanit-Regular.ttf"),
  });

  //
  //expo install @expo-google-fonts/architects-daughter https://directory.vercel.app/
  //expo install expo-app-loading

  // useEffect(() => {
  //   async loadingFont = () => {
  //     await Font.loadAsync({})
  //   }
  // }, [input]);

  if (!AppLoading) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Regular",
          fontSize: 30,
        }}
      >
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
0;
