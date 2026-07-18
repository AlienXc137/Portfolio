import React from 'react'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
    <Navigation/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<h1>About</h1>} />
      <Route path='/contact' element={<h1>Contact</h1>} />
      <Route path='/projects' element={<h1>Projects</h1>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App