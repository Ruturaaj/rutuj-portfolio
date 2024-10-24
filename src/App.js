import React from 'react';
import { Element } from 'react-scroll';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education'; // Ensure correct path
import Projects from './components/Project';
import Contact from './components/Contact';
import Certificate from './components/Certificate'; // Import Certificate component
import './App.css'; // Your main CSS file
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Sections */}
      <Element name="home" className="element">
        <Home />
      </Element>
      
      <Element name="about" className="element">
        <About />
      </Element>
      
      <Element name="education" className="element">
        <Education />
      </Element>
      
      {/* Add Certificate section here */}
      <Element name="certificate" className="element">
        <Certificate />
      </Element> 

      <Element name="projects" className="element">
        <Projects />
      </Element>

      <Element name="contact" className="element">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
