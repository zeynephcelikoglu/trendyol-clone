import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import { useContext } from 'react';
import { AuthContext } from './store/auth-context';
import AuthContextProvider from './store/auth-context';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import CartContextProvider from './store/CartContext';
import BottomBar from './components/BottomBar';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
  )
}

function AfterAuthenticatedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

function BottomTabNavigator() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      <BottomBar /> 
    </>
  );
}

function Navigation() {
  const authContext=useContext(AuthContext)
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
      <CartContextProvider>
      <Navigation/>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({});
