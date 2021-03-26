import React from 'react'
import Hero from './Hero'

const Home = ({menuOpen}) => {
  return (
    <div className={`${menuOpen ? 'container margin' : 'container'}`}>
      <Hero menuOpen={menuOpen}/>
    </div>
  )
}

export default Home
