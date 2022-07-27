import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css'

export default function Navigation() {
 return ( <nav>
    <NavLink 
    to="/" 
    className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }>Main page</NavLink>
    <NavLink 
    to="/contacts"
    className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
    >Contacts</NavLink>
  </nav>
 );
}
