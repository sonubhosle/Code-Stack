import React, { Suspense, lazy, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loader from './Components/Loader/Loader';
import Header from './Components/Header/Header';
const Projects = lazy(() => import('./Pages/Projects/Projects'));
const Education = lazy(() => import('./Pages/Education/Education'));
const Skills = lazy(() => import('./Pages/Skills/Skills'));
const About = lazy(() => import('./Pages/About/About'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Not_Found = lazy(() => import('./Components/404/Page_Not_Found'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Blogs = lazy(() => import('./Pages/Blogs/Blogs'));
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer/Footer';

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Suspense fallback={<Loader />}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/*' element={<Not_Found />} />
      </Routes>
      <Footer />
    </Suspense>
  )
}

export default App