import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { IoMdSettings } from "react-icons/io";
import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/hero2.jpg";
import casq from "../assets/casq.svg"

function Hero() {
  const images = [hero2, hero1];
  const [randomImage, setRandomImage] = useState(hero1);
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }, 50000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoadedImage(randomImage);
    };
    img.src = randomImage;
  }, [randomImage]);

  return (
    <div>
      <div
        className=" bg-cover flex items-center justify-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(${loadedImage || randomImage})`,
          minHeight: "calc(100vh - 88px)",
          opacity: loadedImage ? 1 : 0,
        }}
      >
        <div className="  flex   mt-20  mr-64 flex-col">
          <IoMdSettings className="    text-orangeColor text-5xl mb-6 bg-gray-600 w-10 h-10 p-2 opacity-95" />
          <h1 className="text-2xl sm:text-3xl mb-7  md:text-4xl   whitespace-nowrap  text-white leading-32 font-bold tracking-wider text-mainfont">
            A Recognized Leader <br />
          </h1>
          <h1 className="text-2xl sm:text-3xl  md:text-4xl  mb-5 whitespace-nowrap  text-white leading-32 font-bold tracking-wideer text-mainfont">
            In Services Industry
          </h1>
          <Button
            className="bg-orangeColor mt-4 hover:shadow-white hover:bg-blueColor hover:text-white w-20 whitespace-nowrap flex justify-center text-blueColor rounded-lg "
            content="Join Us "
          />
        </div>
      </div>



      <div className=" items-center   py-10 px-10  mt-10 flex justify-around ">
        <div className="  mr-5">
          <img src={hero2} className="w-full " alt="hola" />
        </div>

        <div className="   ml-5 ">
          <div className="flex  bg-[#F4F4F4]  items-center w-fit px-2 py-1">
            <img src={casq} alt="casq" className="w-3 h-3 " />
            <p className="text-[10px] ml-2 font-semibold text-blueColor  ">
              Welcome to Khedmlli
            </p>
          </div>
          <h1 className="text-secendFont mt-1  whitespace-nowrap font-bold tracking-wide text-lg ">
            We Provide Many Home Services And <br /> Many Oppertinities For
            Workes
          </h1>
          <div className="flex  flex-col ">
            <p className="text-grayColor  mt-3 text-xs ">
              Pellentesque vehicula eros neque, maximus mattis est sagittis <br />
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit <br />
              amet tincidunt. Interdum et malesuada. In pulvinar viverra diam, 
            </p>
            <p className="text-grayColor mt-3 text-xs ">
              nec rutrum mauris maximus non. Aenean sed quam tristique, <br />
              facilisis est ac, interdum velit.
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-center mt-4 p-3 bg-[#F4F4F4]">
              <span className="font-extrabold text-xl text-orangeColor  ">
                35
              </span>
              <p className="text-blueColor text-center font-bold text-sm">
                Years Of <br /> Experiemce{" "}
              </p>
            </div>
            <div className="pl-3 flex flex-col  gap-1 items-center justify-center">
              <span className="text-grayColor  text-xs ">
                {" "}
                - Sed varius ipsum lacus
              </span>
              <span className="text-grayColor  text-xs ">
                {" "}
                - Sed varius ipsum lacus
              </span>
              <span className="text-grayColor  text-xs ">
                {" "}
                - Sed varius ipsum lacus
              </span>
              <span className="text-grayColor  text-xs ">
                {" "}
                - Sed varius ipsum lacus
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
