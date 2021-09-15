import { useState } from 'react';
import {projects} from '../projectsData';

import {SiHtml5, SiSass, SiReact, SiCss3, SiStyledComponents, SiJavascript, SiFigma, SiInkscape, SiBootstrap, SiNextDotJs,
  SiNodeDotJs, SiFirebase, SiGithub, SiWordpress, SiPhp, SiMongodb, SiHeroku, SiYoutube, SiInstagram, SiStripe, SiTailwindcss, SiTypescript} 
from 'react-icons/si';
import {GiDatabase, GiOppression, GiFlexibleStar} from 'react-icons/gi'
import {BiShow} from 'react-icons/bi'


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState({id: 0, name: 'MY PROJECTS', class: ''});
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className={`projects ${selectedProject.class}`} id="projects">
      <section className="section-title next">
        <h1 className="section-title-text">
          {selectedProject.name.toUpperCase()}
        </h1> 
        <div className="section-title-line"></div>
      </section>
      <section className="projects-section">
      <article className="projects-nav">
        <ul className="projects-nav-list">
        {projects.map(project => (
          <li 
            className={`projects-nav-box ${selectedProject.name === project.title ? 'active' : ''}`}
            onClick={() => setSelectedProject({ id: project.id, name: project.title, class: project.class})}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h3>{project.title}</h3>
            <h5>{project.shortDesc}</h5>
          </li>
        ))}
        </ul>
      </article>
      <article className="projects-info">
            <div className="projects-carousel">
                    <button 
                      className="projects-carousel-button" 
                      onClick={() => setCurrentImage(currentImage-1)} 
                      disabled={currentImage===0}
                    >
                      <svg className="projects-carousel-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </button>
                    <div className="projects-carousel-image">
                        <img src={projects[selectedProject.id].images[currentImage]} alt="" className="projects-carousel-image-desktop"/>
                        <img src={projects[selectedProject.id].imagesMobile[currentImage]} alt="" className="projects-carousel-image-mobile"/>
                    </div>
                    <button 
                      className="projects-carousel-button" 
                      onClick={() => setCurrentImage(currentImage+1)} 
                      disabled={currentImage===2}
                    >
                      <svg className="projects-carousel-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                    </button>

              </div>

            <div className="projects-info-box">
              <h4>Description</h4>
              <p>
                {projects[selectedProject.id].desc}
              </p>
              <div className="projects-info-stack">
                {projects[selectedProject.id].stacks.map(stack => {
                  switch (stack) {
                    case "React":
                      return (
                        <div className="projects-info-stack-button">
                          <SiReact
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">React</p>
                        </div>
                      );
                    case "Next":
                      return (
                        <div className="projects-info-stack-button">
                          <SiNextDotJs
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">Next</p>
                        </div>
                      );
                    case "Sass":
                      return (
                        <div className="projects-info-stack-button">
                          <SiSass
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">Sass</p>
                        </div>
                      );
                    case "Tailwind":
                      return (
                        <div className="projects-info-stack-button">
                          <SiTailwindcss
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">Tailwind</p>
                        </div>
                      );
                    case "Node":
                      return (
                        <div className="projects-info-stack-button">
                          <SiNodeDotJs
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">Node</p>
                        </div>
                      );
                      case "HTML":
                      return (
                        <div className="projects-info-stack-button">
                          <SiHtml5
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">HTML</p>
                        </div>
                      );
                      case "JavaScript":
                      return (
                        <div className="projects-info-stack-button">
                          <SiJavascript
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">TS</p>
                        </div>
                      );
                      case "TypeScript":
                      return (
                        <div className="projects-info-stack-button">
                          <SiTypescript
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">JS</p>
                        </div>
                      );
                      case "CSS":
                      return (
                        <div className="projects-info-stack-button">
                          <SiCss3
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">CSS</p>
                        </div>
                      );
                      case "StyledComponent":
                      return (
                        <div className="projects-info-stack-button">
                          <SiStyledComponents
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">StyledComponents</p>
                        </div>
                      );
                      case "Firebase":
                      return (
                        <div className="projects-info-stack-button">
                          <SiFirebase
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">Firebase</p>
                        </div>
                      );
                      case "Mongo":
                      return (
                        <div className="projects-info-stack-button">
                          <SiMongodb
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">MongoDB</p>
                        </div>
                      );
                      case "Heroku":
                      return (
                        <div className="projects-info-stack-button">
                          <SiHeroku
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">Heroku</p>
                        </div>
                      );
                      case "PHP":
                      return (
                        <div className="projects-info-stack-button">
                          <SiPhp
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">PHP</p>
                        </div>
                      );
                      case "Wordpress":
                      return (
                        <div className="projects-info-stack-button">
                          <SiWordpress
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">Wordpress</p>
                        </div>
                      );
                      case "Stripe":
                      return (
                        <div className="projects-info-stack-button">
                          <SiStripe
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">Stripe</p>
                        </div>
                      );
                      case "YouTube":
                      return (
                        <div className="projects-info-stack-button">
                          <SiYoutube
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">YouTube</p>
                        </div>
                      );
                      case "Instagram":
                      return (
                        <div className="projects-info-stack-button">
                          <SiInstagram
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">Instagram</p>
                        </div>
                      );
                    default:
                      return (
                        <div className="projects-info-stack-button">
                          <GiFlexibleStar
                            className="projects-info-stack-button-icon"
                            style={{ fontSize: "25px" }}
                          />
                          <p className="projects-info-stack-button-name">Empty</p>
                        </div>
                      );
                  }
                })}

            <a href={projects[selectedProject.id].website} target="_blank" rel="noreferrer" className="projects-info-stack-button">
              <BiShow className="projects-info-stack-button-icon" style={{fontSize: '25px'}} />
              <p className="projects-info-stack-button-name">Site</p>
            </a>
            <a href={projects[selectedProject.id].github} target="_blank" rel="noreferrer" className="projects-info-stack-button">
              <SiGithub className="projects-info-stack-button-icon" style={{fontSize: '25px'}} />
              <p className="projects-info-stack-button-name">Github</p>
            </a>

              </div>
          </div>
      </article>
      </section>
    </div>
  )
}

export default Projects;
