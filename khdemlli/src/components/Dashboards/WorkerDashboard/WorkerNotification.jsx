
import React, { useState } from 'react'
import { FaComments } from "react-icons/fa6";
import icon from "../../../assets/id/casq.svg"
import { jwtDecode } from "jwt-decode";
import { IoMdClose } from "react-icons/io";


function WorkerNotification({
  content,
  image,
  id,
  status,
  time,
  handelDeleteNotification,
}) {
  const baseUrl = "http://127.0.0.1:8000/";
  const token = localStorage.getItem("authToken");
  const decodedToken = jwtDecode(token);
  const user_id = decodedToken.id;
  console.log(user_id);
  let action = "";
  const onSubmit = async () => {
    const object = {
      notification_id: id,
      action: action, //done or refused or accepted
    };
    console.log(object);
    console.log(JSON.stringify(object));
    console.log(user_id);

    try {
      const response = await fetch(`${baseUrl}notifications/${user_id}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(object),
      });

      if (!response.ok) {
        console.error("Internal Server Error");
        Swal.fire({
          title: "Oops Something Went Wrong",
          text: "Internal Server Error. Please try again later.",
          icon: "error",
          toast: true,
          timer: 4000,
          position: "top-right",
          timerProgressBar: false,
          showConfirmButton: false,
          showCancelButton: true,
        });
        return;
      }

 
      Swal.fire({
        title: "Your Request Has Been Sent Successfully",
        icon: "success",
        toast: true,
        timer: 4000,
        position: "top-right",
        timerProgressBar: false,
        showConfirmButton: false,
        showCancelButton: true,
      });
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="my-6 ml-4 w-[270px] relative hover:bg-gray-50 hover:scale-105 transition-all pt-4 px-2 shadow shadow-orangeColor">
      <button
        className="absolute right-2 opacity-60 top-2 text-[16px] "
        onClick={() => handelDeleteNotification(id)}
      >
        <IoMdClose />
      </button>
      <div className="flex items-cente">
        <img
          src={icon || image}
          className="w-[40px] h-[40px]  rounded-full mr-3  "
          alt="client image"
        />
        <div className="flex flex-col">
          <h1 className="mb-2 font-semibold font-mainfont w-[150px] ">
            {content}
          </h1>
          <p className="text-[9px] -mt-3  ">at {time}</p>
        </div>
      </div>
      {status == "created" && (
          <div className="flex justify-end p-2">
            <button
              onClick={() => {
                action = "accept";
                onSubmit();
              }}
              className="p-2   bg-orangeColor hover:bg-blueColor hover:text-white text-blueColor font-semibold "
            >
              Approve
            </button>
            <button
              onClick={() => {
                action = "refuse";
                onSubmit();
              }}
              className="p-2 ml-2 hover:bg-orangeColor text-blueColor font-semibold "
            >
              Deny
            </button>
          </div>
        )}
      {status === "accepted" && (
        // <Link to={"chatw"}>
        <div className="flex justify-end p-2">
          <button className="p-2  bg-orangeColor hover:bg-blueColor hover:text-white text-blueColor font-semibold ">
            <div className="flex items-center justify-around ">
              <h1>Send Message</h1>
              <FaComments className="ml-3 text-xl" />
            </div>
          </button>
        </div>
        // </Link>
      )}
    </div>
  );
}

export default WorkerNotification