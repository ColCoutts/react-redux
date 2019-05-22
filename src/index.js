import { createStore } from 'redux';


const initialState = {
  drink: [],
  chips: [],
  sandwich: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: [...state.drink, action.payload] };
    case 'ADD_CHIPS':
      return { ...state, chips: [...state.chips, action.payload] };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    case 'EMPTY_BOX':
      return initialState;
    case 'DRINK_ARRAY':
      return { ...state, drink: [...state.drink, action.payload] };
    default: 
      return state;
    
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'soda-pop'
});

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Utz'
});

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'PB&J'
});

// store.dispatch({
//   type: 'EMPTY_BOX'
// });

store.dispatch({
  type: 'DRINK_ARRAY',
  payload: 'milk'
});

store.dispatch({
  type: 'DRINK_ARRAY',
  payload: 'juice'
});

store.dispatch({
  type: 'DRINK_ARRAY',
  payload: 'Mallorts'
});




console.log(store.getState());
