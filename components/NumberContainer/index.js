import React from "react";
import { StyleSheet, View, Text } from "react-native";

/* Constants */
import COLORS from "../../constants/colors";

const NumberContainer = (props) => {
  const { children } = props;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.primary,
    fontSize: 30,
  },
});

export default NumberContainer;
