import React from 'react';
import './css/Education.css'; // Ensure this CSS file contains styles specific to this component

const Education = () => {
  const educationData = [
    {
      title: 'Bachelor of Technology in Computer Science Engineering',
      specialization: 'Cyber Security',
      institution: 'St. Vincent Pallotti College of Engineering and Technology, Nagpur',
      relevantCourses: 'Cyber Security Principles, Network Security, Cryptography',
      date: 'Expected Graduation: 2026',
    },
    {
      title: 'Higher Secondary Certificate',
      institution: 'Smt. Jankidevi Junior College',
      date: 'Year of Passing: 2022',
      percentage: '80%',
      stream: 'Science (Bifocal)',
    },
    {
      title: 'Secondary School Certificate',
      institution: 'Eastern Point Convent',
      date: 'Year of Passing: 2020',
      percentage: '82%',
      board: 'Maharashtra State Board',
    },
  ];

  return (
    <section className="education section" id="education">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Education</h2>
        </div>
      </div>

      <div className="education-content padd-15">
        <div className="education-box">
          {educationData.map((edu, index) => (
            <div className="box" key={index}>
              <h4>{edu.title}</h4>
              {edu.specialization && <p><strong>Specialization:</strong> {edu.specialization}</p>}
              <p><strong>Institution:</strong> {edu.institution}</p>
              {edu.relevantCourses && <p><strong>Relevant Courses:</strong> {edu.relevantCourses}</p>}
              {edu.date && <p><strong>Date:</strong> {edu.date}</p>}
              {edu.percentage && <p><strong>Percentage:</strong> {edu.percentage}</p>}
              {edu.stream && <p><strong>Stream:</strong> {edu.stream}</p>}
              {edu.board && <p><strong>Board:</strong> {edu.board}</p>}
              <hr /> {/* Separator line for clarity */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
