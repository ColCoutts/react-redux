import { CREATE_COMMENT, createComment } from './commentActions';

describe('commentAction actions', () => {
  it('creates a comment action', () => {
    expect(createComment(0, 'i have opinions!')).toEqual({
      type: CREATE_COMMENT,
      payload: { postId: 0, comment: 'i have opinions!' }
    });
  });
});
