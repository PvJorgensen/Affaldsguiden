import { useState } from 'react'
import './App.css'
import { AppRouter } from './Components/AppRouter/AppRouter'
import { Layout } from './Components/Layout/Layout'

function App() {
  return (
    <>
    <Layout></Layout>
    <AppRouter></AppRouter>
    </>
  )
}

export default App
