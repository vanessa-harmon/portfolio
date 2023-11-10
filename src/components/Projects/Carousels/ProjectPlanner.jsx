import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../projects.css';
import login from '../../../assets/projectplanner/login.png';
import myProjects from '../../../assets/projectplanner/myprojects.png';
import projectDetail from '../../../assets/projectplanner/projectdetail.png';
import createTask from '../../../assets/projectplanner/createtask.png';
import myTask from '../../../assets/projectplanner/mytasks.png';
import notesDetail from '../../../assets/projectplanner/notesdetail.png';
import projectSearch from '../../../assets/projectplanner/searchprojects.png';
import './carousels.css';

const ProjectPlanner = () => {
  return (
    <Carousel className="projectsImg">
          <Carousel.Item>
          <img className="projectsImg" src={login} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={myProjects} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={projectDetail} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={createTask} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={myTask} alt="Fifth slide" />
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={notesDetail} alt="Sixth slide" />
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={projectSearch} alt="Seventh slide" />
          </Carousel.Item>
        </Carousel>
  )
}

export default ProjectPlanner
