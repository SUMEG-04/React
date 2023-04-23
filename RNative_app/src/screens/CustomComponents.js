import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';


const CustomComponents=()=>{
  return (
    <Text style={styles.textStyle}>Hello World CustomComponents</Text>
  );
};
const styles=StyleSheet.create({
  textStyle:{
    color:"red",
  },
});

export default CustomComponents;

