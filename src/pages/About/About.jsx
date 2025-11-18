import React from 'react';
import './About.css';

import img1 from "../../assets/about.jpg";
import aboutImg from "../../assets/about1.jpg";
import aboutImg1 from '../../assets/aboutIN.jpg';
import aboutImg2 from '../../assets/aboutEX.jpg';

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
          <h1 className="headline1">About Us</h1>
        </div>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section className="about-section1" id="about">
        <div className="about-container1">
          <div className="about-text1">
            <h3>Welcome To [Company_name]</h3>
            <p>
              At [Company_name], based in Coimbatore, we take pride in our 15 years of expertise in architectural and design excellence. Our journey is built on creativity, precision, and a client-focused approach, making us a trusted name in the industry. We believe in crafting innovative and functional designs that reflect your unique vision while maintaining the highest standards of quality. With a team of passionate professionals, we ensure every project becomes a masterpiece that inspires and stands out.
            </p>

            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
                alt="arrow" style={{ width: '16px', height: '16px', marginRight: '8px', verticalAlign: 'middle' }} />
              Affordable Pricing
            </h2>
            <p>
              Offering premium design services that fit within your budget without compromising quality.
            </p>

            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
                alt="arrow" style={{ width: '16px', height: '16px', marginRight: '8px', verticalAlign: 'middle' }} />
              Eco-Friendly Designs
            </h2>
            <p>
              Incorporating sustainable and environmentally conscious practices into every project we take on.
            </p>
          </div>

          <div className="about-image-wrapper1">
            <img src={aboutImg} alt="About Us" className="about-img" />
          </div>
        </div>
      </section>

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

      {/* ✅ VISION & MISSION */}
      <section className="vision-mission">
        <h2>Vision & Mission</h2>
        <div className="vision-cards">
          <div className="card card-left">
            <div className="card-text">
              <h3>Our Vision</h3>
              <ul>
                <li>Transform visions into reality via creative and precise design.</li>
                <li>Deliver high-quality results using the latest technology.</li>
                <li>Keep clients engaged throughout the design process.</li>
              </ul>
            </div>
            <div className="card-image">
              <img src={aboutImg1} alt="Our Vision" className="about-img" />
            </div>
          </div>

          <div className="card card-right">
            <div className="card-image">
              <img src={aboutImg2} alt="Our Mission" className="about-img" />
            </div>
            <div className="card-text">
              <h3>Our Mission</h3>
              <ul>
                <li>Provide innovative, cost-effective, and sustainable design solutions.</li>
                <li>Build long-term relationships based on trust and transparency.</li>
                <li>Embrace new technologies and adapt to evolving client needs.</li>
              </ul>
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
