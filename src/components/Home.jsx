import React from 'react'
import About from './About'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

const Home = ({menuOpen}) => {
  return (
    <div className={`${menuOpen ? 'container margin' : 'container'}`}>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default Home
