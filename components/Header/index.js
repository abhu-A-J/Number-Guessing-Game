import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    backgroundColor: "#f7297b",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
		color: "black",
		fontSize:30
  },
});

export default Header;
