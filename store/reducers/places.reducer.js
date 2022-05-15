import { ADD_PLACE, LOAD_PLACES, DELETE_PLACE } from "../actions/places.actions";
import Place from "../../models/place";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      console.log("ADD_PLACE");
      const newPlace = new Place(
        Date.now(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.lat,
        action.payload.lng
      );
      return {
        ...state,
        places: state.places.concat(newPlace),
      };
    case LOAD_PLACES:
      return {
        ...state,
        places: action.places.map(
          (item) =>
            new Place(
              item.id.toString(),
              item.title,
              item.image,
              item.address,
              item.lat,
              item.lng
            )
        ),
      };
    case DELETE_PLACE:
      const values = state.places.filter((item) => item.id !== action.id);
      return {
        ...state,
        places: values,
      };
    default:
      return state;
  }
};
