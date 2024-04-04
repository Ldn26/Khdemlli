
import React from 'react';

import Ha from '../../assets/aboutusicons/H.png';
import iconn from '../../assets/aboutusicons/Iccon.png';
import jojo from '../../assets/aboutusicons/Icon.png';
import vict from '../../assets/aboutusicons/Vectorr.png';
import victo from '../../assets/aboutusicons/Vectooor.png';
import hihi from '../../assets/aboutusicons/haha.png';
import img from '../../assets/aboutusicons/Mm.png';

import Footer from '../Landing/Footer';
import Banner from '../Banner';

const Aboutus = () => {
  return (
    <div>    
<Banner content={"About Us "}/>
  <section id='content'>
  <div className='flex justify-center   flex-col-reverse md:flex-row my-48 '>





  <div className='md:w-1/2 flex flex-col space-y-6  bg-[#FFFFFF]  text-center md:text-left'>

      <div className=' flex gap-2 bg-slate-100 ml-10 w-fit p-2 rounded-md  '>
        <img src={jojo} className='md:ml-3 ' />
        <h1 className= ' font-bold text-[#1C2752] whitespace-nowrap'> welcome to khedmlli</h1>
      </div>
      <h1 className= ' text-3xl md:text-4xl  font-extrabold text-[#1C2752] md:pl-10'>We're Commited <br/>to Quality</h1>
      <p className='text-[#7E7E7E] md:pl-10 w-[400px] '>We are a home services provider dedicated to simplifying daily household management. Our platform offers diverse services and ample opportunities for workers, ensuring convenience and efficiency for both users and service providers.</p>
      
      <div className='  flex flx-col  md:gap-6 md:px-10 md:py-10 space-x-9 '>
      
      <div className='md:space-y-10'>
      <div className='flex '>

      <img src={iconn} className='pr-2 size-9 ' />
      <h1 className='text-[#1C2752]' >We provide 24/7 service</h1>
      </div>
    <div  className='flex'>
    <img src={iconn} className='pr-2 size-9' />
      <h1 className='text-[#1C2752]'>Qualified Agents</h1>
      
      </div>
      </div>
      <div className='md:space-y-10 pr-6'>
    <div  className='flex '>
    <img src={iconn} className='pr-2 size-9' />
      <h1 className='text-[#1C2752]'>Greate Technology</h1>
      
      </div>
    <div  className='flex'>
    <img src={iconn} className='pr-2 size-9' />
      <h1 className='text-[#1C2752]'>35 Years Experiance</h1>
</div>
</div>

</div>
<div className= 'md:pl-10'>
<h1 className='text-[#1C2752] text-1xl text underline'>
  For Emergency Fixing or Appointment
  </h1>
  <h1 className='text-[#FFB342] font-bold text-2xl'>
  
  +213 55638383
  
  </h1>
 </div>
    </div>
















    <div className=' md:w-1/2'>
      <img src={Ha} alt="" />
    </div> 

  </div>
  </section>











<section id='com'>
  <div className='mx-auto my-32 text-center'>













<div className=' mt-10 flex flex-col mx-auto container   md:flex-row md:space-x-5 md:space-y-0 '>

<div className=' md:w-1/4 items-cente r flex flex-col p-6 space-y-2 rounded-lg border-slate-300 bg-[#F4F4F4]' >
      <img src={vict} className='w-16 rounded-full ' />
      <h1 className='text-[#1C2752] font-bold text-3xl '>500+</h1>
      <p className='text-[#1C2752]'>Expert Constractors</p>
    </div>
    <div className=' md:w-1/4 items-center flex flex-col p-6 space-y-2 rounded-lg border-slate-300 bg-[#F4F4F4]' >
      <img src={victo} className='w-16 rounded-full' />
      <h1 className='text-[#1C2752] font-bold text-3xl m-4'>2500+</h1>
      <p className='text-[#1C2752] '>industry solutions</p>
    </div>
    <div className=' md:w-1/4 items-center flex flex-col p-6 space-y-2 rounded-lg border-slate-300 bg-[#F4F4F4]' >
      <img src={hihi} className='w-16 rounded-full' />
      <h1 className='text-[#1C2752] font-bold text-3xl '>1920</h1>
      <p className='text-[#1C2752]'>Project completed </p>
    </div>
    <div className=' md:w-1/4 items-center flex flex-col p-6 space-y-2 rounded-lg border-slate-300 bg-[#F4F4F4]' >
      <img src={img} className='w-16 rounded-full' />
      <h1 className='text-[#1C2752] font-bold text-3xl '>1K+</h1>
      <p className='text-[#1C2752]'>Happy constumers</p>
    </div>
    
  
    


   
</div>
</div>
</section>


  </div>
  
  )
}

export default Aboutus;