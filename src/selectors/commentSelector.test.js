import { getComments } from './commentSelector';

describe('comment selectors', () => {
  it('gets all the comments', () => {
    const state = {
      comments: {
        3: ['hi', 'there']
      }
    };
    expect(getComments(state, 3)).toEqual(['hi', 'there']);
  });
});
