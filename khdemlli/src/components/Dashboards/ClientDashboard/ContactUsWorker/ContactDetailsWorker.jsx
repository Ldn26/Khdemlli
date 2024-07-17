import React from "react";
import { ImFileEmpty } from "react-icons/im";
import { FaClock } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
function ContactDetailsWorker() {
  return (
    <div className="container my-10 mx-auto  py-10 flex items-center flex-col">
      <div className="flex  bg-[#F4F4F4]  ml-5 w-fit  items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
          Quick Contact
        </p>
      </div>
      <h1 className="text-secendFont my-6   pl-5  lg:text-2xl text-blueColor font-mainfont whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
        Contact Details
      </h1>

      <div className="flex justify-center items-center">
        <div className="flex bg-orangeColor w-[200px] h-[200px] flex-col items-center hover:scale-110 transition-all justify-center ">
          <FaClock className="text-2xl mb-2  text-blueColor" />

          <h1 className="tracking-wide font-semibold text-center text-blueColor text-xl">
            Emergency Works{" "}
          </h1>
          <p className="text-white font-bold text-xl my-2">+213 56555554</p>
          <h1 className="bg-blueColor px-4 py-1 text-white rounded-full font-bold">
            Call Us{" "}
          </h1>
        </div>
        <div className="flex bg-blueColor  w-[250px] h-[300px] p-10  flex-col items-cnter justify-center ">
          <h1 className="text-orangeColor font-semibold font-mainfont text-center mb-5 text-2xl  ">
            Main Branch
          </h1>
          <div className=" ">
            <div className="flex flex-col ">
              <p className="text-orangeColor mb-2 text-xl font-semibold">
                Address :
              </p>
              <p className="text-white ">Amizour ,Bejaia</p>
              <hr className="mt-2" />
            </div>
            <div className="flex flex-col ">
              <p className="text-orangeColor mb-2 text-xl font-semibold">
                phone :
              </p>
              <p className="text-white ">+213 541593067</p>
              <hr className="mt-2" />
            </div>
            <div className="flex flex-col ">
              <p className="text-orangeColor mb-2 text-xl font-semibold">
                mail :
              </p>
              <p className="text-white ">youssefldn26@gmail,com</p>
              <hr className="mt-2" />
            </div>
          </div>
        </div>
        <div className="flex bg-orangeColor w-[200px] h-[200px] flex-col items-center    hover:scale-110 transition-all justify-center ">
          <IoPersonSharp className="text-4xl mb-2  text-blueColor" />
          <h1 className="tracking-wide text-center font-semibold text-blueColor text-xl">
            You Have a  <br />Question ?{" "}
          </h1>
          <p className="text-white font-bold text-xl my-2">034 23470</p>
          <h1 className="bg-blueColor px-4 py-1 text-white rounded-full font-bold">
            Reach Us{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ContactDetailsWorker;
