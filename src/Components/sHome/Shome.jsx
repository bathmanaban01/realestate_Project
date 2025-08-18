import React, { useEffect, useState } from "react";
import './Shome.css'

// ✅ Import all images
import img1 from "../../assets/home_slide1.jpg";
import img2 from "../../assets/home_slide3.jpg";
import img3 from "../../assets/home_slide2.jpg";
import aboutImg from "../../assets/home_slide1.1.jpg";
import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from '../../assets/service3.jpg';
const images = [img1, img2, img3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* ✅ HERO SECTION */}
      <section id="home_body"
  className="hero-section"
  style={{
    backgroundImage: `url(${images[currentImage]})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }}
>
  <div className="overlay">
    <h3 className="tagline">Most Trusted Partner</h3>
    <h1 className="headline">
      "Creating Spaces through <br /> Innovative Design"
    </h1>
    <p className="description">
      At <strong>Purple Crayon Studios</strong>, we turn your vision into reality with
      innovative designs and expert craftsmanship. Let us bring beauty and
      functionality to your dream spaces.
    </p>
    <a href="/projects" className="hero-button">Ongoing Projects</a>
  </div>
</section>


      <section className="about-section" id="about">
  <div className="about-container">
    {/* Left Side Text */}
    <div className="about-text">
      <h1>About Us</h1>
      <h3>Welcome To [Compony_name]</h3>
      <p>
        At <strong>[Compony_name]</strong>, we craft stunning floor plans, elegant
        interior designs, Exterior Elevation, and immersive walkthroughs with over 15 years of
        expertise. Let us bring your dream spaces to life with creativity and precision!
      </p>

      <h3>Affordable Pricing</h3>
      <p>
        Offering premium design services that fit within your budget without compromising
        quality.
      </p>

      <h3>Eco-Friendly Designs</h3>
      <p>
        Incorporating sustainable and environmentally conscious practices into our projects.
      </p>

      <a href="/about" className="more-btn">More</a>
    </div>

    {/* Right Side Image */}
    <div className="about-image-wrapper">
      <img src={aboutImg} alt="About Us" className="about-img" />
      <div className="funfact-box">
        <h4>FUNFACTS IN<br />GREAT NUMBERS</h4>
        <p className="funfact-label">YEARS OF EXPERIENCE</p>
        <h2>15+</h2>
      </div>
    </div>
  </div>
</section>

      <section className="services-section" id="services">
  <h1 className="services-title">We Provide The Best Services</h1>
  <div className="services-container">
    {/* Service Card 1 */}
    <div className="service-card" style={{ backgroundImage: `url(${service1})` }}>
      <div className="service-overlay">
        
        <h3>Exterior Elevation</h3>
        <p>We design stunning exterior elevations that enhance the beauty and character of your building.</p>
        <span className="service-number">01</span>
      </div>
    </div>

    {/* Service Card 2 */}
    <div className="service-card" style={{ backgroundImage: `url(${service2})` }}>
      <div className="service-overlay">
        
        <h3>Floor Plan</h3>
        <p>We create precise and functional floor plans tailored to your unique space and needs.</p>
        <span className="service-number">02</span>
      </div>
    </div>

    {/* Service Card 3 */}
    <div className="service-card" style={{ backgroundImage: `url(${service3})` }}>
      <div className="service-overlay">
        
        <h3>Interior Designs</h3>
        <p>We craft elegant and functional interior designs that bring your spaces to life.</p>
        <span className="service-number">03</span>
      </div>
    </div>
  </div>

  <a href="/services" className="see-more-btn">See More ➞</a>
</section>
      
      {/* Blog Section  */} 

     <section className="services-section blog-section" id="blogs">
  <h1 className="services-title">Our Blogs</h1>
  <div className="services-container">
    {/* Blog Card 1 */}
    <div className="service-card" style={{ backgroundImage: `url(${service1})` }}>
      <div className="service-overlay">
        <h3>Building Better Homes</h3>
        <p>Explore expert tips on planning, designing, and building your dream home.</p>
        <span className="service-number">01</span>
      </div>
    </div>

    {/* Blog Card 2 */}
    <div className="service-card" style={{ backgroundImage: `url(${service2})` }}>
      <div className="service-overlay">
        <h3>Interior Inspirations</h3>
        <p>Fresh ideas to transform your interior spaces with style and comfort.</p>
        <span className="service-number">02</span>
      </div>
    </div>

    {/* Blog Card 3 */}
    <div className="service-card" style={{ backgroundImage: `url(${service3})` }}>
      <div className="service-overlay">
        <h3>Modern Elevation Trends</h3>
        <p>Stay ahead with trending designs in building elevations and facades.</p>
        <span className="service-number">03</span>
      </div>
    </div>
  </div>

  <a href="/blogs" className="see-more-btn">Read More ➞</a>
</section>
{/* project section */}
     <section className="projects-highlight-section" >
  <div className="overlay">
    <div className="stats-box">
      <div className="stat-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="Experience Icon" className="stat-icon" />
        <p className="stat-title">Years Of Experience</p>
        <h1>15+</h1>
      </div>

      <div className="stat-item">
        <img src="https://cdn-icons-png.flaticon.com/512/2266/2266952.png" alt="Success Design Icon" className="stat-icon" />
        <p className="stat-title">Success Design</p>
        <h1>500+</h1>
      </div>

      <div className="stat-item">
        <img src="https://cdn-icons-png.flaticon.com/512/2620/2620437.png" alt="Team Members Icon" className="stat-icon" />
        <p className="stat-title">Team Members</p>
        <h1>20+</h1>
      </div>
    </div>
  </div>
</section>

      {/* ✅ CONTACT FORM SECTION */}
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

export default Home;
