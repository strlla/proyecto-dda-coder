import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import inputStyles from "../../styles/textInput";
import buttonStyles from "../../styles/button";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/auth.action";
import { COLORS } from "../../assets/constants/colors";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onChangeInput = (value, type) => {
    if (type === "email") {
      setEmail(value);
    }
    if (type === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    dispatch(signin(email, password));
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
      <View style={inputStyles.textInputContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={(value) => onChangeInput(value, "email")}
          style={inputStyles.textInput}
          keyboardType="email-address"
          maxLength={60}
          type="email"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={(value) => onChangeInput(value, "password")}
          style={inputStyles.textInput}
        />
      </View>
      <View style={buttonStyles.buttonContainer}>
        <Button
          onPress={() => handleSubmit()}
          title="Login"
          color={COLORS.PURPLE}
        />
      </View>
    </View>
  );
}

export default Login;
