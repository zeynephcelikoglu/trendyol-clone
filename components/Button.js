import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button({children}) {
  return (
    <View>
      <Text styl>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})