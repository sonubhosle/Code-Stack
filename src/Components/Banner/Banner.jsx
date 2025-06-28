import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Banner.css';
import { FaBriefcase } from "react-icons/fa";
import { TbMessageFilled } from "react-icons/tb";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
const Banner = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        offset: 100,
        once: true,
      });
      setTimeout(() => setLoading(false), 1500);
    }, []);
    return (
        <div className="carousel">
            {/* Background animated glowing circles */}
            <div className="floating-circles">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
            </div>

            <div className="banner_content">
                <div className="left_content">
                    <h1 className="fade-in-1">
                        Hii, I'am a <br />
                        <span className="fade-in-2">Web  Developer</span>
                    </h1>
                    <p className="fade-in-3">
                        I'm a passionate web developer skilled in building efficient, secure, and scalable web applications.
                        I specialize in clean, maintainable code using modern technologies and frameworks.
                        From dynamic front-end features to powerful back-end logic, I turn ideas into working solutions.
                    </p>

                    <Link to="/contact" className="animated-button fade-in-4">
                        <div className='button-1'><FaBriefcase size={20} /> Hire Me!</div>
                        <div className='button-2'><TbMessageFilled size={20} /> Contact Me</div>
                    </Link>
                </div>

                <div className="right_content fade-in-5">
                    <div className="blob">
                        <img src="https://i.postimg.cc/L5XMfg88/Whats-App-Image-2025-06-21-at-9-09-53-PM-removebg-preview.png" alt="profile" />
                    </div>
                </div>
            </div>

      <div className="social_container">
      {
  !loading && (
    <>
      {[
        { icon: <TbBrandFacebookFilled className='banner_icon' />, label: 'Facebook' },
        { icon: <RiInstagramFill className='banner_icon' />, label: 'Instagram' },
        { icon: <IoLogoWhatsapp className='banner_icon' />, label: 'Whatsapp' },
        { icon: <FaGithub className='banner_icon' />, label: 'Github' },
        { icon: <FaLinkedin className='banner_icon' />, label: 'Linkedin' },
      ].map((item, i) => (
        <Link
          key={item.label}
          data-social={item.label}
          data-aos="fade-up"
          data-aos-delay={i * 150}
          style={{ '--accent-color': '#fff' }}
        >
          {item.icon}
        </Link>
      ))}
    </>
  )
}

      </div>

 
        </div>
    );
};

export default Banner;
