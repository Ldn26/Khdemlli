import React from 'react'
import Footer from '../components/Landing/Footer'
import Banner from '../components/Banner';
import Header from '../components/Landing/Header';
import img from '../assets/aboutusicons/Photo.png'
import sa3a from '../assets/aboutusicons/sa3a.png'
import liste from '../assets/aboutusicons/liste.png'
import fichier from '../assets/aboutusicons/fichier.png'
import plan from '../assets/aboutusicons/plan.png'
import iconn from '../assets/aboutusicons/Iccon.png' 
function Electrique() {
  return (
    <div >
      <Header/>
      <Banner content={"Electrical installation"}/>
       <div></div>
          <div className='flex container mx-auto  '>
       
            <div className='flex flex-col space-y-4 m-14 '>
            <h1 className='text-3xl text-[#1C2752] font-bold mt-8 mb-5'>Our Services </h1>    

            <div className="flex ">
                <img src={iconn} className="pr-2  size-8" />
                <h1 className="text-[#7E7E7E] pt-1">Telecom Installation and Repair</h1>
              </div>
              <hr />
              <div className="flex ">
                <img src={iconn} className="pr-2 size-8" />
                <h1 className="text-[#7E7E7E] pt-1">Hosted PBX Solutions</h1>
              </div>
              <hr />
              <div className="flex ">
                <img src={iconn} className="pr-2 size-8 " />
                <h1 className="text-[#7E7E7E] pt-1">Outdoor/Parking Lot Lighting</h1>
              </div>
              <hr />
              <div className="flex ">
                <img src={iconn} className="pr-2 size-8 " />
                <h1 className="text-[#7E7E7E] pt-1">Outlets, Circuits and Rewiring</h1>
              </div>
              <hr />
              <div className="flex ">
                <img src={iconn} className="pr-2 size-8 " />
                <h1 className="text-[#7E7E7E] pt-1">HID Lighting and Control</h1>
              </div>
              <hr />
              <div className="flex ">
                <img src={iconn} className="pr-2 size-8 " />
                <h1 className="text-[#7E7E7E] pt-1">Lighting Design</h1>
              </div>
              <hr />
              <div className="flex ">
                <img src={iconn} className="pr-2 size-8 " />
                <h1 className="text-[#7E7E7E] pt-1">Motors and Transformers</h1>
              </div>
              <hr />
              <div className="flex ">
                <img src={iconn} className="pr-2 size-8 " />
                <h1 className="text-[#7E7E7E] pt-1">Isolated Computer Circuits</h1>
              </div>
              <hr />
              <div className="flex ">
                <img src={iconn} className="pr-2 size-8 " />
                <h1 className="text-[#7E7E7E] pt-1">Data/Communications Cabling</h1>
              </div>
              <hr />
              <div className="flex ">
                <img src={iconn} className="pr-2 size-8 " />
                <h1 className="text-[#7E7E7E] pt-1">Ballast/Lamp Replacing</h1>
              </div>
              <hr />
              
            </div>



          <div className='flex flex-col w-1/2   mx-auto text-start mt-20 space-y-4'>
      <img src={img} className=' w-[500px] hover:scale-100 duration-300  h-[300px] md:h-[450px] md:w-[760px] md:rounded-xl rounded-full' />
      <h1 className='  text-[#1C2752] text-3xl text-start  '> Description for Electrical installation</h1>
      <p className='text-start text-[#7E7E7E]  '>
      A house painter is responsible for applying paint, varnish, and other finishes to the interior and exterior surfaces of residential buildings. 
      Their work involves thorough surface preparation, including cleaning, sanding, and filling cracks or holes to ensure a smooth, durable finish.
       House painters select and mix paints to achieve the desired color and apply them using brushes, rollers, or sprayers. 
       They also take care to protect surrounding areas with drop cloths and masking tape to prevent unwanted splatters. 
       Attention to detail, knowledge of various painting techniques,
       and the ability to work efficiently are essential qualities for a successful house painter.</p>
        <p className='text-start text-[#7E7E7E] pt-5 pb-20'>
        Efficiently coordinate proactive painting processes with an outside-the-box approach, emphasizing customer service scalability through sustainable practices.
         Collaboratively administer turnkey painting solutions, 
        particularly for virtual clients, while objectively seizing scalable opportunities for improvement.
        </p>
        <div className="space-x-[150px] bg-[#F4F4F4] flex  md:gap-6 md:px-10 md:py-10 m-5   justify-center items-center 
          ">
            <div className="md:space-y-10     ">
              <div className='flex flex-col'>
              <div className="flex ">
              <img src={sa3a} className="pr-2 size-9 " />
                <h1 className="text-[#1C2752] pt-2">24/7 Availability</h1>
               </div>
              <p className='p-2 text-[#7E7E7E]'>
              Globally incubate standards <br />before 
               scalable benefits.
               </p> 
              </div>
             <div className='flex flex-col'>
             <div className="flex ">
              <img src={plan} className="pr-2 size-9 " />
                <h1 className="text-[#1C2752] pt-1">Process Technology</h1>
              </div>
              <p className='p-2 text-[#7E7E7E]'>
              Globally incubate standards <br />before 
               scalable benefits.
               </p> 
             </div>
            </div>
            <div className="md:space-y-10  ">
              <div className='flex flex-col'>
              <div className="flex ">
              <img src={fichier} className="pr-2 size-9 " />
                <h1 className="text-[#1C2752] pt-1"> Affordable Price</h1>
              </div>
              <p className='p-2 text-[#7E7E7E]'>
              Globally incubate standards <br />before 
               scalable benefits.
               </p> 
              </div>
              <div className='flex flex-col '>
              <div className="flex">
              <img src={liste} className="pr-2 size-9 " />
                <h1 className="text-[#1C2752] pt-1">Free Estimation</h1>
              </div>
              <p className='p-2 text-[#7E7E7E]'>
              Globally incubate standards <br />before 
               scalable benefits.
               </p> 

              </div>
            </div>
            
          </div>
          
      </div>
   
          </div>

      <Footer  />

    </div>
  )
}

export default Electrique
