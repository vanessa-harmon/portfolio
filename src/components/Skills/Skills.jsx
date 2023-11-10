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


const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Tech stack</span>
        <div className="skillBars">
            <img src={html} alt="html" className="skillBarImg" />
            <img src={dj} alt="django" className="skillBarImg" />
            <img src={react} alt="html" className="skillBarImg" />
            <img src={postgresql} alt="html" className="skillBarImg" />
            <img src={css} alt="css" className="skillBarImg" />
            <img src={restfulapi} alt="html" className="skillBarImg" />
            <img src={fastapi} alt="html" className="skillBarImg" />
            <img src={docker} alt="html" className="skillBarImg" />
        </div>
    </section>
  )
}

export default Skills
