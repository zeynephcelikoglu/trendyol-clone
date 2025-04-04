import { StyleSheet, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'
import Loading from '../components/Loading'
import { AuthContext } from '../store/auth-context'

export default function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authContext = useContext(AuthContext)

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("Kayıt Başarısız", error.message);
    } finally {
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <Loading message="Kullanıcı oluşturuluyor..." />
  }

  return <AuthContent onAuthenticate={signUpHandler} />
}

const styles = StyleSheet.create({})