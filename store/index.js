import { createStore, combineReducers } from 'redux';

import GenreReducer from './reducers/genre.reducer';
import BooksReducer from './reducers/books.reducer';

const RootReducer = combineReducers({
    genres: GenreReducer,
    books: BooksReducer
});

export default createStore(RootReducer);