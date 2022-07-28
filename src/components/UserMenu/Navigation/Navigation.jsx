import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
      >
        Main page
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${s.activeLink}` : `${s.link}`
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
