import React from 'react'
import Header from '../components/Landing/Header'
import Hero from '../components/Landing/Hero'
import Services from "../components/Landing/Services";
import WhayChoose from '../components/Landing/WhayChoose';
import CustomersSays from '../components/Landing/CustomersSays';
import AnyQuestions from '../components/Landing/AnyQuestions';
import OurWorkers from '../components/Landing/OurWorkers';
import Sponsors from '../components/Landing/Sponsors';
import Footer from '../components/Landing/Footer'


function Landing() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <WhayChoose />
      <div className=" items-center my-20 flex   flex-wrap sm:flex-no-wrap justify-center  ">
        <CustomersSays />
        <AnyQuestions />
      </div>
      <OurWorkers />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Landing