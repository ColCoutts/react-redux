import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, removePost }) {
  const postArray = posts.map(post => (
    <li key={post.id}>
      <Post removePost={removePost} post={post} />
    </li>
  ));

  return (
    <ul>
      {postArray}
    </ul>
  );
}

Posts.propTypes = {
  removePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

export default Posts;
