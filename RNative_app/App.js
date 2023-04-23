import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import CustomComponents from './src/screens/CustomComponents';

const App=()=>{
  const myName="Rnative app";
  const myElement=<Text>Finilizing the product.</Text>;
  const getArgument=(firstComp,secondComp,thirdComp)=>{
    return `Needed info ${firstComp} ${secondComp} ${thirdComp}`;
  }
  return (
    <View>
      <Text style={styles.textStyle}>Hello World {myName}</Text>
      <CustomComponents/>
      {myElement}
      <Text>Passing the argument {getArgument("Name","Class","Roll")}</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  textStyle:{
    color:"red",
    marginTop:25,
  },
});

export default App;

