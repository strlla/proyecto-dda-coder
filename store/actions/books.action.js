export const SELECT_BOOK = "SELECT_BOOK";
export const FILTERED_BOOK = "FILTERED_BOOK";

export const selectBook = (id) => ({
        type: SELECT_BOOK,
        bookId: id
})

export const filteredBook = (id) => ({
        type: FILTERED_BOOK,
        genredId: id
})