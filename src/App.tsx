import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Products } from './components/Products/Products';
import { Partners } from './components/Partners/Partners';
import { MissionVision } from './components/MissionVision/MissionVision';
import { Footer } from './components/Footer/Footer';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={
          <div className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <MissionVision />
            <Services />
            <Products />
            <Partners />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;