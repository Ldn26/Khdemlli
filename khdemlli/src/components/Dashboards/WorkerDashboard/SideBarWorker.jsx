import React from 'react'

import logo from '../../../assets/sidsicon/LOGO.png';
import {Link} from "react-router-dom"
import { BsFillHouseDashFill } from "react-icons/bs";
import { HiInboxArrowDown } from "react-icons/hi2";
import { FaCodeCompare } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
function SideBarWorker() {

  
  return (
    <div className="flex flex-col border items-centent  sticky top-0    h-screen   w-1/5">
      <img src={logo} className="w-60  p-4" alt="" />
      <div className="flex float-end flex-col justify-center  items-center">
        <h1 className="text-sm font-semibold mt-5 text-gray-600 mr-6 ">
          OVERVIEW
        </h1>
        <ul>
          <li>
            <Link to="">
              <div className="flex  items-center my-4">
                <BsFillHouseDashFill className="text-xl hover:text-orangeColor text-blueColor " />
                <p className="ml-2 font-semibold  hover:text-orangeColor text-blueColor">
                  Dashboard{" "}
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="inboxw">
              <div className="flex items-center my-4">
                <HiInboxArrowDown className="text-xl text-blueColor hover:text-orangeColor " />
                <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                  Inbox{" "}
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="aboutusWorker">
              <div className="flex items-center my-4">
                <MdWork className="text-xl text-blueColor hover:text-orangeColor " />
                <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                  About Us{" "}
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="servicesw">
              <div className="flex items-center my-4">
                <FaCodeCompare className="text-xl text-blueColor hover:text-orangeColor " />

                <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                  Services{" "}
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="contactusw">
              <div className="flex items-center my-4">
                <BiSolidContact className="text-xl text-blueColor hover:text-orangeColor " />
                <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                  Contact Us{" "}
                </p>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col  mt-20 ">
          <h1 className=" font-semibold mt-5 mb-2 text-sm text-gray-600">
            SETTINGS
          </h1>

          <li className="flex items-center  my-2">
            <IoMdSettings className="text-xl text-blueColor hover:text-orangeColor " />
            <Link to={"settingsw"} className="flex items-center">
              <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                Settings{" "}
              </p>
            </Link>
          </li>
          <li className="flex items-center my-2">
            <IoIosLogOut className="text-xl text-blueColor hover:text-orangeColor " />

            <Link className="flex items-center" to="/">
              <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                Logout{" "}
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBarWorker