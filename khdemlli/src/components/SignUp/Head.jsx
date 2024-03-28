import { useState } from "react";
import logo from "../../assets/id/logo.svg";
import Button from "../Button";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
function Head({question,content,redirection}) {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex items-center justify-around">
          <h1 className="text-blueColor whitespace-nowrap ">{question} </h1>
          <Link to = {redirection}>
            {" "}
            <Button
              content={content}
              className="hover:bg-orangeColor ml-4 rounded-none border-[3px] border-orangeColor hover:text-white "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Head;
