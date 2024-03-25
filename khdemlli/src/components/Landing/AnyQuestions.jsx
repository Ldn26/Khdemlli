import React from 'react'
import { ImFileEmpty } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
function AnyQuestions() {
  return (
    <div className=" mt-20  w-[400px] shadow-2xl flex-col flex bg-orangeColor md:ml-40  p-4">
      <div className="flex  bg-[#F4F4F4]    w-fit  items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
          Any Question
        </p>
      </div>
      <h1 className="text-secendFont my-2 mt-  lg:text-xl text-blueColor  whitespace-nowrap font-bold tracking-wide text- ">
        99.9% Customer Satisfation Based
      </h1>
      <p className="text-blueColor text-mainfont font-semibold  my-1 whitespace-nowrap w-[300px]">
        If you have any questions or need help contact <br /> with our team, or
        call
      </p>
      <div className='flex items-center  my-3'>
        <FiPhone  className='bg-white rounded-full p-2 text-4xl  text-blueColor  '/>
        <h1 className='text-xl font-bold text-white' >+213 541593067</h1>
      </div>
    </div>
  );
}

export default AnyQuestions