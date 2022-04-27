import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Login from "../screens/LoginScreen";
import Register from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";
import { MY_THEME } from "../assets/constants/theme";

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        theme={MY_THEME}
        initialRouteName="Register"
      >
        <Stack.Screen name="Register" component={Register} options={{title: 'Register'}} /> 
        <Stack.Screen name="Home" component={Home} options={{ title: "", headerBackVisible:false }} /> 
        <Stack.Screen name="Root" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
