import React, { useRef, useState } from 'react';
import './Contact.css';
// optional: import emailjs from 'emailjs-com';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SENT'); // remove if using EmailJS integration
    // If you want real mail use EmailJS or your server:
    // emailjs.sendForm('SERVICE_ID','TEMPLATE_ID',formRef.current,'USER_ID')
    //  .then(()=> setStatus('SENT')).catch(()=> setStatus('ERROR'))
  };

  return (
    <section className="contact">
      <div className="card">
        <h2>Contact</h2>
        <div className="contact-grid">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <input name="from_name" placeholder="Your name" required />
            <input name="reply_to" placeholder="Email" required />
            <textarea name="message" rows="6" placeholder="Message" required></textarea>
            <button className="btn primary" type="submit">Send Message</button>
            {status === 'SENT' && <div className="status success">Message queued (demo). Configure EmailJS for working email.</div>}
            {status === 'ERROR' && <div className="status error">Failed to send — try again.</div>}
          </form>

          <div className="contact-info">
            <h3>Reach me</h3>
            <p>Email: <a href="mailto:kalashbhure089@gmail.com">kalashbhure089@gmail.com</a></p>
            <p>Phone: 9021931855</p>
            <p>Location: Bhandara, Maharashtra</p>
            <p className="small">You can configure <strong>EmailJS</strong> or connect a backend to make the form send real emails.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
