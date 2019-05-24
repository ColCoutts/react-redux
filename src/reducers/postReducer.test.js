import reducer from './postReducer';
import { addPost, removePost, updatePost } from '../actions/postActions';

describe('post reducer', () => {
  it('handles an addpost', () => {
    const newState = reducer([], addPost('hello', 'colin'));
    expect(newState).toEqual([
      { title: 'hello', body: 'colin' }
    ]);
  });

  it('handles a removePost action', () => {
    const initialState = [
      { title: 'one', body: 'yes' },
      { title: 'two', body: 'maybe' },
      { title: 'three', body: 'no' }
    ];
    const newState = reducer(initialState, removePost(1));
    expect(newState).toEqual([
      { title: 'one', body: 'yes' },
      { title: 'three', body: 'no' }
    ]);
  });

  it('handles an updatePost action', () => {
    const initialState = [
      { title: 'one', body: 'yes' },
      { title: 'two', body: 'maybe' },
      { title: 'three', body: 'no' }
    ];
    const newState = reducer(initialState, updatePost(1, 'Im updated'));
    expect(newState).toEqual([
      { title: 'one', body: 'yes' },
      { title: 'two', body: 'Im updated' },
      { title: 'three', body: 'no' }
    ]);
  });
});
