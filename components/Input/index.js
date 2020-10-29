import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  const { customStyles,...otherProps } = props;
  return <TextInput style={{ ...styles.input, ...customStyles }} {...otherProps} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth:1
  },
});

export default Input;
