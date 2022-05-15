import * as FileSystem from "expo-file-system";
import { MAP } from "../../assets/constants/map";
import { fetchAddress, insertAddress, deleteAddress } from "../../db";

export const ADD_PLACE = "ADD_PLACE";
export const LOAD_PLACES = "LOAD_PLACES";
export const DELETE_PLACE = "DELETE_PLACE";

export const addPlace = (title, image, location) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP.API_KEY}`
    );

    if (!response.ok)
      throw new Error("No se ha podido comunicar con la Google Maps API");

    const resData = await response.json();
    if (!resData.results)
      throw new Error(
        "No se han encontrado datos para las coordenadas seleccionadas."
      );
    const address = resData.results[0].formatted_address;
    console.log(address);

    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      const result = await insertAddress(
        title,
        Path,
        address,
        location.lat,
        location.lng
      );

      dispatch({
        type: ADD_PLACE,
        payload: {
          id: result.insertId,
          title,
          address,
          image: Path,
          lat: location.lat,
          lng: location.lng,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async dispatch => {
      try {
          const result = await fetchAddress();
          dispatch({type: LOAD_PLACES, places: result.rows._array });
      }catch(err) {
          throw err;
      }
  }
}

export const deletePlace = (id) => {
  return async dispatch => {
      try {
          await deleteAddress(id);
          dispatch({type: DELETE_PLACE, id});
      } catch(err) {
          throw err;
      }
  }
} 
