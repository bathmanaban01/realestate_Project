import React from "react";
import "./Service.css";


// ✅ Hero background image

// ✅ Service list
const services = [
  {
    title: "2D Floor Plan",
    desc: "Precise layouts defining room sizes, furniture placement, and wall relationships used by architects and clients.",
    number: "01",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "3D Floor Plan / Layout Plan",
    desc: "Immersive visualizations bridging 2D blueprints to 3D models with depth, furniture, and realism.",
    number: "02",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "3D Exterior Elevation",
    desc: "Photorealistic renderings of façades showing details, lighting, and exterior materials.",
    number: "03",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "3D Interior Design",
    desc: "Interior visualizations including lighting, furnishings, textures, and layouts for client approval.",
    number: "04",
    image: "https://images.pexels.com/photos/33259653/pexels-photo-33259653.jpeg?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "3D Walkthrough with Animation",
    desc: "Virtual real-time navigation of your design with lighting, texture, and movement.",
    number: "05",
    image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
  },
  {
    title: "Aerial View & Landscape Designs",
    desc: "Bird’s-eye views showing landscaping and terrain with precision.",
    number: "06",
    image: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Structural Drawing",
    desc: "Detailed technical blueprints of beams, foundations, and columns for site execution.",
    number: "07",
    image: "https://images.pexels.com/photos/8962803/pexels-photo-8962803.jpeg?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Electrical & Plumbing Drawing",
    desc: "Schematics of wiring and plumbing for accurate onsite work.",
    number: "08",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
  },
];

const ServicesSection = () => {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section
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
          <h1 className="headline1">Our Serviceses</h1>
        </div>
      </section>

      {/* ✅ SERVICES SECTION */}
      <section className="services-section1">
        <h2 className="services-title1">We Provide The Best Service</h2>
        <div className="services-grid1">
          {services.map((s) => (
            <div key={s.number} className="service-card1" style={{ backgroundImage: `url(${s.image})` }}>
              <div className="overlay1">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-number1">{s.number}</span>
                <a href="/services" className="see-more-btn1">Learn More →</a>
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
