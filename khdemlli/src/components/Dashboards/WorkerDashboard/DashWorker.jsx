import React, { useContext } from "react";
import { HiTrendingUp } from "react-icons/hi";
import { useQuery } from "@tanstack/react-query";
import {jwtDecode} from "jwt-decode"; // Ensure the correct import
import { userContext } from "../../../contexts/AuthContext";
import BarShape from "./BarShape"
import { IoIosStar } from "react-icons/io";
import Swal from "sweetalert2";
function DashWorker() {
  const { user, setUser } = useContext(userContext);
  const baseUrl = "http://127.0.0.1:8000/";
  const token = localStorage.getItem("authToken");
  const decodedToken = jwtDecode(token);
  const user_id = decodedToken.id;

  const fetchOrders = async () => {
    const res = await fetch(`${baseUrl}order/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  };

  // const fetchCredentials = async () => {
  //   const res = await fetch(`${baseUrl}api/user`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return res.json();
  // };


  const fetchFeed = async () => {
    const res = await fetch(`${baseUrl}api/feedback_list/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  };

  // const {
  //   data: cordonates,
  //   isError: err,
  //   isLoading: load,
  //   isSuccess: succ,
  // } = useQuery({
  //   queryKey: ["Cordonaltes"],
  //   queryFn: fetchCredentials,
  // });

  const {
    data: feed,
    isError: errf,
    isLoading: loadfeed,
    isSuccess: succfeed,
  } = useQuery({
    queryKey: ["feed"],
    queryFn: fetchFeed,
  });

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["Orders"],
    queryFn: fetchOrders,
  });

  const submitButton = async (action, orderId) => {
    const object = {
      order_id: orderId,
      action: action,
    };
 console.log(JSON.stringify(object))
    try {
      const response = await fetch(`http://127.0.0.1:8000/order/${user_id}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
          title: "Your   Has Been Sent Successfully",
          icon: "success",
          toast: true,
          timer: 4000,
          position: "top-right",
          timerProgressBar: false,
          showConfirmButton: false,
          showCancelButton: true,
        });
      console.log("Action submitted successfully");
    } catch (error) {
      console.error(error);
    }
  };
  console.log("feed")
  console.log(feed)

  
  
  return (
    <div className="w-3/5">
      <div className="mx-auto container mt-10">
        <div className="flex bg-blueColor w-[220px] hover:scale-105 transition-all flex-col p-5 rounded text-white">
          <HiTrendingUp className="text-2xl" />
          <h1 className="font-semibold text-lg mt-2">Number Of Services</h1>
          <h1 className="font-semibold text-xl mt-2">0</h1>
        </div>
      </div>
      <div className="mt-4 ml-40 container">
        <BarShape />
      </div>
      <div className="flex items-centr mt-5 container">
        <div>
          <h1 className="text-blueColor ml-4 font-bold my-2 text-xl">
            Feedbacks
          </h1>
          {feed &&
            feed.map((el, index) => (
              <div
                key={index}
                className="my-6 ml-4 w-[320px] border relative hover:bg-gray-50 hover:scale-105 transition-all pt-4 px-2"
              >
                <div className="flex items-center">
                  <img
                  //  src={el?.client_profile.profile_pic}
                    className="w-[40px] h-[40px] rounded-full mr-3"
                    alt="client"
                  />
                  <div className="flex  ml-2 flex-col">
                    <h1 className="mb-2 font-semibold text-sm text-blueColor font-mainfont w-[250px]">
                      {/* {el?.client_profile.first_name} rate you with */}
                      <p className="text-xs text-gray-400">
                        {/* {el?.feedback.content} and */}
                      </p>
                      <div className="flex mt-2  pb-2 ">
                        {Array.from({
                          length: el?.feedback.number_of_stars,
                        }).map((_, i) => (
                          <IoIosStar
                            key={i}
                            className="text-2xl text-yellow-400"
                          />
                        ))}
                      </div>
                    </h1>
                  </div>
                </div>
       
              </div>
            ))}
        </div>
        <div>
          <h1 className="text-blueColor text-center ml-4 font-bold my-2 text-xl">
            Current Works:
          </h1>
          {data &&
            data.map((el, index) => (
              <div
                key={index}
                className="my-6 ml-4 w-[320px] border relative hover:bg-gray-50 hover:scale-105 transition-all pt-4 px-2"
              >
                <div className="flex items-center">
                  <img
             //       src={el?.client_profile.profile_pic}
                    className="w-[40px] h-[40px] rounded-full mr-3"
                    alt="client"
                  />
                  <div className="flex  ml-2 flex-col">
                    <h1 className="mb-2 font-semibold text-sm text-blueColor font-mainfont w-[250px]">
                //      you are Working 
                 {/* {el?.client_username} <br /> */}
                    
                    </h1>
                  </div>
                </div>
                <div className="flex justify-end p-2">
                  <button
                    onClick={() => submitButton("done", el.client_profile.id)}
                    className="p-2 bg-orangeColor hover:bg-blueColor hover:text-white text-blueColor font-semibold"
                  >
                    Mark as Done
                  </button>
                  <button
                    onClick={() => submitButton("cancel", el.client_profile.id)}
                    className="p-2 ml-2 hover:bg-orangeColor text-blueColor font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DashWorker;
