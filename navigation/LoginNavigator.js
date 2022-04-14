import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Login from "../screens/LoginScreen";
import Register from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();
const MyTheme = {  ...DefaultTheme,  colors: {    ...DefaultTheme.colors,   background:'white'  },};

const LoginNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        theme={MyTheme}
        initialRouteName="Register"
      >
        <Stack.Screen name="Register" component={Register}options={{title: 'Register'}} /> 
        <Stack.Screen name="Home" component={Home} /> 
      
        <Stack.Screen name="Login" component={Login} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
