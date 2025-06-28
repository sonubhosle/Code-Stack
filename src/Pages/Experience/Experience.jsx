import React, { useEffect, useRef, useState } from 'react';
import Heading from '../../Components/Heading/Heading';
import '../../Styles/Experience.css';
import { TbBriefcase } from "react-icons/tb";

const experiences = [
  {
    company: 'SkyBrisk Solutions',
    logo: 'S',
    role: 'Frontend Developer Intern',
    from: 'Jan 2024',
    to: 'May 2024',
    description: 'Worked on ReactJS UI components, API integrations, and design enhancements.',
    color: 'blue'
  },
  {
    company: 'WebCrafters Inc.',
    logo: 'W',
    role: 'Web Developer',
    from: 'Jun 2023',
    to: 'Dec 2023',
    description: 'Created responsive websites using WordPress, HTML5, and CSS3 for clients.',
    color: 'purple'
  },
  {
    company: 'DevSparks',
    logo: 'D',
    role: 'Full Stack Trainee',
    from: 'Aug 2022',
    to: 'Mar 2023',
    description: 'Built full-stack CRUD apps with MERN stack and participated in team-based projects.',
    color: 'green'
  },
  {
    company: 'BrightPixel Studio',
    logo: 'B',
    role: 'UI/UX Intern',
    from: 'Apr 2022',
    to: 'Jul 2022',
    description: 'Designed clean UI mockups and prototypes with Figma and assisted in web testing.',
    color: 'orange'
  },
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="experience-container">
    <Heading heading={'My Experience'} icon={<TbBriefcase  />}/>

      <div className="timeline-wrapper">
        {/* Main Timeline Line */}
        <div className="timeline-line desktop-only"></div>
        
        {/* Mobile Timeline Line */}
        <div className="timeline-line mobile-only"></div>

        <div className="timeline-items">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`timeline-item ${visibleItems.has(index) ? 'visible' : ''}`}
            >
              {/* Desktop Layout */}
              <div className={`desktop-layout ${index % 2 === 0 ? 'left-side' : 'right-side'}`}>
                {/* Content Card */}
                <div className="content-section">
                  {/* Connecting Line from Card to Timeline */}
                  <div className={`connecting-line ${exp.color} ${index % 2 === 0 ? 'left' : 'right'}`}></div>
                  
                  {/* Card Connection Circle */}
                  <div className={`card-connection-circle ${exp.color} ${index % 2 === 0 ? 'left' : 'right'}`}></div>

                  <div className="experience-card">
                    {/* Card Accent Border */}
                    <div className={`card-accent ${exp.color} ${index % 2 === 0 ? 'right' : 'left'}`}></div>
                    
                    <div className="card-content">
                      <div className={`company-logo ${exp.color}`}>
                        {exp.logo}
                        {/* Logo Glow Effect */}
                        <div className={`logo-glow ${exp.color}`}></div>
                      </div>
                      <div className="company-details">
                        <h3 className="company-name">{exp.company}</h3>
                        <div className="role-info">
                        
                          <span className="role-text">{exp.role}</span>
                        </div>
                        <div className="duration-info">
                          
                          <span className="duration-text">{exp.from} – {exp.to}</span>
                        </div>
                        <p className="description">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Center Section */}
                <div className="timeline-center">
                  {/* Main Timeline Dot */}
                  <div className={`timeline-dot ${exp.color}`}>
                    {/* Dot Pulse Effect */}
                    <div className={`dot-pulse ${exp.color} ${visibleItems.has(index) ? 'active' : ''}`}></div>
                  </div>

                  {/* Connecting Nodes (Rope-like effect) */}
                  {index < experiences.length - 1 && (
                    <div className="connecting-nodes">
                      <div className={`node node-1 ${visibleItems.has(index) ? 'visible' : ''}`}></div>
                      <div className={`node node-2 ${visibleItems.has(index) ? 'visible' : ''}`}></div>
                      <div className={`node node-3 ${visibleItems.has(index) ? 'visible' : ''}`}></div>
                    </div>
                  )}
                </div>

                {/* Spacer */}
                <div className="spacer"></div>
              </div>

              {/* Mobile Layout */}
              <div className="mobile-layout">
                {/* Timeline Section */}
                <div className="mobile-timeline">
                  {/* Main Timeline Dot */}
                  <div className={`timeline-dot ${exp.color}`}>
                    {/* Dot Pulse Effect */}
                    <div className={`dot-pulse ${exp.color} ${visibleItems.has(index) ? 'active' : ''}`}></div>
                  </div>

                  {/* Mobile Connecting Nodes */}
                  {index < experiences.length - 1 && (
                    <div className="mobile-connecting-nodes">
                      <div className={`mobile-node mobile-node-1 ${visibleItems.has(index) ? 'visible' : ''}`}></div>
                      <div className={`mobile-node mobile-node-2 ${visibleItems.has(index) ? 'visible' : ''}`}></div>
                      <div className={`mobile-node mobile-node-3 ${visibleItems.has(index) ? 'visible' : ''}`}></div>
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div className="mobile-content">
                  {/* Mobile Connecting Line */}
                  <div className={`mobile-connecting-line ${exp.color}`}></div>
                  
                  {/* Mobile Card Connection Circle */}
                  <div className={`mobile-card-connection ${exp.color}`}></div>

                  <div className="mobile-experience-card">
                    {/* Mobile Card Accent Border */}
                    <div className={`mobile-card-accent ${exp.color}`}></div>
                    
                    <div className="mobile-card-content">
                      <div className={`mobile-company-logo ${exp.color}`}>
                        {exp.logo}
                        {/* Mobile Logo Glow Effect */}
                        <div className={`mobile-logo-glow ${exp.color}`}></div>
                      </div>
                      <div className="mobile-company-details">
                        <h3 className="mobile-company-name">{exp.company}</h3>
                        <div className="mobile-role-info">
                          <span className="mobile-role-text">{exp.role}</span>
                        </div>
                        <div className="mobile-duration-info">
                          <span className="mobile-duration-text">{exp.from} – {exp.to}</span>
                        </div>
                        <p className="mobile-description">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;