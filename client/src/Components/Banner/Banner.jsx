import React from 'react'
import arrow from '../../assets/Arrow.png'
import styles from './banner.module.scss'
import bannerImg from '../../assets/Images/affald-skov-1.jpg'
import { NavLink } from 'react-router-dom'

export const Banner = () => {
  return (
    <section className={styles.banner}>
        <div className={styles.textWrapper}>
        <h2>Hvad sker der med <br /><span>dit sorterede affald?</span></h2>
        <p>Dit affald gør en forskel, når ressourcerne skal bruges igen. Jo bedre, du sorterer, jo mere kommer der ud af det</p>
        <NavLink to='/Artikler'><img className={styles.arrow} src={arrow} alt="" /></NavLink>
        </div>
        <div className={styles.imgWrapper}>
            <img src={bannerImg} alt="" />
        </div>
    </section>
  )
}
