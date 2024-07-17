import React from 'react'
import casq from "../../../../assets/id/casq.svg"
import me from "../../../../assets/services/security.png"
function Message({user_id,time,reciver,sender,message}) {
  // console.log("the user id is  :")
  // console.log(user_id)
//   console.log("the sender is ")
// console.log(sender)
// console.log("reciver");
// console.log(reciver);
  return (
    <>
      <div
        className={`"${
          reciver === user_id
            ? "flex items-center flex-row-reverse"
            : " flex items-center flex-row"
        }  flex items-center `}
      >
        <div className="flex-col items-center justify-center">
          <img
            src={reciver == user_id ? me : casq} // el.sender_profile.image and  el.reciever_profile.image
            className="w-[25px] mx-2 rounded-full h-[25px] "
            alt=""
          />

          <h1
            className={`${
              reciver !== user_id ? "" : " text-gray-500"
            } text-[11px] text-center mt-1 `}
          >
            12:57
            {time}
          </h1>
        </div>
        <div
          className={`${
            reciver == user_id
              ? "float-end  bg-[#F5F5F5]  rounded-bl-lg   "
              : "rounded-br-lg  float-start bg-blueColor text-white"
          } m-4 leading-[24px] container    mx-auto flex  flex-col font-mainfont text-[13px] p-2 rounded-t-lg w-[400p] `}
        >
          <h1 className="text-xs font-bold ">
            {reciver == user_id ? "You" : "Client"}
          </h1>
          <p className={`${reciver === user_id ? "text-left " : " "}  mb-2 `}>
            {message}
          </p>
        </div>
      </div>
    </>
  );
}

export default Message