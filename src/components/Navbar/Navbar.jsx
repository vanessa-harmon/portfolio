import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';


function Navbar() {
  return (
    <nav className='navbar'>
      <button className='logo'>VH.</button>
      <div className='desktopMenu'>
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Clients</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
    </nav>
  )
}

export default Navbar;
