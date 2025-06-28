import React from 'react'
import Banner from '../../Components/Banner/Banner'
import '../../Styles/Home.css'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

const Home = () => {
  return (
    <div className='home-section'>
      <Banner />
      <Skills />
      <Education />
      <Experience />
      <Projects/>
    </div>
  )
}

export default Home