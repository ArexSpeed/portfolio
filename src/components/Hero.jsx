import React from 'react'
import Tilt from "react-tilt";
import {AiFillGithub} from 'react-icons/ai'
import logo from '../images/herologo.png'
import profile from '../images/heropic.png'
import cv from '../assets/CV-Cichocki.pdf'

const Hero = () => {
  return (
    <div className="hero">
      <section className="section-title">
        <h1 className="section-title-text">
          MY PORTFOLIO
        </h1> 
      </section>
      <section className="hero-banner">
        <article className="hero-banner-title">
          <Tilt className="hero-banner-name">
              <h2 className="hero-banner-name-one name">AREK</h2>
              <h3 className="hero-banner-name-two name">CICHOCKI</h3>
            </Tilt>
            <div className="hero-banner-logo">
              <img src={logo} alt="AC95" className="hero-banner-logo-img" />
            </div>
            <Tilt className="hero-banner-name">
              <h2 className="hero-banner-name-one software">SOFTWARE</h2>
              <h3 className="hero-banner-name-two software">DEVELOPER</h3>
            </Tilt>
          </article>
          <article className="hero-banner-img">
              <a href="https://github.com/ArexSpeed" target="_blank" className="hero-banner-img-box logo">
                <span><AiFillGithub/></span>
              </a>
              <a href={cv} download="CV-Cichocki" className="hero-banner-img-box cv">
              <span>CV</span>
              </a>
              <div className="hero-banner-img-box pic">
                  <img src={profile} alt="" />
              </div>
          </article>
      </section>
      <section className="hero-desc">
        Welcome ! I am glad that you are here on my porfolio website. Here you can know me a little get knowledge about my story and see all my projects. So let’s go, I hope you enjoy it ! 
      </section>
    </div>
  )
}

export default Hero
