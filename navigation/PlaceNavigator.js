import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../assets/constants/colors";
import { NavigationContainer } from "@react-navigation/native";

import PlaceListScreen from "../screens/LocationScreens/PlaceListScreen";
import PlaceDetailScreen from "../screens/LocationScreens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/LocationScreens/NewPlaceScreen";
import MapScreen from "../screens/LocationScreens/MapScreen";

const PlaceStack = createNativeStackNavigator();

const PlaceNavigator = () => {
  return (
    <NavigationContainer  independent={true}>
      <PlaceStack.Navigator
        initialRouteName="Nuevo"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? COLORS.DARK_SIENNA : "",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : COLORS.DARK_SIENNA,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <PlaceStack.Screen
          name="Direcciones"
          component={PlaceListScreen}
          options={({ navigation }) => ({
            title: "Direcciones",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
                <Ionicons
                  name="md-add"
                  size={24}
                  color={
                    Platform.OS === "android" ? "white" : COLORS.DARK_SIENNA
                  }
                />
              </TouchableOpacity>
            ),
          })}
        />
        <PlaceStack.Screen
          name="Detalle"
          component={PlaceDetailScreen}
          options={{ title: "Detalle direccion" }}
        />
        <PlaceStack.Screen
          name="Nuevo"
          component={NewPlaceScreen}
          options={{ title: "Nueva direccion" }}
        />
        <PlaceStack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Mapa" }}
        />
      </PlaceStack.Navigator>
    </NavigationContainer>
  );
};

export default PlaceNavigator;
