import React from 'react'
import styles from './footer.module.scss'
import Apps from '../../assets/Images/AppStores.png'
import some from '../../assets/Images/SocialMedias.png'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
          <h3>Affaldsguiden</h3>
          <p>Øster Uttrupvej 1A</p>
          <p>9000 Aalborg</p>
      </section>
      <section>
          <img src={Apps} alt="" />
      </section>
      <section>
          <img src={some} alt="" />
      </section>
    </footer>
  )
}
