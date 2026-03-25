import React, { useState, useEffect } from 'react';
import FullMenu from './FullMenu';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (currentPage !== 'home') return;

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
  }, [currentPage]);

  if (currentPage === 'menu') {
    return <FullMenu goBack={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'about') {
    return <AboutPage goBack={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'contact') {
    return <ContactPage goBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="app-container">
      
      {/* Navbar with the New Logo */}
     {/* Navbar with the New Stacked Logo */}
      <nav className="navbar">
        <div className="logo" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>
          <img src="/assets/logo.png" alt="Dhanilanka Logo" />
          <span className="logo-text">Dhanilanka</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>About</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('menu'); }}>Menu</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero hidden-animate">
        <div className="hero-content">
          <h1>Experience Authentic <br/><span className="highlight">Flavors</span></h1>
          <p>A royal chapter of flavors in the heart of Durgapur. Indulge in authentic dishes, soak in the vibrant ambiance, and celebrate your special moments with us.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href = 'tel:09907701778'}>Order Now</button>
            <button className="btn-secondary" onClick={() => setCurrentPage('menu')}>View Menu</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/thali.png" alt="Special Thali" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features hidden-animate">
        <div className="feature-box">
          <h3>👨‍🍳 Master Chefs</h3>
          <p>Unleashing culinary excellence, one plate at a time with authentic recipes.</p>
        </div>
        <div className="feature-box">
          <h3>🌶️ Quality Food</h3>
          <p>Savor the finest flavors that will tantalize your taste buds and ignite your senses.</p>
        </div>
        <div className="feature-box">
          <h3>🛵 Fast Delivery</h3>
          <p>Experience the ease of online ordering and no-contact delivery to your door.</p>
        </div>
      </section>

      {/* Menu Section Preview */}
      <section className="menu-section hidden-animate">
         <h2 className="section-title">Our Popular Items</h2>
         <div className="menu-grid">
          <div className="menu-card"><img src="/assets/thali.png" alt="Veg Thali" /><div className="card-info"><h3>Special Veg Thali</h3><p>Authentic Bengali</p><span className="price">₹250</span></div></div>
          <div className="menu-card"><img src="/assets/mutton.png" alt="Mutton Curry" /><div className="card-info"><h3>Signature Mutton</h3><p>Rich and spicy</p><span className="price">₹350</span></div></div>
          <div className="menu-card"><img src="/assets/chicken.png" alt="Chilli Chicken" /><div className="card-info"><h3>Crispy Chilli Chicken</h3><p>Perfectly spiced</p><span className="price">₹220</span></div></div>
          <div className="menu-card"><img src="/assets/dosa.png" alt="Special Dosa" /><div className="card-info"><h3>Special Dosa Platter</h3><p>South Indian</p><span className="price">₹180</span></div></div>
        </div>
        <div style={{textAlign: 'center', marginTop: '40px'}}>
           <button className="btn-primary" onClick={() => setCurrentPage('menu')}>See Full Menu</button>
        </div>
      </section>

      {/* Ambiance Parallax Section */}
      <section className="ambiance-section hidden-animate">
        <div className="ambiance-overlay">
          <h2>Dine in a Royal Ambiance</h2>
          <p>Experience the perfect blend of traditional culture and modern multi-cuisine dining right here in Sagarbhanga, Durgapur.</p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonials hidden-animate">
        <h2 className="section-title" style={{color: 'white'}}>What Our Guests Say</h2>
        <div className="review-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p>"Great experience! Beautiful presentation on the plate, bright colors, and a clean, family-friendly atmosphere."</p>
          <h4>- Google Local Guide</h4>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/assets/logo.png" alt="Dhanilanka Logo" style={{height: '60px', marginBottom: '15px'}} />
            <p>Rating: 4.0 ⭐ (795 Reviews)</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📞 099077 01778</p>
            <p>🕒 Open Today · Closes 11 pm</p>
          </div>
          <div className="footer-section">
            <h3>Location</h3>
            <p>Majher More, Sagarbhanga, Durgapur 713211</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Dhanilanka Multi Cuisine Restaurant. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;