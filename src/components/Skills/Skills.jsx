import React from 'react';
import './skills.css';
import html from '../../assets/techstack/html.png';
import css from '../../assets/techstack/CSS.png';
import dj from '../../assets/techstack/django.png';
import restfulapi from '../../assets/techstack/restfulapi.png';
import react from '../../assets/techstack/react.png';
import fastapi from '../../assets/techstack/FastAPI.png';
import postgresql from '../../assets/techstack/postgresql.png';
import docker from '../../assets/techstack/docker.png';
import javascript from '../../assets/techstack/javascript.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Tech stack</span>
        <div className="skillBars">
            <img src={html} alt="html" className="skillBarImg" />
            <img src={css} alt="css" className="skillBarImg" />
            <img src={dj} alt="django" className="skillBarImg" />
            <img src={javascript} alt="javascript" className="skillBarImg" />
            <img src={react} alt="react" className="skillBarImg" />
            <img src={restfulapi} alt="restful api" className="skillBarImg" />
            <img src={docker} alt="docker" className="skillBarImg" />
            <img src={fastapi} alt="html" className="skillBarImg" />
            <img src={postgresql} alt="postgresql" className="skillBarImg" />
        </div>
    </section>
  )
}

export default Skills
