import React, { useEffect } from 'react';
import Heading from '../../Components/Heading/Heading';
import { SiHyperskill } from "react-icons/si";
import '../../Styles/Skills.css';
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiPostman,
  SiXampp, SiVisualstudiocode, SiWordpress
} from "react-icons/si";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      once: true,
    });
  }, []);

  const skills = {
    frontend: [
      { name: "React JS", icon: <FaReact />, bgColor: "#61dbfb" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, bgColor: "#00BCFF" },
      { name: "JavaScript", icon: <IoLogoJavascript />, bgColor: "#F7DF1E" },
      { name: "HTML", icon: <FaHtml5 />, bgColor: "#F06530" },
      { name: "CSS", icon: <IoLogoCss3 />, bgColor: "#2D53E5" },
      { name: "WordPress", icon: <SiWordpress />, bgColor: "#28799E" },
    ],
    backend: [
      { name: "Node JS", icon: <FaNodeJs />, bgColor: "#58A44A" },
      { name: "Express JS", icon: <SiExpress />, bgColor: "#F0D108" },
      { name: "MongoDB", icon: <SiMongodb />, bgColor: "#1AAD57" },
      { name: "Xampp", icon: <SiXampp />, bgColor: "#FB7E2B" },
    ],
    tools: [
      { name: "VS Code", icon: <SiVisualstudiocode />, bgColor: "#2AAFF2" },
      { name: "Postman", icon: <SiPostman />, bgColor: "#FD713B" },
      { name: "Git", icon: <FaGitAlt />, bgColor: "#F05639" },
      { name: "GitHub", icon: <FaGithub />, bgColor: "#080808" },
    ],
  };

  const SkillCard = ({ name, icon, bgColor, index }) => (
    <div
      className="skill-card"
      style={{ border: `1px solid ${bgColor}` }}
      data-aos="fade-up"
      data-aos-delay={index * 150} // delay each skill inside group
    >
      <div className="skill-icon" style={{ color: bgColor }}>{icon}</div>
      <div className="skill-name" style={{ color: bgColor }}>{name}</div>
    </div>
  );

  const SkillGroup = ({ title, data, delayStart }) => (
    <div
      className="skills-group"
      data-aos="fade-up"
      data-aos-delay={delayStart}
    >
      <h3 className="skills-category">{title}</h3>
      <div className="skills-list">
        {data.map((skill, idx) => (
          <SkillCard key={idx} {...skill} index={idx} />
        ))}
      </div>
    </div>
  );

  return (
    <div className='skills_section'>
      <Heading heading={'My Skills'} icon={<SiHyperskill />} />

      <div className="skills-grid">
        <SkillGroup title="Frontend" data={skills.frontend} delayStart={100} />
        <SkillGroup title="Backend" data={skills.backend} delayStart={300} />
        <SkillGroup title="Tools" data={skills.tools} delayStart={500} />
      </div>
    </div>
  );
};

export default Skills;
