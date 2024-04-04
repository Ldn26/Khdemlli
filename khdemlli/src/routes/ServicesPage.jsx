import React from 'react'
import Services from '../components/Landing/Services'
import Header from "../components/Landing/Header"
import Banner from '../components/Banner';
import Footer from '../components/Landing/Footer';
function ServicesPage() {
  return (
    <div>
      <Header />
      <Banner content={"Services"}/>
      <Services />
      <Footer/>
    </div>
  );
}

export default ServicesPage