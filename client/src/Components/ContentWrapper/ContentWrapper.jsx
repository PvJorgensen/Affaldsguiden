import React from 'react'
import { ContentWrapperStyle } from './ContentWrapper.styled';

export const ContentWrapper = ({title, subtitle, description, bgcolor, children}) => {
    document.title = title;

    if (description) {
        document
            .querySelector('meta[name="description"]')
            .setAttribute('content', description)
    }
    
  return (
    <ContentWrapperStyle $bgcolor={bgcolor}>
      <div>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <div>{children}</div>
      </div>
    </ContentWrapperStyle>
  )
}
