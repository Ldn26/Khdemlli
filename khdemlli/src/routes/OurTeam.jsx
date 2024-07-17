import React from 'react'
import Header from "../components/Landing/Header"
import Banner from "../components/Banner"

import Footer from '../components/Landing/Footer'
import OurWorker from '../components/ourTeam/OurWorker'
function OurTeam() {
  return (
    <div>
        <Header/>
        <Banner content={"Our Team"}/>
        <OurWorker/>
        <Footer/>
    </div>
  )
}

export default OurTeam