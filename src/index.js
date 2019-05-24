import {
  addPost,
  removePost
} from './actions/postActions';

import {
  createComment
} from './actions/commentActions';

import reducer from './reducers';
import { createStore } from 'redux';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch(removePost());
store.dispatch(addPost('colin', 'hi im colin'));
store.dispatch(createComment(0, 'hi im a post'));

console.log(store.getState());
