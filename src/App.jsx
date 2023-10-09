import React from 'react';
import Header from './components/header/Header';
import Nav from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Services/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App