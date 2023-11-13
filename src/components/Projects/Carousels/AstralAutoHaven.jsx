import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import homepage from '../../../assets/astralautohaven/home.png';
import salespeople from '../../../assets/astralautohaven/salespeople.png';
import addsalesperson from '../../../assets/astralautohaven/addsalesperson.png';
import customers from '../../../assets/astralautohaven/customers.png';
import addcustomer from '../../../assets/astralautohaven/addcustomer.png';
import addsale from '../../../assets/astralautohaven/newsale.png';
import './carousels.css';


const AstralAutoHaven = ({ onShow }) => {
  const [activeProject, setActiveProject] = useState(2);

  const handleCarouselClick = () => {
    onShow(activeProject);
  };
  return (
    <Carousel className="project-carousel" onClick={handleCarouselClick} onSelect={(index, e) => setActiveProject(index + 1)}>
    <Carousel.Item>
    <img className="projectsImg" src={homepage} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={salespeople} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={addsalesperson} alt="Third slide" />
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={customers} alt="Fourth slide" />
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={addcustomer} alt="Fifth slide" />
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={addsale} alt="Sixth slide" />
    </Carousel.Item>
  </Carousel>
  )
}

export default AstralAutoHaven
