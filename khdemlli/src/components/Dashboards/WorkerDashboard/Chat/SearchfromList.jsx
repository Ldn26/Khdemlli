import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";


function SearchfromList() {
    const  [SearchTotxt,SetSearchTotxt ]= useState("")
  return (
    <div>
      <div className="mb-3 mt-2 relative ">
        <input
          type="text"
          placeholder="Search "
          className="bg-[#F5F6FA] rounded-full p-[5px] pl-10  w-[200px] text-black placeholder:"
          onChange={(e)=>{SetSearchTotxt(e.target.value)}}
        />
        <IoSearchSharp className="absolute top-[9px] left-[16px] text-grayColor " />
      </div>
    </div>
  );
}

export default SearchfromList