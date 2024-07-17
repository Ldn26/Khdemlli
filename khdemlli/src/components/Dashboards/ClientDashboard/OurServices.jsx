import React from 'react'
import BannerWoker from './ContactUsWorker/BannerWorker'
import ServicesWorker from './ServicesWorker/ServicesWorker'
function OurServices() {
  return (
    <div className='w-3/5'>
      <BannerWoker content={"Services"}/>
   <ServicesWorker/>
    </div>
  )
}

export default OurServices