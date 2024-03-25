import React from "react";
import { ImFileEmpty } from "react-icons/im";
function Sponsors() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex  bg-[#F4F4F4]   ml-5 w-fit  items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
          Clients
        </p>
      </div>
      <h1 className="text-secendFont my-6   pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
        Our Trusted Big Clients ! 
      </h1>
    </div>
  );
}

export default Sponsors;
