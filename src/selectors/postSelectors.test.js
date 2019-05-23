import { getPosts, getPost } from './postSelectors';

describe('post selectors', () => {
  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'hi', body: 'what' },
        { title: 'two', body: 'what the' },
        { title: 'hi three', body: 'what what' }
      ]
    };

    expect(getPosts(state)).toEqual(
      [
        { id: 0, title: 'hi', body: 'what' },
        { id: 1, title: 'two', body: 'what the' },
        { id: 2, title: 'hi three', body: 'what what' }
      ]
    );
  });
});
