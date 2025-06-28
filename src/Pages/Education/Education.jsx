import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heading from '../../Components/Heading/Heading';
import '../../Styles/Education.css';
import { RiGraduationCapLine } from "react-icons/ri";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // allows animation to reverse when scrolling back up
    });
  }, []);

  const educationData = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "SRTMUN University, Nanded",
      duration: "2020 - 2022",
      percentage: "80%",
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "MIT College of Computer Science & IT, Basmat",
      duration: "2017 - 2020",
      percentage: "68%",
    },
    {
      degree: "12th (HSC)",
      institution: "Gorkhnath Mahavidyalaya",
      duration: "2016 - 2017",
      percentage: "67%",
    },
    {
      degree: "10th (SSC)",
      institution: "Gorkhnath Mahavidyalaya",
      duration: "2014 - 2015",
      percentage: "62%",
    },
  ];

  const EducationCard = ({ degree, institution, duration, percentage, index }) => (
    <div
      className="edu-card"
      data-aos="fade-up"
      data-aos-delay={index * 150}
    >
      <div className="edu-header">
        <h3 className="edu-degree">{degree}</h3>
        <span className="edu-duration">{duration}</span>
      </div>
      <p className="edu-institution">{institution}</p>
      <div className="edu-marks">
        <span className="edu-percent">Percentage: <strong>{percentage}</strong></span>
      </div>
    </div>
  );

  return (
    <section className="education-section">
      <Heading heading={"My Education"} icon={<RiGraduationCapLine />} />
      <div className="education-list">
        {educationData.map((item, index) => (
          <EducationCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
