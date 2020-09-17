import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import firebaseAPI from '../firebase';
import mountains from '../assets/mountains.png';
import emailIcon from '../assets/email-icon.png';
import passwordIcon from '../assets/password-icon.png';
import nameIcon from '../assets/name-icon.png';
import './initialPage.scss';

const InitialPage = () => {
  const history = useHistory();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [isLoginForm, isLoginFormSwitch] = useState(true);

  const registrationHandler = () => {
    firebaseAPI
      .auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => authorizationHandler())
      .then(() => {
        firebaseAPI
          .database()
          .ref(`users/${firebaseAPI.auth().currentUser.uid}`)
          .set({
            id: firebaseAPI.auth().currentUser.uid,
            email: firebaseAPI.auth().currentUser.email,
            name: userName,
            surname: userSurname,
          });
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  const authorizationHandler = () => {
    firebaseAPI
      .auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        localStorage.setItem('uid', firebaseAPI.auth().currentUser.uid);
      })
      .then(() => history.push('/home'))
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <div className='initial'>
      <form className='initial-form'>
        <div className='initial-form-image'>
          <img className='initial-form-image-img' src={mountains} alt='#' />
        </div>
        <div className='initial-form-fields'>
          <div className='initial-form-fields-header'>
            ReactJS
            <span className='initial-form-fields-header-span'>
              english trainer
            </span>
          </div>
          <div className='initial-form-fields-text'>
            {isLoginForm
              ? "Welcome back! Log in to your account to view tasks. Have no account? Let's "
              : 'Get registered to start work with app! Do you already have an account? '}
            <span
              className='initial-form-fields-text-span'
              onClick={() => {
                isLoginFormSwitch(!isLoginForm);
              }}
            >
              {isLoginForm ? 'Register' : 'Log in'}
            </span>
          </div>
          <div className='initial-form-fields-record'>
            <img
              className='initial-form-fields-record-img'
              src={emailIcon}
              alt='#'
            />
            <input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className='initial-form-fields-record-input'
              type='text'
              placeholder='Email'
            />
          </div>
          <div className='initial-form-fields-record'>
            <img
              className='initial-form-fields-record-img'
              src={passwordIcon}
              alt='#'
            />
            <input
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className='initial-form-fields-record-input'
              type='password'
              placeholder='Password'
            />
          </div>
          {!isLoginForm ? (
            <>
              <div className='initial-form-fields-record'>
                <img
                  className='initial-form-fields-record-img'
                  src={nameIcon}
                  alt='#'
                />
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className='initial-form-fields-record-input'
                  type='text'
                  placeholder='Name'
                />
              </div>
              <div className='initial-form-fields-record'>
                <img
                  className='initial-form-fields-record-img'
                  src={nameIcon}
                  alt='#'
                />
                <input
                  value={userSurname}
                  onChange={(e) => setUserSurname(e.target.value)}
                  className='initial-form-fields-record-input'
                  type='text'
                  placeholder='Surname'
                />
              </div>
            </>
          ) : null}

          {isLoginForm ? (
            <div className='initial-form-btn' onClick={authorizationHandler}>
              Log in
            </div>
          ) : (
            <div className='initial-form-btn' onClick={registrationHandler}>
              Register
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default InitialPage;
