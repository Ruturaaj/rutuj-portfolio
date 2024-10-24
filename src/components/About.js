import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './css/About.css';

const About = () => {
  return (
    <div className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="img"></div>
        <div className="info">
          <p>
            I’m Rutuj Charde, a <span className="highlight">Cybersecurity Enthusiast</span> currently pursuing a B.Tech in Computer Science Engineering with a specialization in Cyber Security at <b>St. Vincent Pallotti College of Engineering & Technology</b>. I'm dedicated to creating solutions that safeguard sensitive data and digital assets.
          </p>
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
      </div>
    </div>
  );
};

export default About;
