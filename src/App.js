import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    // <>
    <Router>
      <NavMenu />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    // </>
  );
}
