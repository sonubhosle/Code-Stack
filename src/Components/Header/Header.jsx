import React, { useEffect, useState } from 'react';
import '../../Styles/Header.css';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MdOutlinePhonelinkRing, MdInfoOutline, MdSunny } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { LuSquareDashedBottomCode } from "react-icons/lu";
import { TbMessage } from "react-icons/tb";
import { RiBloggerLine } from "react-icons/ri";
import { IoMdMoon } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { RiHome5Line } from "react-icons/ri";
import { IoSchoolOutline  } from "react-icons/io5";
import { BsCodeSlash  } from "react-icons/bs";
import { IoLinkSharp } from "react-icons/io5";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { LiaProjectDiagramSolid } from "react-icons/lia";

const Header = ({ theme, toggleTheme }) => {
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollTop = window.scrollY;
      const winHeight = document.body.scrollHeight - window.innerHeight;
      const scrolledPercent = (scrollTop / winHeight) * 100;
      setScrollPercent(scrolledPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = () => {
    navigate('/');
    setHamburgerOpen(false);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setHamburgerOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo flex items-center" onClick={handleNavigate} data-aos="fade-right">
        <div className="icon_bx">
          <LuSquareDashedBottomCode size={50} />
        </div>
        <div className="logo_name">
          <p>Code Stack</p>
          <span>Web Developer</span>
        </div>
      </div>


      <div className="right_nav flex items-center">
        <nav className={`navbar flex items-center ${hamburgerOpen ? 'open' : ''}`}>
          <li data-aos="fade-left" data-aos-delay="100">
            <Link to="/" className={activeLink === '/' ? 'active-link' : ''} onClick={() => handleLinkClick('/')}>
             <RiHome5Line size={22} className="nav_icon"/> Home
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="200">
            <Link to="/education" className={activeLink === '/education' ? 'active-link' : ''} onClick={() => handleLinkClick('/education')}>
            <IoSchoolOutline size={22} className="nav_icon"/>  Education
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="300">
            <Link to="/skills" className={activeLink === '/skills' ? 'active-link' : ''} onClick={() => handleLinkClick('/skills')}>
             <BsCodeSlash size={22} className="nav_icon"/> Skills
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="400">
            <Link to="/projects" className={activeLink === '/projects' ? 'active-link' : ''} onClick={() => handleLinkClick('/projects')}>
            <LiaProjectDiagramSolid size={22} className="nav_icon"/>  Projects
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="500">
            <Link to="#" className={activeLink === '' ? 'active-link' : ''} onClick={() => handleLinkClick('')}>
             <IoLinkSharp size={22}  className="nav_icon"/> More Links <TiPlus className='plus-icon' />
            </Link>
            <div className="dropdown">
              <Link to='/blogs' className="item"><RiBloggerLine size={22} /> Blogs</Link>
              <Link to='/contact' className="item"><MdOutlinePhonelinkRing size={22} /> Contact Us</Link>
              <Link to='/about' className="item"><MdInfoOutline size={22} /> About Us</Link>
            </div>
          </li>
        </nav>


        <div className="btn_connect" data-aos="fade-left" data-aos-delay="600">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <IoMdMoon size={25} /> : <MdSunny color='#ffd52c' size={25} />}
          </button>
          <Link className='connect'><TbMessage size={22} /><p> Connect Me</p></Link>

          <div className="hamburger" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
            {hamburgerOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
          </div>
        </div>
      </div>

      <div className="scroll-progress" style={{ width: `${scrollPercent}%` }}></div>
    </header>
  );
};

export default Header;
