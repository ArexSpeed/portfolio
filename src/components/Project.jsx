import React, {useState} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {SiSass} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {BiShow} from 'react-icons/bi'
import {GiReturnArrow} from 'react-icons/gi'
import logo_axoffice from '../images/logolight.png'
import screen_axoffice from '../images/budgetsdark.png'


import ReactCardFlip from 'react-card-flip';

const Project = () => {
  const [flipped, setFlipped] = useState(false)
  const logo = <SiSass className="projects-box-info-button-icon" style={{fontSize: '25px'}} />

  return (
    <article className="projects-box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="projects-box-logo">
          <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
          <div className="flip">
          <img src={logo_axoffice} alt="" className="flip-logo" />
          <button onClick={() => setFlipped(!flipped)} className="flip-button">
            <GiReturnArrow className="flip-button-icon"/>
          </button>
          </div>

          <div className="flip">
          <img src={screen_axoffice} alt="" className="flip-logo"/>
          <button onClick={() => setFlipped(!flipped)} className="flip-button">
            <GiReturnArrow className="flip-button-icon"/>
          </button>
          </div>
          </ReactCardFlip>
              {/* <AiFillStar /> */}
          </div>
          <div className="projects-box-info">
            <div className="projects-box-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non quibusdam cum velit beatae assumenda vel odio, error quos porro. Nesciunt nulla aliquam quasi amet accusantium sapiente atque quaerat? Aliquid.
            </div>
            <div className="projects-box-info-buttons">
            <div className="projects-box-info-button">
              {logo}
              <p className="projects-box-info-button-name">Sass</p>
            </div>
            <div className="projects-box-info-button">
              <SiReact className="projects-box-info-button-icon" style={{fontSize: '25px'}} />
              <p className="projects-box-info-button-name">React</p>
            </div>
            <a href="#" target="_blank" referrerPolicy="no-referrer" className="projects-box-info-button">
              <BiShow className="projects-box-info-button-icon" style={{fontSize: '25px'}} />
              <p className="projects-box-info-button-name">Site</p>
            </a>

              {/* <SiSass className="projects-box-info-icon" />
              
              <button className="projects-box-info-button">More</button>
              <button className="projects-box-info-button">Site</button> */}
            </div>
          </div>
        </article>
  )
}

export default Project
