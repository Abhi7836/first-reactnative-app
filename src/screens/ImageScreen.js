import React from 'react'
import { Text, StyleSheet,View,Button } from "react-native";
import ImageDetail from '../Components/ImageDetail';

const ImageScreen=()=>{
    return (<View>
        <ImageDetail title="Forest"/>
        <ImageDetail title="Beach" />
        <ImageDetail title="Mountain" />
        </View>
    )
}
const styles = StyleSheet.create({})
export default ImageScreen
