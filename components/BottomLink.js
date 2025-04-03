import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function BottomLink({ text, linkText, onPress }) {
  return (
    <View style={styles.bottomTextContainer}>
      <Text>{text} </Text>
      <Pressable onPress={onPress}>
        <Text style={styles.linkText}>{linkText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTextContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: '#f2741f',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
