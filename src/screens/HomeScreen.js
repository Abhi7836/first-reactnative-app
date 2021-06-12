import React from "react";
import { Text, StyleSheet,View,Button } from "react-native";

const HomeScreen = props => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
     <Button 
      style={styles.buttonStyle}
      onPress={()=>props.navigation.navigate('Components')}
      title="ComponentScreen"/>
      <Button 
      style={styles.buttonStyle}
      onPress={()=>props.navigation.navigate('List')}
      title="ListScreen"/>
      <Button 
      style={styles.buttonStyle}
      onPress={()=>props.navigation.navigate('Image')}
      title="ImageScreen"/>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle:{
    margin:20,
    borderRadius:30,
    color:"black"
  }
});

export default HomeScreen;