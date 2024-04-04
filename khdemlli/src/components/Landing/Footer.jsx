import Button from "../Button";
import logo from "../../assets/id/logowhite.png";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-full">
      <div className="bg-orangeColor flex items-center   justify-around p-10">
        <div className="flex  flex-col ">
          <h1 className="text-blueColor tracking-wide font-bold text-lg">
            Join Us Now
          </h1>
          <p className="text-blueColor mt-2  ">
            Join us now for searching for services or find a job
          </p>
        </div>
        <Button
          className=" text-blueColor hover:bg-blueColor whitespace-nowrap hover:text-white font-bold bg-white"
          content="Sign in"
        />
      </div>
      <div className="bg-blueColor py-10 px-20 ">
        <div className="flex   flex-col md:flex-row    justify-around  items-center">
          <div className="my-4 md:my-0">
            <Link to="/">
              <img
                src={logo}
                className="w-32  hover:scale-105  "
                alt="ourBrand"
              />
            </Link>
          </div>
          <div className="flex  justify-between  items-center ">
            <div className="flex mx-4 justify-center items-center">
              <Link>
                {" "}
                <FaEnvelope className="text-blueColor    hover:scale-105  hover:shadow-white hover:shadow-md  rounded-full bg-orangeColor p-2 text-3xl " />
              </Link>{" "}
              <div className="ml-3 flex text-white text-xs flex-col ">
                <h2 className="font-semibold  whitespace-nowrap">Mail Us</h2>
                <p className="text-[10px] whitespace-nowrap">
                  y_laidani@estin.dz
                </p>
              </div>
            </div>
            <div className="flex mx-4 justify-center items-center">
              <Link>
                {" "}
                <FaPhoneAlt className="text-blueColor   hover:scale-105 hover:shadow-white hover:shadow-md rounded-full bg-orangeColor p-2 text-3xl " />
              </Link>
              <div className="ml-3 flex text-white text-xs flex-col ">
                <h2 className="font-semibold whitespace-nowrap ">Call Us</h2>
                <p className="text-[10px] whitespace-nowrap">0541593067</p>
              </div>
            </div>
            <div className="flex   mx-4 justify-center items-center">
              <Link>
                {" "}
                <FaLocationDot className="text-blueColor     hover:scale-105 hover:shadow-white hover:shadow-md   rounded-full bg-orangeColor p-2 text-3xl " />
              </Link>{" "}
              <div className="ml-3 flex text-white text-xs flex-col ">
                <h2 className="font-semibold whitespace-nowrap ">Location </h2>
                <p className="text-[10px] whitespace-nowrap">Amizour ,Bejaia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around  mt-9 border-t border-b border-grayColor  p-4 ">
          <p className="text-[10px] text-white whitespace-nowrap  hidden md:block">
            {" "}
            Denouncing pleasure and praising pain was born <br /> and I will
            givg you a coghmplete acchount of the <br /> system, and expound the
            actual
          </p>
          <div className="flex flex-col text-white items-center  mb-10 ml-10">
            <Link className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              Explore
            </Link>
            <Link className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              About Us
            </Link>
            <Link className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              Our Services
            </Link>
            <Link className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              Our Workers
            </Link>
          </div>

          <div className="flex flex-col text-white items-center  mb-10 ml-10">
            <Link className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              Explore
            </Link>
            <Link className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              About Us
            </Link>
            <Link className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              Our Services
            </Link>
            <Link className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              Our Workers
            </Link>
          </div>
        </div>



        <div className="flex  items-center  justify-center gap-2       mt-7">
          <Link>
            <FaEnvelope className="text-blueColor hover:shadow-md  hover:bg-white   hover:text-red-600  hover:shadow-red-600  rounded-full p-2 bg-grayColor  lg:text-4xl  text-3xl " />
          </Link>
          <Link>
            <FaFacebook className="text-blueColor   hover:shadow-md hover:shadow-blue-700   hover:text-blue-900 hover:bg-white  rounded-full p-2 bg-grayColor text-3xl lg:text-4xl " />
          </Link>
          <Link>
            <FaInstagram className="text-blueColor hover:bg-pink-700   hover:shadow-md hover:shadow-white   hover:text-white rounded-full bg- p-2 bg-grayColor text-3xl lg:text-4xl " />
          </Link>
          <Link>
            <IoLogoTiktok className="text-blueColor  hover:shadow-md hover:shadow-white  hover:text-white hover:bg-indigo-950 rounded-full p-2 bg-grayColor text-3xl lg:text-4xl " />
          </Link>
        </div>

        <p className="text-center  text-white mt-7 text-sm ">
          Copyright @ khedmlli{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
