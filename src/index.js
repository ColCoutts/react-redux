import {
  addPost,
  removePost
} from './actions/postActions';

import reducer from './reducers';

import { createStore } from 'redux';

const store = createStore(reducer);

// store.dispatch(addPost({ title: 'colin', body: 'hi im colin' }));
store.dispatch(removePost());

console.log(store.getState());
