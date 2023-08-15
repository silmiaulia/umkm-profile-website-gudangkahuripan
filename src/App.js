import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import UMKM from './components/UI/UMKIM';
import Contact from './components/UI/Contact';


function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <div className='mt-0 md:mt-10'>
          <UMKM />
        </div>
        <Contact />
      </main>
      <Footer />

    </React.Fragment>
  );
}

export default App;
