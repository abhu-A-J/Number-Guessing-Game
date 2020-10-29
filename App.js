import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

/* child Components */
import Header from "./components/Header";

/* Screens */
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);

  const startGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {!userNumber ? <HomeScreen startGame={setUserNumber} /> : <GameScreen userChoice={userNumber}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
