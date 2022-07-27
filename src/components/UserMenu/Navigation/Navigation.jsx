import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
 return ( <nav>
    <NavLink to="/">Main page</NavLink>
    <NavLink to="/contacts">Contacts</NavLink>
  </nav>
 );
}
