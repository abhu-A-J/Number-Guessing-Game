import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

/* Constants */
import COLORS from "../../constants/colors";

const GameOverScreen = (props) => {
  const { numberOfRounds, guessedNumber, startNewGame } = props;
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The game is over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../../assets/success.png")}
        />
      </View>
      <Text style={styles.text}>The number of guess it took: {guessedNumber}</Text>
      <Text style={styles.text}>The number was : {guessedNumber}</Text>
      <Button title="RESTART" color={COLORS.accent} onPress={startNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
  text: {
    fontFamily: "open-sans",
    marginVertical: 5,
    fontSize:18
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: COLORS.primary,
    width: 250,
    height: 250,
    marginVertical: 15,
    overflow: "hidden",
    elevation: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
