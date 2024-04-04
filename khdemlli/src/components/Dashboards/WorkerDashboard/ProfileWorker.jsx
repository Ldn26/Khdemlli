import React from "react";
import { CgMoreVertical } from "react-icons/cg";

function ProfileWorker() {
  return (
    <div className="w-1/5 border  flex flex-col items-center">
      <div className="flex gap-2 my-5 items-center">
        <h2 className="text-blueColor font-semibold">Your Profile </h2>
        <CgMoreVertical />
      </div>



      <img src="fff" className="w-40 h-40 founded-full  border-l-left-grayColer   border-t-blueColor" alt="" />
    </div>
  );
}

export default ProfileWorker;
