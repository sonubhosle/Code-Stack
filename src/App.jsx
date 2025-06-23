import React,{Suspense,lazy} from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Loader from './Components/Loader/Loader';
import Header from './Components/Header/Header';
const Projects = lazy(()=> import('./Pages/Projects/Projects'));
const Education = lazy(()=> import('./Pages/Education/Education'));
const Skills = lazy(()=> import('./Pages/Skills/Skills'));
const About = lazy(()=> import('./Pages/About/About'));
const Contact = lazy(()=> import ('./Pages/Contact/Contact'));
const Not_Found = lazy(()=> import('./Components/404/Not_Found'));
const Home = lazy(() => import('./Pages/Home/Home'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Not_Found />} />
      </Routes>
    </Suspense>
  )
}

export default App