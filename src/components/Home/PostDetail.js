import React from 'react';
import styled from 'styled-components';
import {
  PostListItemWrapper,
  IconContainer,
  DetailsContainer,
  Description,
  OtherDetails,
  Link,
  Title,
  Votes,
  IconWrapper,
} from './PostListItem';
import UpVoteIcon from './UpvoteIcon';
import DownvoteIcon from './DownvoteIcon';

const PostDetailContainer = styled.div`
  margin-left: 130px;
  margin-top: 40px;
`;

const DescriptionWrapper = styled.div`
  background-color: whitesmoke;
  padding: 10px;
  border: 0.1px solid rgba(0, 0, 0, 0.1);
`;

const VotePercentageWrapper = styled.div`
  height: 30px;
  width: 100%;
  background-color: white;
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  padding: 5px;
`;

const VotePercentage = styled(Description)`
  color: rgba(0, 0, 0, 0.3);
`;

function PostDetail() {
  return (
    <PostDetailContainer>
      <PostListItemWrapper>
        <IconContainer>
          <IconWrapper>
            <UpVoteIcon />
          </IconWrapper>
          <Votes>55</Votes>
          <IconWrapper>
            <DownvoteIcon />
          </IconWrapper>
        </IconContainer>
        <DetailsContainer>
          <Title to="/a/tv/1">reddit clone</Title>
          <DescriptionWrapper>
            <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur laudantium vel, adipisci Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Consectetur laudantium vel, adipisci
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur laudantium vel, adipisci
            </Description>
          </DescriptionWrapper>
          <OtherDetails>
            <Link>3 Comments</Link>
            <Link>/a/Programming</Link>
            <Description>by </Description>
            <Link>Hemant</Link>
            <Description>18d ago</Description>
          </OtherDetails>
        </DetailsContainer>
      </PostListItemWrapper>
      <VotePercentageWrapper>
        <VotePercentage>192 Views | 30% UpVoted</VotePercentage>
      </VotePercentageWrapper>
    </PostDetailContainer>
  );
}

export default PostDetail;
