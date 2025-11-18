// 📁 src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">🏠 PCS Real Estate</Link>
        </div>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeAll}>Home</Link>
          <Link to="/about" onClick={closeAll}>About Us</Link>

          {/* Projects Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => handleDropdown("projects")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <span className="dropdown-toggle">Projects ▾</span>
            {activeDropdown === "projects" && (
              <div className="dropdown-menu">
                <Link to="/projects/ongoing" onClick={closeAll}>Ongoing Projects</Link>
                <Link to="/projects/plots-villas" onClick={closeAll}>Plots & Villas</Link>
                <Link to="/projects/farm-lands" onClick={closeAll}>Farm Lands</Link>
                <Link to="/projects/commercial-residential" onClick={closeAll}>Commercial & Residential Lands</Link>
              </div>
            )}
          </div>

          {/* Design Services Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => handleDropdown("services")}
            onMouseLeave={() => handleDropdown(null)}
          >
            <span className="dropdown-toggle">Design Services ▾</span>
            {activeDropdown === "services" && (
              <div className="dropdown-menu">
                <Link to="/services/2d-floor-plan" onClick={closeAll}>2D Floor Plan</Link>
                <Link to="/services/3d-floor-plan" onClick={closeAll}>3D Floor/Layout Plan</Link>
                <Link to="/services/3d-exterior" onClick={closeAll}>3D Exterior Elevation</Link>
                <Link to="/services/3d-interior" onClick={closeAll}>3D Interior Design</Link>
                <Link to="/services/3d-walkthrough" onClick={closeAll}>3D Walkthrough</Link>
                <Link to="/services/ariel-view" onClick={closeAll}>Aerial & Landscape</Link>
                <Link to="/services/structural" onClick={closeAll}>Structural Drawing</Link>
                <Link to="/services/electrical-plumbing" onClick={closeAll}>Electrical & Plumbing</Link>
              </div>
            )}
          </div>

          <Link to="/blogs" onClick={closeAll}>Blogs</Link>
          <Link to="/videos" onClick={closeAll}>Videos</Link>
          <Link to="/contact" onClick={closeAll}>Contact</Link>
        </nav>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
