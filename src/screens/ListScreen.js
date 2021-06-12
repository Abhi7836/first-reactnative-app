import React from 'react'
import{View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen=()=>{
    const friends=[
        {name:"Abhi1",age:"20"},
        {name:"remo2",age:"20"},
        {name:"ABHISHEKK3",age:"20"},
        {name:"Abhi4",age:"20"},
        {name:"remo5",age:"20"},
        {name:"remo6",age:"20"},
        {name:"ABHISHEKK7",age:"20"},
        {name:"Abhi8",age:"20"},
        {name:"remo9",age:"20"},
        {name:"ABHISHEKK0",age:"20"}
    ];
    return (<FlatList
        keyExtractor={(friend)=>friend.name}
        data={friends}
        renderItem={({item})=>{
            return(<View><Text  style={styles.textStyle}>{item.name}-{item.age}</Text></View>)
        }}
    />);
};
const styles = StyleSheet.create({
    textStyle: {
      margin:10,
      fontSize:30,
      backgroundColor:"#00ff",
      color:"white",
      borderRadius:20,
      textAlign: "center"
    }
    
  });
export default ListScreen
