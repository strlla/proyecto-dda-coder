import React from "react";
import { View, TextInput, Button } from "react-native";
import inputStyles from "../../styles/textInput";
import buttonStyles from "../../styles/button";

function Login({ navigation }) {
  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <View style={inputStyles.textInputContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={() => {}}
          style={inputStyles.textInput}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={() => {}}
          style={inputStyles.textInput}
        />
      </View>
      <View style={buttonStyles.buttonContainer}>
        <Button onPress={() => navigation.navigate("Root")} title="Login" color="#6A23B0" />
      </View>
    </View>
  );
}

export default Login;
