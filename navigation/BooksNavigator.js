import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MY_THEME } from "../assets/constants/theme";
import Genres from "../screens/GenresScreen";
import GenreBookScreen from "../screens/GenreBookScreen";

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
          component={Genres}
          options={{ title: "Genres", headerShown: false }}
        />
        <Stack.Screen
          name="BookGenre"
          component={GenreBookScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BooksNavigator;
