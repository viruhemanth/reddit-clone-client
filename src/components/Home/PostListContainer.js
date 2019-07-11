import React from 'react';
import styled from 'styled-components';

import PostListItem from './PostListItem';

const PostListWrapper = styled.div`
  margin-left: 130px;
  margin-top: 40px;
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
