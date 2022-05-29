import React from "react";
import {useSelector} from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Login from "../screens/LoginScreen";
import Register from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";
import { MY_THEME } from "../assets/constants/theme";

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  const isAuth = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      <Stack.Navigator
        theme={MY_THEME}
        initialRouteName="Register"
      >
        {!isAuth && <>
          <Stack.Screen name="Register" component={Register} options={{title: 'Register'}} /> 
          <Stack.Screen name="Login" component={Login} />              
        </>}
        <Stack.Screen name="Root" component={TabNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
