import React from 'react'
import styles from './ordertop.module.scss'
export const OrderTopSection = () => {
  return (
    <div className={styles.topWrapper}>
    <section>
        <h2>Hvis i mangler en affaldscontainer i din husstand kan du bestill en ved at udfylde og sende formularen herunder.</h2>
    </section>
    <section>
        <p>Vælg en af følgende container typer:</p>
    </section>
    </div>
  )
}
