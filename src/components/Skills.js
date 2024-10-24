import React from 'react';
import './css/Skills.css'; // Make sure this CSS file contains styles specific to the Skills section

const Skills = () => {
  const skills = [
    { skill: 'JS', percent: 86 },
    { skill: 'PHP', percent: 66 },
    { skill: 'HTML', percent: 96 },
    { skill: 'Bootstrap', percent: 76 }
  ];

  return (
    <section className="skills section" id="skills">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Skills</h2>
        </div>
      </div>

      <div className="skills-content">
        {skills.map((item, index) => (
          <div className="skills-item padd-15" key={index}>
            <h5>{item.skill}</h5>
            <div className="progress">
              <div className="progress-in" style={{ width: `${item.percent}%` }}></div>
              <div className="skill-percent">{item.percent}%</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
