import React, { useEffect, useState } from 'react'
import '../../Styles/Header.css'

import { Link, useNavigate,useLocation } from 'react-router-dom'
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { TiPlus } from "react-icons/ti";;
import { LuSquareDashedBottomCode } from "react-icons/lu";
import { TbMessage } from "react-icons/tb";
import { RiBloggerLine } from "react-icons/ri";
import { MdInfoOutline } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";


const Header = ({ theme, toggleTheme }) => {

  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = () => {
    navigate('/')
  }
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };


  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / winHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const location = useLocation();

  return (
    <header className="header">

      <div className="logo flex items-center" onClick={handleNavigate}>
        <div className="icon_bx">
          <LuSquareDashedBottomCode size={50} />
        </div>
        <div className="logo_name">
          <p>Code Stack</p>
          <span>Web Developer</span>
        </div>
      </div>
      <div className="right_nav flex items-center">

        <nav className="navbar flex items-center">
          <li>
            <Link to="/" className={activeLink === '/' ? 'active-link' : ''} onClick={() => handleLinkClick('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/education" className={activeLink === '/education' ? 'active-link' : ''} onClick={() => handleLinkClick('//education')} >
              Education
            </Link>
          </li>
          <li>
            <Link to="/skills" className={activeLink === '/skills' ? 'active-link' : ''} onClick={() => handleLinkClick('/skills')}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className={activeLink === '/projects' ? 'active-link' : ''} onClick={() => handleLinkClick('/projects')}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="" className={activeLink === '' ? 'active-link' : ''} onClick={() => handleLinkClick('')} >
              More Links <TiPlus className='plus-icon' />
            </Link>
            <div className="dropdown">
              <Link to='/blogs' className="item"><RiBloggerLine size={22} /> Blogs</Link>
              <Link to='/contact' className="item"><MdOutlinePhonelinkRing size={22} /> Contact Us</Link>
              <Link to='/about' className="item"><MdInfoOutline size={22} /> About Us</Link>

            </div>
          </li>



        </nav>

        <div className="btn_connect">
          
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <IoMdMoon size={25}/> : <MdSunny color='#ffd52c' size={25}/>}
          </button>
          <Link className='connect'><TbMessage size={22} /> Connect Me </Link>

        </div>
      </div>

      <div className="scroll-progress" style={{ width: `${scrollPercent}%` }}></div>

    </header>
  )
}

export default Header

