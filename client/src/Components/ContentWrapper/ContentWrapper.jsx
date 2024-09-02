import React from 'react'

export const ContentWrapper = ({title, subtitle, description, children}) => {
    document.title = title;

    if (description) {
        document
            .querySelector('meta[name="description"]')
            .setAttribute('content', description)
    }
  return (
    <>
    {/* <h1>{title}</h1> */}
    {subtitle && <h3>{subtitle}</h3>}
    <div>{children}</div>
    </>
  )
}
