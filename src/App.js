import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

import Navbar from './components/Navbar';
import Home from './components/Home';
import GlobalStyles from './globalStyle';
import theme from './theme';
import Login from './components/Home/Login';
import Signup from './components/Home/Signup';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={createBrowserHistory()}>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
