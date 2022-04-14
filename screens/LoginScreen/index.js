import React from "react";
import { View, TextInput } from "react-native";

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
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={() => {}}
          style={inputStyles.textInput}
        />
      </View>
      <View style={styles.registerButtonContainer}>
        <Button onPress={() => {}} title="Iniciar sesion" color="#6A23B0" />
      </View>
    </View>
  );
}

export default Login;
