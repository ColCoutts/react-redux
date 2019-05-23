export const getPosts = state => state.post.map((post, id) => ({
  ...post,
  id
}));

export const getPost = (state, id) => getPosts(state)[id];
