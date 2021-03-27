import React from 'react'
import About from './About'
import Hero from './Hero'
import Projects from './Projects'

const Home = ({menuOpen}) => {
  return (
    <div className={`${menuOpen ? 'container margin' : 'container'}`}>
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default Home
