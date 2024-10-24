import React from 'react';
import './css/Home.css';

const Home = () => {
  return (
    <section className="home active section" id="home">
      <div className="container">
        <div className="home-content">
          <div className="home-info">
            <h3 className="hello">
              Hello, My name is <span className="name">Rutuj Charde</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">Cybersecurity Enthusiast</span>
            </h3>
            <p className="home-description">
            As a future Cybersecurity Analyst, I'm passionate about safeguarding digital assets and mitigating
                    emerging threats.
                    My journey began with a fascination for technology, and I’ve since honed my skills through hands-on
                    experience and certifications.
            </p>
            <a href="/" className="btn">Download CV</a>
          </div>
          <div className="home-img">
            <img src={require('../assets/rutuj.png')} alt="Rutuj Charde" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
