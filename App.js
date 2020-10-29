import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

/* child Components */
import Header from "./components/Header";

/* Screens */
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOver";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err)=>console.log('Error loading fonts',err)}
      />
    );
  }

  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(undefined);
  };

  const startGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOver = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  let content = <HomeScreen startGame={setUserNumber} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOver} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        numberOfRounds={guessRounds}
        guessedNumber={userNumber}
        startNewGame={configureNewGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
