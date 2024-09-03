import React from 'react'
import styles from './contentwrapper.module.scss'

export const ContentWrapper = ({title, subtitle, description, children}) => {
    document.title = title;

    if (description) {
        document
            .querySelector('meta[name="description"]')
            .setAttribute('content', description)
    }
  return (
    <>
    <div className={styles.contentWrapper}>
      <div className={styles.contentHolder}>
    <h1>{title}</h1>
    {subtitle && <h2 className={styles.subTitle}>{subtitle}</h2>}
    <div>{children}</div>
      </div>
    </div>
    </>
  )
}
