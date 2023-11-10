import React from 'react';
import './intro.css';
import background from '../../assets/background.png';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className="introName">Vanessa</span><br />Software Engineer </span>
            <p className="introParagraph">I'm a skilled software engineer with experience in creating <br />full-stack applications.</p>
        </div>
        <img src={background} alt="Profile" className="background" />
    </section>
  )
}

export default Intro
