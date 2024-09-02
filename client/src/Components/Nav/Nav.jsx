import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss'; // Ensure this is imported correctly

export const Nav = () => {
  return (
    <nav className={styles.navMain}>
      <ul>
        <li>
          <NavLink 
            exact 
            to='/' 
            activeClassName={styles.active} 
            style={({ isActive }) => isActive ? { backgroundColor: '#D6BD98' } : {}}
          >
            Forside
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/Sorteringsguide' 
            activeClassName={styles.active} 
            style={({ isActive }) => isActive ? { backgroundColor: '#D6BD98' } : {}}
          >
            Sorteringsguide
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/Genbrugsstaioner' 
            activeClassName={styles.active} 
            style={({ isActive }) => isActive ? { backgroundColor: '#D6BD98' } : {}}
          >
            Genbrugsstaioner
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/Artikler' 
            activeClassName={styles.active} 
            style={({ isActive }) => isActive ? { backgroundColor: '#D6BD98' } : {}}
          >
            Artikler
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/Bestil' 
            activeClassName={styles.active} 
            style={({ isActive }) => isActive ? { backgroundColor: '#D6BD98' } : {}}
          >
            Bestil Container
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
