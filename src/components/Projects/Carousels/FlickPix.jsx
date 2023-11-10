import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import FlickPixHomePage from '../../../assets/flickpix/flickpixhome.png';
import movies from '../../../assets/flickpix/movies.png';
import shows from '../../../assets/flickpix/tvshows.png';
import showDetailPage from '../../../assets/flickpix/showdetailpage.png';
import seenIt from '../../../assets/flickpix/seenit.png';
import watchLater from '../../../assets/flickpix/watchlater.png';
import searchResults from '../../../assets/flickpix/searchresults.png';
import './carousels.css';

const FlickPix = () => {
  return (
    <Carousel className="project-carousel">
    <Carousel.Item>
    <img className="projectsImg" src={FlickPixHomePage} alt="First slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={showDetailPage} alt="Second slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={movies} alt="Third slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={shows} alt="Fourth slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={seenIt} alt="Fifth slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={watchLater} alt="Sixth slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className="projectsImg" src={searchResults} alt="Seventh slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default FlickPix
