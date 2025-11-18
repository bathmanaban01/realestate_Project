import React from "react";
import "./Project.css";


// ✅ Hero background image

// ✅ Service list
const projects = [
  { client: "Mr. Anand", location: "Namakkal", area: "10,130 sqft", proposal: "Interior Design", image:"../../assets/about1.jpg" },
  { client: "Mr. Balasubramaniam", location: "Udumalpet", area: "–", proposal: "Exterior & Interior", image:"../../assets/home_slide1.1.jpg" },
  { client: "Mr. Chezhiyan", location: "Coimbatore", area: "4,125 sqft", proposal: "Exterior & Interior", image:"../../assets/home_slide3.jpg" },
  { client: "Mr. Rajan", location: "Avinashi", area: "6,957 sqft", proposal: "Exterior & Interior", image:"../../assets/home_slide4.jpg" },
  { client: "Er. Raghu", location: "Jayankondam", area: "5,840 sqft", proposal: "Exterior & Interior", image:"../../assets/aboutEX.jpg" },
  { client: "Mr. Saravanan", location: "Avinashi", area: "10,510 sqft", proposal: "Exterior & Interior", image:"../../assets/about3.jpg" },
];

const ServicesSection = () => {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section id="Projects"
        className="hero-section1"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          position: "relative",
        }}
      >
        <div className="overlay1">
          <h1 className="headline1">Our Projects</h1>
        </div>
      </section>

      {/* ✅ SERVICES SECTION */}
      <section className="projects-section">
    <div className="projects-grid">
      {projects.map((pr, idx) => (
        <div key={idx} className="project-card">
          <div
            className="project-image"
            style={{ backgroundImage: `url(${pr.image})` }}
          ></div>
          <div className="project-details">
            <h3>{pr.client}</h3>
            <p><strong>Location:</strong> {pr.location}</p>
            <p><strong>Site Area:</strong> {pr.area}</p>
            <p><strong>Proposal:</strong> {pr.proposal}</p>
          </div>
        </div>
      ))}
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


      {/* ✅ CONTACT SECTION */}
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

    </>
  );
};

export default ServicesSection;
