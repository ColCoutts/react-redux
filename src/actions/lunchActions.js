export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

export const ADD_CHIPS = 'ADD_CHIPS';
export const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});

export const ADD_SANDWICH = 'ADD_SANDWICH';
export const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});

export const EMPTY_BOX = 'EMPTY_BOX';
export const emptyBox = () => ({
  type: EMPTY_BOX
});

// export const REMOVE_DRINK = 'REMOVE_DRINK';
// export const removeDrink = drinkArray => {
 
// };
