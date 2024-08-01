import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './Components/Movies'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Watchlist from './Components/Watchlist'
import Pagination from './Components/Pagination'

function App() {
  

  return (
    <>
      <Navbar/>
      <Banner/>
      <Watchlist/>
      <Movies/>
      <Pagination/>


    </>
  )
}

export default App
