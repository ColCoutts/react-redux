import { 
  addDrink,
  addChips,
  addSandwich
} from '../src/actions/lunchActions';

import {
  emptyBox
} from '../src/actions/removeActions';

import reducer from './reducers';
  
import { createStore } from 'redux';

const store = createStore(reducer);

store.dispatch(addDrink('gatorade'));

store.dispatch(addChips('utz'));

store.dispatch(addSandwich('PB&J'));

store.dispatch(emptyBox());

console.log(store.getState());
