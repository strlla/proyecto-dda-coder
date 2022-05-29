import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BooksNavigator from "./BooksNavigator";
import PlaceNavigator from "./PlaceNavigator";
import CartScreen from "../screens/CartScreen/index";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="BooksStack"
      screenOptions={{
        tabBarActiveTintColor: "#6A23B0",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="BooksStack"
        component={BooksNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bookshelf"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PlaceStack"
        component={PlaceNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="truck" color={color} size={size} />
          ),
          title: "Save location"
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
