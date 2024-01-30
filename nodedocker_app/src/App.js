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
          Cloud Specialist, working with Google, Azure, and AWS,
          applying the core principles of Dev(sec)Ops and SRE.
          Experienced with managing critical environments, supporting,
          and administrating networks, VMs and microservices
          applications in Cloud, seeking opportunities as a Cloud Engineer.
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
        <li>AWS Certified Cloud Practitioner</li>
        <li>MCPS: Microsoft Certified Professional</li>
        <li>SRE Foundation</li>
        <li>Scrum Foundation Professional Certificate</li>
      </section>
      <br />
      <section className="skills">
        <h2>Skills</h2>
         <li>AWS</li>
         <li>GCP</li>
         <li>Azure</li>
         <li>Terraform</li>
         <li>Git</li>
         <li>Python</li>
      </section>
      <br />
      <section className="About the resume">
        <h2>About this Webpage</h2>
        <ul>
          <p>
            This resume was created  100% by me, using the following tools: AWS ECR, GitHub, GitHub Actions, EC2, Docker and CloudFormation.
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
