import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AppSection from './AppSection';
import CardSection from './CardSection';
import Footer from './Footer';

const App = () => {
  return(
    <div>
      <h1>Priyanka</h1>
      <Navbar/>
      <HeroSection/>
      <AppSection />
      <CardSection />
      <Footer/>
    </div>
  )
}

export default App;
