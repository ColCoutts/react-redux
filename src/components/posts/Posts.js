import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts }) {
  const postArray = posts.map(post => {
    <li>
      <Post post={post} />
    </li>;
  });

  return (
    <ul>
      {postArray}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
