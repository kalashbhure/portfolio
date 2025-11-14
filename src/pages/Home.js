import React from 'react';
import './Home.css';
import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <section className="home">
      <div className="home-grid">
        <div className="home-left">
          <h1 className="home-title">Hi, I'm <span className="accent">Kalash</span></h1>
          <p className="home-sub">Full Stack Java Developer — React | Java Servlets | JDBC | MySQL</p>

          <p className="home-desc">
            I build responsive, user-friendly web applications. Currently working on an Employee Management System during internship at MBIG IT SERVICES.
          </p>

          <div className="home-actions">
            <a href="/projects" className="btn primary">View Projects</a>
            <a href="/contact" className="btn ghost">Contact</a>
          </div>
        </div>

        <div className="home-right">
          <div className="profile-card">
            <img src={profile} alt="Kalash profile" className="profile-img"/>
            <div className="profile-info">
              <div className="name">Kalash S. Bhure</div>
              <div className="location">Bhandara, Maharashtra</div>
              <div className="links">
                <a href="#" className="link">GitHub</a> • <a href="#" className="link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
