import React from "react";

import logo from "../../../assets/sidsicon/LOGO.png";
import { Link } from "react-router-dom";
import { BsFillHouseDashFill } from "react-icons/bs";
import { HiInboxArrowDown } from "react-icons/hi2";
import { FaCodeCompare } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from "react";
import { userContext } from "../../../contexts/AuthContext";

function SideBarClient() {
  const { user, setUser } = useContext(userContext);
  const handelLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("cordonate");
    setUser(null);
  };

  return (
    <div className="flex flex-col border items-centent  sticky top-0    h-screen   w-1/5">
      <img src={logo} className="w-[200px] mx-auto p-4" alt="" />
      <div className="flex float-end flex-col justify-center  items-center">
        <h1 className="text-sm font-semibold mt-5 text-gray-600 mr-6 ">
          OVERVIEW
        </h1>
        <ul>
          <li className=" rounded-xl">
            <Link to="request">
              <div className="flex  items-center  my-4">
                <BsFillHouseDashFill className="text-xl  hover:text-orangeColor text-blueColor " />
                <p className="ml-2 font-semibold  text-blueColor hover:text-orangeColor     ">
                  Dashboard{" "}
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="chatc">
              <div className="flex items-center my-4">
                <HiInboxArrowDown className="text-xl text-blueColor hover:text-orangeColor " />
                <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                  Chat{" "}
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="inboxc">
              <div className="flex items-center my-4">
                <HiInboxArrowDown className="text-xl text-blueColor hover:text-orangeColor " />
                <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                  Inbox{" "}
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="ourworkers">
              <div className="flex items-center my-4">
                <HiInboxArrowDown className="text-xl text-blueColor hover:text-orangeColor " />
                <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                  Our Workers
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="servicesc">
              <div className="flex items-center my-4">
                <FaCodeCompare className="text-xl text-blueColor hover:text-orangeColor " />
                <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                  Services{" "}
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="contactusc">
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
            <Link to={"settingsc"} className="flex items-center">
              <p className="ml-2 font-semibold text-blueColor hover:text-orangeColor ">
                Settings{" "}
              </p>
            </Link>
          </li>
          <li className="flex items-center my-2">
            <IoIosLogOut className="text-xl text-blueColor hover:text-orangeColor " />
            <Link onClick={handelLogOut} className="flex items-center" to="/">
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

export default SideBarClient;
