import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import html from '../../../assets/skills/html.png';
import css from '../../../assets/skills/CSS.png';
import dj from '../../../assets/skills/django.png';
import bootstrap from '../../../assets/skills/bootstrap.png';
import './modals.css';



const ProjectPlannerModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ProjectPlanner
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        Project Alpha is a full-stack web application designed to streamline
        project and task management. Tailored for individuals seeking an
        organized approach to their projects and tasks, this application
        offers intuitive features to enhance productivity.
        </p>
        <p className='techStack'>Tech Stack:
            <img src={html} alt="html" className="techStack" style={{ width: 'auto', height: '50px' }} />
            <img src={css} alt="css" className="techStack" style={{ width: 'auto', height: '50px' }}/>
            <img src={dj} alt="django" className="techStack" style={{ width: 'auto', height: '50px' }} />
            <img src={bootstrap} alt="boostrap" className="techStack" style={{ width: 'auto', height: '50px' }} />
        </p>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectPlannerModal
