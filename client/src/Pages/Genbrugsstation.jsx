import React from 'react'
import { ContentWrapper } from '../Components/ContentWrapper/ContentWrapper'
import { RecyclingStation } from '../Components/RecyclingStations/RecyclingStation'

export const Genbrugsstation = () => {
  return (
    <ContentWrapper title="Genbrugsstationer">
      <RecyclingStation />
    </ContentWrapper>
  )
}
