import React, { useState } from 'react';
import './projects.css';
import ProjectPlanner from './Carousels/ProjectPlanner';
import ProjectPlannerModal from './Modals/ProjectPlannerModal';
import AstralAutoHaven from './Carousels/AstralAutoHaven';
import AstralAutoHavenModal from './Modals/AstralAutoHavenModal';
import FlickPix from './Carousels/FlickPix';
import FlickPixModal from './Modals/FlickPixModal';


const Projects = () => {
  const [projectPlannerModalShow, setProjectPlannerModalShow] = useState(false);
  const [astralAutoHavenModalShow, setAstralAutoHavenModalShow] = useState(false);
  const [flickPixModalShow, setFlickPixModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (modalIdentifier) => {
    if (modalIdentifier === 'ProjectPlanner') setProjectPlannerModalShow(true);
    else if (modalIdentifier === 'AstralAutoHaven') setAstralAutoHavenModalShow(true);
    else if (modalIdentifier === 'FlickPix') setFlickPixModalShow(true);
    setSelectedProject(modalIdentifier);
  };
  const handleModalClose = () => {
    setProjectPlannerModalShow(false);
    setAstralAutoHavenModalShow(false);
    setFlickPixModalShow(false);
    setSelectedProject(null);
  };
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
          <ProjectPlanner onShow={() => handleShow('ProjectPlanner')} className="slider" />
          <AstralAutoHaven onShow={() => handleShow('AstralAutoHaven')} className='slider' />
          <FlickPix onShow={() => handleShow('FlickPix')} className="slider" />
        </div>
        <ProjectPlannerModal
        projectNumber={selectedProject}
        show={projectPlannerModalShow}
        onHide={handleModalClose}
      />
      <AstralAutoHavenModal
        projectNumber={selectedProject}
        show={astralAutoHavenModalShow}
        onHide={handleModalClose}
      />
      <FlickPixModal
        projectNumber={selectedProject}
        show={flickPixModalShow}
        onHide={handleModalClose}
      />
    </section>
  )
}

export default Projects;
