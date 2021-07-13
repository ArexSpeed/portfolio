import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {Link} from 'react-scroll'
import profile from '../images/heropic.png'
import cv from '../assets/CV-Cichocki.pdf'

const Hero = () => {
  return (
    <div className="hero">
      <section className="section-title">
        <h1 className="section-title-text">
         My Portfolio
        </h1> 
      </section>
      <section className="hero-banner">
        <article className="hero-banner-title">
          <h2 className="hero-banner-hello">Hello, <span>I am</span> Arek</h2>
            <div className="hero-banner-name">
              <h2 className="hero-banner-name-one">FRONTEND</h2>
              <h3 className="hero-banner-name-two">DEVELOPER</h3>
            </div>

            <div className="hero-banner-buttons">
              <a href={cv} download="CV-Cichocki" className="button-cv">
                <span>CV</span>
              </a>
              <a href="https://github.com/ArexSpeed" target="_blank" rel="noreferrer"  className="button-git">
                  <span><AiFillGithub/></span>
              </a>
            </div>

            <div className="hero-banner-desc">
             Welcome ! I am glad that you are here on my porfolio website. Here you can find out about me, my story and see all my projects. So let’s go, I hope you enjoy it ! 
            </div>

              
          </article>
          <article className="hero-image">
            <div className="square">
              <img src={profile} alt="AC" />
            </div>
          </article>
      </section>
      <section className="hero-next">
        <Link 
          to="about" 
          smooth={true}
          duration={500} 
          spy={true}
        >
          <svg className="hero-next-icon" style={{ width: '50px', height: '50px', color: 'white'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </section>
    </div>
  )
}

export default Hero
