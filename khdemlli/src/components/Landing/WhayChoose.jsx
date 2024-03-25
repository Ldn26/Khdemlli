import React from 'react'
import hero2 from "../../assets/landing/herosm.jpg"
import { ImFileEmpty } from "react-icons/im";
import check from '../../assets/landing/check.svg'
function WhayChoose() {
  return (
    <div className=" items-center  flex  mb-20  flex-wrap sm:flex-no-wrap justify-center ">
      <div
        className=" md:mr-10  w-[500px]   h-[500px] bg-cover  flex  justify-center items-center   md:h-[550px] md:w-[550px] "
        style={{
          backgroundImage: `url(${hero2})`,
        }}
      >
        <div className="flex flex-col  z-10  backdrop-blur-md bg-opacity-70  p-9 bg-blueColor">
          <div className="flex   my-3">
            <div className="text-blueColor font-mainfont p-2 font-bold  w-[50px] flex items-center justify-center bg-orangeColor ">
              3956
            </div>
            <p className="font-bold text-white p-2 border w-[200px]   border-gray-300 font-mainfont ">
              Project Done
            </p>
          </div>
          <div className="flex  my-3">
            <div className="text-blueColor  w-[50px]  font-mainfont  p-2 font-bold  flex items-center justify-center bg-orangeColor ">
              751
            </div>
            <p className="font-bold text-white p-2 border w-[200px] border-gray-300 font-mainfont ">
              People Working
            </p>
          </div>{" "}
          <div className="flex   my-3">
            <div className="text-blueColor  w-[50px]  font-mainfont p-2 font-bold  flex items-center justify-center bg-orangeColor ">
              265
            </div>
            <p className="font-bold text-white p-2 border  w-[200px]  border-gray-300 font-mainfont ">
              Business Partner
            </p>
          </div>{" "}
          <div className="flex   my-3">
            <div className="text-blueColor  w-[50px]  font-mainfont p-2 font-bold  flex items-center justify-center bg-orangeColor ">
              645+
            </div>
            <p className="font-bold text-white p-2 border  w-[200px]  border-gray-300 font-mainfont ">
              Happy Customers
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-10 w-[500px]   h-[500px]      md:h-[550px] md:w-[550px]   md:ml-10 ">
        <div className="flex  bg-[#F4F4F4]   ml-5 w-fit  items-center    p-5 py-1">
          <ImFileEmpty className="text-orangeColor " />
          <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
            Why Choose Us
          </p>
        </div>

        <h1 className="text-secendFont   px-5   md:mx-0 mx-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2  ">
          Few Reasons Why You <br /> Should Choose Us
        </h1>

        <div className="flex  flex-col ">
          <p className="text-grayColor pl-5     md:mx-0 mx-5 p-1  mt-1 text-sm w-[400px]">
            Pellentesque vehicula eros neque, maximus mattis est sagittis <br />
            Nulla facilisi. In sed pretium metus. Proin pretium id urna sit{" "}
          </p>

          <div className="flex  items-center   mt-6 ">
            <img src={check} alt="check" className="ml-4  " />
            <div className=" ml-4">
              <h1 className="text-[20px] font-secondaryfont font-bold  text-blueColor  ">
                35 Years Experiance
              </h1>
              <p className="text-grayColor w-[400px]">
                Lorem ipsum, dolor sit amet consectetur a usdam molestiae eos
                asperio
              </p>
            </div>
          </div>

          <div className="flex  items-center  mt-6 ">
            <img src={check} alt="check" className="ml-4  " />
            <div className=" ml-4">
              <h1 className="text-[20px] font-secondaryfont font-bold  text-blueColor  ">
                35 Years Experiance
              </h1>
              <p className="text-grayColor w-[400px]">
                Lorem ipsum, dolor sit amet consectetur a usdam molestiae eos
                asperio
              </p>
            </div>
          </div>

          <div className="flex  items-center  mt-6 ">
            <img src={check} alt="check" className="ml-4  " />
            <div className=" ml-4">
              <h1 className="text-[20px] font-secondaryfont font-bold  text-blueColor  ">
                35 Years Experiance
              </h1>
              <p className="text-grayColor w-[400px]">
                Lorem ipsum, dolor sit amet consectetur a usdam molestiae eos
                asperio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhayChoose;



       {
         /* <div
        className="w-[400px] h-[400px]  bg-cover   flex items-center justify-center "
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
      </div> */
       }