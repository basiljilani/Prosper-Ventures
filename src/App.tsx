import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Products } from './components/Products/Products';
import { Partners } from './components/Partners/Partners';
import { MissionVision } from './components/MissionVision/MissionVision';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
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
  );
}

export default App;