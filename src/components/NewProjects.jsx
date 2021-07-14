import { useState } from 'react';
import {projects} from './projectsData';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const data = [
  {
    id: 1,
    title: 'Portfolio',
    name: 'portfolio',
    shortDesc: 'Application',
    desc: 'Application contains several tools to make daily work and project management easier. Currently in Office available are lists where we can save our tasks and lists e.g shopping lists, projects to keep our private or teams projects, folders designed to save our favourite websites or bookmarks which will be available in all devices and budgets to simply manage our finances. To all projects in every app we can add our friends and share our files together.',
    stacks: ['React', 'Sass', 'Firebase'],
    website: 'https://ax-office.web.app/',
    github: 'https://github.com/ArexSpeed/axoffice'
  },
  {
    id: 2,
    title: 'AXOffice',
    name: 'axoffice',
    shortDesc: 'Application',
    desc: 'Application contains several tools to make daily work and project management easier. Currently in Office available are lists where we can save our tasks and lists e.g shopping lists, projects to keep our private or teams projects, folders designed to save our favourite websites or bookmarks which will be available in all devices and budgets to simply manage our finances. To all projects in every app we can add our friends and share our files together.',
    stacks: ['React', 'Sass', 'Firebase'],
    website: 'https://ax-office.web.app/',
    github: 'https://github.com/ArexSpeed/axoffice'
  },
  {
    id: 3,
    title: 'Multiwords',
    name: 'multiwords',
    shortDesc: 'Application',
    desc: 'Application contains several tools to make daily work and project management easier. Currently in Office available are lists where we can save our tasks and lists e.g shopping lists, projects to keep our private or teams projects, folders designed to save our favourite websites or bookmarks which will be available in all devices and budgets to simply manage our finances. To all projects in every app we can add our friends and share our files together.',
    stacks: ['React', 'Sass', 'Firebase'],
    website: 'https://ax-office.web.app/',
    github: 'https://github.com/ArexSpeed/axoffice'
  },
  {
    id: 4,
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
  const [selectedProject, setSelectedProject] = useState('MY PROJECTS');
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage(currentImage+1);
  }

  return (
    <div className={`n-projects ${selectedProject}`}>
      <section className="section-title next">
        <h1 className="section-title-text">
          {selectedProject.toUpperCase()}
        </h1> 
      </section>
      <div className="n-projects-flex">
      <section className="n-projects-nav">
        <ul>
        {data.map(item => (
          <li 
            className="n-projects-nav-box"
            onClick={() => setSelectedProject(`${item.name}`)}
          >
            <h3>{item.title}</h3>
            <h5>{item.shortDesc}</h5>
          </li>
        ))}
        </ul>
      </section>
      <section className="n-projects-info">
          <div className="n-projects-info-left">
            <div className="n-projects-carousel">
                    <button 
                      className="n-projects-carousel-button" 
                      onClick={() => setCurrentImage(currentImage-1)} 
                      disabled={currentImage===0}
                    >
                      <svg className="n-projects-carousel-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </button>
                    <div className="n-projects-carousel-image">
                        <img src={projects[0].images[currentImage]} alt="" className="n-projects-carousel-image-desktop"/>
                        <img src={projects[0].imagesMobile[currentImage]} alt="" className="n-projects-carousel-image-mobile"/>
                    </div>
                    <button 
                      className="n-projects-carousel-button" 
                      onClick={() => setCurrentImage(currentImage+1)} 
                      disabled={currentImage===4}
                    >
                      <svg className="n-projects-carousel-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                    </button>

              </div>
            <div className="n-projects-info-box">
              <h4>Description</h4>
              <p>
              desc: 'Application contains several tools to make daily work and project management easier. Currently in Office available are lists where we can save our tasks and lists e.g shopping lists, projects to keep our private or teams projects, folders designed to save our favourite websites or bookmarks which will be available in all devices and budgets to simply manage our finances. To all projects in every app we can add our friends and share our files together.',
              </p>
            </div>
          </div>
          <div className="n-projects-info-right">

          </div>
      </section>
      </div>
    </div>
  )
}

export default NewProjects;
