import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

/* Child Components */
import NumberContainer from "../../components/NumberContainer";
import Card from "../../components/Card";

/* Constants */
import COLORS from "../../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {
  // Vaue that user guess/entered in home screen
  const { userChoice, onGameOver } = props;

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);



  const nextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Dont't lie", "You know this is wrong ....", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((prevState) => prevState + 1);
  };

  /* Effect to check is game is over */

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess,onGameOver,userChoice]);


  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 25, marginTop: 20, fontFamily:'open-sans' }}>Opponent's guess:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card customStyles={styles.buttonContainer}>
        <Button
          title="LOWER"
          color={COLORS.accent}
          onPress={() => nextGuess("lower")}
        />
        <Button
          title="HIGHER"
          color={COLORS.primary}
          onPress={() => nextGuess("higher")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    marginTop: 20,
  },
});

export default GameScreen;
