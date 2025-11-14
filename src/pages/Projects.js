import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Employee Management System',
    desc: 'Responsive web app made during internship. React frontend + Java Servlets backend + MySQL. CRUD for employees, attendance, and admin panel.',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <div className="card">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((p, idx) => (
            <div key={idx} className="project-item">
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {p.link && <a className="project-link" href={p.link}>Live / Repo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
