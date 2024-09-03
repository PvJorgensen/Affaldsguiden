import React from 'react'
import { NewsBox } from '../Components/NewsBox/NewsBox'
import { Banner } from '../Components/Banner/Banner'
import { TipsBox } from '../Components/TipsBox/TipsBox'
import { ContentWrapper } from '../Components/ContentWrapper/ContentWrapper'


export const Forside = () => {
  return (
  <>
  <NewsBox></NewsBox>
  <Banner></Banner>
  <TipsBox></TipsBox>
  </>  
  )
}
