import React from 'react'
import About from './About'
import Contact from './Contact'
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
      <Contact />
    </div>
  )
}

export default Home
