import { StyleSheet, Text, View, Pressable } from 'react-native'
import Input from './Input';
import React, {useState} from 'react'
import Button2 from './Button2';

export default function AuthForm({ isLogin }) {

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function updateiInput(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  return (
    <View>
      <Input
        label="E-posta"
        keyboardType="email-address"
        onUpdateValue={updateiInput.bind(this, "email")}
        value={enteredEmail}
      />
      <Input
        label="Şifre"
        secure={true}
        onUpdateValue={updateiInput.bind(this, "password")}
        value={enteredPassword}
      />

      <Pressable onPress={() => {}} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
      </Pressable>

      <Button2 styles={styles.buttons}>
        {isLogin ? "Giriş Yap" : "Kaydol"}
      </Button2>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginTop: 3,
  },
  forgotPasswordText: {
    color: '#f2741f',
    fontWeight: '500',
    marginBottom:10
  },
});
