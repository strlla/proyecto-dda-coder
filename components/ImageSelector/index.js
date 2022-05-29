import React, { useState } from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../../assets/constants/colors";

const ImageSelector = (props) => {
  const [pickerURI, setPickerURI] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Access not granted",
        "We need permission to use the app",
        [{ text: "Ok" }]
      );
      return false;
    }

    return true;
  };
  const handlerTakeImage = async () => {
    const isCameraOK = await verifyPermissions();
    if (!isCameraOK) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickerURI(image.uri);
    props.onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickerURI ? (
          <Text>No hay imagen seleccionada </Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickerURI }} />
        )}
      </View>
      <Button
        title="Tomar Foto"
        color={COLORS.PURPLE}
        onPress={handlerTakeImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.PURPLE,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageSelector;
