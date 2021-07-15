import { useState } from 'react';
import {projects} from './projectsData';

import {SiHtml5,SiSass,SiReact,SiCss3,SiStyledComponents, SiJavascript, SiFigma, SiInkscape, SiBootstrap, SiNextDotJs,
  SiNodeDotJs, SiFirebase, SiGithub, SiWordpress, SiPhp, SiMongodb, SiHeroku, SiYoutube, SiInstagram} 
from 'react-icons/si';
import {GiDatabase, GiOppression, GiFlexibleStar} from 'react-icons/gi'
import {BiShow} from 'react-icons/bi'

const data = [
  {
    id: 0,
    title: 'Portfolio',
    name: 'portfolio',
    shortDesc: 'Application',
    desc: 'Application contains several tools to make daily work and project management easier. Currently in Office available are lists where we can save our tasks and lists e.g shopping lists, projects to keep our private or teams projects, folders designed to save our favourite websites or bookmarks which will be available in all devices and budgets to simply manage our finances. To all projects in every app we can add our friends and share our files together.',
    stacks: ['React', 'Sass', 'Firebase'],
    website: 'https://ax-office.web.app/',
    github: 'https://github.com/ArexSpeed/axoffice'
  },
  {
    id: 1,
    title: 'AXOffice',
    name: 'axoffice',
    shortDesc: 'Application',
    desc: 'Application contains several tools to make daily work and project management easier. Currently in Office available are lists where we can save our tasks and lists e.g shopping lists, projects to keep our private or teams projects, folders designed to save our favourite websites or bookmarks which will be available in all devices and budgets to simply manage our finances. To all projects in every app we can add our friends and share our files together.',
    stacks: ['React', 'Sass', 'Firebase'],
    website: 'https://ax-office.web.app/',
    github: 'https://github.com/ArexSpeed/axoffice'
  },
  {
    id: 2,
    title: 'Multiwords',
    name: 'multiwords',
    shortDesc: 'Application',
    desc: 'Application contains several tools to make daily work and project management easier. Currently in Office available are lists where we can save our tasks and lists e.g shopping lists, projects to keep our private or teams projects, folders designed to save our favourite websites or bookmarks which will be available in all devices and budgets to simply manage our finances. To all projects in every app we can add our friends and share our files together.',
    stacks: ['React', 'Sass', 'Firebase'],
    website: 'https://ax-office.web.app/',
    github: 'https://github.com/ArexSpeed/axoffice'
  },
  {
    id: 3,
    title: 'SportRounder',
    name: 'rounder',
    shortDesc: 'Application',
    desc: 'Application contains several tools to make daily work and project management easier. Currently in Office available are lists where we can save our tasks and lists e.g shopping lists, projects to keep our private or teams projects, folders designed to save our favourite websites or bookmarks which will be available in all devices and budgets to simply manage our finances. To all projects in every app we can add our friends and share our files together.',
    stacks: ['React', 'Sass', 'Firebase'],
    website: 'https://ax-office.web.app/',
    github: 'https://github.com/ArexSpeed/axoffice'
  },
]

const NewProjects = () => {
  const [selectedProject, setSelectedProject] = useState({id: 0, name: 'MY PROJECTS', class: ''});
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className={`n-projects ${selectedProject.class}`}>
      <section className="section-title next">
        <h1 className="section-title-text">
          {selectedProject.name.toUpperCase()}
        </h1> 
      </section>
      <div className="n-projects-flex">
      <section className="n-projects-nav">
        <ul>
        {projects.map(project => (
          <li 
            className="n-projects-nav-box"
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
      </section>
      <section className="n-projects-info">
            <div className="n-projects-carousel">
                    <button 
                      className="n-projects-carousel-button" 
                      onClick={() => setCurrentImage(currentImage-1)} 
                      disabled={currentImage===0}
                    >
                      <svg className="n-projects-carousel-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </button>
                    <div className="n-projects-carousel-image">
                        <img src={projects[selectedProject.id].images[currentImage]} alt="" className="n-projects-carousel-image-desktop"/>
                        <img src={projects[selectedProject.id].imagesMobile[currentImage]} alt="" className="n-projects-carousel-image-mobile"/>
                    </div>
                    <button 
                      className="n-projects-carousel-button" 
                      onClick={() => setCurrentImage(currentImage+1)} 
                      disabled={currentImage===2}
                    >
                      <svg className="n-projects-carousel-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                    </button>

              </div>

            <div className="n-projects-info-box">
              <h4>Description</h4>
              <p>
                {projects[selectedProject.id].desc}
              </p>
              <div className="n-projects-info-stack">
                {projects[selectedProject.id].stacks.map(stack => {
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

            <a href={projects[selectedProject.id].website} target="_blank" rel="noreferrer" className="projects-box-info-button">
              <BiShow className="projects-box-info-button-icon" style={{fontSize: '25px'}} />
              <p className="projects-box-info-button-name">Site</p>
            </a>
            <a href={projects[selectedProject.id].github} target="_blank" rel="noreferrer" className="projects-box-info-button">
              <SiGithub className="projects-box-info-button-icon" style={{fontSize: '25px'}} />
              <p className="projects-box-info-button-name">Github</p>
            </a>

              </div>
          </div>
      </section>
      </div>
    </div>
  )
}

export default NewProjects;
