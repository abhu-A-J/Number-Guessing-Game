import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

/* Child Components */
import Card from "../../components/Card";
import Input from "../../components/Input";
import NumberContainer from "../../components/NumberContainer";

/* Constants */
import COLORS from "../../constants/colors";

const HomeScreen = (props) => {

  const {startGame}=props;

  const [enteredValue, setEnteredValue] = useState("");
  const [hasUserConfirmed, setHasUserConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  /* Methos to handle on change of text input*/
  const handleChange = (textInput) => {
    setEnteredValue(textInput.replace(/[^0-9]/g, ""));
  };

  /* Method to handle reset of number */
  const handleReset = () => {
    setEnteredValue("");
    setHasUserConfirmed(false);
  };

  /* Method to handle Confirm*/
  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be netween 1-99", [
        { text: "Ok", style: "destructive", onPress: handleReset },
      ]);
      return;
    }
    setHasUserConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  
  };

  let confirmedDisplay = undefined;
  if (hasUserConfirmed) {
    confirmedDisplay = (
      <Card customStyles={styles.confirmContainer}>
        <Text style={{fontSize:20}}>You selected</Text>
       <NumberContainer>{selectedNumber}</NumberContainer>
       <Button title="Start Game" onPress={()=>startGame(selectedNumber)}/>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>

        <Card customStyles={styles.inputContainer}>
          <Text style={styles.text}>Select a number:</Text>
          <Input
            customStyles={styles.input}
            blurOnSubmit={true}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={handleChange}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={COLORS.accent}
                onPress={handleReset}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={COLORS.primary}
                onPress={handleConfirm}
              />
            </View>
          </View>
        </Card>
        {confirmedDisplay}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily:'open-sans'
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
    marginTop: 15,
  },
  input: {
    marginVertical: 20,
    width: 80,
    paddingHorizontal: 15,
    textAlign: "center",
  },
  text: {
    fontSize:18,
    fontFamily:'open-sans'
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  button: {
    width: 80,
  },
  confirmContainer:{
    marginVertical:30,
    padding:40,
    maxWidth:"70%",
    alignItems:"center"
  }
});

export default HomeScreen;
