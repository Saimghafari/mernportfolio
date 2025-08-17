import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import './Components/Navbar.css'
import Hero from './Hero'
import './Hero.css'
import About from './About'
import './About.css'
import Services from "./Services"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home'
import './Services.css'
import Footer from './Footer'




function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
       
        <Footer />
      </Router>
    </>
  )
}

export default App
