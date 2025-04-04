import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import { useContext } from 'react';
import AuthContent from './components/AuthContent';
import { AuthContext } from './store/auth-context';
import AuthContextProvider from './store/auth-context';

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {!authContext.isAuthenticated && <NormalStack/>}
      {authContext.isAuthenticated && <AfterAuthenticatedStack/>}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation/>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
