import React, { useEffect } from 'react';
import './App.css'; // We can reuse your existing CSS!

export default function AboutPage({ goBack }) {
  // Keep the smooth scroll animations for this page too
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
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Top Header with Back Button */}
      <div className="menu-header">
        <button className="back-btn" onClick={goBack}>← Back to Home</button>
        <h1>Our Story</h1>
      </div>

      {/* The 2x2 Image Grid and Text */}
      <section className="about-section" style={{ paddingTop: '60px' }}>
        <div className="about-container">
          
          <div className="about-images hidden-animate">
            <img src="/assets/exterior.png" alt="Exterior" className="img-1" />
            <img src="/assets/thali.png" alt="Thali" className="img-2 bg-gray" />
            <img src="/assets/mutton.png" alt="Mutton" className="img-3 bg-gray" />
            <img src="/assets/wall.png" alt="Tribal Art" className="img-4" />
          </div>

          <div className="about-content hidden-animate" style={{ transitionDelay: '0.2s' }}>
            <h4 className="about-subtitle">About Us</h4>
            <h2 className="about-title">Welcome to <br/><span>Dhanilanka Restaurant</span></h2>
            
            <p className="about-description">
              Discover a culinary journey like no other at our exquisite restaurant. From the moment you step through our doors, you'll be captivated by the inviting ambiance, impeccable service, and the tantalizing aromas wafting from our kitchen. We are dedicated to providing an unforgettable dining experience for every guest.
            </p>
            <p className="about-description">
              At Dhanilanka, we strive to provide a remarkable dining experience for our guests. Nestled in the heart of Durgapur, our restaurant offers a delightful blend of exquisite multi-cuisine, impeccable service, and a warm and inviting atmosphere.
            </p>
            
            <div className="about-stats">
               <div className="stat-box">
                  <h3>15+</h3>
                  <p>Years of Experience</p>
               </div>
               <div className="stat-box">
                  <h3>50+</h3>
                  <p>Popular Dishes</p>
               </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}