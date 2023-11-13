import React from 'react';
import './skills.css';
import python from '../../assets/skills/python.png';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/CSS.png';
import dj from '../../assets/skills/django.png';
import restfulapi from '../../assets/skills/restfulapi.png';
import react from '../../assets/skills/react.png';
import fastapi from '../../assets/skills/FastAPI.png';
import postgresql from '../../assets/skills/postgresql.png';
import docker from '../../assets/skills/docker.png';
import javascript from '../../assets/skills/javascript.png';
import bootstrap from '../../assets/skills/bootstrap.png';
import criticalThinker from '../../assets/skills/critical-thinker.png';
import teamwork from '../../assets/skills/teamwork.png';
import adaptabilty from '../../assets/skills/adaptabilty.png';
import detailOriented from '../../assets/skills/detail-oriented.png';
import communication from '../../assets/skills/communication.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Skills</span>
        <div className="skillBars">
        <img src={python} alt="python" className="skillBarImg" />
            <img src={html} alt="html" className="skillBarImg" />
            <img src={css} alt="css" className="skillBarImg" />
            <img src={dj} alt="django" className="skillBarImg" />
            <img src={javascript} alt="javascript" className="skillBarImg" />
            <img src={react} alt="react" className="skillBarImg" />
            <img src={bootstrap} alt="boostrap" className="skillBarImg" />
            <img src={restfulapi} alt="restful api" className="skillBarImg" />
            <img src={docker} alt="docker" className="skillBarImg" />
            <img src={fastapi} alt="html" className="skillBarImg" />
            <img src={postgresql} alt="postgresql" className="skillBarImg" />
            <img src={criticalThinker} alt="critical thinker" className="skillBarImg" />
            <img src={teamwork} alt="teamwork" className="skillBarImg" />
            <img src={adaptabilty} alt="adaptabilty" className="skillBarImg" />
            <img src={detailOriented} alt="detail oriented" className="skillBarImg" />
            <img src={communication} alt="communication" className="skillBarImg" />
        </div>
    </section>
  )
}

export default Skills
