import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
	TouchableWithoutFeedback,
	Keyboard
} from "react-native";

/* Child Components */
import Card from "../../components/Card";
import Input from "../../components/Input";

/* Constants */
import COLORS from "../../constants/colors";

const HomeScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  /* Methos to handle on change of text input*/
  const handleChange = (textInput) => {
    setEnteredValue(textInput.replace(/[^0-9]/g, ""));
  };

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
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
              <Button title="Reset" color={COLORS.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={COLORS.primary} />
            </View>
          </View>
        </Card>
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
  text: {},
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  button: {
    width: 80,
  },
});

export default HomeScreen;
