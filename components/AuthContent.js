import { StyleSheet, Text, View, Pressable, Dimensions, Image, Alert } from 'react-native';
import AuthForm from '../components/AuthForm';
import React, {useState} from 'react';
import SocialButton from '../components/SocialButton';
import BottomLink from './BottomLink';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window'); 

export default function AuthContent({ isLogin, onAuthenticate}) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false
  })

  function submitHandler(credentials) {
    console.log(credentials);
    let {email, password, confirmEmail, confirmPassword } = credentials

    email = email.trim()
    password = password.trim()
    confirmEmail = confirmEmail.trim();
    confirmPassword = confirmPassword.trim();

    const emailIsValid = email.includes("@")
    const passwordIsValid = password.length > 6
    const emailsAreEqual = email === confirmEmail
    const passwordsAreEqual = password === confirmPassword

    if (!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || !passwordsAreEqual))) {
      Alert.alert("Hata!", "Lütfen girdiğiniz değerleri kontrol ediniz")
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual
      })
      return
    }

    onAuthenticate({email, password})

  }

  function switchScreen() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        <AuthForm credentialsInvalid={credentialsInvalid} isLogin={isLogin} onsubmit={submitHandler} />

        <Text style={styles.altText}>Diğer Giriş Seçenekleri</Text>

        <View style={styles.socialButtonsRow}>
          <SocialButton icon="apple" text="Apple ile bağlan" backgroundColor="black" textColor="white" iconColor="white" fullWidth />
          <SocialButton icon="google" iconColor="#DB4437" backgroundColor="white" />
          <SocialButton icon="facebook" iconColor="#1877F2" backgroundColor="white" />
        </View>

        <BottomLink
          text={isLogin ? "Üye değil misin?" : "Zaten hesabın var mı?"}
          linkText={isLogin ? "Üye Ol" : "Giriş Yap"}
          onPress={switchScreen}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: '50%',
    backgroundColor: '#f2741f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 80,
    resizeMode: 'contain',
    marginTop: 18,
  },
  formContainer: {
    position: 'absolute',
    top: height * 0.40,
    left: '5%',
    right: '5%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  altText: {
    textAlign: 'center',
    marginVertical: 6,
    color: '#4d4d4d', 
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
  }
});

