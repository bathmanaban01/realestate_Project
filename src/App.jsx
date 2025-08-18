import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/navbar";
import Home from './Components/sHome/Shome';
import About from "./Components/About/About";
import Services from "./Components/services/Service"
import BlogSection from "./Components/Blogs/Blog";
import Project from './Components/Project/Project'
import ContactPage from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blogs" element={<BlogSection />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Contact" element={<ContactPage />} />
        
      </Routes>
    </>
  );
}

export default App;
