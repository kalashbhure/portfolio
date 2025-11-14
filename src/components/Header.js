import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">Kalash S. Bhure</div>
        <nav className="nav">
          <NavLink to="/" end className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
          <NavLink to="/experience" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Experience</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
