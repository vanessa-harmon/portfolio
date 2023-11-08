import React from 'react';
import './projects.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/portfolio-1.png';
import image2 from '../../assets/portfolio-2.png';


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
        <Carousel className="projectsImg">
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={image2} alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Carousel className="projectsImg">
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Carousel className="projectsImg">
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Carousel className="projectsImg">
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="projectsImg" src={image1} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        <button className="projectsBtn">See more</button>
    </section>
  )
}

export default Projects
