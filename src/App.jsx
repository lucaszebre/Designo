import './App.css'
import Home from './components/Pages/Home/Home.jsx'
import WebDesign from './components/Pages/WebDesign'
import AppDesign from './components/Pages/AppDesign'
import Graphic from './components/Pages/Graphic'
import Company from './components/Pages/Company'
import Locations from './components/Pages/Locations'
import Contact from './components/Pages/Contact'

import { HashRouter, Routes, Route } from 'react-router-dom';


import React from 'react'

function App() {

  return (
    <>
    <HashRouter basename='/'>  
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/webdesign" element={<WebDesign />}/>
        <Route  path="/appdesign" element={<AppDesign />}/>
        <Route  path="/graphicdesign" element={<Graphic />}/>
        <Route  path="/company" element={<Company />}/>
        <Route  path="/locations" element={<Locations />}/>
        <Route  path="/contact" element={<Contact />}/>
      </Routes>
    </HashRouter> 
    </>
  )
}

export default App
