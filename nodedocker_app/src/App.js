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
        <p>GitHub: github.com/ypmoraes</p>
        <p>Phone: +55 11 94224-1557</p>
      </section>
      <section className="About Me">
        <h2>About Me</h2>
        <p>
          Thriving cloud Engineer with experience in multi-cloud environments (Google, Azure, AWS), seeking opportunities to leverage my skills on a global scale. Applying DevSecOps and SRE principles to ensure agility, reliability, and scalability.Always up for a challenge and passionate about staying ahead of the curve in the ever-evolving cloud landscape.
        </p>
      </section>
      <br />
      <section className="experience">
        <h2>Work Experience</h2>
        <p>
          Cloud Specialist <br />
          Cirion | JULY 2023 - Present <br />
          Responsible for providing third-level support for Cloud operations for customers throughout Latin America (AWS/Azure/GCP). 
        </p>
        <br />
        <p>
          Cloud Engineer <br />
          Falconi | MAY 2021 - JUNE 2023 <br />
          Responsible for the infrastructure on-premises and in the Cloud
          Architecting, supporting, and managing the Cloud environment (AWS, GCP
          and Azure) using terraform, and CI/CD pipelines.
        </p>
        <br />
        <p>
          Cloud Engineer <br />
          Fujitsu | JUNE 2018 - MARCH 2021 <br />
          Responsible for supporting and managing customers' local cloud environment using VMWARE, Windows and Linux servers, as well as Cisco routers.
        </p>
        <br />
        <p>
          Help Desk Analyst <br />
          Burger King | JUNE 2016 - JUNE 2018
        </p>
      </section>
      <section className="education">
        <h2>Education</h2>
        <p>
          Computer Networking <br />
          FIAP São Paulo, Graduation Year 2016
        </p>
      </section>
      <br />
      <section className="certifications">
        <h2>Certifications</h2>
        <li>Google Cloud Certified - Professional Cloud Architect</li>
        <li>AWS Security Specialty</li>
        <li>AWS Solutions Architect Associate</li>
        <li>AWS Certified Cloud Practitioner</li>
        <li>SRE Foundation</li>
      </section>
      <br />
      <section className="skills">
        <h2>Skills</h2>
         <li>AWS</li>
         <li>GCP</li>
         <li>Azure</li>
         <li>Terraform</li>
         <li>GitHub</li>
         <li>Python</li>
      </section>
      <br />
      <section className="About the resume">
        <h2>About this Webpage</h2>
        <ul>
          <p>
          Demonstrated technical proficiency by independently developing this resume, leveraging Terraform for infrastructure, GitHub for version control, Artifact Registry for image storage, Cloud Run for serverless deployment, and Docker for containerization. Successfully built a React and Node.js application with the assistance of Gemini.
          </p>
          <p>
          You can check about this resume at my GitHub at this url: https://github.com/ypmoraes/resume-online-app
          </p>
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
