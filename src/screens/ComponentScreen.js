import React from "react";
import { Text, StyleSheet,View } from "react-native";

const ComponentScreen = ()=>{
  const name='Stephen';
   return(
     <View>
       <Text style={styles.textStye}>Getting started with React Native!</Text>
       <Text style={styles.subHeaderStyle}>My name is {name}</Text>
     </View>
   );
    
};

const styles = StyleSheet.create({
    textStye: {
      fontSize: 43,
      textAlign:"center"
    },
    subHeaderStyle:{
      fontSize:20,
      textAlign:"center"
    }
  });

export default ComponentScreen

