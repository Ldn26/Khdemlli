import React from 'react'
import { Link } from 'react-router-dom';
function JobCard({img,jobName ,Descrption }) {
  return (
    <div className="rounded-xl bg-blueColor  relative  w-[283px] m-2 ]   h-[222px] flex-col p-4">
      <img src={img} className="text-orangeColor my-2 w-10" alt="" />
      <h1 className="text-orangeColor text-mainfont font-bold mb-2 whitespace-nowrap  ">
        {jobName} service{" "}
      </h1>
      <p className="text-gray-400 text-sm mb-2">{Descrption}</p>
      <button className="float-end absolute bottom-3 left-5">
        <Link to="/services" className="text-white  hover:underline">
          Read More
        </Link>
      </button>
    </div>
  );
}

export default JobCard