import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function SocialButton({
    icon,
    text,
    backgroundColor = 'white',
    textColor = 'black',
    iconColor = 'black',
  }) {
    const isTextButton = !!text;
  
    return (
      <Pressable style={[styles.button, { backgroundColor }, isTextButton ? styles.large : styles.small]}>
        <View style={styles.inner}>
          <FontAwesome name={icon} size={20} color={iconColor} style={styles.icon} />
          {text && <Text style={[styles.text, { color: textColor }]}>{text}</Text>}
        </View>
      </Pressable>
    );
  }
  

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    large: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    small: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 6,
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
    },
      
});

