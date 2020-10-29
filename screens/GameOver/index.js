import React from "react";
import { StyleSheet, View, Text,Button } from "react-native";

/* Constants */
import COLORS from "../../constants/colors";


const GameOverScreen = (props) => {
  const { numberOfRounds, guessedNumber,startNewGame } = props;
  return (
    <View style={styles.screen}>
      <Text>The game is over at {numberOfRounds} rounds</Text>
      <Text>The number is {guessedNumber}</Text>
      <Button title="RESTART" color={COLORS.accent} onPress={startNewGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
