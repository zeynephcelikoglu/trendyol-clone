import { StyleSheet, Text, View, Pressable } from 'react-native'
import Input from './Input';
import React, {useState} from 'react'
import Button from './Button';

export default function AuthForm({ isLogin, onsubmit, credentialsInvalid }) {

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsValid,
    confirmEmail: emailsDontMatch,
    password: passwordIsValid,
    confirmPassword: passwordDontMatch
  } = credentialsInvalid
  console.log(
    emailIsValid,
    emailsDontMatch,
    passwordIsValid,
    passwordDontMatch
  );
  
  

  function submitHandler() {
    onsubmit({
      email:enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    })
  }

  function updateiInput(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
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
        isInvalid={emailIsValid}
      />
      {!isLogin && (
        <Input
        label="E-posta doğrula"
        keyboardType="email-address"
        onUpdateValue={updateiInput.bind(this, "confirmEmail")}
        value={enteredConfirmEmail}
        isInvalid={emailsDontMatch}
      />
      )}
      <Input
        label="Şifre"
        secure={true}
        onUpdateValue={updateiInput.bind(this, "password")}
        value={enteredPassword}
        isInvalid={passwordIsValid}
      />
      {!isLogin && (
        <Input
        label="Şifreyi doğrula"
        secure={true}
        onUpdateValue={updateiInput.bind(this, "confirmPassword")}
        value={enteredConfirmPassword}
        isInvalid={passwordDontMatch}
      />
      )}
      <Pressable onPress={() => {}} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
      </Pressable>

      <View>
        <Button onPress={submitHandler}>
          {isLogin ? "Giriş Yap" : "Kaydol"}
        </Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    alignItems: 'flex-end',
    marginTop: 3,
  },
  forgotPasswordText: {
    color: '#f2741f',
    marginBottom:10
  }
});
