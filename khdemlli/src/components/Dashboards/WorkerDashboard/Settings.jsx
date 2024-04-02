import React from 'react'
import { TiCamera } from "react-icons/ti";
function Settings() {
  return (
    <div className="w-full flex  justify-center  flex-col">
      <h1 className="text-center font-semibold py-2 text-blueColor ">
        Setting
      </h1>
      <hr className="w-full h-[1px] justify-center items-center mb-4 bg-blueColor mx-auto "></hr>

      <div className="flex ml-10 items-center">
        <div className=" relative">
          <img
            src="cdsc"
            alt=""
            className="w-20 h-20 rounded-full  r border-4 border-blueColor"
          />
          <TiCamera className="absolute top-[60px]  left-[57px]  hover:bg-orangeColor text-white bg-blueColor text-xl p-1 rounded-full" />
        </div>
        <div className="flex flex-col ml-2">
          <h1 className="font-semibold text-blueColor font-mainfont ">
            mohamed khedam{" "}
          </h1>
          <h1 className="font-semibold text-blueColor font-mainfont text-xs">
            Your Acount is ready
          </h1>
        </div>
      </div>

      <div className="flex items-cente mt-7">
        <button className="text-sm flex  ml-10  h-7 whitespace-nowrap  rounded bg-orangeColor w-fit text-blueColor hover:bg-blueColor duration-500 hover:text-orangeColor font-semibold px-3 py-1 ">
          Edit Profile
        </button>

        <div className="border-l ml-10 pl-4 mt-7 border-gray- flex flex-col">
          <h1 className="text-grayColor font-semibold text-xl font-mainfont ">
            Edit Profile
          </h1>
          {/* <div className="flex justify-around items-center">
            <h1>Personel</h1>
            <h1>Contact</h1>
          </div> */}

          <div className="flex my-4 justify-between">
            <div className="flex flex-col justify-center mr-2">
              <label
                htmlFor="first"
                className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
              >
                {" "}
                First name
              </label>
              <input
                id="first"
                type="text"
                placeholder="first name"
                className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]   hover:border-2  hover:border-blueColor 
               w-[150px] p-1   border  shadow-sm outline-none -blueColor font-mainfont duration-400"
              />
            </div>{" "}
            <div className="flex flex-col justify-center mr-2">
              <label
                htmlFor="last"
                className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
              >
                {" "}
                Surname
              </label>
              <input
                id="last"
                type="text"
                placeholder="last name"
                className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]  hover:border-2  hover:border-blueColor 
               w-[150px] p-1   border  shadow-sm outline-none -blueColor font-mainfont duration-400"
              />
            </div>{" "}
            <div className="flex flex-col justify-center ">
              <label
                htmlFor="mail"
                className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
              >
                {" "}
                Email
              </label>
              <input
                id="mail"
                type="text"
                placeholder="Email"
                className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]  hover:border-2  hover:border-grayColorx 
                p-1 w-[350px]  border  shadow-sm outline-none -blueColor font-mainfont duration-400"
              />
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="flex flex-col justify-center mr-2">
              <label
                htmlFor="id"
                className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
              >
                {" "}
                ID number
              </label>
              <input
                id="id"
                type="number"
                placeholder="Id number"
                className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]   hover:border-2  hover:border-blueColor 
               w-[316px] p-1   border  shadow-sm outline-none -blueColor font-mainfont duration-400"
              />
            </div>{" "}
            <div className="flex flex-col justify-center ">
              <label
                htmlFor="city"
                className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
              >
                {" "}
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="Edit ur City "
                className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]  hover:border-2  hover:border-grayColorx 
                p-1 w-[350px]  border  shadow-sm outline-none -blueColor font-mainfont duration-400"
              />
            </div>
          </div>

          <div className="flex my-4 justify-between">
            <div className="flex flex-col justify-center mr-2">
              <label
                htmlFor="serv"
                className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
              >
                {" "}
                Service Type
              </label>
              <input
                id="serv"
                type="text"
                placeholder="Select a new Service"
                className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]   hover:border-2  hover:border-blueColor 
               w-[310px] p-1   border  shadow-sm outline-none -blueColor font-mainfont duration-400"
              />
            </div>{" "}
            <div className="flex flex-col justify-center ">
              <label
                htmlFor="phone"
                className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
              >
                {" "}
                Phone Number
              </label>
              <input
                id="phone"
                type="number"
                placeholder="Edit ur number"
                className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]  hover:border-2  hover:border-grayColorx 
                p-1 w-[350px]  border  shadow-sm outline-none -blueColor font-mainfont duration-400"
              />
            </div>
          </div>

          <div className="flex my-4 justify-between items-center">
            <div className="flex flex-col">
              <label
                htmlFor="desc"
                className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
              >
                Description
              </label>
              <textarea
                id="desc"
                className="p-2"
                // value={text}
                // onChange={handleTextChange}
                rows={5} // Number of visible text lines
                cols={20} // Number of visible text columns
                placeholder="Enter your text here..."
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="exp"
                className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
              >
                Expirence
              </label>
              <textarea
                id="exp"
                className="p-2"
                // value={text}
                // onChange={handleTextChange}
                rows={5} // Number of visible text lines
                cols={20} // Number of visible text columns
                placeholder="tell us about ur experience..."
              />
            </div>
            <div className="flex flex-col rounded-xl items-center bg-blueColor ">
              <h1 className="text-white  font-mainfont font-semibold text-sm p-4 text-center">
                Drop Your Latest Works to Upload
              </h1>
              <button className="bg-orangeColor hover:bg-white hover:text-blueColor font-semibold rounded duration-500  mb-4 px-3 py-1">
                Browse
              </button>
            </div>
          </div>
          <button className="bg-blueColor text-white w-fit hover:bg-orangeColor hover:text-blueColor font-semibold rounded duration-500  mb-4 px-3 py-1">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings