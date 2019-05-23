import { 
  ADD_CHIPS,
  ADD_DRINK,
  ADD_SANDWICH
} from '../actions/lunchActions';
  
const initialState = {
  drink: [],
  chips: [],
  sandwich: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: [...state.drink, action.payload] };
    case ADD_CHIPS:
      return { ...state, chips: [...state.chips, action.payload] };
    case ADD_SANDWICH:
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    default: 
      return state;
  }
}
