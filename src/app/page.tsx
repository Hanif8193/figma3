
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'

function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    
    </div>
  )
}

export default Home
