import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  const { children,customStyles } = props;
  return <View style={{...styles.card,...customStyles}}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    elevation: 5,
    padding: 20,
    borderRadius: 20,
  },
});

export default Card;
