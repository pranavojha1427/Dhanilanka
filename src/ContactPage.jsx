import React, { useEffect } from 'react';
import './App.css';

export default function ContactPage({ goBack }) {
  // Reusing our smooth scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden-animate');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Top Header with Back Button */}
      <div className="menu-header">
        <button className="back-btn" onClick={goBack}>← Back to Home</button>
      </div>

      {/* Dark Hero Banner */}
      <div className="contact-hero hidden-animate">
        <h1>Contact Us</h1>
      </div>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="contact-header hidden-animate">
          <span className="decorative-subtitle">Contact Us</span>
          <h2 className="contact-title">Contact For Any Query</h2>
        </div>

        <div className="contact-grid hidden-animate" style={{ transitionDelay: '0.2s' }}>
          
          {/* Email Box */}
          <div className="contact-box">
            <span className="decorative-box-title">Email</span>
            <div className="contact-info-row">
              <span className="contact-icon">✉️</span>
              <p>dhanilanka.restro@gmail.com</p>
            </div>
          </div>

          {/* Address Box */}
          <div className="contact-box">
            <span className="decorative-box-title">Address</span>
            <div className="contact-info-row">
              <span className="contact-icon">📍</span>
              <p>Majher More, Sagarbhanga,<br/>Durgapur, West Bengal 713211</p>
            </div>
          </div>

          {/* Phone Box */}
          <div className="contact-box">
            <span className="decorative-box-title">Contact no</span>
            <div className="contact-info-row">
              <span className="contact-icon">📞</span>
              <p>099077 01778</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}