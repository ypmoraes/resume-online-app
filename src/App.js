import React from 'react';
import './App.css';

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1>Yuri Moraes</h1>
        <p>Cloud Engineer</p>
      </header>
      <section className="contact">
        <h2>Contact Information</h2>
        <p>Email: yuri_ppm@hotmail.com</p>
        <p>LinkedIn: linkedin.com/in/yuripiresmoraes</p>
        <p>GitHub: github.com/yourusername</p>
      </section>
      <section className="education">
        <h2>Education</h2>
        <p>
          Bachelor of Science in Computer Science <br />
          FIAP São Paulo, Graduation Year 2016
        </p>
      </section>
      <section className="experience">
        <h2>Work Experience</h2>
        <p>
          Cloud Specialist <br />
          Cirion | JULY 2023 - Present <br />
          - Developed and maintained web applications using React and Node.js.
        </p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>AWS</li>
          <li>GCP</li>
          <li>Azure</li>
          <li>Terraform</li>
          <li>Git</li>
          <li>Python</li>
        </ul>
      </section>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Resume />
    </div>
  );
}

export default App;
