import reducer from './commentReducer';
import { createComment } from '../actions/commentActions';

describe('comment reducer tests', () => {
  it('handles createCommment action', () => {
    const newState = reducer({}, createComment(1, 'im a comment'));
    console.log('newstate', newState);
    expect(newState).toEqual({ 
      1: ['im a comment']
    });
  });
});
