import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen'; // Arquivo onde está a tela de splash
import LoginScreen from './Login'; // Arquivo onde está a tela de login
import RegisterScreen from './src/screens/RegisterScreen'; // Arquivo onde está a tela de registro

const Stack = createStackNavigator(); // Cria o stack navigator

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} /> {/* Tela inicial */}
        <Stack.Screen name="Login" component={LoginScreen} /> {/* Tela de login */}
        <Stack.Screen name="Register" component={RegisterScreen} /> {/* Tela de Registro */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

