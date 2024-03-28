import { useState } from "react";
import logo from "../../assets/id/logo.svg";
import Button from '../Button'
import { Link } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'
function Header() {
 const [isOpen ,setIsOpen] = useState(false)

  return (
    <div className="h-[88px]">
      <div className="container  mx-auto  py-5 flex   items-center justify-between px-9 md:py-5">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="hover:scale-105 max-w-fit w-32"
          />
        </Link>

        <ul className="md:items-center     lg:flex  hidden">
          <li className="mx-4 whitespace-nowrap  font-medium hover:border-b-2 border-blueColor flex-none ">
            <Link
              className="relative text-xl transition duration-300 w-fit block text-mainColor after:block tracking-wide hover:text-orangeColor after:content-['']   after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="mx-4 whitespace-nowrap  font-medium hover:border-b-2 border-blueColor flex-none ">
            <Link
              className="relative text-xl transition duration-300 w-fit block text-mainColor after:block tracking-wide hover:text-orangeColor after:content-['']   after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              to="about"
            >
              About
            </Link>
          </li>
          <li className="mx-4 whitespace-nowrap  font-medium hover:border-b-2 border-blueColor flex-none ">
            <Link
              className="relative text-xl transition duration-300 w-fit block text-mainColor after:block tracking-wide hover:text-orangeColor after:content-['']   after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li className="mx-4 whitespace-nowrap  font-medium hover:border-b-2 border-blueColor flex-none ">
            <Link
              className="relative text-xl transition duration-300 w-fit block text-mainColor after:block tracking-wide hover:text-orangeColor after:content-['']   after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex lg:items-center ">
          <Link to={"Signup"}>
            <Button
              content="Sign in"
              className="hover:bg-blueColor flex-none mr-4  bg-orangeColor hover:text-white"
            />
          </Link>
          <Link to="login">
            {" "}
            <Button
              content="Log in"
              className="bg-blueColor text-white  hover:bg-orangeColor  ml-4  flex-none "
            />
          </Link>
        </div>

        <div className="lg:hidden">
          <Hamburger
            rounded
            color="#1C2752"
            easing="ease-in"
            toggle={setIsOpen}
            toggled={isOpen}
            duration={0.3}
            distance="lg"
            hideOutline={false}
            size={20}
          />
        </div>
      </div>{" "}
      <ul
        className={`absolute top-[80px]   z-50  gap-3  lg:hidden ${
          isOpen ? "left-0  duration-500" : " -left-[1000px]  duration-500"
        }  w-2/5 flex justify-center flex-col bg-white  text-grayColor gap-1 items-center px-3 py-7`}
      >
        <li className=" border-l-4 border-l-orangeColor mb-2 -mt-3  border-r-orangeColor border-r-4   w-3/4  justify-center flex gap-2 items-center ">
          <Link
            className="transition text-mainColor   text-center  px-7  whitespace-nowrap   font-medium  tracking-wide duration-300 hover:text-orangeColor  text-xs "
            to="/"
          >
            Home
          </Link>
        </li>{" "}
        <li className=" hover:border-l-4 hover:border-l-orangeColor  mb-2  hover:border-r-orangeColor hover:border-r-4   w-3/4  justify-center flex gap-2 items-center ">
          <Link
            className="transition text-mainColor   text-center  px-7   font-medium  tracking-wide duration-300 hover:text-orangeColor  text-xs "
            to="/about"
          >
            About
          </Link>
        </li>{" "}
        <li className=" hover:border-l-4 hover:border-l-orangeColor mb-2   hover:border-r-orangeColor hover:border-r-4   w-3/4  justify-center flex gap-2 items-center ">
          <Link
            className="transition text-mainColor   text-center  px-7   font-medium  tracking-wide duration-300 hover:text-orangeColor  text-xs "
            to="/services"
          >
            Services
          </Link>
        </li>{" "}
        <li className=" hover:border-l-4 hover:border-l-orangeColor  mb-2  hover:border-r-orangeColor hover:border-r-4   w-3/4  justify-center flex gap-2 items-center ">
          <Link
            className="transition text-mainColor   text-center  whitespace-nowrap   px-7   font-medium  tracking-wide duration-300 hover:text-orangeColor  text-xs "
            to="Signup"
          >
            Join Us
          </Link>
        </li>{" "}
        <li className=" hover:border-l-4 hover:border-l-orangeColor mb-2   hover:border-r-orangeColor hover:border-r-4   w-3/4  justify-center flex gap-2 items-center ">
          <Link
            className="transition text-mainColor   text-center  px-7   font-medium  tracking-wide duration-300 hover:text-orangeColor  text-xs "
            to="/contact"
          >
            Contact
          </Link>
        </li>{" "}
        <div className="sm:justify-between  flex-col flex items-center  sm:flex-row  justify-center  px-4 ">
          <Link to="Signup">
            <Button
              className="bg-blueColor text-white rounded-xl whitespace-nowrap sm:mr-2 mb-1 sm:m-0 w-2 flex justify-center   text-xs  "
              content="Sign Up"
            />
          </Link>
          <Link to="/login">
            <Button
              className="bg-orangeColor rounded-xl  whitespace-nowrap w-2 text-xs  sm:ml-2 mt-1 sm:my-0 flex justify-center text-blueColor"
              content="Log in"
            />
          </Link>
        </div>
      </ul>
    </div>
  );
}



export default Header;





