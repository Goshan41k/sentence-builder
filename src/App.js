import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import InitialPage from './pages/InitialPage';
import './App.scss';

const App = () => {
  return (
    <>
      <Route exact path='/' component={InitialPage} />
      <HomePage />
    </>
  );
};

export default App;
