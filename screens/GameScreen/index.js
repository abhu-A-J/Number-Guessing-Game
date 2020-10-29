import React, { useState } from "react";
import { StyleSheet, View, Text,Button } from "react-native";

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
  const { userChoice } = props;

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text style={{fontSize:25,marginTop:20}}>Opponent's guess:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
			<Card customStyles={styles.buttonContainer}>
				<Button title="LOWER" color={COLORS.accent}/>
				<Button title="HIGHER" color={COLORS.primary}/>
			</Card>
    </View>
  );
};

const styles = StyleSheet.create({
	screen:{
		flex:1,
		padding:10,
		alignItems:"center"
	},
	buttonContainer:{
		flexDirection:"row",
		justifyContent:"space-around",
		alignItems:"center",
		width:"80%",
		marginTop:20
	}
});

export default GameScreen;
