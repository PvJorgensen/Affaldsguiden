import { useState } from 'react'
import './App.css'
import { AppRouter } from './Components/AppRouter/AppRouter'
import { Header } from './Components/Header/Header'
import { Nav } from './Components/Nav/Nav'
import { Footer } from './Components/Footer/Footer'

function App() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <AppRouter></AppRouter>
    <Footer></Footer>
    </>
  )
}

export default App
