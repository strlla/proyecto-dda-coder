import React from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import styles from "./styles";
import inputStyles from "../../styles/textInput";
import buttonStyles from "../../styles/button";

function Register({ navigation }) {
  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <View style={inputStyles.textInputContainer}>
        <TextInput
          placeholder="Nombre"
          onChangeText={() => {}}
          style={inputStyles.textInput}
        />
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
      </View>
      <View style={buttonStyles.buttonContainer}>
        <Button onPress={() => navigation.navigate("Root")} title="Registrarse" color="#6A23B0" />
      </View>
      <TouchableOpacity
        style={styles.haveAccountButtonStyle}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.haveAccountTextStyle}>¿Ya tienes una cuenta?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;
