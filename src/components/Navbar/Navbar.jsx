import { useState } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
      <button className='logo'>VH.</button>
      <div className='desktopMenu'>
        <Link activeClass='navactive' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='navactive' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='navactive' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
      }}><img src={contactImg} alt="Contact" className="desktopMenuImg" />Contact Me</button>
      <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='navactive' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='navactive' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='navactive' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass='navactive' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;
