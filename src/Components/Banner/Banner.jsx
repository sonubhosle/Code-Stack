import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom'
import '../../Styles/Banner.css'
import { FaBriefcase } from "react-icons/fa";
import { TbMessageFilled } from "react-icons/tb";

const Banner = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} showArrows={false} className="carousel">
            <div className='banner_image'>
                <img src="https://i.postimg.cc/FsbFNT8F/Whats-App-Image-2025-06-22-at-1-07-47-PM.jpg" alt="" />
                <div className="banner_content">
                    <div className="left_content">
                        <h1>Sonaji Bhosle  <br />
                            <span>Web Developer</span> </h1>
                        <p>I'm a passionate web developer skilled in building efficient, secure, and scalable web applications.
                            I specialize in clean, maintainable code using modern technologies and frameworks.
                            From dynamic front-end features to powerful back-end logic, I turn ideas into working solutions.</p>
                        <Link to="/contact" className="animated-button">
                            <div className='button-1'><FaBriefcase size={20} style={{marginBottom:"2px"}}/> Hire Me!</div>
                            <div className='button-2'><TbMessageFilled size={20}/> Contact Me</div>
                        </Link>                    </div>
                    <div className="right_content"></div>
                </div>
            </div>
        </Carousel>
    )
}


export default Banner