import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import hero2 from "../../assets/landing/hero2.jpg";
import hero1 from '../../assets/landing/hero.jpg'
import hero3 from '../../assets/landing/1.png'
import hero4 from "../../assets/landing/2.png";
import hero5 from "../../assets/landing/3.png";
import hero6 from "../../assets/landing/4.png";
import hero7 from "../../assets/landing/5.png";
import hero8 from "../../assets/landing/6.png";
import casq from '../../assets/id/casq.svg'


function Hero() {
  const images = [ hero1,hero3,hero4,hero5,hero6,hero7,hero8];
  const [randomImage, setRandomImage] = useState(hero1);
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }, 2000);

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
        className=" bg-cover  
         flex items-center  justify-center transition-opacity duration-500 "
        style={{
          backgroundImage: `url(${loadedImage || randomImage})`,
          minHeight: "calc(100vh - 88px)",
          opacity: loadedImage ? 1 : 0,
        }}
      >
        <div className=" flex lg:mt-20  lg:mr-[500px] flex-col">
          <IoMdSettings className="    text-orangeColor text-5xl mb-6 bg-gray-600 w-10 h-10 p-2 opacity-95" />
          <h1 className="text-2xl sm:text-3xl mb-7   md:text-4xl bg-white  whitespace-nowrap  text-blueColor px-2 leading-32 font-extrabold tracking-wider text-mainfont">
            A Recognized <span className="text-orangeColor">Leader </span>
            <br />
          </h1>
          <h1 className="text-2xl sm:text-3xl  md:text-4xl  mb-5 whitespace-nowrap bg-white text-blueColor w-fit  px-2 leading-32 font-extrabold tracking-wideer text-mainfont">
            In Services Industry
          </h1>
          <Link to ="/signup">
            <Button
              className="bg-orangeColor mt-4 hover:shadow-white hover:bg-blueColor hover:text-white w-20 whitespace-nowrap flex justify-center text-blueColor  rounded-lg "
              content="Join Us "
            />
          </Link>
        </div>
      </div>
      <div className=" items-center my-20 flex   flex-wrap sm:flex-no-wrap justify-center ">
        <div className="  md:mr-10 ">
          <img
            src={hero2}
            className="w-[300px]  h-[300px] md:h-[450px] md:w-[450px] "
            alt="hola"
          />
        </div>

        <div className=" mt-10  md:ml-10 ">
          <div className="flex  bg-[#F4F4F4]   ml-5 w-fit  items-center    p-5 py-1">
            <img src={casq} alt="casq" className="w-3 h-3 " />
            <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
              Welcome to Khedmlli
            </p>
          </div>

          <h1 className="text-secendFont my-2   pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
            We Provide Many Home Services And <br /> Many Oppertinities For
            Workes
          </h1>

          <div className="flex  flex-col ">
            <p className="text-grayColor pl-5  mt-3 text-md">
              Pellentesque vehicula eros neque, maximus mattis est sagittis{" "}
              <br />
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit{" "}
              <br />
              amet tincidunt. Interdum et malesuada. In pulvinar viverra diam,
            </p>
            <p className="text-grayColor mt-3 pl-5 text-xs ">
              nec rutrum mauris maximus non. Aenean sed quam tristique, <br />
              facilisis est ac, interdum velit.
            </p>
          </div>
          <div className="flex items-center ml-5">
            <div className="flex flex-col items-center mt-4 p-3 bg-[#F4F4F4]">
              <span className="font-extrabold text-4xl mb-2 text-orangeColor  ">
                35
              </span>

              <p className="text-blueColor text-center font-bold text-xl">
                Years Of <br /> Experiemce{" "}
              </p>
            </div>

            <div className="pl-3 flex flex-col  gap-1 items-center justify-center">
              <span className="text-grayColor  text-sm ">
                {" "}
                - Sed varius ipsum lacus
              </span>
              <span className="text-grayColor  text-sm ">
                {" "}
                - Sed varius ipsum lacus
              </span>
              <span className="text-grayColor  text-sm ">
                {" "}
                - Sed varius ipsum lacus
              </span>
              <span className="text-grayColor  text-sm ">
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
