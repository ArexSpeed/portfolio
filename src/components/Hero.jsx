import React from 'react'
import Tilt from "react-tilt";

const Hero = () => {
  return (
    <div>
      <section className="section-title">
        <h1 className="section-title-text">
          MY PORTFOLIO
        </h1> 
      </section>
      <section className="hero-banner">

      </section>
      <section className="hero-desc">
        <article className="hero-desc-title">
        <Tilt className="hero-desc-name">
            <h2 className="hero-desc-name-one name">AREK</h2>
            <h3 className="hero-desc-name-two name">CICHOCKI</h3>
          </Tilt>
          <div className="hero-desc-logo">A9</div>
          <Tilt className="hero-desc-name">
            <h2 className="hero-desc-name-one software">SOFTWARE</h2>
            <h3 className="hero-desc-name-two software">DEVELOPER</h3>
          </Tilt>
        </article>
        <article className="hero-desc-info">
        Welcome ! I am glad that you are here on my porfolio website. Here you can know me a little get knowledge about my story and see all my projects. So let’s go, I hope you enjoy it ! 
        </article>
      </section>
    </div>
  )
}

export default Hero
