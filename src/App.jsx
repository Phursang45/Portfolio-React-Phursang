import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './testimonials/Testimonial';
import Service from './components/services/Service';

const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
