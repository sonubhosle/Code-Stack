import React from 'react'
import Banner from '../../Components/Banner/Banner'
import '../../Styles/Home.css'
import Projects from '../Projects/Projects'

const Home = () => {
  return (
    <div className='home-section'>
      <Banner />
      <Projects/>
    </div>
  )
}

export default Home