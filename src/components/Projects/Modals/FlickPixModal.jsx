import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';
import css from '../../../assets/skills/CSS.png';
import react from '../../../assets/skills/react.png';
import fastapi from '../../../assets/skills/FastAPI.png';
import postgresql from '../../../assets/skills/postgresql.png';
import docker from '../../../assets/skills/docker.png';
import bootstrap from '../../../assets/skills/bootstrap.png';

const FlickPixModal = (props) => {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        FlickPix
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
      FlickPix is a dynamic online platform designed for movie and TV
      enthusiasts, providing a curated selection of recommendations tailored
      to individual preferences. It seamlessly integrates reliable
      third-party APIs, granting users access to an extensive collection
      of movies and TV shows.
      </p>
      <p className='techStack'>Tech Stack:
            <img src={react} alt="react" className="techStack" style={{ width: 'auto', height: '50px' }} />
            <img src={css} alt="css" className="techStack" style={{ width: 'auto', height: '50px' }}/>
            <img src={fastapi} alt="fastapi" className="techStack" style={{ width: 'auto', height: '50px' }} />
            <img src={docker} alt="docker" className="techStack" style={{ width: 'auto', height: '50px' }} />
            <img src={bootstrap} alt="boostrap" className="techStack" style={{ width: 'auto', height: '50px' }} />
            <img src={postgresql} alt="postgresql" className="techStack" style={{ width: 'auto', height: '50px' }} />
        </p>
    </Modal.Body>
    <Modal.Footer>
      <Button className='closeBtn' onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default FlickPixModal
