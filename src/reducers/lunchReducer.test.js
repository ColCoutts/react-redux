import reducer from './lunchReducer';
import { addDrink } from '../actions/lunchActions';

describe('lunch reducer', () => {
  it('handles ADD_DRINK', () => {
    const initialState = {
      drink: []
    };

    const updatedState = reducer(initialState, addDrink('water'));

    expect(updatedState).toEqual({
      drink: ['water']
    });
  });
});
