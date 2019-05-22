import { 
  ADD_CHIPS,
  ADD_DRINK,
  ADD_SANDWICH,
  EMPTY_BOX,
  addDrink,
  addChips,
  addSandwich,
  emptyBox } from '../src/actions/lunchActions';
import { createStore } from 'redux';

const initialState = {
  drink: [],
  chips: [],
  sandwich: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: [...state.drink, action.payload] };
    case ADD_CHIPS:
      return { ...state, chips: [...state.chips, action.payload] };
    case ADD_SANDWICH:
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    case 'REMOVE_DRINK':
      return { ...state, drink: [...state.drink, action.payload] };
    case EMPTY_BOX:
      return initialState;
    default: 
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addDrink('gatorade'));

store.dispatch(addChips('utz'));

store.dispatch(addSandwich('PB&J'));

store.dispatch(emptyBox());

console.log(store.getState());
