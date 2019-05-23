import { 
  ADD_CHIPS,
  ADD_DRINK,
  ADD_SANDWICH,
  addDrink,
  addChips,
  addSandwich
} from './lunchActions';

import {
  EMPTY_BOX,
  emptyBox
} from './removeActions';

describe('lunchbox actions', () => {
  it('tests our action creators', () => {
    expect(addDrink('water')).toEqual({ type: ADD_DRINK, payload: 'water' });
  });

  it('tests our action creators', () => {
    expect(addChips('utz')).toEqual({ type: ADD_CHIPS, payload: 'utz' });
  });

  it('tests our action creators', () => {
    expect(addSandwich('cheese')).toEqual({ type: ADD_SANDWICH, payload: 'cheese' });
  });

  it('tests our action creators', () => {
    expect(emptyBox()).toEqual({ type: EMPTY_BOX });
  });
});
