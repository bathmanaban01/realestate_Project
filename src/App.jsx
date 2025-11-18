import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/navbar";
import Home from './pages/sHome/Shome';
import About from "./pages/About/About";
import Services from "./pages/services/Service"
import Blog from "./pages/Blogs/Blog";
import Project from './pages/Project/Project'
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
