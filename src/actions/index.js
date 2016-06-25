export const SELECT_BOOK = 'SELECT_BOOK';

// selectBook is an ActionCreator, it needs to return an action,
// an object with a type property.
export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  }
}