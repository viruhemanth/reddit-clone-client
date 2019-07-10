import React from 'react';
import styled from 'styled-components';

import PostListItem from './PostListItem';

const PostListWrapper = styled.div`
  margin-left: 130px;
  margin-top: 40px;
  width: 780px;
  height: 77px;
`;

function PostListContainer() {
  return (
    <PostListWrapper>
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </PostListWrapper>
  );
}

export default PostListContainer;
