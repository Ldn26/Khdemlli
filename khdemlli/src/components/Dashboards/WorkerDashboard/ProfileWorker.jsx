import React from "react";
import { useState , useEffect } from "react";

import Settings from "./Settings";
import logo from '../../../assets/sidsicon/LOGO.png';
import home from '../../../assets/sidsicon/home.png';
import inbox from '../../../assets/sidsicon/inbox.png';
import people from '../../../assets/sidsicon/people.png';
import folder from '../../../assets/sidsicon/folder.png';
import task from '../../../assets/sidsicon/task.png';
import settings from '../../../assets/sidsicon/settingg.png';
import logout from '../../../assets/sidsicon/logout.png';
import more from '../../../assets/sidsicon/more.png';
import person from '../../../assets/sidsicon/person.png';
import notificationn from '../../../assets/sidsicon/no.png';
import galerie from '../../../assets/sidsicon/normal.png';

function ProfileWorker() {

  const[open ,setOpen]=useState(true)
  const updateSidebarVisibility = () => {
    setOpen(window.innerWidth >= 600); // Hide sidebar when screen size is less than 600px
  };
  
  useEffect(() => {
    // Listen for resize events and update sidebar visibility
    window.addEventListener('resize', updateSidebarVisibility);
  
    // Initial call to set sidebar visibility based on current width
    updateSidebarVisibility();
  
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', updateSidebarVisibility);
    };
  }, []);
     


  return(
  <div className="w-1/5 border ">
    <div className='flex h-screen'>
       
    
       
        <div className={`  flex-shrink-0  shadow-lg pt-7 flex flex-col md:block ${open ? "block" : "hidden" }`  }>
       <div id='liste2' className=' w-full flex-col space-y-7 justify-center items-center   '>
        <section className='flex flex-row space-x-4 justify-center items-center'>
        <img src={more} className='absolute top-0 right-0 mt-7 mr-1' />
        <h1 className='font-inter text-1xl text-[#1C2752] pr-5'>Your Profile</h1>
        </section>
        <div className=' flex justify-center items-center   '>
          <img src={person} className=' border-4 size-15 p-1 border-[#FFB342] rounded-full  ' />
         
        </div>
        </div>
         <div className=' flex justify-center items-center pt-10'>
       <section>
        <h1 className='font-inter text-[#202020] text-center '>
          Good <br /> Morning 
        <br />  Mohammed 
        </h1>
        </section> 
   
    
    
    </div>
    <div className='flex justify-center items-center pt-10'>
      <p className=' font-inter text-center text-[#7E7E7E] '>
      continue your <br /> journey and <br /> achieve  Your <br /> Target
      </p>
    </div>
    <div className='flex justify-center items-center flex-row pt-7 space-x-5 '>
      <img src={notificationn} className=' border-2 border-slate-300 rounded-full p-2 hover:bg-gray-400' /> 
      <img src={galerie} className='border-2 border-slate-300 rounded-full p-2 hover:bg-gray-400 ' />
    </div>
</div>

    </div>
    
  
  </div>
  );
}

export default ProfileWorker;
