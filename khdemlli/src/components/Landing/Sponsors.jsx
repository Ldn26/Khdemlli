import React from "react";
import { ImFileEmpty } from "react-icons/im";
import sp1 from "../../assets/landing/sp1.svg"
import sp2 from "../../assets/landing/sp2.svg";
import sp3 from "../../assets/landing/sp3.svg";
import sp4 from "../../assets/landing/sp4.svg";
import sp5 from "../../assets/landing/sp5.svg";
function Sponsors() {
  return (
    <div className="flex  flex-col items-center">
      <div className="flex  bg-[#F4F4F4]   ml-5 w-fit  items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
          Clients
        </p>
      </div>
      <h1 className="text-secendFont my-6   pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
        Our Trusted Big Clients !
      </h1>
      <div className="container mx-auto mb-10 flex justify-between flex-col items-center gap-3 md:flex-row">
        <img className="w-20 md:w-40 " src={sp1} alt="" />
        <img className="w-20 md:w-40" src={sp2} alt="" />
        <img className="w-20 md:w-40" src={sp3} alt="" />
        <img className="w-20 md:w-40" src={sp4} alt="" />
        <img className="w-20 md:w-40" src={sp5} alt="" />
      </div>
    </div>
  );
}

export default Sponsors;
