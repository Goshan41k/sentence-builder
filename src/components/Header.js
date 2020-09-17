import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = ({ logout }) => {
  return (
    <div className='header'>
      <div className='header-left'>LOGO {localStorage.getItem('uid')} </div>
      <div className='header-right'>
        <NavLink
          to='/home'
          activeClassName='header-nav-link-active'
          className='header-nav-link'
        >
          HOME
        </NavLink>
        <NavLink
          to='/sentence-builder'
          activeClassName='header-nav-link-active'
          className='header-nav-link'
        >
          SENTENCE BUILDER
        </NavLink>
        <NavLink
          to='/admin'
          activeClassName='header-nav-link-active'
          className='header-nav-link'
        >
          ADMIN PANEL
        </NavLink>
        <div className='header-nav-link' onClick={logout}>
          LOGOUT
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func,
};

export default Header;
