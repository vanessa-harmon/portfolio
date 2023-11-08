import React from 'react';
import './skills.css';
import html from '../../assets/html.png';
import css from '../../assets/CSS.png';
import dj from '../../assets/django.png';
import restfulapi from '../../assets/restfulapi.png';
import react from '../../assets/react.png';
import fastapi from '../../assets/FastAPI.png';
import postgresql from '../../assets/postgresql.png';
import docker from '../../assets/docker.png';


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
