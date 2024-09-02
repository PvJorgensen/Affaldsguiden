import React from 'react'
import styles from './newsbox.module.scss'
import backgroundImg from '../../assets/Images/Paintbuckets.png'

export const NewsBox = () => {
  return (
    <>
    <section className={styles.newsboxWrapper}>
        <img src={backgroundImg} alt="" />
    </section>
    </>
  )
}
