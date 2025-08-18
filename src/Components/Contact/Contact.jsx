import React from 'react';
import './Contact.css';

import img1 from "../../assets/about.jpg";
const About = () => {
  return (
    <div>

      {/* ✅ HERO SECTION */}
      <section id="about_body" className="hero-section1" style={{
        backgroundImage: `url(${img1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "30vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <div className="overlay1">
          <div className="hero1">
        <h1>Get In Touch</h1>
        <p>Please reach out to help you better!</p>
      </div>
        </div>
          </section>
          
     <div className="contact-page1">
     

      <div className="card-row1">
        <div className="card1">
          <div className="icon address-icon1"></div>
          <h3>Address</h3>
          <p>
            New No: 51, Ramasamy Layout (DPF Street),<br/>
            Pappanaickenpalayam, Coimbatore - 641 037
          </p>
        </div>
        <div className="card1">
          <div className="icon phone-icon1"></div>
          <h3>Contact Info</h3>
          <p>Open a chat or give us a call at:</p>
          <p>+91 93637 00966<br/>+91 9659 99336<br/>0422-4274336</p>
        </div>
        <div className="card1">
          <div className="icon email-icon1"></div>
          <h3>Write To Us</h3>
          <p>
            Email<br/>
            pcs@pcstudios.in<br/>
            info@pcstudios.in
          </p>
        </div>
      </div>

      <div className="map-container1">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!...your-map-url..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>

      

      {/* ✅ HIGHLIGHT STATS SECTION */}
      <section className="projects-highlight-section" id="projects">
        <div className="overlay">
          <div className="stats-box">
            <div className="stat-item">
              <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="Experience" className="stat-icon" />
              <p className="stat-title">Years Of Experience</p>
              <h1>15+</h1>
            </div>
            <div className="stat-item">
              <img src="https://cdn-icons-png.flaticon.com/512/2266/2266952.png" alt="Designs" className="stat-icon" />
              <p className="stat-title">Success Designs</p>
              <h1>500+</h1>
            </div>
            <div className="stat-item">
              <img src="https://cdn-icons-png.flaticon.com/512/2620/2620437.png" alt="Team" className="stat-icon" />
              <p className="stat-title">Team Members</p>
              <h1>20+</h1>
            </div>
          </div>
        </div>
      </section>

     

      {/* ✅ CONTACT FORM */}
      <section className="contact-section" id="contact">
        <h2>Let’s Build Together</h2>
        <p>Have a project in mind? Let’s turn your idea into reality.</p>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="contact" placeholder="Contact Number" required />
          <input type="text" name="city" placeholder="City" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="6" placeholder="Message" required></textarea>
          <button type="submit" className="contact-btn">Contact Us</button>
        </form>
      </section>

      {/* ✅ FOOTER SECTION */}
      <footer className="site-footer">
  <div className="footer-top">
    <div className="footer-col">
      <h4>Contact</h4>
      <p>📞 +91 99659 99336<br />📞 +91 93637 00966</p>
      <p>📧 pcs@pcstudios.in</p>
    </div>
    <div className="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home_body">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Services">Service</a></li>
        <li><a href="/Projects">Our Projects</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Services</h4>
      <ul>
        <li>2D &amp; 3D Floor Plans</li>
        <li>Exterior Elevation</li>
        <li>Interior Design</li>
        <li>3D Walkthroughs</li>
        <li>Aerial &amp; Landscape</li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Our Projects</h4>
      <ul>
        <li>On going projects</li>
        <li>plots & Villas</li>
        <li>Farm Land</li>
        <li>Commercial & Residential Lands</li>
        
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2025 Purple Crayon Studios | All Rights Reserved.</p>
    <p>Design by Weblike</p>
  </div>
</footer>


    </div>
  );
};

export default About;
