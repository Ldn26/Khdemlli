
import React from 'react';
import casq from "../../assets/id/casq.svg";
import Ha from '../../assets/aboutusicons/H.png';
import iconn from '../../assets/aboutusicons/Iccon.png';
import jojo from '../../assets/aboutusicons/Icon.png';
import vict from '../../assets/aboutusicons/Vectorr.png';
import victo from '../../assets/aboutusicons/Vectooor.png';
import hihi from '../../assets/aboutusicons/haha.png';
import img from '../../assets/aboutusicons/Mm.png';
import Banner from "../Banner"

const Aboutus = () => {
  return (
    <div className="">
      <Banner content={"About Us"} />

      <div className=" items-center my-20 flex   flex-wrap sm:flex-no-wrap justify-center ">
        {/* Secend div  */}
        <div className=" mt-10  md:ml-10 ">
          <div className="flex  bg-[#F4F4F4]   ml-5 w-fit  items-center    p-5 py-1">
            <img src={casq} alt="casq" className="w-3 h-3 " />
            <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
              Welcome to Khedmlli
            </p>
          </div>

          <h1 className="text-secendFont my-2   pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
            We're Commited <br />
            to Quality
          </h1>

          <div className="flex  flex-col ">
            <p className="text-grayColor pl-5   mt-3 text-md">
              We are a home services provider dedicated to simplifying daily{" "}
              <br />
              household management. Our <br /> platform offers diverse services
              and ample <br /> opportunities for workers, ensuring convenience{" "}
              <br /> and efficiency for both users and service providers.
            </p>
          </div>
          <div className="  flex flx-col  md:gap-6 md:px-10 md:py-10 space-x-9 ">
            <div className="md:space-y-10">
              <div className="flex ">
                <img src={iconn} className="pr-2 size-9 " />
                <h1 className="text-[#1C2752]">We provide 24/7 service</h1>
              </div>
              <div className="flex">
                <img src={iconn} className="pr-2 size-9" />
                <h1 className="text-[#1C2752]">Qualified Agents</h1>
              </div>
            </div>
            <div className="md:space-y-10 pr-6">
              <div className="flex ">
                <img src={iconn} className="pr-2 size-9" />
                <h1 className="text-[#1C2752]">Greate Technology</h1>
              </div>
              <div className="flex">
                <img src={iconn} className="pr-2 size-9" />
                <h1 className="text-[#1C2752]">35 Years Experiance</h1>
              </div>
            </div>
          </div>
          <div className="md:pl-10">
            <h1 className="text-[#1C2752] text-1xl text underline">
              For Emergency Fixing or Appointment
            </h1>
            <h1 className="text-[#FFB342] font-bold text-2xl">+213 55638383</h1>
          </div>
        </div>
        {/* image div  */}
        <div className="  md:mr-10 ">
          <img
            src={Ha}
            className="w-[300px]  h-[300px] md:h-[450px] md:w-[450px] "
            alt="hola"
          />
        </div>
      </div>
      {/*  costumers */}
      <div className="  flex flex-col mx-auto container mt-10  md:flex-row md:space-x-5 md:space-y-0 ">
        <div className=" md:w-1/4 items-center flex flex-col p-6 space-y-2 rounded-lg border-slate-300 bg-[#F4F4F4]">
          <img src={vict} className="w-14 rounded-full" />
          <h1 className="text-[#1C2752] font-bold text-3xl m-4">500+</h1>
          <p className="text-[#1C2752] ">Expert Constractors</p>
        </div>

        <div className=" md:w-1/4 items-center flex flex-col p-6 space-y-2 rounded-lg border-slate-300 bg-[#F4F4F4]">
          <img src={victo} className="w-16 rounded-full" />
          <h1 className="text-[#1C2752] font-bold text-3xl m-4">2500+</h1>
          <p className="text-[#1C2752] ">industry solutions</p>
        </div>
        <div className=" md:w-1/4 items-center flex flex-col p-6 space-y-2 rounded-lg border-slate-300 bg-[#F4F4F4]">
          <img src={hihi} className="w-16 rounded-full" />
          <h1 className="text-[#1C2752] font-bold text-3xl ">1920</h1>
          <p className="text-[#1C2752]">Project completed </p>
        </div>
        <div className=" md:w-1/4 items-center flex flex-col p-6 space-y-2 rounded-lg border-slate-300 bg-[#F4F4F4]">
          <img src={img} className="w-16 rounded-full" />
          <h1 className="text-[#1C2752] font-bold text-3xl ">1K+</h1>
          <p className="text-[#1C2752]">Happy constumers</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;