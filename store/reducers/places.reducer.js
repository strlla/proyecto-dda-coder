import { ADD_PLACE } from "../actions/places.actions";
import Place from "../../models/place";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  console.log("Reducer...");
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
    default:
      return state;
  }
};
