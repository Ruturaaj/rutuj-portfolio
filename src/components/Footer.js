import React from 'react';
import './css/Footer.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Ensure these icons are imported

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <nav className="nav-links">
            <Link to="home" smooth={true} duration={500}><span>Home</span></Link>
            <Link to="about" smooth={true} duration={500}><span>About</span></Link>
            <Link to="education" smooth={true} duration={500}><span>Education</span></Link>
            <Link to="certificate" smooth={true} duration={500}><span>Certificates</span></Link>
            <Link to="projects" smooth={true} duration={500}><span>Projects</span></Link>
            <Link to="contact" smooth={true} duration={500}><span>Contact</span></Link>
          </nav>
          
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>

          {/* Added Share Links */}
          <div className="share">
            <a href="https://github.com/Ruturaaj" target="_blank" rel="noopener noreferrer" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/rutuj-charde-a0b343288/" target="_blank" rel="noopener noreferrer" className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/rutuj28charde?igsh=NnljNnNucnUyZWJ4" target="_blank" rel="noopener noreferrer" className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2024 Rutuj Charde. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
