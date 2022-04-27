import { GENRES } from "../../data/genre";
import { SELECT_GENRE } from "../actions/genre.action";

const initialState = {
  genres: GENRES,
  selected: null,
};

const GenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      console.log("SELECT_GENRE " + action.id);
      const indexGenre = state.genres.findIndex(
        (gen) => gen.id === action.id
      );
      if (indexGenre === -1) return state;
      return { ...state, selected: state.genres[indexGenre] };
    default:
      return state;
  }
};

export default GenreReducer;
