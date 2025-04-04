import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'

export default function Button({ children, onPress }) {
  return (
    <Pressable 
      style={({pressed})=>[styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
          <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:"#f2741f",
    paddingVertical:10,
    borderRadius:3,
  },
  text:{
    textAlign:"center",
    color:"white",
    fontSize:16
  },
  pressed:{
    opacity:0.5
  }
})