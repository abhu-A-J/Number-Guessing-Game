import React from "react";
import { StyleSheet, View, Text, TextInput,Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Select a number:</Text>
        
				<TextInput style={styles.input} />
				
				<View style={styles.btnContainer}>
					<Button title="Reset" />
					<Button title="Confirm"/>
				</View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: "center",
	},
	title:{
		fontSize:20,
		marginVertical:10,
	},
	inputContainer:{
		width:"90%",
		alignItems:"center",
		shadowColor:"black",
		shadowOffset:{
			width:0,
			height:2
		},
		shadowOpacity:0.26,
		shadowRadius:6,
		backgroundColor:"#fff",
		elevation:5,
		padding:20,
		borderRadius:20
	},
	input:{
		marginVertical:20,
		
	},
	text:{

	},
	btnContainer:{
		flexDirection:"row",
		width:"100%",
		justifyContent:"space-between",
		paddingHorizontal:10
	}
});

export default HomeScreen;
