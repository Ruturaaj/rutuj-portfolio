import React, { useState } from 'react'; // Import useState
import './css/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faComments, faGraduationCap, faCertificate, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Add faBars and faTimes icons
import { Link } from 'react-scroll';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-heading">
        <h1>My Portfolio</h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} /> {/* Toggle icon */}
      </div>
      <ul className={`nav ${isMenuOpen ? 'active' : ''}`}> {/* Add active class based on menu state */}
        <li>
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
            <button className="nav-button active">
              <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
            <button className="nav-button">
              <FontAwesomeIcon icon={faUser} /> <span>About</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} onClick={toggleMenu}>
            <button className="nav-button">
              <FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="certificate" smooth={true} duration={500} onClick={toggleMenu}>
            <button className="nav-button">
              <FontAwesomeIcon icon={faCertificate} /> <span>Certificates</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
            <button className="nav-button">
              <FontAwesomeIcon icon={faBriefcase} /> <span>Projects</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            <button className="nav-button">
              <FontAwesomeIcon icon={faComments} /> <span>Contact</span>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
