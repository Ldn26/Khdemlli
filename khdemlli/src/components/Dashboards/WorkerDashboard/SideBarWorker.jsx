import React from 'react'
import { useState , useEffect } from "react";
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


function SideBarWorker() {
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
  
  return (
    <div className='border  h-screen  w-1/5' >
      

      <div className={ `  pt-7 flex flex-col justify-between   items-start flex-shrink-0 ${open ? "block" : "hidden" }` }>
       <div id='list' className={` w-full flex flex-col justify-center items-center   space-y-10 `}>

<div className={  ` pl-5 flex justify-center items-center w-full  `}>
  <img src={logo} className='  ' />
</div>

  
<div className={` flex flex-col space-y-5` }> 
<h3 className='underline-offset-1 text-[#3F3F3F] text-1xl font-inter px-5 '>OVERVIEW</h3>
  
<section className='flex flex-row space-x-3 hover:bg-gray-300 rounded-full p-1 '>
  <img src={home} className={`cursor-pointer `} />
  <h1 className={`text-[#1C2752] font-inter cursor-pointer`}>Dashboard</h1>
  </section>
  <section className='flex flex-row space-x-3 hover:bg-gray-300 rounded-full p-1'> 
  <img src={inbox } className={`cursor-pointer `} />
  <h1 className={`text-[#1C2752] font-inter import folder from './icons/folder.png `}>Inbox</h1>
  </section>
  <section className='flex flex-row space-x-3 hover:bg-gray-300 rounded-full p-1'> 
  <img src={people} className={`cursor-pointer `} />
  <h1 className={`text-[#1C2752] font-inter cursor-pointer`}>About us</h1>
  </section>
  <section className='flex flex-row space-x-3 hover:bg-gray-300 rounded-full p-1'> 
  <img src={folder} className={`cursor-pointer `} />
  <h1 className={`text-[#1C2752] font-inter cursor-pointer`}> workers</h1>
  </section>
  <section className='flex flex-row space-x-3 hover:bg-gray-300 rounded-full p-1'> 
  <img src={task} className={`cursor-pointer `} />
  <h1 className={`text-[#1C2752] font-inter cursor-pointer`}> Services</h1>
  </section>
  <section className='flex flex-row space-x-3 hover:bg-gray-300 rounded-full p-1'> 
  <img src={people} className={`cursor-pointer `} />
  <h1 className={`text-[#1C2752] font-inter cursor-pointer`}>Contact us</h1>
  </section>

</div>
  
</div>




<div className='w-full flex flex-col justify-center  items-center pt-20 space-y-5'>
<h1 className='text-[#3F3F3F] text-1xl font-inter   ' >SETTINGS</h1>
<section className='flex flex-row space-x-3 hover:bg-gray-300 rounded-full p-2'>       

<img src={settings} className={`cursor-pointer `} />
  <h1 className={`text-[#1C2752] font-inter cursor-pointer`}>Settings</h1>
  </section>
  <section className='flex flex-row space-x-3 hover:bg-gray-300 rounded-full p-2'>
  <img src={logout} className={`cursor-pointer `} />
  <h1 className={` font-inter cursor-pointer text-[#FFB342]`}>Logout</h1>
  </section>
 
</div> 





    </div>
    </div>
  )
}

export default SideBarWorker