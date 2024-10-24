import React from 'react';
import './css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>You can reach me at:</p>

      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> {/* Email Icon */}
          <a href="mailto:rutujcharde.22@stvincentngp.edu.in"> Email</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" /> {/* Phone Icon */}
          <a href="tel:+919370928083"> Phone</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
