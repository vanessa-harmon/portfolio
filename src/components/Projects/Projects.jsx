import React from 'react';
import './projects.css';
import FlickPix from './Carousels/FlickPix';
import ProjectPlanner from './Carousels/ProjectPlanner';
import AstralAutoHaven from './Carousels/AstralAutoHaven';


const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projectsTitle">My Projects</h2>
        <span className="projectsDesc">
          My projects showcase innovative solutions developed through collaboration
          and teamwork. Whether working solo, in partnerships, or with a team, I thrive
          on finding creative solutions to complex problems. I bring a collaborative
          spirit and a commitment to excellence to every project.
        </span>
        <div className='projectsImgs'>
        <ProjectPlanner className="slider" />
        <AstralAutoHaven className='slider' />
        <FlickPix className="slider" />
        </div>
    </section>
  )
}

export default Projects;
