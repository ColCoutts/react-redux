export const ADD_POST = 'ADD_POST';
export const addPost = body => ({
  type: ADD_POST,
  payload: body
});

export const REMOVE_POST = 'REMOVE_POST';
export const removePost = () => ({
  type: REMOVE_POST
});
