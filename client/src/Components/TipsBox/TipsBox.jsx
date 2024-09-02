import React from 'react'
import sortering from '../../assets/Images/affaldssortering-1.jpg'
import arrow from '../../assets/Arrow.png'
import styles from './tips.module.scss'

export const TipsBox = () => {
  return (
    <div className={styles.tipsBox}>
        <div className={styles.imgWrapper}>
        <img src={sortering} alt="" />
        </div>
        <div className={styles.right}>
        <div className={styles.topText}>
            <h3>Få gode idéer til, hvordan du gør det nemt at sortere affaldet hjemme hos dig.</h3>
        </div>
        <div className={styles.botText}>
            <h2>Tips og tricks til at <br /><span>sortere dit affald</span></h2>
            <img src={arrow} alt="arrow" />
        </div>
        </div>
    </div>
  )
}
