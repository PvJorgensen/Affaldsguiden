import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss'; // Ensure this is imported correctly

export const Nav = () => {
  return (
    <nav className={styles.navMain}>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? styles.active : undefined}
            style={({ isActive }) => isActive ? { backgroundColor: '#D6BD98' } : {}}
          >
            Forside
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Sorteringsguide'
            className={({ isActive }) => isActive ? styles.active : undefined}
            style={({ isActive }) => isActive ? { backgroundColor: '#D6BD98' } : {}}
          >
            Sorteringsguide
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Genbrugsstaioner'
            className={({ isActive }) => isActive ? styles.active : undefined}
            style={({ isActive }) => isActive ? { backgroundColor: '#D6BD98' } : {}}
          >
            Genbrugsstaioner
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Artikler'
            className={({ isActive }) => isActive ? styles.active : undefined}
            style={({ isActive }) => isActive ? { backgroundColor: '#D6BD98' } : {}}
          >
            Artikler
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Bestil'
            className={({ isActive }) => isActive ? styles.active : undefined}
            style={({ isActive }) => isActive ? { backgroundColor: '#D6BD98' } : {}}
          >
            Bestil Container
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
