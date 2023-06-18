import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Plans from './components/Plans';
import Team from './components/Team';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Faq from './components/faq';
import ScrollToTop from './components/ScrollToTop';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/team" element={<Team />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
