import React from 'react'

function ServiceCard({Descrption,jobName,img}) {
  return (
    <div className="rounded-xl bg-blueColor  hover:scale-105 transition-all  relative  w-[210px] m-2    h-[170px] flex-col p-4">
      <img src={img} className="text-orangeColor  my-2 w-10" alt="" />
      <h1 className="text-orangeColor mb-2 text-mainfont font-bold text-sm  ">
        {jobName} service{" "}
      </h1>
      <p className="text-gray-400 text-sm mt-2">{Descrption}</p>
    </div>
  );
}

export default ServiceCard





