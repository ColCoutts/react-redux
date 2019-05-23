import {
  EMPTY_BOX
} from '../actions/removeActions';

const initialState = {
  drink: [],
  chips: [],
  sandwich: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case EMPTY_BOX:
      return initialState;
    default: 
      return state;
  }
}
