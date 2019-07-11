import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  min-height: 350px;
  width: 250px;
  background-color: white;
  margin-left: 80px;
  margin-top: 40px;
  transition: all 0.1s;
`;

const CreatePost = styled.button`
  height: 40px;
  background-color: rgba(74, 159, 245, 1);
  color: white;
  outline: none;
  border: 1px solid rgba(6, 159, 249, 1);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  width: 100%;
  font-family: 'IBM Plex Sans';
  letter-spacing: 1px;
`;

const CategoryHeader = styled.div`
  height: 40px;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Category = styled(NavLink).attrs({
  activeStyle: {
    backgroundColor: 'whitesmoke',
    borderLeft: '2px solid rgba(74, 159, 245, 1)',
  },
})`
  min-height: 40px;
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  text-transform: lowercase;
  text-decoration: none;
  text-align: start;

  &:hover {
    color: rgba(74, 159, 245, 1);
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <CreatePost>Create Post</CreatePost>
      <CategoryHeader>Categories</CategoryHeader>
      <Category exact to="/">
        all
      </Category>
      <Category to="/a/movies">movies</Category>
      <Category to="/a/books">books</Category>
      <Category to="/a/tv">tv</Category>
    </SidebarContainer>
  );
}

export default Sidebar;
