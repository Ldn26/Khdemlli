import React from 'react'

import hogo from "../assets/aboutusicons/Image.png";
function Banner({content}) {
  return (
    <div className=" relative  justify-center">
      <section>
        <img className=" mt-5 mx-auto  " src={hogo} alt="logo" />
      </section>
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-5xl text-white font-bold  font-mainfont ">{content}</h1>
      </div>
    </div>
  );
}

export default Banner