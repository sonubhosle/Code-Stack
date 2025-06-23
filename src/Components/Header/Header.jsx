import React, { useState } from 'react'
import '../../Styles/Header.css'
import { TbBrandFacebookFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { TbTrekking } from "react-icons/tb";
import { ImBasecamp } from "react-icons/im";
import { TiMediaEjectOutline } from "react-icons/ti";
import { TbHelpTriangleFilled } from "react-icons/tb";
import { FaRoute } from "react-icons/fa";
import { LuSquareDashedBottomCode } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";


const Header = () => {

  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);




  const openSearch = () => setShowSearch(true);
  const closeSearch = () => setShowSearch(false);


  const handleNavigate = () =>{
    navigate('/')
  }
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

 
  return (
    <header>
      <div className="top_header flex items-center ">
        <div className="left_section flex items-center">
          <p><MdOutlinePhonelinkRing size={20} className='flex items-center' /> +918080987767</p>
          <p><AiOutlineMail className='flex items-center' size={20} /> sbhosle011@gmail.com</p>
        </div>
        <div className="right_section flex items-center">
          <Link><TbBrandFacebookFilled /></Link>
          <Link><RiInstagramFill /></Link>
          <Link><IoLogoWhatsapp /></Link>
          <Link><FaTwitter /></Link>
        </div>
      </div>
      <div className="main_nav flex items-center ">
        <div className="logo flex items-center" onClick={handleNavigate}>
          <div className="icon_bx">
            <LuSquareDashedBottomCode size={40}/>
          </div>
          <div className="logo_name">
            <p>Code Stack</p>
            <span>Web Developer</span>
          </div>
        </div>
        <nav className="navbar flex items-center">
          <li>
          <Link to="/" className={activeLink === '/' ? 'active-link' : ''} onClick={() => handleLinkClick('/')}>
              Home 
            </Link>
          </li>
           <li>
           <Link to="/about" className={activeLink === '/about' ? 'active-link' : ''} onClick={() => handleLinkClick('/about')} >
              Education 
            </Link>
           </li>
            <li>
            <Link to="/products" className={activeLink === '/products' ? 'active-link' : ''} onClick={() => handleLinkClick('/products')}>
              Skills 
            </Link>
            </li>
            <li>
            <Link to="/products" className={activeLink === '/products' ? 'active-link' : ''} onClick={() => handleLinkClick('/products')}>
              Projects 
            </Link>
            </li>
           <li>
           <Link to="/contact" className={activeLink === '/contact' ? 'active-link' : ''} onClick={() => handleLinkClick('/contact')} >
              More Links <TiPlus className='plus-icon'/>
            </Link>
            <div className="dropdown">
            <Link className="item"><MdOutlinePhonelinkRing  size={22}/> Contact Us</Link>
              <Link className="item"><TbHelpTriangleFilled size={22}/> Even Enquiry</Link>
            </div>
           </li>
           <li>
           <button className="open-search" onClick={openSearch}> <FiSearch size={25} /></button>
           </li>

        
        </nav>
      </div>

        {showSearch && (
        <div className="search-backdrop" onClick={closeSearch}>
          <div className="modal-search" onClick={(e) => e.stopPropagation()}>
            <h2>Hello 👋</h2>
            <p>This is a smooth animated modal!</p>
            <button className="close-btn" onClick={closeSearch}>Close</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

