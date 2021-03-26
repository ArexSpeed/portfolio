import React from 'react'
import About from './About'
import Hero from './Hero'

const Home = ({menuOpen}) => {
  return (
    <div className={`${menuOpen ? 'container margin' : 'container'}`}>
      <Hero />
      <About />
    </div>
  )
}

export default Home
