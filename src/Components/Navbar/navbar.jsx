import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAllMenus = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        
        <nav id="nav" className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeAllMenus}>Home</Link>
          <Link to="/about" onClick={closeAllMenus}>About Us</Link>
        

          {/* Projects Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <span className="dropdown-toggle"><Link to="/Projects" onClick={closeAllMenus}>Projects</Link></span>
            {projectsOpen && (
              <div className="dropdown-menu">
                <Link to="/projects/ongoing" onClick={closeAllMenus}>Ongoing Projects</Link>
                <Link to="/projects/plots-villas" onClick={closeAllMenus}>Plots & Villas</Link>
                <Link to="/projects/farm-lands" onClick={closeAllMenus}>Farm Lands</Link>
                <Link to="/projects/commercial-residential" onClick={closeAllMenus}>Commercial & Residential Lands</Link>
              </div>
            )}
          </div>

          {/* Design Services Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="dropdown-toggle"><Link to="/Services" onClick={closeAllMenus}>Design Services</Link></span>
            {servicesOpen && (
              <div className="dropdown-menu">
                <Link to="/services/2d-floor-plan" onClick={closeAllMenus}>2D Floor Plan</Link>
                <Link to="/services/3d-floor-plan" onClick={closeAllMenus}>3D Floor Plan/Layout Plan</Link>
                <Link to="/services/3d-exterior" onClick={closeAllMenus}>3D Exterior Elevation</Link>
                <Link to="/services/3d-interior" onClick={closeAllMenus}>3D Interior Design</Link>
                <Link to="/services/3d-walkthrough" onClick={closeAllMenus}>3D Walkthrough with Animation</Link>
                <Link to="/services/ariel-view" onClick={closeAllMenus}>Ariel View & Landscape Designs</Link>
                <Link to="/services/structural" onClick={closeAllMenus}>Structural Drawing</Link>
                <Link to="/services/electrical-plumbing" onClick={closeAllMenus}>Electrical & Plumbing Drawing</Link>
              </div>
            )}
          </div>

          <Link to="/blogs" onClick={closeAllMenus}>Blogs</Link>
          <Link to="/videos" onClick={closeAllMenus}>Videos</Link>
          <Link to="/contact" onClick={closeAllMenus}>Contact</Link>

          
        </nav>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
