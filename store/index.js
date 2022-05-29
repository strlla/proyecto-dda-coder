import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./reducers/cart.reducer";
import PlacesReducer from "./reducers/places.reducer";
import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
  places: PlacesReducer,
  auth: AuthReducer,
  cart: CartReducer
});

export default createStore(RootReducer, applyMiddleware(thunk))
