import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="card">
        <h2>About Me</h2>
        <p className="lead">
          Career Objective: To work in challenging and dynamic environment and to keep adding value to the organization that I represent and serve. While also concurrently upgrading my skill and knowledge.
        </p>

        <div className="two-col">
          <div>
            <h4>Education</h4>
            <ul>
              <li>SSC — Nutan Kanya School, Bhandara — 2020 — 82.80%</li>
              <li>HSC — Lal Bahadur Shastri, Bhandara — 2022 — 62.00%</li>
              <li>B.E. (Pursuing) — RTMNU MPCE, Bhandara</li>
            </ul>
          </div>

          <div>
            <h4>Personal Info</h4>
            <table className="info-table">
              <tbody>
                <tr><th>Name</th><td>Kalash S. Bhure</td></tr>
                <tr><th>DOB</th><td>07/08/2004</td></tr>
                <tr><th>Languages</th><td>Marathi, Hindi, English</td></tr>
                <tr><th>Location</th><td>Bhandara, Maharashtra</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
