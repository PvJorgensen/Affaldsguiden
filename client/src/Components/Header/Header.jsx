import React from 'react'
import logo from '../../assets/Images/logo.png'
import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'
import loginIcon from '../../assets/loginicon.png'

export const Header = () => {
  return (
    <header>
        <section className={styles.logoContainer}>
        <NavLink to="/"><img src={logo} alt="header logo" /></NavLink>
        </section>
        <section className={styles.btnContainer}>
            <NavLink to='/Login'>Login <img src={loginIcon} alt="login icon" /></NavLink>
        </section>
    </header>
  )
}
