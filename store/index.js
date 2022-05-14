import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import GenreReducer from "./reducers/genre.reducer";
import BooksReducer from "./reducers/books.reducer";
import PlacesReducer from "./reducers/places.reducer";

const RootReducer = combineReducers({
  genres: GenreReducer,
  books: BooksReducer,
  places: PlacesReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk))
