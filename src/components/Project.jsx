import {useState} from 'react'
import {SiSass} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {BiShow} from 'react-icons/bi'
import aleague1 from '../images/aleague1.png'
import aleague2 from '../images/aleague2.png'
import aleague3 from '../images/aleague3.png'
import aleague4 from '../images/aleague4.png'
import aleaguel from '../images/aleaguel.png'
import sps4 from '../images/sps4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Project = () => {
  const logo = <SiSass className="projects-box-info-button-icon" style={{fontSize: '25px'}} />

  return (
    <article className="projects-box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="projects-box-screens">

          <Carousel showThumbs={false}>
                <div>
                    <img src={aleague1} alt="" style={{maxWidth: '400px'}}/>
                </div>
                <div>
                    <img src={aleague2} alt="" style={{maxWidth: '400px'}}/>
                </div>
                <div>
                    <img src={aleague3} alt="" style={{maxWidth: '400px'}}/>
                </div>
                <div>
                    <img src={sps4} alt="" style={{maxWidth: '100px'}}/>
                </div>
                <div>
                    <img src={sps4} alt="" style={{maxWidth: '100px'}}/>
                </div>
            </Carousel>

          </div>

          <div className="projects-box-info">
            <div className="projects-box-info-logo">
              <img src={aleaguel} alt=""/> <h4> ALeague</h4>
            </div>
            <div className="projects-box-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non quibusdam cum velit beatae assumenda vel odio, error quos porro. Nesciunt nulla aliquam quasi amet accusantium sapiente atque quaerat? Aliquid.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus sit aliquam nisi, est obcaecati, quibusdam fuga accusantium itaque nobis voluptatem nulla placeat veniam unde deleniti illo quam? Enim velit illo nam libero mollitia quaerat ullam deserunt assumenda odit. Commodi a dignissimos tempore, voluptates itaque quam dolorum porro id repudiandae!
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

            </div>
          </div>
        </article>
  )
}
export default Project