export const getPosts = state => state.posts.map((post, index) => ({
  ...post,
  id: index
}));

export const getPost = (state, id) => getPosts(state)[id];
