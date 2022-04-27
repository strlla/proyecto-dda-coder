import { BOOKS } from "../../data/books";
import { SELECT_BOOK, FILTERED_BOOK } from "../actions/books.action";

const initialState = {
  books: BOOKS,
  filteredBook: [],
  selected: null,
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BOOK:
      console.log("SELECTED BOOK", action.bookId);
      return {
        ...state,
        selected: state.books.find((book) => book.id === action.bookId),
      };
    case FILTERED_BOOK:
      console.log("FILTERED BOOK", action.genreId);
      return {
        ...state,
        filteredBook: state.books.filter(
          (book) => book.genreId === action.genreId
        ),
      };
    default:
      return state;
  }
};

export default BooksReducer;
