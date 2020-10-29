import React from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity } from "react-native";

/* Constants */
import COLORS from "../../constants/colors";

const CustomButton = (props) => {
  const { children, onClick, customStyles } = props;
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={{ ...styles.button, ...customStyles }}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius:20
  },
  buttonText: {
    color: "#fff",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default CustomButton;
