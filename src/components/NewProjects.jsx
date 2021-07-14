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
                    <button onClick={() => setCurrentImage(currentImage-1)} disabled={currentImage===0}>P</button>
                    <div>
                        <img src={projects[0].images[currentImage]} alt="" style={{maxWidth: '400px'}}/>
                    </div>
                    <button onClick={() => setCurrentImage(currentImage+1)} disabled={currentImage===5}>N</button>

              </div>
            <div className="n-projects-info-box">
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
