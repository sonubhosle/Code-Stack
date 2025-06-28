// src/Components/Footer.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { items } from './Data';
import './Footer.css';
import { FaRegDotCircle } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { LuSquareDashedBottomCode } from 'react-icons/lu';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className='footer'  data-aos="fade-up">
      <section className='flex'>
        <div className="left_footer">
          <div className="logo flex" onClick={handleNavigate}>
            <div className="icon_bx">
              <LuSquareDashedBottomCode size={50} />
            </div>
            <div className="logo_name">
              <p>Code Stack</p>
              <span>Web Developer</span>
            </div>
          </div>

          <p className='desc'>
            I’m a passionate Web Developer skilled in creating responsive, user-friendly websites using React.js, WordPress, and Elementor. I build dynamic web pages, integrate e-commerce and payment systems, and handle domain/hosting setup.
          </p>

          <div className="menus">
            <Link to="/privacy"><MdOutlinePrivacyTip /> Privacy</Link>
            <Link to="/terms"><FaRegDotCircle /> Terms</Link>
          </div>
        </div>

        <div className="footer_grid">
          {items.map((item, indx) => (
            <div className="footer_card" key={indx}>
              <h2>{item.category}</h2>
              <div className="links">
                {item.tools.map((tool, toolIdx) => {
                  const Icon = tool.icon;
                  const isExternal = tool.path.startsWith("http");
                  return isExternal ? (
                    <Link
                      to={tool.path}
                      key={toolIdx}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon /> {tool.name}
                    </Link>
                  ) : (
                    <Link to={tool.path} key={toolIdx}>
                      <Icon size={22} /> {tool.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="privacy_logo">
        <p>© Code Stack All rights reserved (2025)</p>
      </div>
    </div>
  );
};

export default Footer;
