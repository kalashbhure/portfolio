import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Kalash S. Bhure</div>
        <div className="footer-right">Contact: <a href="mailto:kalashbhure089@gmail.com">kalashbhure089@gmail.com</a> • 9021931855</div>
      </div>
    </footer>
  );
}
