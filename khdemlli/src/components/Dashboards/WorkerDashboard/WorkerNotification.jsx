
import React, { useState } from 'react'
import { FaComments } from "react-icons/fa6";

function WorkerNotification({ name, price, days, image,id}) {
  const [isApproved, setIsApproved] = useState(null);

  // const handleDeleteRequest  = ()=>{
  // };

  return (
    <div className="my-6 shadow shadow-orangeColor">
      <div className="flex items-center p-4">
        <img src={image} className="w-14 h-14  rounded-full mr-3  " alt="" />
        <div className="flex flex-col">
          <h1 className="mb-2 font-semibold font-mainfont ">{name}</h1>
          <p className="text-blueColor text-sm">
            {`${name} Request for Service `} <br /> {days} For {price}
            dvsdvsdvsdvd fd fdvdd fed fee ee
          </p>
        </div>
      </div>
      {isApproved == null ? (
        <div className="flex justify-end p-2">
          <button
            onClick={() => {
              setIsApproved(true);
            }}
            className="p-2   bg-orangeColor hover:bg-blueColor hover:text-white text-blueColor font-semibold "
          >
            Approve{" "}
          </button>
          <button
            // onClick={handleDeleteRequest}
            className="p-2 ml-2 hover:bg-orangeColor text-blueColor font-semibold ">
            Deny
          </button>
        </div>
      ) : (
        <div className="flex justify-end p-2">
          <button
            onClick={() => {
              setIsApproved(true);
            }}
            className="p-2  bg-orangeColor hover:bg-blueColor hover:text-white text-blueColor font-semibold "
          >
            <div className="flex items-center justify-around ">
              <h1>Send Message</h1>
              <FaComments className="ml-3 text-xl" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default WorkerNotification