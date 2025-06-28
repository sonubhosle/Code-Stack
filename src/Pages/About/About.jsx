import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../Styles/About.css';
import { Link } from 'react-router-dom';
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { TbMessage } from "react-icons/tb";

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="about-page">
      {/* Banner */}
      <section className="about-banner-modern">
        {/* Floating Stars Layer */}
        <div className="stars-container">
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
          <div className="star star-4"></div>
          <div className="star star-5"></div>
        </div>

        {/* Content */}
        <div className="banner-content" data-aos="fade-right">
          <h1>Hello, I'm <span>Sonaji Bhosle</span></h1>
          <p className="title-line">Web Developer</p>
          <p className="sub-text">
            I design and develop full stack web applications using MongoDB, Express, React, and Node.js. From backend APIs to dynamic UIs, I create scalable, secure, and user-friendly solutions.
            I focus on clean code, performance, and responsive design — delivering seamless experiences from start to finish.
            I’m passionate about turning ideas into functional, elegant digital products.
          </p>
          <div className="banner-buttons" data-aos="fade-up" data-aos-delay="700">
            <Link to="/projects" className="banner-btn primary-btn"><LiaProjectDiagramSolid size={22}/> View Projects</Link>
            <Link to="/contact" className="banner-btn secondary-btn"><TbMessage size={22}/> Hire Me</Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="banner-image" data-aos="fade-left">
          <img src="https://i.postimg.cc/pd8tg6xr/Website-Creator-bro.png" alt="Illustration" />
        </div>

        {/* Color Blobs */}
        <div className="blob top-left"></div>
        <div className="blob bottom-right"></div>
      </section>


      {/* Profile/About Section */}
      <section className="about-section">

        <div className="about-content">
          <h2 data-aos="fade-up" data-aos-delay="100">About Me</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            I'm a frontend developer with experience in building dynamic and responsive web applications using React, JavaScript, and CSS. I enjoy turning complex problems into elegant, accessible designs.
          </p>

          <ul className="about-highlights">
            <li data-aos="fade-up" data-aos-delay="300">🔥 Strong foundation in React and JavaScript</li>
            <li data-aos="fade-up" data-aos-delay="400">🎨 Skilled in crafting pixel-perfect UIs</li>
            <li data-aos="fade-up" data-aos-delay="500">⚡ Familiar with performance optimization</li>
            <li data-aos="fade-up" data-aos-delay="600">📱 Responsive design & mobile-first development</li>
          </ul>
        </div>
      </section>
      <section className="what-i-do-section">
        <h2 data-aos="fade-up">What I Do</h2>
        <div className="services">
          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <h3>💻 Frontend Development</h3>
            <p>I build responsive, high-performance UIs using React.js, HTML, CSS, and JavaScript.</p>
          </div>
          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <h3>🛠️ Backend Development</h3>
            <p>RESTful APIs with Node.js & Express, using MongoDB for powerful database solutions.</p>
          </div>
          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <h3>🚀 Deployment & DevOps</h3>
            <p>Experienced with Git, GitHub, and deploying full stack apps on Vercel, Netlify & Render.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack-section">
        <h2 data-aos="fade-up">Tech Stack</h2>
        <div className="stack-icons">
          <span data-aos="zoom-in" data-aos-delay="100">⚛️ React.js</span>
          <span data-aos="zoom-in" data-aos-delay="200">🟢 Node.js</span>
          <span data-aos="zoom-in" data-aos-delay="300">🌐 Express.js</span>
          <span data-aos="zoom-in" data-aos-delay="400">🍃 MongoDB</span>
          <span data-aos="zoom-in" data-aos-delay="500">🧠 JavaScript</span>
          <span data-aos="zoom-in" data-aos-delay="600">🧾 HTML5</span>
          <span data-aos="zoom-in" data-aos-delay="700">🎨 CSS3</span>
          <span data-aos="zoom-in" data-aos-delay="800">🧪 Postman</span>
          <span data-aos="zoom-in" data-aos-delay="900">💨 Tailwind CSS</span>
          <span data-aos="zoom-in" data-aos-delay="1000">🐱 GitHub</span>
        </div>
      </section>
    </div>
  );
};

export default About;
