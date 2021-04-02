import {useState} from 'react'
import {SiHtml5,SiSass,SiReact,SiCss3,SiStyledComponents, SiJavascript, SiFigma, SiInkscape, SiBootstrap, SiNextDotJs,
  SiNodeDotJs, SiFirebase, SiGithub, SiWordpress, SiPhp, SiMongodb, SiHeroku, SiYoutube, SiInstagram} 
from 'react-icons/si'
import {GiDatabase, GiOppression, GiFlexibleStar} from 'react-icons/gi'
import {BiShow} from 'react-icons/bi'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Project = ({title, desc, images, logo, stacks, website, github}) => {

  return (
    <article className="projects-box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="projects-box-screens">

          <Carousel showThumbs={false}>
                <div>
                    <img src={images[0]} alt="" style={{maxWidth: '400px'}}/>
                </div>
                <div>
                    <img src={images[1]} alt="" style={{maxWidth: '400px'}}/>
                </div>
                <div>
                    <img src={images[2]} alt="" style={{maxWidth: '400px'}}/>
                </div>
                <div>
                    <img src={images[3]} alt="" style={{maxWidth: '100px'}}/>
                </div>
                <div>
                    <img src={images[4]} alt="" style={{maxWidth: '100px'}}/>
                </div>
            </Carousel>

          </div>

          <div className="projects-box-info">
            <div className="projects-box-info-logo">
              <img src={logo} alt=""/> <h4> {title}</h4>
            </div>
            <div className="projects-box-info-text">
              {desc}
             </div>
            <div className="projects-box-info-buttons">
              {stacks.map(stack => {
                switch (stack) {
                  case "React":
                    return (
                      <div className="projects-box-info-button">
                        <SiReact
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">React</p>
                      </div>
                    );
                  case "Sass":
                    return (
                      <div className="projects-box-info-button">
                        <SiSass
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">Sass</p>
                      </div>
                    );
                  case "Node":
                    return (
                      <div className="projects-box-info-button">
                        <SiNodeDotJs
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">Node</p>
                      </div>
                    );
                    case "HTML":
                    return (
                      <div className="projects-box-info-button">
                        <SiHtml5
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">HTML</p>
                      </div>
                    );
                    case "JavaScript":
                    return (
                      <div className="projects-box-info-button">
                        <SiJavascript
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">JS</p>
                      </div>
                    );
                    case "CSS":
                    return (
                      <div className="projects-box-info-button">
                        <SiCss3
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">CSS</p>
                      </div>
                    );
                    case "StyledComponent":
                    return (
                      <div className="projects-box-info-button">
                        <SiStyledComponents
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">StyledComponents</p>
                      </div>
                    );
                    case "Firebase":
                    return (
                      <div className="projects-box-info-button">
                        <SiFirebase
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">Firebase</p>
                      </div>
                    );
                    case "Mongo":
                    return (
                      <div className="projects-box-info-button">
                        <SiMongodb
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">MongoDB</p>
                      </div>
                    );
                    case "Heroku":
                    return (
                      <div className="projects-box-info-button">
                        <SiHeroku
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">Heroku</p>
                      </div>
                    );
                    case "PHP":
                    return (
                      <div className="projects-box-info-button">
                        <SiPhp
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">PHP</p>
                      </div>
                    );
                    case "Wordpress":
                    return (
                      <div className="projects-box-info-button">
                        <SiWordpress
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">Wordpress</p>
                      </div>
                    );
                    case "YouTube":
                    return (
                      <div className="projects-box-info-button">
                        <SiYoutube
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">YouTube</p>
                      </div>
                    );
                    case "Instagram":
                    return (
                      <div className="projects-box-info-button">
                        <SiInstagram
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">Instagram</p>
                      </div>
                    );
                  default:
                    return (
                      <div className="projects-box-info-button">
                        <GiFlexibleStar
                          className="projects-box-info-button-icon"
                          style={{ fontSize: "25px" }}
                        />
                        <p className="projects-box-info-button-name">Empty</p>
                      </div>
                    );
                }
              })}

            
            <a href={website} target="_blank" referrerPolicy="no-referrer" className="projects-box-info-button">
              <BiShow className="projects-box-info-button-icon" style={{fontSize: '25px'}} />
              <p className="projects-box-info-button-name">Site</p>
            </a>
            <a href={github} target="_blank" referrerPolicy="no-referrer" className="projects-box-info-button">
              <SiGithub className="projects-box-info-button-icon" style={{fontSize: '25px'}} />
              <p className="projects-box-info-button-name">Github</p>
            </a>

            </div>
          </div>
        </article>
  )
}
export default Project