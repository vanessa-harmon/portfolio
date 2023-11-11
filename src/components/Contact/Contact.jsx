import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import GitHubIcon from '../../assets/github.png';
import LinkedInIcon from '../../assets/linkedin.png';


const Contact = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailjsUserID = process.env.REACT_APP_EMAILJS_USER_ID;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, emailjsUserID)
      .then(() => {
        alert("Email Sent!");
        e.target.reset();
      }, (error) => {
          console.error(error.text);
      });
  };

  return (
    <section id="contactPage">
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work oppurtunities.</span>
            <form ref={form} onSubmit={sendEmail} className="contactForm">
                <input type="text" className="name" name="from_name" placeholder='Your name' />
                <input type="email" className="email" name="from_email" placeholder='Your Email' />
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                <a href="https://www.facebook.com/justsimplyness" target="_blank" rel="noopener noreferrer">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                </a>
                <a href="https://github.com/vanessa-harmon" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubIcon} alt="GitHub" className="link" />
                </a>
                <a href="https://www.linkedin.com/in/vanessa-harmon/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                </a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
