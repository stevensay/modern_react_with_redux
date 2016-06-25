import { SELECT_BOOK } from '../actions/index';

export default (state=null, action) => {
  switch (action.type) {
  case SELECT_BOOK:
    return action.payload;
  }
  return state;
}