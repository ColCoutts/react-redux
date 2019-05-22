import {
  ADD_POST,
  addPost,
  REMOVE_POST,
  removePost
} from './actions/postActions';
import { createStore } from 'redux';

const initialState = {
  title: null,
  body: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, body: action.payload };
    case REMOVE_POST:
      return { ...state, body: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addPost('hi im colin'));
store.dispatch(removePost());

console.log(store.getState());
