import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import UpvoteIcon from './UpvoteIcon';
import DownvoteIcon from './DownvoteIcon';

export const PostListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 780px;
  min-height: 77px;
  height: auto;
  background-color: white;
  border: 0.12px solid rgba(0, 0, 0, 0.1);
  z-index: 222;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: 5%;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border: 0.1px solid rgba(0, 0, 0, 0.1);
`;

export const IconWrapper = styled.div`
  padding-top: 5px;
`;

export const Votes = styled.text`
  font-size: 12px;
  font-weight: 700;
  font-family: 'IBM Plex Sans';
  color: rgba(0, 0, 0, 0.6);
  padding: 2px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  /* padding-left: 10px; */
`;

export const Title = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  font-family: 'IBM Plex Sans';
  text-decoration: none;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
`;

export const Description = styled.text`
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  font-family: 'IBM Plex Sans';
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
`;

export const OtherDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
`;

export const Link = styled(NavLink)`
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
        <IconWrapper>
          <UpvoteIcon />
        </IconWrapper>
        <Votes>55</Votes>
        <IconWrapper>
          <DownvoteIcon />
        </IconWrapper>
      </IconContainer>
      <DetailsContainer>
        <Title to="/a/tv/1">reddit clone</Title>
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
