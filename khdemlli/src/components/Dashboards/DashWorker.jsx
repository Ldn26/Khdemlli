import React from "react";
import { HiTrendingUp } from "react-icons/hi";
function DashWorker({Servnumber}) {
  return (
    <div className="w-3/5">
      <div className="mx-auto container mt-10">
        <div className="flex bg-blueColor w-[300px] flex-col p-5 rounded text-white ">
          <HiTrendingUp className="text-2xl" />
   <h1 className="font-semibold text-xl mt-2">Number Of Services </h1>
   <h1 className="font-semibold text-xl mt-2" >{Servnumber || 20}</h1>
        </div>
      </div>
    </div>
  );
}

export default DashWorker;
