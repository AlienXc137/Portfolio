import React from 'react'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Contact from './pages/Contact'// 
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'

const App = () => {
  return (
    <>
    <Navigation/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App