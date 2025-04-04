import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Loading({message}) {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text tyle={styles.text}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:"center",
        justifyContent: "center"
    },
    text: {
        fontSize:16,
        marginTop:20
    }
})