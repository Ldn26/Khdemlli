import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
function InboxClient() {
  return (
    <div className="w-3/5">
      <div className="mb-3 mt-2 relative ">
        <input
          type="text"
          placeholder="Search "
          className="bg-[#F5F6FA] rounded-full p-[5px] pl-10  w-[500px] text-black placeholder:"
          onChange={(e) => {
            SetSearchTotxt(e.target.value);
          }}
        />
        <IoSearchSharp className="absolute top-[9px] left-[16px] text-grayColor " />
      </div>
    </div>
  );
}

export default InboxClient