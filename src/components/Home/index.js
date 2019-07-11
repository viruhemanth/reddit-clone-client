import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import PostListContainer from './PostListContainer';
import Sidebar from './Sidebar';

const Main = styled.main`
  display: flex;
  flex: 1;
  /* flex-direction: flex-start; */
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function Home() {
  return (
    <HomeContainer>
      <Route exact path="/" component={PostListContainer} />
      <Route exact path="/a/:category" render={() => <PostListContainer />} />
      <Route component={Sidebar} />
    </HomeContainer>
  );
}

export default Home;
