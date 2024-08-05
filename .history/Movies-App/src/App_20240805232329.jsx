import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './Components/Movies'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Watchlist from './Components/Watchlist'
import Pagination from './Components/Pagination'
import {BrowserRouter, Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>

      </Routes>
    </BrowserRouter>
      {/* <Navbar/>
      <Banner/>
      
      <Movies/>
      <Pagination/>
      <Watchlist/> */}
    </>
  )
}

export default App
