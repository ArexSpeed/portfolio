import React from 'react' 
import Project from './Project'
import {projects} from './projectsData'

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
        {projects.map(project => (
          <Project title={project.title} desc={project.desc} images={project.images} logo={project.logo} stacks={project.stacks} website={project.website} github={project.github}/>
        ))}
        {/* <Project /> */}
        
      </section>
    </div>
  )
}

export default Projects
