import React from 'react'
import Header from '../components/Landing/Header'
import Hero from '../components/Landing/Hero'
import Services from "../components/Landing/Services";
// import Footer from '../components/Landing/Footer'


function Landing() {
  return (
    <div>
        <Header />
        <Hero />
        <Services/>
        {/* <Footer /> */}
      
    </div>
  );
}

export default Landing