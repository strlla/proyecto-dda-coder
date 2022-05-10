import { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import { COLORS } from "../../assets/constants/colors";
import MapPreview from "../MapPreview";
import { useNavigation, useRoute } from "@react-navigation/native";

const LocationSelector = (props) => {
  const [pickedLocation, setPickedLocation] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const handlerGeoLocation = async () => {
    const isLocationOK = await verifyPermission();
    if (!isLocationOK) return;

    const location = await Location.getCurrentPositionAsync({ timeout: 5000 });

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    props.onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const handlerPickOnMap = async () => {
    const isLocationOK = await verifyPermission();
    if (!isLocationOK) return;

    navigation.navigate("Map");
  };

  const verifyPermission = async () => {
    const status = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status.status != "granted") {
      Alert.alert(
        "Permisos insuficientes.",
        "Necesita dar permisos de ubicacion para utilizar esta aplicacion.",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const mapLocation = route?.params?.mapLocation;

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      props.onLocation(mapLocation);
    }
  }, [mapLocation]);

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>Loading...</Text>
      </MapPreview>
      <View style={styles.actions}>
        <Button
          color={COLORS.PURPLE}
          title="Obtener Ubicacion"
          onPress={handlerGeoLocation}
        />
        <Button
          color={COLORS.PURPLE}
          title="Elegir del mapa"
          onPress={handlerPickOnMap}
        />
      </View>
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
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default LocationSelector;
