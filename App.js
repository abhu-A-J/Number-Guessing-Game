import React from "react";
import { StyleSheet, View } from "react-native";

/* child Components */
import Header from "./components/Header";

/* Screens */
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
