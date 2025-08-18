import React from "react";
import "./Blog.css";


const posts = [
  {
    title: "Elevating Real Estate Standards in Coimbatore",
    date: "Jul 12, 2025",
    author: "ABI Infrastructure",
    excerpt:
      "Discover how ABI Infrastructure is redefining quality plots and villa projects in and around Coimbatore.",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    title: "Is Real Estate in Coimbatore a Good Investment?",
    date: "Jun 5, 2025",
    author: "ABI Infrastructure",
    excerpt:
      "Market trends, ROI forecasts and why Coimbatore continues to attract smart property investors.",
    image:
      "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg",
  },
  {
    title: "Crafting Quality Living Spaces – ABI Story",
    date: "May 18, 2025",
    author: "ABI Infrastructure",
    excerpt:
      "Our journey of delivering plots, villas and gated communities with transparent documentation.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=cover&w=800&q=60",
  },
];


const ServicesSection = () => {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section
        className="hero-section1"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg)`,
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
          <h1 className="headline1">Our Blogs</h1>
        </div>
      </section>

      <section className="blog-section">
   
    <div className="blog-grid">
      {posts.map((p, idx) => (
        <article className="blog-card" key={idx}>
          <div
            className="blog-image"
            style={{ backgroundImage: `url(${p.image})` }}
          />
          <div className="blog-content">
            <h3>{p.title}</h3>
            <div className="blog-meta">
              <span>{p.author}</span> · <time>{p.date}</time>
            </div>
            <p>{p.excerpt}</p>
            <a href="/blogs" className="read-more">
              Read More →
            </a>
          </div>
        </article>
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



