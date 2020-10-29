import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

/* Child Components */
import Card from "../../components/Card";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>

      <Card customStyles={styles.inputContainer}>
        <Text style={styles.text}>Select a number:</Text>
        <TextInput style={styles.input} />
        <View style={styles.btnContainer}>
          <Button title="Reset" />
          <Button title="Confirm" />
        </View>
      </Card>
    </View>
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
	 alignItems:"center",
	 marginTop:15,
	},
  input: {
    marginVertical: 20,
  },
  text: {},
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
