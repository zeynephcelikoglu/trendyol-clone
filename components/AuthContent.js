import { StyleSheet, Text, View, Pressable, Dimensions, Image } from 'react-native';
import AuthForm from '../components/AuthForm';
import React from 'react';
import SocialButton from '../components/SocialButton';

const { height } = Dimensions.get('window'); 

export default function AuthContent({ isLogin }) {
  return (
    <View style={styles.container}>

    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>

      <View style={styles.formContainer}>
        <AuthForm isLogin={isLogin} />

        <Text style={styles.altText}>Diğer Giriş Seçenekleri</Text>

        <View style={styles.socialButtonsRow}>
          <SocialButton
            icon="apple"
            text="Apple ile Giriş Yap"
            backgroundColor="black"
            textColor="white"
            iconColor="white"
            fullWidth
          />
          <SocialButton
            icon="google"
            iconColor="#DB4437"
            backgroundColor="white"
          />
          <SocialButton
            icon="facebook"
            iconColor="#1877F2"
            backgroundColor="white"
          />
        </View>

        <View style={styles.bottomTextContainer}>
          <Text>Üye değil misin? </Text>
          <Pressable>
            <Text style={styles.linkText}>Üye Ol</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2741f',
  },
  header: {
    height: '50%',
    backgroundColor: '#f2741f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 150
  },
  formContainer: {
    position: 'absolute',
    top: height * 0.25,
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
    color: '#666',
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
  },
  bottomTextContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: '#f2741f',
    fontWeight: 'bold',
  },
});
