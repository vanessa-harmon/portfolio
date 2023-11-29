import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';
import dj from '../../../assets/skills/django.png';
import restfulapi from '../../../assets/skills/restfulapi.png';
import react from '../../../assets/skills/react.png';

const AstralAutoHavenModal = (props) => {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        AstraAutoHaven
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Astral Auto Haven is a comprehensive application designed for the efficient
        management of various aspects within an automobile dealership, encompassing
        inventory, sales, and service center functionalities. The project is a
        collaborative effort led by two key team members:
      </p>
      <p className='techStack'>Tech Stack:
      <img src={dj} alt="django" className="techStack" style={{ width: 'auto', height: '50px' }} />
      <img src={react} alt="react" className="techStack" style={{ width: 'auto', height: '50px' }} />
      <img src={restfulapi} alt="restful api" className="techStack" style={{ width: 'auto', height: '50px' }} />
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button className='closeBtn' onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default AstralAutoHavenModal
