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
        <span className="skillTitle">My Skills</span>
        <span className="skillDescription"></span>
        <div className="skillBars">
            <ul>
                <li><img src={html} alt="html" className="skillBarImg" /></li>
                <li><img src={dj} alt="django" className="skillBarImg" /></li>
                <li><img src={react} alt="html" className="skillBarImg" /></li>
                <li><img src={postgresql} alt="html" className="skillBarImg" /></li>
            </ul>
            <ul>
                <li><img src={css} alt="css" className="skillBarImg" /></li>
                <li><img src={restfulapi} alt="html" className="skillBarImg" /></li>
                <li><img src={fastapi} alt="html" className="skillBarImg" /></li>
                <li><img src={docker} alt="html" className="skillBarImg" /></li>
            </ul>
        </div>
    </section>
  )
}

export default Skills
