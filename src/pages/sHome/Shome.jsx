// 📁 src/pages/Home/Home.jsx
import React, { useEffect, useState } from "react";
import './Shome.css'

// ✅ Images
import img1 from "../../assets/home_slide1.jpg";
import img2 from "../../assets/home_slide3.jpg";
import img3 from "../../assets/home_slide2.jpg";
import aboutImg from "../../assets/home_slide1.1.jpg";
import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.jpg";

const images = [img1, img2, img3];
const COMPANY_NAME = "Purple Crayon Studios";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    city: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message || "Message sent successfully!");
      setFormData({ name: "", contact: "", city: "", email: "", message: "" });
    } catch (err) {
      alert("Error sending message");
      console.error(err);
    }
  };

  return (
    <div className="home">
      {/* ✅ HERO SECTION */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="overlay">
          <h3 className="tagline">Most Trusted Partner</h3>
          <h1 className="headline">
            Creating Spaces through <br /> Innovative Design
          </h1>
          <p className="description">
            At <strong>{COMPANY_NAME}</strong>, we turn your vision into reality
            with innovative designs and expert craftsmanship.
          </p>
          <a href="/projects" className="hero-button">
            Ongoing Projects
          </a>
        </div>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-text">
            <h1>About Us</h1>
            <h3>Welcome To {COMPANY_NAME}</h3>
            <p>
              We craft stunning floor plans, interior designs, and elevations
              with over 15 years of expertise.
            </p>
            <h3>Affordable Pricing</h3>
            <p>Premium design services that fit within your budget.</p>
            <h3>Eco-Friendly Designs</h3>
            <p>Sustainable and environmentally conscious practices.</p>
            <a href="/about" className="more-btn">More</a>
          </div>
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

      {/* ✅ SERVICES */}
      <section className="services-section" id="services">
        <h1 className="services-title">We Provide The Best Services</h1>
        <div className="services-container">
          {[ 
            { img: service1, title: "Exterior Elevation", desc: "Enhance your building’s beauty and character." },
            { img: service2, title: "Floor Plan", desc: "Functional floor plans tailored to your needs." },
            { img: service3, title: "Interior Designs", desc: "Elegant and functional designs for modern spaces." },
          ].map((s, i) => (
            <div key={i} className="service-card" style={{ backgroundImage: `url(${s.img})` }}>
              <div className="service-overlay">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </div>
          ))}
        </div>
        <a href="/services" className="see-more-btn">See More ➞</a>
      </section>

      {/* ✅ CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <h2>Let’s Build Together</h2>
        <p>Have a project in mind? Let’s turn your idea into reality.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
          <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" required />
          <input name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
          <textarea name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
          <button type="submit" className="contact-btn">Contact Us</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
