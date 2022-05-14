import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { COLORS } from "../../assets/constants/colors";
import { addPlace } from "../../store/actions/places.actions";
import ImageSelector from "../../components/ImageSelector";
import LocationSelector from "../../components/LocationSelector";

const NewPlaceScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const handlerTitleChange = (text) => setTitle(text);
  const handlerImageChange = (img) => setImage(img);
  const handlerLocation = (loc) => setLocation(loc);

  const handlerSave = () => {
    if (location) {
      dispatch(addPlace(title, image, location));
      // navigation.navigate("Direcciones");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Select your address for the shipping</Text>
        <TextInput style={styles.input} onChangeText={handlerTitleChange} />
        <ImageSelector onImage={handlerImageChange} />
        <LocationSelector onLocation={handlerLocation} />
        <Button
          title="Save direction"
          color={COLORS.PURPLE}
          onPress={handlerSave}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NewPlaceScreen;
