import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {SiSass} from 'react-icons/si'

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <section className="section-title next">
        <h1 className="section-title-text">
          MY PROJECTS
        </h1> 
      </section>
      <section className="projects-boxes">
        <article className="projects-box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="projects-box-logo">
              <AiFillStar />
          </div>
          <div className="projects-box-info">
            <div className="projects-box-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non quibusdam cum velit beatae assumenda vel odio, error quos porro. Nesciunt nulla aliquam quasi amet accusantium sapiente atque quaerat? Aliquid.
            </div>
            <div className="projects-box-info-buttons">
              <SiSass className="projects-box-info-icon" />
              <button className="projects-box-info-button">More</button>
              <button className="projects-box-info-button">Site</button>
            </div>
          </div>
        </article>
        
      </section>
    </div>
  )
}

export default Projects
