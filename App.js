import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

/* child Components */
import Header from "./components/Header";

/* Screens */
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);
  const [guessRounds, setGuessRounds] = useState(0);

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
