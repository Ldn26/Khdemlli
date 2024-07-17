import React from 'react'
import {Link} from "react-router-dom"
import ava from "../../../../assets/id/casq.svg"
function ContactItemW({
 // sender_avatar,
////  reciver_avatar,
 // reciver_name,
 // sender_name,
 receiver,
  mess,
  user_id,
  sender_id            
}) {
  return (
    <Link
      to={
        "/workerDash/chatw/" + (sender_id !== user_id ? sender_id : receiver) }
    >
      <div className="flex items-center bg-white p-2 w-[300px]  hover:bg-gray-100 cursor-pointer">
        {/* <img
          src={user_id !== id ? reciver_avatar : sender_avatar}
          className="mr-1 rounded-full w-[40px] h-[40px]"
          alt=""
        /> */}
        <img src={ava} className="mr-1 rounded-full w-[40px] h-[40px]" alt="" />
        <div className="flex flex-col mx-1">
          <h1 className="text-[14px] text-black font-semibold ">
            {/* {user_id !== id ? reciver_name : sender_name} */}
            youcef laidani
          </h1>
          <p className="-mt-1 text-[12px] w-[100px] h-[20px] text-gray-400  overflow-hidden">
            {mess}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ContactItemW