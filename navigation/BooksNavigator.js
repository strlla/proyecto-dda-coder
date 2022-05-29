import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MY_THEME } from "../assets/constants/theme";
import GenresScreen from "../screens/GenresScreen";
import GenreScreen from "../screens/GenreScreen";
import BookScreen from "../screens/BookScreen";
const Stack = createNativeStackNavigator();

const BooksNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        theme={MY_THEME}
        initialRouteName="BooksStack"
      >
        <Stack.Screen
          name="BooksStack"
          component={GenresScreen}
          options={{ title: "Genres", headerShown: false }}
        />
        <Stack.Screen
          name="Genre"
          component={GenreScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Book"
          component={BookScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BooksNavigator;
