import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({label, keyboardType, onUpdateValue, value, secure}) {
  return (
    <View>
      <TextInput 
        style={styles.input}
        autoCapitalize='none'
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={label}
        secureTextEntry={secure}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor:"#F5F5F5",
    paddingVertical: 8,
    paddingHorizontal:10,
    borderRadius:3,
    fontSize:16,
    marginBottom:12,
    borderWidth:0.3,
    borderColor:"#DCDCDC"
  }
})