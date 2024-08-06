import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Projects from './Component/Projects'
import Education from './Component/Education'
import Footer from './Component/Footer'

import './App.css'
import Contact from './Component/Contact'
 const App = () => {
  return (
    <div className='body'>
      <Navbar/>
       <Home />
       <About/>
       <Education />
       <Projects />
       <Contact />
       <Footer />
      </div>
  )
}

export default App
