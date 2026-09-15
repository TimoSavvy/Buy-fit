import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Checkout from './Pages/Checkout'
import Navbar from './Components/Navbar'


function App() {
 

  return (
    <>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/Auth" element = {<Auth />} />
        <Route path = "/Checkout" element = {<Checkout />} />
      </Routes> 
      
      </div>  
     
    </>
  )
}

export default App
