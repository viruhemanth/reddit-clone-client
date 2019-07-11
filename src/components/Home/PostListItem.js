import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import UpvoteIcon from './UpvoteIcon';
import DownvoteIcon from './DownvoteIcon';

const PostListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: white;
  border: 0.12px solid rgba(0, 0, 0, 0.1);
  z-index: 222;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  width: 5%;
  align-items: center;
  justify-content: space-evenly;
  /* padding: 2px; */
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Votes = styled.text`
  font-size: 12px;
  font-weight: 700;
  font-family: 'IBM Plex Sans';
  color: rgba(0, 0, 0, 0.6);
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  padding-left: 10px;
`;

const Title = styled.text`
  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  font-family: 'IBM Plex Sans';
`;

const Description = styled.text`
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  font-family: 'IBM Plex Sans';
`;

const OtherDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Link = styled(NavLink)`
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  font-family: 'IBM Plex Sans';
  padding: 3px;

  &:hover {
    color: rgba(74, 159, 245, 1);
    cursor: pointer;
  }
`;

function PostListItem() {
  return (
    <PostListItemWrapper>
      <IconContainer>
        <UpvoteIcon />
        <Votes>55</Votes>
        <DownvoteIcon />
      </IconContainer>
      <DetailsContainer>
        <Title>reddit clone</Title>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          laudantium vel, adipisci
        </Description>
        <OtherDetails>
          <Link>3 Comments</Link>
          <Link>/a/Programming</Link>
          <Description>by </Description>
          <Link>Hemant</Link>
          <Description>18d ago</Description>
        </OtherDetails>
      </DetailsContainer>
    </PostListItemWrapper>
  );
}

export default PostListItem;
