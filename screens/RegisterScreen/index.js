import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import styles from "./styles";
import inputStyles from "../../styles/textInput";
import buttonStyles from "../../styles/button";
import { useDispatch } from "react-redux";
import { COLORS } from "../../assets/constants/colors";
import { signup } from "../../store/actions/auth.action"

function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onChangeInput = (value, type) => {
    if (type === "email") {
      setEmail(value);
    }
    if (type === "password") {
      setPassword(value);
    }

    if (type === "name") {
      setName(value);
    }
  };

  const handleSubmit = () => {
    dispatch(signup(email, password, name));
  };

  return (
    <View style={{ backgroundColor: COLORS.BACKGROUND, flex: 1 }}>
      <View style={inputStyles.textInputContainer}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => onChangeInput(value, "name")}
          style={inputStyles.textInput}
        />
        <View style={inputStyles.textInputContainer}>
          <TextInput
            placeholder="Email"
            onChangeText={(value) => onChangeInput(value, "email")}
            style={inputStyles.textInput}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={(value) => onChangeInput(value, "password")}
            style={inputStyles.textInput}
          />
        </View>
      </View>
      <View style={buttonStyles.buttonContainer}>
        <Button
          onPress={() => handleSubmit()}
          title="Register"
          color={COLORS.PURPLE}
        />
      </View>
      <TouchableOpacity
        style={styles.haveAccountButtonStyle}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.haveAccountTextStyle}>
          Already have an account?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;
