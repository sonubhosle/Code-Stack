import React from 'react'
import Banner from '../../Components/Banner/Banner'

import Education from '../Education/Education'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'

import { ScrollReveal } from '../../Components/ScrollReveal/ScrollReveal'

const Home = () => {
  return (
    <div >
      <Banner />
      <About/>
      <Skills />
      <Education />
      <Projects/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default Home