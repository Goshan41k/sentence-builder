import React, { useEffect } from 'react';

import { useHistory, Route } from 'react-router-dom';

import Header from '../components/Header';
import SentenceBuilder from '../components/SentenceBuilder';
import Home from '../components/Home';
import AdminPanel from '../components/AdminPanel';

import firebaseAPI from '../firebase';
import './homePage.scss';

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('uid') === null) {
      history.push('/');
    }
  });

  const logoutHandler = () => {
    firebaseAPI
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('uid');
      })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <>
      <div className='app'>
        <Header logout={logoutHandler} />
        <Route path='/home' component={Home} />
        <Route path='/sentence-builder' component={SentenceBuilder} />
        <Route path='/admin' component={AdminPanel} />
      </div>
    </>
  );
};

export default HomePage;
