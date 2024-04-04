import React from 'react'
import Header from '../components/Landing/Header'
import Footer from '../components/Landing/Footer'
import Banner from '../components/Banner'
import GetinTouch from '../components/Contact/GetinTouch'
import ContactDetails from '../components/Contact/ContactDetails'

function Contact() {
  return (
    <div>
      <Header/>
      <Banner content={" Contact Us"}/>
      <ContactDetails/>
      <GetinTouch/>
      <Footer/>
    </div>
  )
}

export default Contact